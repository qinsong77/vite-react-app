import { CounterOne } from '@/feature/counter/CounterOne'
import { CounterReducer } from '@/feature/counter/CounterReducer'

export const Discussion = () => {
  return (
    <div>
      <p>this is user Discussion</p>
      <CounterOne />
      <CounterReducer />
    </div>
  )
}
