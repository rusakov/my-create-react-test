import configureStore from 'common/reducer/function/configurateStore'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export type CreateBrowserHistory = ReturnType<typeof createBrowserHistory>

const createStore = () => {
  return configureStore({}, history)
}

export const store = createStore()
