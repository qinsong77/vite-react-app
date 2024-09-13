import { createRequest } from '@/service/axios'

export type Pos = {
  latitude: number
  longitude: number
}

export const getPackageLocation = ({ id }: { id: string }) => {
  return createRequest<Pos>({
    method: 'get',
    url: '/api/customer/getPackageLocation',
    params: {
      id,
    },
  })
}
