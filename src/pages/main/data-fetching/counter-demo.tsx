import { Calculator, Info, RefreshCw, TrendingUp } from 'lucide-react'

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

import { CounterOne } from '@/feature/counter/counter-one'
import { CounterReducer } from '@/feature/counter/counter-reducer'

export const CounterDemo = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calculator className="h-8 w-8 text-purple-500" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Counter Components
              </h1>
              <p className="text-muted-foreground">
                Demonstrating different approaches to state management in React
                components
              </p>
            </div>
          </div>
          <Separator />
        </div>

        {/* Counter One - useState */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              Counter One (useState)
            </CardTitle>
            <CardDescription>
              Simple counter using React&#39;s useState hook
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">useState Hook</Badge>
                <Badge variant="secondary">Local State</Badge>
                <Badge variant="outline">Simple Logic</Badge>
              </div>
              <CounterOne />
              <div className="text-muted-foreground text-sm">
                This counter uses React&#39;s built-in useState hook for local
                component state management. It&#39;s perfect for simple state
                that doesn&#39;t need to be shared between components.
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        {/* Counter Reducer - useReducer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-green-500" />
              Counter Reducer (useReducer)
            </CardTitle>
            <CardDescription>
              Advanced counter using React&#39;s useReducer hook
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline">useReducer Hook</Badge>
                <Badge variant="secondary">Complex State</Badge>
                <Badge variant="outline">Action-Based</Badge>
              </div>
              <CounterReducer />
              <div className="text-muted-foreground text-sm">
                This counter uses useReducer for more complex state logic.
                It&#39;s It&#39;s ideal when you have multiple state transitions
                or when state depends on the previous one.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Hook Comparison
            </CardTitle>
            <CardDescription>
              When to use useState vs useReducer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">
                  useState - Use When:
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Simple state values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Independent state updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Local component state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Quick prototyping</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">
                  useReducer - Use When:
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Complex state logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Multiple state transitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>State depends on previous state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Predictable state updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>
              Guidelines for choosing the right state management approach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">
                  State Management Decision Tree:
                </h4>
                <div className="bg-muted rounded-lg p-4">
                  <ol className="text-muted-foreground list-inside list-decimal space-y-2 text-sm">
                    <li>
                      Is the state simple and independent? →{' '}
                      <code>useState</code>
                    </li>
                    <li>
                      Does the state have complex logic? →{' '}
                      <code>useReducer</code>
                    </li>
                    <li>
                      Does the state need to be shared? → <code>Context</code>{' '}
                      or <code>Zustand</code>
                    </li>
                    <li>
                      Is it server state? → <code>React Query</code>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Performance Considerations:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• useState triggers re-renders on every state change</li>
                  <li>• useReducer can batch multiple state updates</li>
                  <li>
                    • Both hooks are optimized by React&#39;s reconciliation
                  </li>
                  <li>• Consider memoization for expensive calculations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Notes */}
        <Alert>
          <AlertDescription>
            <strong>Key Insight:</strong> Both useState and useReducer are
            built-in React hooks that serve different purposes. useState is
            perfect for simple, independent state, while useReducer excels at
            managing complex state logic with predictable transitions. Choose
            based on your state complexity and update patterns.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
