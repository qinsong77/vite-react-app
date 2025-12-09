import { Activity as ActivityIcon, Info } from 'lucide-react'
import { Activity, useState } from 'react'

import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { ContactTab } from './tabs/contact-tab'
import { CounterTab } from './tabs/counter-tab'
import { FormTab } from './tabs/form-tab'

type TabValue = 'counter' | 'form' | 'contact'

export const ActivityDemo = () => {
  const [activeTab, setActiveTab] = useState<TabValue>('counter')

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ActivityIcon className="size-8 text-violet-500" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                React Activity API Demo
              </h1>
              <p className="text-muted-foreground">
                Demonstrating the React 19 Activity component for preserving
                hidden UI state
              </p>
            </div>
          </div>
          <Separator />
        </div>

        {/* Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="size-5" />
              What is Activity?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              <code className="bg-muted rounded px-2 py-1">{'<Activity>'}</code>{' '}
              is a new React 19 component that lets you hide and restore the UI
              and internal state of its children. Unlike conditional rendering
              which destroys component state, Activity preserves state by using{' '}
              <code className="bg-muted rounded px-2 py-1">
                display: &quot;none&quot;
              </code>{' '}
              CSS property and cleaning up Effects.
            </p>
          </CardContent>
        </Card>

        {/* Demo Tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ActivityIcon className="size-5 text-violet-500" />
              Activity Tabs Demo
            </CardTitle>
            <CardDescription>
              Switch between tabs - each tab preserves its state even when
              hidden
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as TabValue)}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="counter">Counter</TabsTrigger>
                <TabsTrigger value="form">Form</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Using Activity to preserve state */}
            <div className="relative min-h-[300px]">
              <Activity mode={activeTab === 'counter' ? 'visible' : 'hidden'}>
                <CounterTab />
              </Activity>

              <Activity mode={activeTab === 'form' ? 'visible' : 'hidden'}>
                <FormTab />
              </Activity>

              <Activity mode={activeTab === 'contact' ? 'visible' : 'hidden'}>
                <ContactTab />
              </Activity>
            </div>
          </CardContent>
        </Card>

        {/* Code Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Code Comparison</CardTitle>
            <CardDescription>
              Traditional vs Activity approach for showing/hiding content
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-red-600">
                Traditional (State Lost):
              </h4>
              <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
                {`// State is lost when switching tabs
{activeTab === 'counter' && (
  <CounterTab />
)}
{activeTab === 'form' && (
  <FormTab />
)}`}
              </pre>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">
                With Activity (State Preserved):
              </h4>
              <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
                {`// State is preserved when hidden
<Activity mode={activeTab === 'counter' ? 'visible' : 'hidden'}>
  <CounterTab />
</Activity>
<Activity mode={activeTab === 'form' ? 'visible' : 'hidden'}>
  <FormTab />
</Activity>`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>
              Benefits of using Activity for UI visibility management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-violet-600">How it works:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500">•</span>
                    <span>
                      Hides content using{' '}
                      <code className="bg-muted rounded px-1">
                        display: none
                      </code>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500">•</span>
                    <span>Cleans up Effects when hidden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500">•</span>
                    <span>Preserves React state and DOM state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-500">•</span>
                    <span>Re-creates Effects when visible again</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-emerald-600">Use cases:</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Tab-based interfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Sidebars with expandable sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Modal/dialog content preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>Pre-rendering content for faster reveals</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Note */}
        <Alert>
          <AlertDescription>
            <strong>Note:</strong> Activity is available in React 19.2+. When a
            component is hidden by Activity, its Effects are cleaned up
            (subscriptions stopped, timers cleared), but its state is preserved.
            This makes it different from both conditional rendering (which loses
            state) and CSS hiding (which keeps Effects running).
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
