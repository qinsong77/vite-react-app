import { useEffect, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CounterOne() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  useEffect(() => {
    console.log('one')
    const id = setInterval(() => {
      setCount((c) => c + step)
    }, 1000)
    return () => clearInterval(id)
  }, [step])

  return (
    <>
      <h1>counter: {count}</h1>
      <Label htmlFor="step">Step</Label>
      <Input
        id="step"
        className="text-input"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </>
  )
}
