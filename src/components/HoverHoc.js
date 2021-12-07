import React, { Component } from 'react'
import mainHoc from './mainHoc'

class HoverHoc extends  Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default mainHoc(HoverHoc)