import React from 'react'
import Base from './Base'

const Layout = ({
  children,
  title,
}: {
  children: JSX.Element
  title?: string
}) => (
  <Base title={title}>
    <>
      {title && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <hr className="mt-2" />
        </div>
      )}

      {children}
    </>
  </Base>
)

export default Layout
