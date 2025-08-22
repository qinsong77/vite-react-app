import { createRequest } from '@/service/axios'

export type Pos = {
  latitude: number
  longitude: number
  id: number
}

export const getPackageLocation = ({ id }: { id: string }) => {
  return createRequest<Pos>({
    method: 'get',
    url: '/customer/getPackageLocation',
    params: {
      id,
    },
  })
}
