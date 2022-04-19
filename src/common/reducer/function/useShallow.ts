import { shallowEqual, useSelector } from 'react-redux'

/**
 * @param selector
 */
export const useShallowEqualSelector = <TSelected>(
  selector: () => TSelected
): TSelected => useSelector(selector, shallowEqual)
