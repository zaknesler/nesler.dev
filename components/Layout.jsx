import Head from 'next/head'

import BLM from './BLM'
import Sidebar from './Sidebar'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { navOpen: false }
  }

  toggleNav = () => {
    this.setState({ navOpen: !this.state.navOpen })
  }

  render() {
    return (
      <div className="font-sans font-normal text-base tracking-normal leading-normal bg-white text-gray-700">
        <Head>
          <title>{this.props.title ? `${this.props.title} – Zak Nesler` : 'Zak Nesler'}</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400,500,700" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div>
          <div className="block w-full h-3 bg-gradient-to-r from-brand-500 to-brand-400"></div>
          <div className="mx-auto md:mt-12 p-6 w-full max-w-xl md:max-w-full flex flex-col md:flex-row md:justify-center">
            <Sidebar navOpen={this.state.navOpen} toggleNav={this.toggleNav} />

            <div
              className={'mx-auto md:mx-0 w-full md:max-w-xl md:mt-6' + (this.state.navOpen ? 'hidden md:block' : '')}
            >
              <BLM />

              <main>
                {this.props.title ? (
                  <div className="mb-6">
                    <h3>{this.props.title}</h3>
                    <hr className="mt-2" />
                  </div>
                ) : (
                  ''
                )}

                {this.props.children}
              </main>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
