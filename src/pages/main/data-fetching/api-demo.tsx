import { useQuery } from '@tanstack/react-query'
import { AlertCircle, CheckCircle, Database, Info, Loader2 } from 'lucide-react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

import { findPetsByStatus } from '@/service/petstore/endpoint'

export const ApiDemo = () => {
  const { data, isLoading, error, isError, isSuccess, refetch } = useQuery({
    queryKey: ['/api/v3/pet/findByStatus'],
    queryFn: () => findPetsByStatus({ status: 'sold' }),
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Database className="h-8 w-8 text-blue-500" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                API Data Fetching
              </h1>
              <p className="text-muted-foreground">
                Demonstrating React Query for efficient data fetching and
                caching
              </p>
            </div>
          </div>
          <Separator />
        </div>

        {/* Query Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Query Status
            </CardTitle>
            <CardDescription>Current state of the API request</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Badge
                  variant={isLoading ? 'secondary' : 'outline'}
                  className="w-full justify-center"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading
                    </span>
                  ) : (
                    'Idle'
                  )}
                </Badge>
                <p className="text-muted-foreground text-center text-sm">
                  Status
                </p>
              </div>
              <div className="space-y-2">
                <Badge
                  variant={isSuccess ? 'default' : 'outline'}
                  className="w-full justify-center"
                >
                  {isSuccess ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Success
                    </span>
                  ) : (
                    'Pending'
                  )}
                </Badge>
                <p className="text-muted-foreground text-center text-sm">
                  Result
                </p>
              </div>
              <div className="space-y-2">
                <Badge
                  variant={isError ? 'destructive' : 'outline'}
                  className="w-full justify-center"
                >
                  {isError ? (
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      Error
                    </span>
                  ) : (
                    'No Error'
                  )}
                </Badge>
                <p className="text-muted-foreground text-center text-sm">
                  Error State
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Display */}
        {isLoading && (
          <Card>
            <CardHeader>
              <CardTitle>Loading Data...</CardTitle>
              <CardDescription>Fetching pets data from the API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Loading pets data...</span>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        )}

        {isError && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertCircle className="h-5 w-5" />
                Error Loading Data
              </CardTitle>
              <CardDescription>Failed to fetch pets data</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert variant="destructive">
                <AlertDescription>
                  {error.message || 'An error occurred while fetching data'}
                </AlertDescription>
              </Alert>
              <div className="mt-4">
                <button
                  onClick={() => void refetch()}
                  className="text-sm text-blue-600 underline hover:text-blue-800"
                >
                  Click here to retry
                </button>
              </div>
            </CardContent>
          </Card>
        )}

        {isSuccess && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Data Loaded Successfully
              </CardTitle>
              <CardDescription>
                Pets data retrieved from the API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline">
                  Total Pets: {Array.isArray(data) ? data.length : 'N/A'}
                </Badge>
                <Badge variant="outline">Status: sold</Badge>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Raw API Response:</h4>
                <div className="bg-muted max-h-96 overflow-auto rounded-lg p-4">
                  <pre className="text-muted-foreground text-xs">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* React Query Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Why React Query?</CardTitle>
            <CardDescription>
              Key benefits of using React Query for data fetching
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">Features:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Automatic caching and background updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Built-in loading and error states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Optimistic updates and rollbacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Request deduplication</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">Use Cases:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Server state management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Real-time data synchronization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Complex data fetching logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Offline support and caching</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Notes */}
        <Alert>
          <AlertDescription>
            <strong>Note:</strong> This demo uses React Query v4 with TanStack
            Query. The query is configured with a 5-minute stale time, meaning
            data will be considered fresh for 5 minutes before triggering a
            background refetch. This helps reduce unnecessary API calls while
            keeping data up-to-date.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
