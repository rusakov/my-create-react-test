import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useShallowEqualSelector } from 'common/reducer/function/useShallow'
import {
  setPageAction,
  togglePageLoadingAction,
} from 'common/action/pageAction/pageAction'

export const Topics = () => {
  const dispatch = useDispatch()
  const { page } = useShallowEqualSelector(({ page: { page } }) => ({
    page,
  }))
  const [show, setShow] = useState<boolean>(false)

  console.log(`page - ${page}`)

  // useEffect(() => {
  //   setTimeout(() => setShow(true), 2000)
  // }, [])

  useEffect(() => {
    if (page === null) {
      dispatch(togglePageLoadingAction(true))
      dispatch(setPageAction('Topics'))
      dispatch(togglePageLoadingAction(false))
    }
    return () => {
      dispatch(setPageAction(null))
    }
  }, [])

  return <div>Topics</div>
}
