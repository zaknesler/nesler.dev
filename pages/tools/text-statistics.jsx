import React from 'react'

import Tool from '../../components/Tool'

function Statistic({ name, value }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="text-xs uppercase text-gray-500 tracking-wide font-semibold">{name}</div>
      <div className="text-xl font-bold text-black">{value}</div>
    </div>
  )
}

export default class TextStatistics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      stats: {
        words: 0,
        characters: 0,
        paragraphs: 0,
        sentences: 0,
      },
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const val = event.target.value

    if (val.length) {
      this.setState({
        value: val,
        stats: {
          words: val.match(/\w+/g)?.length || 0,
          characters: val.match(/./g)?.length || 0,
          paragraphs: val.match(/.+\n/g)?.length + 1 || 1,
          sentences: val.match(/\s+[^.!?]*[.!?]/g)?.length || 0,
        },
      })
    } else {
      this.setState({
        value: val,
        stats: {
          words: 0,
          characters: 0,
          paragraphs: 0,
          sentences: 0,
        },
      })
    }
  }

  render() {
    return (
      <Tool name="Text Statistics">
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Statistic name="Words" value={this.state.stats.words} />
          <Statistic name="Characters" value={this.state.stats.characters} />
          <Statistic name="Paragraphs" value={this.state.stats.paragraphs} />
          <Statistic name="Sentences" value={this.state.stats.sentences} />
        </div>

        <textarea
          className="p-4 block appearance-none w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 shadow-sm"
          rows="10"
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>
      </Tool>
    )
  }
}
