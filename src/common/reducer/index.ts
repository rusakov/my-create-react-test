import { RouterState } from 'connected-react-router'
import { TokenState } from 'common/reducer/tokenReducer/tokenReducer'

export interface RootState {
  router: RouterState
  vkToken: TokenState
}
