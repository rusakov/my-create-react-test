import loadable from '@loadable/component'
import React from 'react'

export const AboutLoadable = loadable(() => import('./About'), {
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
