import React, { FC, useEffect } from 'react'
import { useShallowEqualSelector } from 'common/reducer/function/useShallow'
import { useDispatch } from 'react-redux'
import {
  setVkTokenAction,
  toggleVkTokenLoadingAction,
} from 'common/action/tokenAction/tokenAction'

export const Footer: FC<{ name: string }> = ({ name }) => {
  const { token, tokenLoaded } = useShallowEqualSelector(
    ({ vkToken: { token, tokenLoaded } }) => ({
      token,
      tokenLoaded,
    })
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleVkTokenLoadingAction(true))
    dispatch(setVkTokenAction(name))
    dispatch(toggleVkTokenLoadingAction(false))

    return () => {
      dispatch(setVkTokenAction(null))
    }
  }, [])

  return <div>Footer token - {token ? token : 'null'}</div>
}
