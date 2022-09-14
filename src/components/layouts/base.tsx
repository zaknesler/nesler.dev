import React, { PropsWithChildren, useState } from 'react'
import Head from 'next/head'
import { Sidebar } from '../sidebar'
import { cx } from '../../utils'

export const Base: React.FC<
  PropsWithChildren & {
    title?: string
    full?: boolean
  }
> = ({ children, title, full = false }) => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => setNavOpen(state => !state)

  const formatTitle = () => (title ? `${title} – Zak Nesler` : 'Zak Nesler')

  const BaseHead = () => (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="application-name" content={formatTitle()} />
      <meta name="apple-mobile-web-app-title" content={formatTitle()} />
      <meta property="og:title" content={formatTitle()} />
      <title>{formatTitle()}</title>
    </Head>
  )

  const AccentBar = () => (
    <div className="block h-3 w-full bg-gradient-to-r from-brand-500 to-brand-400 shadow-md" />
  )

  return (
    <>
      <BaseHead />
      <div>
        <AccentBar />
        {full ? (
          children
        ) : (
          <div className="mx-auto flex w-full max-w-xl flex-col p-6 md:mt-12 md:max-w-full md:flex-row md:justify-center">
            <Sidebar navOpen={navOpen} toggleNav={toggleNav} />
            <div
              className={cx([
                'mx-auto w-full md:mx-0 md:mt-6 md:max-w-xl',
                navOpen && 'hidden md:block',
              ])}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
