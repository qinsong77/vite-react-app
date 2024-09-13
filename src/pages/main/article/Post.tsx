import { useState } from 'react'

export const Post = () => {
  const [num, updateNum] = useState(0)
  console.log('App render', num)

  return (
    <div>
      <p>num: {num}</p>
      <button onClick={() => updateNum(1)}>
        <Child />
      </button>
    </div>
  )
}

function Child() {
  console.log('child render')
  return <span>child</span>
}
