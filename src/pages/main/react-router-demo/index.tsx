import { Loader2, Package, Zap } from 'lucide-react'
import { Link } from 'react-router'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ReactRouterDemo() {
  const packageId = '290' // Demo package ID

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            React Router Demo
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Explore React Router&#39;s powerful features including loaders,
            deferred loading, and data fetching patterns. This demo showcases
            different approaches to handling asynchronous data in React Router
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Loader Feature Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 text-blue-500" />
                <CardTitle>Data Loaders</CardTitle>
              </div>
              <CardDescription>
                Pre-fetch data before component rendering
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600">Key Benefits</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Data available before component mounts</li>
                  <li>• Synchronous data access</li>
                  <li>• Better error handling</li>
                  <li>• Improved performance</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link to={`/main/react-router-demo/loader/${packageId}`}>
                  Try Loader Demo
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Defer Feature Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-500" />
                <CardTitle>Deferred Loading</CardTitle>
              </div>
              <CardDescription>
                Stream data progressively for better UX
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Key Benefits</h4>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Progressive data loading</li>
                  <li>• Non-blocking UI</li>
                  <li>• Better perceived performance</li>
                  <li>• Streaming capabilities</li>
                </ul>
              </div>
              <Button asChild className="w-full">
                <Link to={`/main/react-router-demo/defer/${packageId}`}>
                  Try Defer Demo
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Feature Comparison
            </CardTitle>
            <CardDescription>
              Understanding when to use loaders vs deferred loading
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">
                  Use Loaders When:
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Data is critical for initial render</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>You need data before component mounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Error boundaries are important</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">
                  Use Defer When:
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Data is non-critical for initial render</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>You want progressive loading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Streaming is beneficial</span>
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

export default ReactRouterDemo
