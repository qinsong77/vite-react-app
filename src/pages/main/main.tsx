import {
  FileText,
  Home,
  List,
  Menu,
  MessageCircleCode,
  User,
} from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

interface NavItemProps {
  to: string
  icon: React.ReactNode
  children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, children }) => (
  <li>
    <Link
      to={to}
      className="flex items-center space-x-3 rounded-lg px-3 py-2 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
    >
      {icon}
      <span>{children}</span>
    </Link>
  </li>
)

export const Main: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div
      className="flex flex-col bg-background md:flex-row"
      style={{ minHeight: 'calc(100vh - 128px)' }}
    >
      {/* Mobile menu button */}
      <button
        className="fixed left-4 top-14 z-20 rounded-md bg-secondary p-2 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="size-6 text-secondary-foreground" />
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 overflow-y-auto bg-secondary text-secondary-foreground transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed left-0 top-0 z-10 h-full md:static md:h-auto md:translate-x-0`}
      >
        <nav className="p-4">
          <h3 className="mb-6 text-lg font-semibold tracking-tight">
            Navigation
          </h3>
          <ul className="space-y-2">
            <NavItem to="/main" icon={<Home className="size-4" />}>
              Main
            </NavItem>
            <NavItem to="/main/article" icon={<FileText className="size-4" />}>
              Article
            </NavItem>
            <NavItem to="/main/list/1" icon={<List className="size-4" />}>
              Article List One
            </NavItem>
            <NavItem to="/main/profile" icon={<User className="size-4" />}>
              Profile
            </NavItem>
            <NavItem
              to="/main/discussion"
              icon={<MessageCircleCode className="size-4" />}
            >
              Discussion
            </NavItem>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  )
}
