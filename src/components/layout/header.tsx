import { GithubIcon, RssIcon } from 'lucide-react'
import { Link } from 'react-router'

import { buttonVariants } from '@/components/ui/button'

import { ThemeToggle } from '@/components/theme-toggle'

import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'

import { MainNav } from './main-nav'

export function Header() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex min-h-16 border-b backdrop-blur">
      <MainNav />
      <nav className="flex flex-1 items-center justify-end space-x-2">
        <Link to={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            <GithubIcon className="size-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link to={siteConfig.links.blog} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <RssIcon className="size-3 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  )
}
