import { LoaderFunction, useLoaderData } from 'react-router'

import { Pos, getPackageLocation } from '@/service/custom'

export const loader: LoaderFunction = async ({ params }) => {
  return {
    pos: await getPackageLocation({ id: params.packageId ?? '' }),
  }
}
export function PackageLoaderRoute() {
  const { pos } = useLoaderData<{
    pos: Pos
  }>()
  return (
    <main>
      <h1>Lets locate your package</h1>

      <p>response param id is : {pos.id}</p>
      <p>
        Your package is at {pos.latitude} lat and {pos.longitude} long.
      </p>
    </main>
  )
}
