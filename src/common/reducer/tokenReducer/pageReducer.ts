import {
  PageActionTypes,
  SET_PAGE_ID,
  TOGGLE_PAGE_LOADING,
} from 'common/action/pageAction/pageAction'

export interface PageState {
  page: string | null
  pageLoaded: boolean
}

const initialState: PageState = {
  page: null,
  pageLoaded: false,
}
export const pageReducer = (
  state: PageState = initialState,
  action: PageActionTypes
) => {
  switch (action.type) {
    case TOGGLE_PAGE_LOADING:
      return { ...state, pageLoaded: action.value }
    case SET_PAGE_ID:
      console.log('2')
      return { ...state, page: action.value }
  }
  return state
}
