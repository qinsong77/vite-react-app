'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const closeMenu = useCallback(() => setMobileNavOpen(false), [])

  // Close on click outside
  useEffect(() => {
    if (!mobileNavOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        navRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return
      }
      closeMenu()
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileNavOpen, closeMenu])

  // Close on Escape key
  useEffect(() => {
    if (!mobileNavOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [mobileNavOpen, closeMenu])

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={triggerRef}
        className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="size-6 fill-current text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={navRef}
        className={`absolute top-full left-0 z-20 grid w-full px-4 transition-all duration-300 ease-in-out sm:px-6 ${
          mobileNavOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="overflow-hidden bg-gray-800 px-4 py-2">
          <li>
            <Link
              to="/signin"
              className="flex w-full justify-center py-2 font-medium text-purple-600 hover:text-gray-200"
              onClick={closeMenu}
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="my-2 inline-flex w-full items-center justify-center rounded-sm border border-transparent bg-purple-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-purple-700"
              onClick={closeMenu}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
