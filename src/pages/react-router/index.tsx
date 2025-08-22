import { Link, Outlet } from 'react-router'

export const ReactRouterPage = () => {
  return (
    <div>
      <Link
        to="/react-router/loader-defer-location/290"
        className="text-foreground/60 hover:text-foreground/80 block transition-colors"
      >
        router defer
      </Link>
      <Link
        to="/react-router/loader-location/290"
        className="text-foreground/60 hover:text-foreground/80 block transition-colors"
      >
        router loader
      </Link>
      <div className="mt-4 p-2">
        <Outlet />
      </div>
    </div>
  )
}
