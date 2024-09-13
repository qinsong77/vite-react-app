import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

const AXIOS_INSTANCE = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL || '',
  timeout: 15 * 1000,
  adapter: 'fetch',
  headers: {
    'Content-Type': 'application/json',
  },
})

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  config.withCredentials = true
  return config
}

AXIOS_INSTANCE.interceptors.request.use(authRequestInterceptor)
AXIOS_INSTANCE.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const message = error.response?.data?.message || error.message
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    message &&
      toast.error('Error', {
        description: message as string,
        duration: Infinity,
        closeButton: true,
      })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams()
      const redirectTo = searchParams.get('redirectTo') ?? ''
      window.location.href = `/auth/login?redirectTo=${redirectTo}`
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Promise.reject(new Error(error))
  }
)

export const createRequest = <T>(config: AxiosRequestConfig): Promise<T> => {
  return AXIOS_INSTANCE<T>(config).then(({ data }) => data)
}
