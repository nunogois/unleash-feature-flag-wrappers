import { useState, useEffect } from 'react'
import { useFlag, useVariant } from '@unleash/proxy-client-react'
import { Feature } from '../utils/constants'
import { useVariantValue } from './useVariantValue'
import { Variant } from '../utils/variants'

type FeatureRenderer<T, V> = (data: { enabled: boolean; variant?: V }) => T

export const useFeature = <T, V>(
  feature: Feature,
  callback: FeatureRenderer<T, V>
): T | undefined => {
  const [_feature, _setFeature] = useState<T>()
  const enabled = useFlag(feature)
  const variant = useVariant(feature) as Variant
  const variantValue = useVariantValue<V>(variant)

  useEffect(() => {
    try {
      const t0 = performance.now()
      const featureComponent = callback({
        enabled,
        variant: variantValue
      })
      const t1 = performance.now()
      console.log(`Call to ${feature} took ${t1 - t0} milliseconds.`)
      _setFeature(featureComponent)
    } catch (e) {
      console.error(`Call to ${feature} threw an unhandled exception:`, e)
    }
  }, [enabled, variantValue])

  return _feature
}
