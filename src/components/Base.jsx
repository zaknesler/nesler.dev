import { React, useState } from 'react'
import Head from 'next/head'

import Sidebar from './Sidebar'

export default function Base({ children, title, full = false }) {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(state => !state)
  }

  const getTitle = () => {
    return title ? `${title} – Zak Nesler` : 'Zak Nesler'
  }

  const getHead = () => {
    return (
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="application-name" content={getTitle()} />
        <meta name="apple-mobile-web-app-title" content={getTitle()} />
        <meta property="og:title" content={getTitle()} />
        <title>{getTitle()}</title>
      </Head>
    )
  }

  const accentBar = () => {
    return (
      <div className="block h-3 w-full bg-gradient-to-r from-brand-500 to-brand-400 shadow-md"></div>
    )
  }

  return (
    <div>
      {getHead()}

      <div>
        {accentBar()}

        {full ? (
          children
        ) : (
          <div className="mx-auto flex w-full max-w-xl flex-col p-6 md:mt-12 md:max-w-full md:flex-row md:justify-center">
            <Sidebar navOpen={navOpen} toggleNav={toggleNav} />

            <div
              className={
                'mx-auto w-full md:mx-0 md:mt-6 md:max-w-xl ' +
                (navOpen ? 'hidden md:block' : '')
              }
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
