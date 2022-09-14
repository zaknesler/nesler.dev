import React, { PropsWithChildren } from 'react'
import { Base } from './base'

type Content = PropsWithChildren & {
  title?: string
}

export const Content: React.FC<Content> = ({ children, title }) => (
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
