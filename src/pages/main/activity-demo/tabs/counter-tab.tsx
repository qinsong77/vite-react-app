import { Minus, Plus, RotateCcw } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const CounterTab = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Counter Tab</h3>
        <p className="text-muted-foreground text-sm">
          The counter state is preserved when switching tabs
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Badge
          variant="outline"
          className="bg-gradient-to-r from-violet-500 to-purple-500 px-6 py-3 text-3xl font-bold text-white"
        >
          {count}
        </Badge>

        <div className="flex gap-3">
          <Button
            onClick={() => setCount((c) => c - 1)}
            variant="outline"
            size="icon"
            className="size-12"
          >
            <Minus className="size-5" />
          </Button>
          <Button
            onClick={() => setCount(0)}
            variant="secondary"
            size="icon"
            className="size-12"
          >
            <RotateCcw className="size-5" />
          </Button>
          <Button
            onClick={() => setCount((c) => c + 1)}
            variant="default"
            size="icon"
            className="size-12"
          >
            <Plus className="size-5" />
          </Button>
        </div>

        <p className="text-muted-foreground text-center text-sm">
          Try changing the count, then switch to another tab and back.
          <br />
          The count will be preserved!
        </p>
      </div>
    </div>
  )
}
