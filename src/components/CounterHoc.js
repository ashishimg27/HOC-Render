import React, { Component } from 'react'
import mainHoc  from './mainHoc'

class CounterHoc extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default mainHoc(CounterHoc)