import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RouteErrorElement } from '@/components/errors/route-error-element'
import { Layout } from '@/components/layout'

import { mainRoutes } from './routes'

const router = createBrowserRouter(
  [
    // this is just for warp all page with header and footer: https://stackoverflow.com/questions/70833727/using-react-router-v6-i-need-a-navbar-to-permanently-be-there-but-cant-display
    {
      path: '/',
      element: <Layout />,
      // 404
      errorElement: <RouteErrorElement />,
      children: mainRoutes,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
