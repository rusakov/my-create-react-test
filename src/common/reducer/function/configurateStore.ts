import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from 'common/reducer/function/connectReducer'
import { CreateBrowserHistory } from 'common/reducer/function/createStore'

export default function configureStore(
  initialState = {},
  history: CreateBrowserHistory
) {
  return createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    createMiddleware(history)
  )
}

function createMiddleware(history: CreateBrowserHistory) {
  const middleware = [routerMiddleware(history)]

  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose

  return composeEnhancers(applyMiddleware(...middleware))
}
