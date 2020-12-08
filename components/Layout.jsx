import React from 'react'

import Base from './Base'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Base>
        {this.props.title ? (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">{this.props.title}</h3>
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
