import { Info, RefreshCw, TrendingUp, Zap } from 'lucide-react'
import { memo, useCallback, useState } from 'react'

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

export const ReactStateDemo = () => {
  const [num, updateNum] = useState(0)
  const [renderCount, setRenderCount] = useState(0)

  console.log('App render', num)

  // Memoized callback to prevent unnecessary re-renders
  const handleUpdateNum = useCallback(() => {
    updateNum(1)
    setRenderCount((prev) => prev + 1)
  }, [])

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <RefreshCw className="h-8 w-8 text-blue-500" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                React State Management
              </h1>
              <p className="text-muted-foreground">
                Demonstrating React&#39;s built-in state management and
                optimization techniques
              </p>
            </div>
          </div>
          <Separator />
        </div>

        {/* State Display */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Current State
            </CardTitle>
            <CardDescription>
              Real-time state values and render tracking
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Badge variant="outline">Number State</Badge>
                <p className="text-2xl font-bold text-blue-600">{num}</p>
                <p className="text-muted-foreground text-sm">
                  Current number value
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline">Render Count</Badge>
                <p className="text-2xl font-bold text-green-600">
                  {renderCount}
                </p>
                <p className="text-muted-foreground text-sm">
                  Times component re-rendered
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Click the button to see state changes and render behavior
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <Button
                onClick={handleUpdateNum}
                className="flex items-center gap-2"
                size="lg"
              >
                <TrendingUp className="h-4 w-4" />
                Update Number (Triggers Re-render)
              </Button>
            </div>

            <div className="text-center">
              <MemoizedChild />
            </div>
          </CardContent>
        </Card>

        {/* Performance Optimization */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Optimization</CardTitle>
            <CardDescription>
              Techniques used to optimize render performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">
                  Optimizations Used:
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>
                      <code>useCallback</code> for stable function references
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>
                      <code>memo</code> to prevent unnecessary re-renders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>State batching for multiple updates</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">When to Use:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Expensive render calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Child components with stable props</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Performance-critical applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Console Output */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Console Output
            </CardTitle>
            <CardDescription>
              Check your browser console to see render logs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-4">
              <p className="text-muted-foreground font-mono text-sm">
                Open browser console (F12) to see:
              </p>
              <ul className="text-muted-foreground mt-2 space-y-1 font-mono text-sm">
                <li>• &#34;App render {num}&#34; - Main component renders</li>
                <li>• &quot;child render&quot; - Child component renders</li>
                <li>• Notice how Child only renders when necessary</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Technical Notes */}
        <Alert>
          <AlertDescription>
            <strong>Key Insight:</strong> The <code>Child</code> component is
            wrapped in <code>memo</code>, so it only re-renders when its props
            actually change. Since we&#39;re not passing any props and using{' '}
            <code>useCallback</code> for the click handler, the Child component
            won&#39;t re-render unnecessarily, demonstrating React&#39;s
            optimization capabilities.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

// Memoized child component to prevent unnecessary re-renders
const MemoizedChild = memo(function Child() {
  console.log('child render')
  return (
    <div className="bg-muted inline-flex items-center gap-2 rounded-lg px-4 py-2">
      <span className="text-muted-foreground text-sm">Child Component</span>
      <Badge variant="secondary">Memoized</Badge>
    </div>
  )
})
