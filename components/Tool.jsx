import React from 'react'
import Link from 'next/link'

import Base from './Base'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Base title={this.props.name}>
        {this.props.name ? (
          <div className="mb-6">
            <h3 className="text-lg flex items-center">
              <Link href="/tools">Tools</Link>
              <svg
                className="mx-1 w-4 h-4 text-gray-400 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <div className="text-sm font-medium text-gray-700">{this.props.name}</div>
            </h3>
            <hr className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {this.props.children}
      </Base>
    )
  }
}
