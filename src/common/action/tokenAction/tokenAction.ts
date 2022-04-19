export const SET_VK_TOKEN = 'SET_VK_TOKEN'

export const setVkTokenAction = (value: string | null) =>
  ({
    type: SET_VK_TOKEN,
    value,
  } as const)

export const TOGGLE_VK_TOKEN_LOADING = 'TOGGLE_VK_TOKEN_LOADING'

export const toggleVkTokenLoadingAction = (value: boolean) =>
  ({
    type: TOGGLE_VK_TOKEN_LOADING,
    value,
  } as const)

export type TokenActionTypes =
  | ReturnType<typeof setVkTokenAction>
  | ReturnType<typeof toggleVkTokenLoadingAction>
