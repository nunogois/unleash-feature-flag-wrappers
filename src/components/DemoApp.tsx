import { useFeature } from '../hooks/useFeature'
import { FEATURE, VARIANT_A, VARIANT_B } from '../utils/constants'
import { VariantA } from './experiments/VariantA'
import { VariantB } from './experiments/VariantB'

export const DemoApp = () => {
  const feature = useFeature(FEATURE, ({ variant }) => {
    switch (variant) {
      case VARIANT_A:
        return <VariantA />
      case VARIANT_B:
        return <VariantB />
      default:
        return <div>Loading...</div>
    }
  })

  const json = useFeature(FEATURE, async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await response.json()
    return json
  })

  console.log('before running')
  ;(async () => {
    const body = await json
    console.log(body)
  })()

  console.log('after running')

  return (
    <div>
      <h1>Some demo app...</h1>
      {feature}
    </div>
  )
}
