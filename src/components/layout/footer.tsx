import { ExternalLink } from '@/components/external-link'

import { siteConfig } from '@/config'
import { cn } from '@/lib/utils'

export function Footer({ className }: React.ComponentProps<'footer'>) {
  return (
    <footer className={cn('py-2 md:py-4', className)}>
      <p className="text-muted-foreground text-center text-xs leading-relaxed text-balance md:text-left md:text-sm">
        Basically built by{' '}
        <ExternalLink href="https://vitejs.dev/">Vite</ExternalLink> &{' '}
        <ExternalLink href="https://react.dev/">React.js</ExternalLink>. The
        source code is available on{' '}
        <ExternalLink href={siteConfig.links.repoGithub}>GitHub</ExternalLink>.
      </p>
    </footer>
  )
}
