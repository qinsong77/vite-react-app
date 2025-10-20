import { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

const Child: FC<{ name: string }> = ({ name }) => {
  useEffect(() => {
    console.log(name + ' effect')
    return () => {
      console.log(name + ' clear')
    }
  }, [])
  return <div>{name}</div>
}
const Parent = () => {
  useEffect(() => {
    console.log('Parent effect')
    return () => {
      console.log('Parent clear')
    }
  }, [])
  return (
    <div className="flex flex-col gap-2">
      <p>Parent</p>
      <Child name="child1" />
      <Child name="child2" />
    </div>
  )
}

export default function UseEffectRunSeq() {
  const [show, setShow] = useState(true)
  return (
    <>
      <p className="mb-4 text-sm text-gray-500">
        as the log shows, the effect of child1 will run first, then the effect
        of child2 will run, and then the effect of parent will run.
        <br />
        for the clear function, the order is the opposite.
      </p>
      <Button onClick={() => setShow(!show)} className="mb-4">
        show
      </Button>
      {show && <Parent />}
    </>
  )
}
