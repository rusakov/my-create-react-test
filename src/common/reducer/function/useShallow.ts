import { shallowEqual, useSelector } from 'react-redux'
import { RootState } from 'common/reducer'

/**
 * @param selector
 */
export const useShallowEqualSelector = <TSelected>(
  selector: (state: RootState) => TSelected
): TSelected => useSelector(selector, shallowEqual)
