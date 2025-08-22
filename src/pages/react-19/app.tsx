import { Link, Outlet } from 'react-router'

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
  {
    title: 'useActionState',
    href: '/useActionState',
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
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link to={`/react19${href}`}>{title}</Link>
                </NavigationMenuLink>
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
