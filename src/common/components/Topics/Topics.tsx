import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  setVkTokenAction,
  toggleVkTokenLoadingAction,
} from 'common/action/tokenAction/tokenAction'
import { Footer } from 'common/presentation/Footer/Footer'

export const Topics = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleVkTokenLoadingAction(true))
    dispatch(setVkTokenAction('123123123'))
    dispatch(toggleVkTokenLoadingAction(false))

    return () => {
      dispatch(setVkTokenAction(null))
    }
  }, [])

  return (
    <div>
      Topics <Footer />
    </div>
  )
}
