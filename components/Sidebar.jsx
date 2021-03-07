import React from 'react'
import Link from 'next/link'

import NavItem from './NavItem'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  navMenuButton() {
    if (this.props.navOpen) {
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
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      )
    } else {
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
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      )
    }
  }

  render() {
    return (
      <div className="text-left md:mr-12 md:text-right">
        <div className="flex flex-wrap md:w-sidebar md:pt-6 md:sticky md:top-0 md:block">
          <div className="w-full">
            <div className="flex items-center justify-between w-full md:block">
              <div>
                <Link href="/">
                  <a className="text-2xl font-bold text-gray-900 dark:text-gray-100">Zak Nesler</a>
                </Link>
                <h4 className="text-xs font-medium tracking-wide text-gray-600 uppercase dark:text-gray-400">
                  Full-Stack Developer
                </h4>
              </div>

              <div className="block md:hidden">
                <div
                  tabIndex="0"
                  onClick={this.props.toggleNav}
                  title={this.props.navOpen ? 'Close Menu' : 'Open Menu'}
                  className="block p-2 -mr-2 overflow-hidden text-gray-600 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                >
                  {this.navMenuButton()}
                </div>
              </div>
            </div>

            <div className="w-32 h-1 mt-3 mb-6 ml-0 md:mt-6 md:ml-auto md:w-24 bg-gradient-to-r from-brand-500 to-brand-400"></div>
          </div>

          <div className={'mb-6 flex-grow md:block w-full ' + (this.props.navOpen ? '' : 'hidden')}>
            <ul className="-mx-3 space-y-1 text-lg font-medium md:mx-0 md:space-y-2 md:text-base">
              <NavItem href="/">About</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/now">Now</NavItem>
              <NavItem href="/uses">Uses</NavItem>
              <NavItem href="/tools">Tools</NavItem>
            </ul>

            <div className="w-12 h-1 mx-0 my-6 bg-gray-200 md:mx-auto md:mr-0 md:ml-auto dark:bg-gray-700"></div>

            <ul className="-mx-3 space-y-1 text-base font-medium text-gray-600 md:mx-0 md:space-y-2 md:text-sm">
              <NavItem href="/resume.pdf">Résumé</NavItem>
              <NavItem href="https://github.com/zaknesler">Github</NavItem>
              <NavItem href="https://twitter.com/zaknesler">Twitter</NavItem>
              <NavItem href="https://linkedin.com/in/zaknesler">LinkedIn</NavItem>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
