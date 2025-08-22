import { Navigate, RouteObject } from 'react-router'

import {
  PackageLoaderDeferRoute,
  loader as PackageRouteDeferLoader,
} from '@/pages/react-router/package-loader-defer-route'
import {
  PackageLoaderRoute,
  loader as PackageRouteLoader,
} from '@/pages/react-router/package-loader-route'

import { FormDemo } from './form-demo'
import { Home } from './home'
import { Introduce } from './introduce'
import { Dashboard, Discussion, List, Main, Post, Profile } from './main'
import { React19Routes } from './react-19/routes'
import { ReactRouterPage } from './react-router'

const authRoutes: RouteObject[] = [
  { index: true, element: <Dashboard /> },
  { path: 'article', element: <Post /> },
  { path: 'profile', element: <Profile /> },
  { path: 'list/:listId', element: <List /> },
  { path: 'discussion', element: <Discussion /> },
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
  {
    path: '/form-demo',
    element: <FormDemo />,
  },
  {
    path: '/react-router',
    element: <ReactRouterPage />,
    children: [
      {
        path: 'loader-location/:packageId',
        element: <PackageLoaderRoute />,
        loader: PackageRouteLoader,
      },
      {
        path: 'loader-defer-location/:packageId',
        Component: PackageLoaderDeferRoute,
        loader: PackageRouteDeferLoader,
      },
    ],
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
