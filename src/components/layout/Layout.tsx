import { Outlet } from 'react-router-dom'

import { Footer } from './footer'
import { Header } from './header'

export const Layout: React.FC = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-screen-lg flex-col px-4 2xl:max-w-screen-xl">
      <Header />
      <main className="flex-grow p-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
