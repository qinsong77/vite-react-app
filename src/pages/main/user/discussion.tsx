import { Separator } from '@/components/ui/separator'

import { CounterOne } from '@/feature/counter/counter-one'
import { CounterReducer } from '@/feature/counter/counter-reducer'

export const Discussion = () => {
  return (
    <div>
      <p className="mt-2">this is user Discussion</p>
      <CounterOne />
      <Separator className="my-4" />
      <CounterReducer />
    </div>
  )
}
