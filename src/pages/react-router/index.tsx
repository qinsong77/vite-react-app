import { Link, Outlet } from 'react-router-dom'

export const ReactRouterPage = () => {
  return (
    <div>
      <Link
        to="/react-router/loader-defer-location/290"
        className="block text-foreground/60 transition-colors hover:text-foreground/80"
      >
        router defer
      </Link>
      <Link
        to="/react-router/loader-location/290"
        className="block text-foreground/60 transition-colors hover:text-foreground/80"
      >
        router loader
      </Link>
      <div className="mt-4 p-2">
        <Outlet />
      </div>
    </div>
  )
}
