import React from 'react'

import Base from './Base'

export default function Layout({ children, title }) {
  return (
    <Base title={title}>
      {title ? (
        <div className="mb-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <hr className="mt-2" />
        </div>
      ) : (
        ''
      )}

      {children}
    </Base>
  )
}
