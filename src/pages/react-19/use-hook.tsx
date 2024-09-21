// import { Suspense, useState } from 'react'
//
// import { findPetsByStatus } from '@/service/petstore/endpoint'
// import { FindPetsByStatusStatus } from '@/service/petstore/model'

export const UseHooksPage = () => {
  return (
    <div>
      <h2>Use</h2>
    </div>
  )
}

// const useHookExample = () => {
//   const [findPetsByStatusPromise, setFindPetsByStatusPromise] = useState(() =>
//     findPetsByStatus({ status: FindPetsByStatusStatus.sold })
//   )
//   return (
//     <div>
//       <h3>Find Pets By Status</h3>
//       <Suspense fallback={<p>loading...</p>}></Suspense>
//     </div>
//   )
// }
//
// const PetsStatusList = ({
//   findPetsByStatusPromise,
// }: {
//   findPetsByStatusPromise: ReturnType<typeof findPetsByStatus>
// }) => {
//   const resp = use(findPetsByStatusPromise)
//   return <div></div>
// }
