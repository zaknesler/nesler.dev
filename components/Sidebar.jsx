import Link from 'next/link'

import NavItem from './NavItem'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  navMenuButton() {
    if (this.props.navOpen) {
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      )
    } else {
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      )
    }
  }

  render() {
    return (
      <div className="md:mr-12 text-left md:text-right">
        <div className="md:w-sidebar md:pt-6 md:sticky md:top-0 flex flex-wrap md:block">
          <div className="w-full">
            <div className="w-full flex md:block justify-between items-center">
              <div>
                <Link href="/">
                  <a className="text-2xl font-bold text-gray-900">Zak Nesler</a>
                </Link>
                <h4 className="text-xs font-medium tracking-wide uppercase text-gray-600">Full-Stack Developer</h4>
              </div>

              <div className="block md:hidden">
                <div
                  tabIndex="0"
                  onClick={this.props.toggleNav}
                  title={this.props.navOpen ? 'Close Menu' : 'Open Menu'}
                  className="block -mr-2 p-2 text-gray-600 hover:text-gray-900 rounded-lg overflow-hidden focus:shadow-outline focus:outline-none cursor-pointer"
                >
                  {this.navMenuButton()}
                </div>
              </div>
            </div>

            <div className="mt-3 mb-6 md:mt-6 ml-0 md:ml-auto w-32 md:w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-400"></div>
          </div>

          <div className={'mb-6 flex-grow md:block w-full ' + (this.props.navOpen ? '' : 'hidden')}>
            <ul className="-mx-3 md:mx-0 space-y-1 md:space-y-2 font-medium text-lg md:text-base">
              <NavItem href="/">About</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/now">Now</NavItem>
              <NavItem href="/uses">Uses</NavItem>
            </ul>

            <div className="my-6 mx-0 md:mx-auto md:mr-0 md:ml-auto w-12 h-1 bg-gray-200"></div>

            <ul className="-mx-3 md:mx-0 space-y-1 md:space-y-2 text-base md:text-sm font-medium text-gray-600">
              <NavItem href="/resume.pdf">Résumé</NavItem>
              <NavItem href="https://github.com/zaknesler">Github</NavItem>
              <NavItem href="https://twitter.com/zaknesler">Twitter</NavItem>
              <NavItem href="https://linkedin.com/in/zaknesler">LinkedIn</NavItem>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
