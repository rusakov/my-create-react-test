import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { tokenReducer } from 'common/reducer/tokenReducer/tokenReducer'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    vkToken: tokenReducer,
  })

export default createRootReducer
