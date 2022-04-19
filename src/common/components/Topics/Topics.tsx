import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useShallowEqualSelector } from 'common/reducer/function/useShallow'
import {
  setPageAction,
  togglePageLoadingAction,
} from 'common/action/pageAction/pageAction'

const Topics = () => {
  const dispatch = useDispatch()
  const { page, pathname } = useShallowEqualSelector(
    ({
      page: { page },
      router: {
        location: { pathname },
      },
    }) => ({
      page,
      pathname,
    })
  )
  const [show, setShow] = useState<boolean>(false)

  console.log(`page - ${page}`, pathname)

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
      console.log('1')
      dispatch(setPageAction(null))
    }
  }, [])

  return <div>Topics {page}</div>
}

export default Topics
