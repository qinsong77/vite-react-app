import { useEffect, useReducer } from 'react'

type State = {
  count: number
  step: number
}

enum Action {
  TICK = 'tick',
  STEP = 'step',
}

const initialState: State = {
  count: 0,
  step: 1,
}
function reducer(
  state: State,
  action: { type: Action.TICK } | { type: Action.STEP; val: number }
) {
  const { count, step } = state
  if (action.type === Action.TICK) {
    return { count: count + step, step }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  } else if (action.type === Action.STEP) {
    return { count, step: action.val }
  } else {
    throw new Error()
  }
}

// https://www.sysuke.com/fe/react/react_hooks.html#usereducer
export function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  useEffect(() => {
    console.log('two')

    const id = setInterval(() => {
      dispatch({ type: Action.TICK }) // 更新count
    }, 1000)
    return () => clearInterval(id)
  }, [dispatch])

  return (
    <>
      <h1>counter: {count}</h1>
      <label htmlFor="step" className="text-input-label">
        Step
      </label>
      <input
        id="step"
        className="text-input"
        value={step}
        onChange={(e) => {
          // 更新step
          dispatch({
            type: Action.STEP,
            val: Number(e.target.value),
          })
        }}
      />
    </>
  )
}
