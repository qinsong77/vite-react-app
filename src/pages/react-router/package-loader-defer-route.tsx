import { Suspense } from 'react'
import {
  Await,
  LoaderFunction,
  defer,
  useAsyncValue,
  useLoaderData,
} from 'react-router-dom'

import { Spinner } from '@/components/spinner'
import { Pos, getPackageLocation } from '@/service/custom'

// todo: separate to another file if Route component will be used as Lazy loading: refer https://reacttraining.com/blog/spa-lazy-loading-pitfalls
export const loader: LoaderFunction = ({ params }) => {
  // fixme what if params.packageId is missing
  const packageLocationPromise = getPackageLocation({
    id: params.packageId ?? '',
  })

  return defer({
    res: packageLocationPromise,
  })
}

export function PackageLoaderDeferRoute() {
  const data = useLoaderData() as { res: Pos }

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
        <Await
          resolve={data.res}
          errorElement={<p>Error loading package location!</p>}
        >
          <PackageLocation />
        </Await>
      </Suspense>
    </main>
  )
}

function PackageLocation() {
  const packageLocation = useAsyncValue() as Pos
  return (
    <p>
      Your package is at {packageLocation.latitude} lat and{' '}
      {packageLocation.longitude} long.
    </p>
  )
}
