import {
  SET_VK_TOKEN,
  TOGGLE_VK_TOKEN_LOADING,
  TokenActionTypes,
} from 'common/action/tokenAction/tokenAction'

export interface TokenState {
  token: string | null
  tokenLoaded: boolean
}

const initialState: TokenState = {
  token: null,
  tokenLoaded: false,
}
export const tokenReducer = (
  state: TokenState = initialState,
  action: TokenActionTypes
) => {
  switch (action.type) {
    case TOGGLE_VK_TOKEN_LOADING:
      return { ...state, token: action.value }
    case SET_VK_TOKEN:
      return { ...state, tokenLoaded: action.value }
  }
  return state
}
