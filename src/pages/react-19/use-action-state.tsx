import { Loader2Icon } from 'lucide-react'
import { useActionState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export const UseActionState = () => {
  return (
    <div>
      <h2 className="my-2 text-lg font-bold">UseActionState</h2>
      <Separator className="my-2" />
      <Demo1 />
    </div>
  )
}

type ActionState1 = {
  result: number
  payload?: FormData
}

function Demo1() {
  const [state, formAction, isPending] = useActionState<ActionState1, FormData>(
    async (prevState, formData) => {
      console.log(prevState)
      console.log(formData)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return {
        result: prevState.result + Number(formData.get('num') ?? 0),
        payload: formData,
      }
    },
    {
      result: 0,
    }
  )
  console.log(state)
  return (
    <div className="mt-3 w-72">
      <form className="space-y-6" action={formAction}>
        <Label>test</Label>
        <Input
          name="num"
          defaultValue={(state.payload?.get('num') ?? '1') as string}
        />
        <p>Res: {state.result}</p>
        <Button type="submit" disabled={isPending} className="w-24">
          {isPending && <Loader2Icon className="animate-spin" />}
          add
        </Button>
      </form>
    </div>
  )
}
