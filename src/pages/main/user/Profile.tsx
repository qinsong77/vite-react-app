import { useQuery } from '@tanstack/react-query'

import { findPetsByStatus } from '@/service/petstore/endpoint'

export const Profile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/v3/pet/findByStatus'],
    queryFn: () => findPetsByStatus({ status: 'sold' }),
    retry: false,
  })
  return (
    <div>
      <h2>this is Profile</h2>
      {isLoading ? (
        <p>loading</p>
      ) : error ? (
        <p>error</p>
      ) : (
        <div>
          <h2 className="my-2 text-2xl">Loaded Data:</h2>
          <pre className="m-2 text-xs">{JSON.stringify(data, null, 2)}</pre>
          {/*<p>delivered: {data?.delivered}</p>*/}
        </div>
      )}
    </div>
  )
}
