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
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="author" content="Zak Nesler" />
          <meta name="robots" content="index, follow" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Zak Nesler" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Zak Nesler" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta
            name="description"
            content="Student full-stack developer from Pennsylvania with a passion for tasteful and minimal design, as well as tidy and efficient back-end code."
          />
          <meta
            name="keywords"
            content="zak nesler, zak, nesler, zaknes, zaknesler, zachary nesler, web design, design, code, html, css, php, laravel, vue, programming, web development"
          />
          <meta name="p:domain_verify" content="ff1f90db2750254f6843a167a5e5efb8" />.
          <title>{this.props.title ? `${this.props.title} – Zak Nesler` : 'Zak Nesler'}</title>
          <link rel="icon" href="/favicon.png" />
          <link rel="icon" type="image/png" sizes="128x128" href="/favicon.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
        </Head>

        <div>
          <div className="block w-full h-3 bg-gradient-to-r from-brand-500 to-brand-400"></div>
          <div className="mx-auto md:mt-12 p-6 w-full max-w-xl md:max-w-full flex flex-col md:flex-row md:justify-center">
            <Sidebar navOpen={this.state.navOpen} toggleNav={this.toggleNav} />

            <div
              className={'mx-auto md:mx-0 w-full md:max-w-xl md:mt-6 ' + (this.state.navOpen ? 'hidden md:block' : '')}
            >
              <BLM />

              <main>
                {this.props.title ? (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">{this.props.title}</h3>
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
