import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useBearStore } from '@/store/useBearStore'

export const List = () => {
  // todo 这里increasePopulation应该也是显示黄色，是const zustand 会默认将所有的函数保持同一引用，但用combine: https://docs.pmnd.rs/zustand/guides/typescript#basic-usage就行，自定义类型不行
  const { bears, increasePopulation } = useBearStore()
  const { listId } = useParams()
  return (
    <div>
      this is article List, id: {listId}
      <h1 className="my-2 text-2xl font-semibold">zustand</h1>
      <p>bear: {bears}</p>
      <Button onClick={() => increasePopulation(10)}>increase</Button>
    </div>
  )
}
