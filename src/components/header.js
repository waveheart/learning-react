import React from 'react'
import ReactDom from 'react-dom'

class ComponentHeader extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
    		<header>
				<h1>这里是头部</h1>
    		</header>
		)
	}
}


export default ComponentHeader