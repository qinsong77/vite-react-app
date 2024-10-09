import { Suspense } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'

import { Spinner } from '@/components/spinner'
import { Pos, getPackageLocation } from '@/service/custom'

export const loader: LoaderFunction = async ({ params }) => {
  // fixme what if params.packageId is missing
  return getPackageLocation({ id: params.packageId ?? '' })
}
export function PackageLoaderRoute() {
  const packageLocation = useLoaderData() as Pos

  return (
    <main>
      <h1>Lets locate your package</h1>
      <Suspense
        fallback={
          <>
            <Spinner />
            <p>Loading package location...</p>
          </>
        }
      >
        <p>
          Your package is at {packageLocation.latitude} lat and{' '}
          {packageLocation.longitude} long.
        </p>
      </Suspense>
    </main>
  )
}
