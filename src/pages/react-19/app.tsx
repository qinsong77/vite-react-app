import { Link, Outlet } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const routes = [
  {
    title: 'use',
    href: '',
  },
  {
    title: 'useOptimistic',
    href: '/useOptimistic',
  },
  {
    title: 'useDeferredValue',
    href: '/useDeferredValue',
  },
]
export const App = () => {
  return (
    <div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {routes.map(({ title, href }) => (
              <NavigationMenuItem key={href}>
                <Link to={`/react19${href}`}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="mt-2">
        <Outlet />
      </div>
    </div>
  )
}
