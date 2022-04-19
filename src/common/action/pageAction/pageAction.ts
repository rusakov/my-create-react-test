export const SET_PAGE_ID = 'SET_PAGE_ID'

export const setPageAction = (value: string | null) =>
  ({
    type: SET_PAGE_ID,
    value,
  } as const)

export const TOGGLE_PAGE_LOADING = 'TOGGLE_PAGE_LOADING'

export const togglePageLoadingAction = (value: boolean) =>
  ({
    type: TOGGLE_PAGE_LOADING,
    value,
  } as const)

export type PageActionTypes =
  | ReturnType<typeof setPageAction>
  | ReturnType<typeof togglePageLoadingAction>
