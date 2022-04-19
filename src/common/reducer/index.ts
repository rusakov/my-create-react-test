import { RouterState } from 'connected-react-router'
import { TokenState } from 'common/reducer/tokenReducer/tokenReducer'
import { PageState } from 'common/reducer/tokenReducer/pageReducer'

export interface RootState {
  router: RouterState
  vkToken: TokenState
  page: PageState
}
