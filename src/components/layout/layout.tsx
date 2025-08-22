import { Outlet } from 'react-router'

import { Footer } from './footer'
import { Header } from './header'

export const Layout = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-(--breakpoint-lg) flex-col px-4 2xl:max-w-(--breakpoint-xl)">
      <Header />
      <main className="grow p-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
