import React from 'react'
import sf from 'seconds-formater'

import Tool from '../../components/Tool'

function Statistic({ name, value }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
      <div className="text-xs uppercase text-gray-500 tracking-wide font-semibold">{name}</div>
      <div className="text-xl font-bold text-black">{value}</div>
    </div>
  )
}

const defaultState = {
  value: '',
  stats: {
    words: 0,
    characters: 0,
    paragraphs: 0,
    sentences: 0,
  },
  time: {
    reading: 0,
    speaking: 0,
    writing: 0,
  },
}

export default class TextStatistics extends React.Component {
  constructor(props) {
    super(props)

    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
  }

  formatTime(time) {
    sf.change('MM:SS')

    if (Math.floor(time / 60 / 60) > 0) {
      sf.change('HH:MM:SS')
    }

    return sf.convert(Math.round(time)).format()
  }

  handleChange(event) {
    const val = event.target.value

    if (val.length == 0) {
      this.setState(defaultState)
    }

    const words = val.match(/\w+/g)?.length || 0

    this.setState({
      value: val,
      stats: {
        words: words,
        characters: val.match(/./g)?.length || 0,
        paragraphs: (val + '\n').match(/.+\n/g)?.length || 0,
        sentences: val.match(/\s+[^.!?]*[.!?]+/g)?.length || 0,
      },
      time: {
        reading: (words / 275) * 60,
        speaking: (words / 180) * 60,
        writing: (val.match(/[^\s]/g)?.length / 68) * 60,
      },
    })
  }

  render() {
    return (
      <Tool name="Text Statistics">
        <div className="mb-6 grid grid-cols-3 md:grid-cols-4 gap-4">
          <Statistic name="Words" value={this.state.stats.words} />
          <Statistic name="Characters" value={this.state.stats.characters} />
          <Statistic name="Paragraphs" value={this.state.stats.paragraphs} />
          <Statistic name="Sentences" value={this.state.stats.sentences} />
          <Statistic name="Read Time" value={this.formatTime(this.state.time.reading)} />
          <Statistic name="Speak Time" value={this.formatTime(this.state.time.speaking)} />
          <Statistic name="Write Time" value={this.formatTime(this.state.time.writing)} />
        </div>

        <textarea
          className="p-4 block appearance-none w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 shadow-sm"
          rows="10"
          value={this.state.value}
          onChange={this.handleChange}
          onPaste={this.handleChange}
          onCut={this.handleChange}
          placeholder="Enter some text..."
        ></textarea>
      </Tool>
    )
  }
}
