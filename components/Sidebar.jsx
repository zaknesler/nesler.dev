import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar({ navOpen, toggleNav }) {
  const router = useRouter()

  const NavMenuButton = () => {
    return (
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {navOpen ? (
          <path d="M6 18L18 6M6 6l12 12"></path>
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        )}
      </svg>
    )
  }

  const NavItem = ({ children, href }) => {
    return (
      <li>
        <Link href={href}>
          <a
            className={
              (router.pathname === href
                ? 'font-bold text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400') +
              ' block w-full rounded-lg p-3 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-800 dark:hover:text-gray-100 md:rounded-none md:p-0 md:hover:bg-transparent'
            }
          >
            {children}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <div className="text-left md:mr-12 md:text-right">
      <div className="flex flex-wrap md:sticky md:top-0 md:block md:w-sidebar md:pt-6">
        <div className="w-full">
          <div className="flex w-full items-center justify-between md:block">
            <div>
              <Link href="/">
                <a className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Zak Nesler
                </a>
              </Link>
              <h4 className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
                Full-Stack Developer
              </h4>
            </div>

            <div className="block md:hidden">
              <div
                tabIndex="0"
                onClick={toggleNav}
                title={navOpen ? 'Close Menu' : 'Open Menu'}
                className="-mr-2 block cursor-pointer overflow-hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:shadow-outline focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
              >
                <NavMenuButton />
              </div>
            </div>
          </div>

          <div className="mt-3 mb-6 ml-0 h-1 w-32 bg-gradient-to-r from-brand-500 to-brand-400 md:mt-6 md:ml-auto md:w-24"></div>
        </div>

        <div
          className={
            'mb-6 w-full flex-grow md:block ' + (navOpen ? '' : 'hidden')
          }
        >
          <ul className="-mx-3 space-y-1 text-lg font-medium md:mx-0 md:space-y-2 md:text-base">
            <NavItem href="/">About</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/now">Now</NavItem>
            <NavItem href="/uses">Uses</NavItem>
          </ul>

          <div className="mx-0 my-6 h-1 w-12 bg-gray-200 dark:bg-gray-700 md:mx-auto md:mr-0 md:ml-auto"></div>

          <ul className="-mx-3 space-y-1 text-base font-medium text-gray-600 md:mx-0 md:space-y-2 md:text-sm">
            <NavItem href="/resume">Résumé</NavItem>
            <NavItem href="https://github.com/zaknesler">Github</NavItem>
            <NavItem href="https://twitter.com/zaknesler">Twitter</NavItem>
            <NavItem href="https://linkedin.com/in/zaknesler">LinkedIn</NavItem>
          </ul>
        </div>
      </div>
    </div>
  )
}
