import React from 'react'

import Tool from '../../components/Tool'

export default class AlbumArtSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = { query: '', results: [] }
    this.search = this.search.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  search(event) {
    event.preventDefault()
    const query = this.state.query.replace(' ', '+')

    this.setState({ results: [] })

    // fetch(`https://itunes.apple.com/search?media=music&entity=album&limit=200&country=US&term=${query}`)
    fetch(
      `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?media=music&entity=album&limit=200&country=US&term=${query}`
    )
      .then(response => response.json())
      .then(data => {
        data.results.forEach(result => {
          this.setState({
            results: [
              ...this.state.results,
              {
                artist: result.artistName,
                album: result.collectionName,
                imageUrlSmall: result.artworkUrl100.replace('100x100', '350x350'),
                imageUrlMedium: result.artworkUrl100.replace('100x100', '750x750'),
                imageUrlLarge: result.artworkUrl100.replace('100x100', '10000x10000'),
              },
            ],
          })
        })

        console.log(this.state.results)
      })
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
  }

  render() {
    return (
      <Tool name="Album Art Search">
        <form className="flex" onSubmit={this.search}>
          <input
            className="px-4 py-3 block appearance-none w-full text-gray-400 bg-transparent border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 shadow-sm"
            placeholder='Search for album... (eg. "david bowie heroes")'
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />

          <input
            type="submit"
            value="Search"
            className="ml-4 px-6 py-3 appearance-none font-medium bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg shadow focus:outline-none focus:ring-4 cursor-pointer"
          />
        </form>

        {this.state.results?.length ? (
          <div className="mt-6 mb-3 text-xs">{this.state.results.length} results</div>
        ) : (
          <div className="mt-6">No results found.</div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {this.state.results.map((result, index) => (
            <div className="relative group" key={index}>
              <div className="p-3 hidden group-hover:flex justify-end absolute top-0 w-full font-semibold text-sm">
                <a
                  href={result.imageUrlLarge}
                  target="_blank"
                  className="px-3 py-2 inline-flex items-center bg-black dark:bg-white text-white dark:text-black rounded-lg shadow-md"
                >
                  <div className="mr-2">View Large</div>

                  <svg
                    className="w-4 h-4 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              <div className="p-3 hidden group-hover:block absolute bottom-0 left-0 right-0 w-full text-sm rounded-b-lg bg-black dark:bg-white text-white dark:text-black">
                <div className="font-semibold text-gray-400 dark:text-black uppercase tracking-wide">
                  {result.artist}
                </div>
                <div className="mt-1 text-white dark:text-black">{result.album}</div>
              </div>

              <img className="block w-full h-auto shadow rounded-lg" src={result.imageUrlSmall} alt={result.album} />
            </div>
          ))}
        </div>
      </Tool>
    )
  }
}
