import { Suspense, use } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router'

import { Spinner } from '@/components/spinner'

import { Pos, getPackageLocation } from '@/service/custom'

// todo: separate to another file if Route component will be used as Lazy loading: refer https://reacttraining.com/blog/spa-lazy-loading-pitfalls
export const loader: LoaderFunction = ({ params }) => {
  return {
    packageLocationPromise: getPackageLocation({
      id: params.packageId ?? '',
    }),
  }
}

export function PackageLoaderDeferRoute() {
  const { packageLocationPromise } = useLoaderData<{
    packageLocationPromise: ReturnType<typeof getPackageLocation>
  }>()
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
        <NonCriticalUI p={packageLocationPromise} />
      </Suspense>
    </main>
  )
}

function NonCriticalUI({ p }: { p: Promise<Pos> }) {
  const pos = use(p)
  return (
    <div>
      <p>response param id is : {pos.id}</p>
      <p>
        Your package is at {pos.latitude} lat and {pos.longitude} long.
      </p>
    </div>
  )
}
