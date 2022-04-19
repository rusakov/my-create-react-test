import loadable from '@loadable/component'
import React from 'react'

export const HomeLoadable = loadable(() => import('./Home'), {
  fallback: (({ error }) => {
    if (error) {
      console.error('Agreement split error', error)
    }
    return <div>Loading</div>
  })({
    pastDelay: true,
    error: false,
    timedOut: false,
  }),
})
