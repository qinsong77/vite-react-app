import { RouteObject } from 'react-router-dom'

import { App } from './app'
import { UseDeferredValueHookPage } from './use-deferred-value-hook'
import { UseHooksPage } from './use-hook'
import { UseOptimisticHook } from './use-optimistic-hook'

export const React19Routes: RouteObject[] = [
  {
    path: '/react19',
    element: <App />,
    children: [
      {
        index: true,
        element: <UseHooksPage />,
      },
      {
        path: 'useDeferredValue',
        element: <UseDeferredValueHookPage />,
      },
      {
        path: 'useOptimistic',
        element: <UseOptimisticHook />,
      },
    ],
  },
]
