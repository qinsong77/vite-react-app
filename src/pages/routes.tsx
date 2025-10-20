import { Navigate, RouteObject } from 'react-router'

import { convertRouteAndLoader } from '@/lib/convert-route-and-loader'

import { Home } from './home'
import { Introduce } from './introduce'
import {
  ApiDemo,
  CounterDemo,
  Dashboard,
  FormDemo,
  Main,
  ReactStateDemo,
  ZustandDemo,
} from './main'
import { ReactRouterDemo } from './main/react-router-demo'
import { React19Routes } from './react-19/routes'

const authRoutes: RouteObject[] = [
  { index: true, element: <Dashboard /> },

  {
    path: 'useeffect-run-seq',
    lazy: () => import('./main/useeffect-run-seq').then(convertRouteAndLoader),
  },
  { path: 'form-demo', element: <FormDemo /> },
  { path: 'react-router-demo', element: <ReactRouterDemo /> },
  {
    path: 'react-router-demo/loader/:packageId',
    lazy: () =>
      import('./main/react-router-demo/loader').then(convertRouteAndLoader),
  },
  {
    path: 'react-router-demo/defer/:packageId',
    lazy: () =>
      import('./main/react-router-demo/defer').then(convertRouteAndLoader),
  },
  { path: 'state-management/zustand/:listId', element: <ZustandDemo /> },
  { path: 'state-management/react-state', element: <ReactStateDemo /> },
  { path: 'data-fetching/api', element: <ApiDemo /> },
  { path: 'data-fetching/counter', element: <CounterDemo /> },
  { path: '*', element: <Navigate to="." /> },
]

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/main',
    element: <Main />,
    children: authRoutes,
  },
  {
    path: '/introduce',
    element: <Introduce />,
  },
  ...React19Routes,
  {
    path: 'payment',
    lazy: async () => {
      const { PaymentPage } = await import('./payment')
      return { Component: PaymentPage }
    },
  },
] as const
