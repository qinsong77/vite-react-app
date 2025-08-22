import { Suspense, use, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

import { findPetsByStatus } from '@/service/petstore/endpoint'
import { FindPetsByStatusStatus } from '@/service/petstore/model'

export const UseHooksPage = () => {
  return (
    <div>
      <h2 className="my-3 text-lg font-semibold">use Hook example</h2>
      <UseHookExample />
    </div>
  )
}

const UseHookExample = () => {
  const [findPetsByStatusPromise, setFindPetsByStatusPromise] = useState(() =>
    findPetsByStatus({ status: undefined })
  )
  return (
    <div>
      <h3 className="my-2">Find Pets By Status</h3>
      <Select
        onValueChange={(value: FindPetsByStatusStatus) => {
          setFindPetsByStatusPromise(findPetsByStatus({ status: value }))
        }}
      >
        <SelectTrigger className="w-[230px]">
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Status</SelectLabel>
            {Object.entries(FindPetsByStatusStatus).map(([key, text]) => (
              <SelectItem value={key} key={key}>
                {text}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Separator className="mt-4" />
      <Suspense
        fallback={
          <p className="text-muted-foreground my-4 text-sm">loading...</p>
        }
      >
        <PetsStatusList findPetsByStatusPromise={findPetsByStatusPromise} />
      </Suspense>
    </div>
  )
}

const PetsStatusList = ({
  findPetsByStatusPromise,
}: {
  findPetsByStatusPromise: ReturnType<typeof findPetsByStatus>
}) => {
  const resp = use(findPetsByStatusPromise)
  return (
    <div>
      {resp.map(({ name, status, photoUrls }) => (
        <ul className="my-2 gap-1 py-2" key={name}>
          <li>name: {name}</li>
          <li>status: {status ?? '-'}</li>
          <li className="text-muted-foreground text-sm">
            photoUrls: {photoUrls.join(',')}
          </li>
        </ul>
      ))}
    </div>
  )
}
