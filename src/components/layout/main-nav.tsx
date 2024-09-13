import { Lollipop } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'

export function MainNav() {
  const { pathname } = useLocation()

  return (
    <div className="mr-4 flex">
      <Link to="/" className="mr-6 flex items-center">
        <Lollipop />
        <span className="ml-1 inline-block font-normal md:font-bold">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="hidden items-center gap-4 text-sm sm:flex lg:gap-6">
        <Link
          to="/main"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/main')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          main
        </Link>
        <Link
          to="/introduce"
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 2xl:block',
            pathname.startsWith('/introduce')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          introduce
        </Link>
        <Link
          to="/payment"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/payment')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          payment
        </Link>
        <Link
          to="/form-demo"
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 2xl:block',
            pathname.startsWith('/form-demo')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          form demo
        </Link>
        <Link
          to="/react-router"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/react-router')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          react-router
        </Link>
        <Link
          to="/react19"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname.startsWith('/react19')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          react 19
        </Link>
        <Link
          target="_blank"
          to={siteConfig.links.repoGithub}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 2xl:block'
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
