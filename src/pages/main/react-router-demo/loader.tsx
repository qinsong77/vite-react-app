import { MapPin } from 'lucide-react'
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

import { Pos, getPackageLocation } from '@/service/custom'

import { queryClient } from '@/lib/queryClient'

// Loader for package location route
export const loader = async ({ params }: { params: { packageId: string } }) => {
  return {
    pos: await queryClient.fetchQuery({
      queryKey: ['packageLocation', params.packageId],
      queryFn: () => getPackageLocation({ id: params.packageId }),
    }),
  }
}

export default function PackageLoaderRoute() {
  const { pos } = useLoaderData<{
    pos: Pos
  }>()

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Loader Demo</h1>
              <p className="text-muted-foreground">
                Demonstrates React Router&#39;s loader functionality
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
              <MapPin className="h-5 w-5 text-blue-500" />
              <CardTitle>Package Location Found</CardTitle>
            </div>
            <CardDescription>
              Package location retrieved using React Router loader
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Badge variant="outline">Package ID</Badge>
                <p className="bg-muted rounded p-2 font-mono text-sm">
                  {pos.id}
                </p>
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
                This data was loaded using React Router&#39;s{' '}
                <code>loader</code> function, which runs before the component
                renders and provides data synchronously.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Loader Works</CardTitle>
            <CardDescription>
              Understanding the loader pattern in React Router
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Process Flow:</h4>
              <ol className="text-muted-foreground list-inside list-decimal space-y-2 text-sm">
                <li>Route is accessed</li>
                <li>Loader function executes</li>
                <li>Data is fetched and cached</li>
                <li>Component renders with data already available</li>
                <li>No loading states needed</li>
              </ol>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Data available before component mounts</li>
                <li>• Better error handling with error boundaries</li>
                <li>• Improved performance and user experience</li>
                <li>• Centralized data fetching logic</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
