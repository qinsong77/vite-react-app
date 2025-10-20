import { Zap } from 'lucide-react'
import { Suspense, use } from 'react'
import { Link } from 'react-router'
// Import useLoaderData for the component
import { useLoaderData } from 'react-router'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { Spinner } from '@/components/spinner'

import { Pos, getPackageLocation } from '@/service/custom'

// Loader for package location defer route
export const loader = ({ params }: { params: { packageId: string } }) => {
  return {
    packageLocationPromise: getPackageLocation({
      id: params.packageId,
    }),
  }
}

export default function PackageLoaderDeferRoute() {
  const { packageLocationPromise } = useLoaderData<{
    packageLocationPromise: ReturnType<typeof getPackageLocation>
  }>()

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Defer Demo</h1>
              <p className="text-muted-foreground">
                Demonstrates React Router's deferred loading
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/main/react-router-demo">Back to Overview</Link>
            </Button>
          </div>
          <Separator />
        </div>

        {/* Package Location Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-green-500" />
              <CardTitle>Package Location (Deferred)</CardTitle>
            </div>
            <CardDescription>
              Package location loaded with deferred data loading
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense
              fallback={
                <div className="text-muted-foreground flex items-center gap-2 py-4">
                  <Spinner />
                  <span>Loading package location...</span>
                </div>
              }
            >
              <NonCriticalUI p={packageLocationPromise} />
            </Suspense>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Defer Works</CardTitle>
            <CardDescription>
              Understanding the defer pattern in React Router
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Process Flow:</h4>
              <ol className="text-muted-foreground list-inside list-decimal space-y-2 text-sm">
                <li>Route is accessed</li>
                <li>Component renders immediately</li>
                <li>Deferred data starts loading in background</li>
                <li>Suspense boundary shows loading state</li>
                <li>Data streams in when ready</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Non-blocking UI rendering</li>
                <li>• Progressive data loading</li>
                <li>• Better perceived performance</li>
                <li>• Streaming capabilities</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Use Cases */}
        <Card>
          <CardHeader>
            <CardTitle>When to Use Defer</CardTitle>
            <CardDescription>
              Scenarios where deferred loading is beneficial
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">Perfect For:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Non-critical data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Large datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Progressive enhancement</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-600">
                  Consider Loader Instead:
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Critical data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Error boundaries needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Blocking dependencies</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function NonCriticalUI({ p }: { p: Promise<Pos> }) {
  const pos = use(p)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Badge variant="outline">Package ID</Badge>
          <p className="bg-muted rounded p-2 font-mono text-sm">{pos.id}</p>
        </div>
        <div className="space-y-2">
          <Badge variant="outline">Coordinates</Badge>
          <p className="bg-muted rounded p-2 font-mono text-sm">
            {pos.latitude}, {pos.longitude}
          </p>
        </div>
      </div>
      <Alert>
        <AlertDescription>
          This data was loaded using React Router's defer function, which allows
          for streaming and progressive loading of non-critical data.
        </AlertDescription>
      </Alert>
    </div>
  )
}
