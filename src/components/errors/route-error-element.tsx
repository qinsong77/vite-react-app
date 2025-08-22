import * as React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router'

import { ErrorFallback } from '@/components/errors/error-fallback'

import { NotFound } from './not-found'

export const RouteErrorElement = (): React.ReactNode => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />
    }
    if (error.status === 401) {
      return <div>You aren&apos;t authorized to see this</div>
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>
    }

    if (error.status === 418) {
      return <div>🫖</div>
    }
  }
  return (
    <ErrorFallback
      error={error as Error}
      resetErrorBoundary={() => window.location.reload()}
    />
  )
}
