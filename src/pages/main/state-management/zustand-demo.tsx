import { PawPrint, Info, TrendingUp } from 'lucide-react'
import { useParams } from 'react-router'

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

import { useBearStore } from '@/store/useBearStore'

export const ZustandDemo = () => {
  const { bears, increasePopulation, decreasePopulation, resetPopulation } =
    useBearStore()
  const { listId } = useParams()

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <PawPrint className="h-8 w-8 text-orange-500" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Zustand State Management
              </h1>
              <p className="text-muted-foreground">
                Demonstrating Zustand for lightweight state management
              </p>
            </div>
          </div>
          <Separator />
        </div>

        {/* Route Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Route Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Current route:{' '}
              <code className="bg-muted rounded px-2 py-1">
                /main/state-management/zustand/{listId}
              </code>
            </p>
          </CardContent>
        </Card>

        {/* Bear Counter */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-orange-500" />
              Bear Population Counter
            </CardTitle>
            <CardDescription>
              Interactive counter using Zustand store
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current State Display */}
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <Badge variant="outline" className="px-4 py-2 text-lg">
                  Current Bears: {bears}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                Bears in the forest: {bears}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Button
                onClick={() => increasePopulation(10)}
                className="flex items-center gap-2"
                variant="default"
              >
                <TrendingUp className="h-4 w-4" />
                Add 10 Bears
              </Button>
              <Button
                onClick={() => decreasePopulation(5)}
                className="flex items-center gap-2"
                variant="outline"
              >
                <TrendingUp className="h-4 w-4 rotate-180" />
                Remove 5 Bears
              </Button>
              <Button
                onClick={() => resetPopulation()}
                className="flex items-center gap-2"
                variant="destructive"
              >
                Reset to 0
              </Button>
            </div>

            {/* Visual Representation */}
            <div className="space-y-3">
              <h4 className="font-semibold">Visual Representation:</h4>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: Math.min(bears, 50) }).map((_, index) => (
                  <PawPrint key={index} className="h-6 w-6 text-orange-500" />
                ))}
                {bears > 50 && (
                  <span className="text-muted-foreground self-center text-sm">
                    +{bears - 50} more...
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zustand Benefits */}
        <Card>
          <CardHeader>
            <CardTitle>Why Zustand?</CardTitle>
            <CardDescription>
              Key benefits of using Zustand for state management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">Advantages:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Lightweight and simple API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>No providers or context needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>TypeScript support out of the box</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Minimal boilerplate code</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">Use Cases:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Simple state management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Cross-component state sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>Persistent state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <span>React Native compatibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Notes */}
        <Alert>
          <AlertDescription>
            <strong>Note:</strong> This demo shows how Zustand automatically
            maintains function references for performance optimization. The{' '}
            <code>increasePopulation</code> function reference stays stable
            across re-renders, preventing unnecessary child component updates.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
