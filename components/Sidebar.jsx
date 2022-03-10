import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar({ navOpen, toggleNav }) {
  const NavMenuButton = () => {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {navOpen ? <path d="M6 18L18 6M6 6l12 12"></path> : <path d="M4 6h16M4 12h16M4 18h16"></path>}
      </svg>
    )
  }

  const NavItem = ({ children, href }) => {
    const router = useRouter()

    return (
      <li>
        <Link href={href}>
          <a
            className={
              (router.pathname === href
                ? 'font-bold text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400') +
              ' hover:text-black dark:hover:text-gray-100 block p-3 md:p-0 w-full hover:bg-gray-100 dark:hover:bg-gray-800 md:hover:bg-transparent rounded-lg md:rounded-none'
            }
          >
            {children}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <div className="md:mr-12 md:text-right text-left">
      <div className="md:w-sidebar md:pt-6 md:sticky md:top-0 md:block flex flex-wrap">
        <div className="w-full">
          <div className="md:block flex items-center justify-between w-full">
            <div>
              <Link href="/">
                <a className="dark:text-gray-100 text-2xl font-bold text-gray-900">Zak Nesler</a>
              </Link>
              <h4 className="dark:text-gray-400 text-xs font-medium tracking-wide text-gray-600 uppercase">
                Full-Stack Developer
              </h4>
            </div>

            <div className="md:hidden block">
              <div
                tabIndex="0"
                onClick={toggleNav}
                title={navOpen ? 'Close Menu' : 'Open Menu'}
                className="hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800 focus:shadow-outline focus:outline-none block p-2 -mr-2 overflow-hidden text-gray-600 rounded-lg cursor-pointer"
              >
                <NavMenuButton />
              </div>
            </div>
          </div>

          <div className="md:mt-6 md:ml-auto md:w-24 bg-gradient-to-r from-brand-500 to-brand-400 w-32 h-1 mt-3 mb-6 ml-0"></div>
        </div>

        <div className={'mb-6 flex-grow md:block w-full ' + (navOpen ? '' : 'hidden')}>
          <ul className="md:mx-0 md:space-y-2 md:text-base -mx-3 space-y-1 text-lg font-medium">
            <NavItem href="/">About</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/now">Now</NavItem>
            <NavItem href="/uses">Uses</NavItem>
          </ul>

          <div className="md:mx-auto md:mr-0 md:ml-auto dark:bg-gray-700 w-12 h-1 mx-0 my-6 bg-gray-200"></div>

          <ul className="md:mx-0 md:space-y-2 md:text-sm -mx-3 space-y-1 text-base font-medium text-gray-600">
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
