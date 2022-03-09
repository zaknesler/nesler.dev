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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="application-name" content={getTitle()} />
        <meta name="apple-mobile-web-app-title" content={getTitle()} />
        <meta property="og:title" content={getTitle()} />
        <title>{getTitle()}</title>
      </Head>
    )
  }

  const accentBar = () => {
    return <div className="bg-gradient-to-r from-brand-500 to-brand-400 block w-full h-3 shadow-md"></div>
  }

  return (
    <div>
      {getHead()}

      <div>
        {accentBar()}

        {full ? (
          children
        ) : (
          <div className="md:mt-12 md:max-w-full md:flex-row md:justify-center flex flex-col w-full max-w-xl p-6 mx-auto">
            <Sidebar navOpen={navOpen} toggleNav={toggleNav} />

            <div className={'mx-auto md:mx-0 w-full md:max-w-xl md:mt-6 ' + (navOpen ? 'hidden md:block' : '')}>
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
