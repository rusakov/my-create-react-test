import React from 'react'
import { useShallowEqualSelector } from 'common/reducer/function/useShallow'

export const Footer = () => {
  const { vkToken } = useShallowEqualSelector(({ vkToken }) => ({ vkToken }))

  console.log(vkToken)

  return <div>Footer</div>
}
