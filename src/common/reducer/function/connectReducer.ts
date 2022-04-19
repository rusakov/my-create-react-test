import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { tokenReducer } from 'common/reducer/tokenReducer/tokenReducer'
import { pageReducer } from 'common/reducer/tokenReducer/pageReducer'
import { CreateBrowserHistory } from 'common/reducer/function/createStore'

const createRootReducer = (history: CreateBrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    vkToken: tokenReducer,
    page: pageReducer,
  })

export default createRootReducer
