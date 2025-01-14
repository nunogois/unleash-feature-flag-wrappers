import { useMemo } from 'react'
import { Variant, getVariantValue } from '../utils/variants'

export const useVariantValue = <T = string>(variant?: Variant) => {
  return useMemo(() => {
    if (variant?.enabled) {
      return getVariantValue<T>(variant)
    }
  }, [variant])
}
