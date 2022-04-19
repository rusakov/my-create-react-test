import React from 'react'
import { hot } from 'react-hot-loader'
import { store } from 'common/reducer/function/createStore'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'common/reducer/function/createStore'
import { Routing } from 'common/routing/Routing'

const ApplicationStart = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routing history={history} />
      </ConnectedRouter>
    </Provider>
  )
}

export default hot(module)(ApplicationStart)
