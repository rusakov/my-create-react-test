import configureStore from 'common/reducer/function/configurateStore'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const createStore = () => {
  return configureStore({}, history)
}

export const store = createStore()
