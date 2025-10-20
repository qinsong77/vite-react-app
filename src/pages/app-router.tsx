import { createBrowserRouter } from 'react-router'

import { RouteErrorElement } from '@/components/errors/route-error-element'
import { Layout } from '@/components/layout'

import { env } from '@/config'

import { mainRoutes } from './routes'

export const appRouter = createBrowserRouter(
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
    basename: env.BASE_URL,
  }
)
