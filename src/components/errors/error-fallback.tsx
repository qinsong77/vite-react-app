import { AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type ErrorFallbackProps = {
  error: { message: string } | Error | null
  resetErrorBoundary: (...args: unknown[]) => void
}

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <AlertCircle
            className="mx-auto size-12 text-red-500"
            aria-hidden="true"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We apologize for the inconvenience. Here&apos;s what happened:
          </p>
        </div>
        <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700" role="alert">
            {(error ? error.message : '') || 'An unexpected error occurred.'}
          </p>
        </div>
        <div className="mt-6">
          <Button
            onClick={resetErrorBoundary}
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}
