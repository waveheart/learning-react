import React from 'react'

class BodyChild extends React.Component {
	constructor(props) {
		super(props)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e) {
		this.props.inputChange(e)
	}

	render() {
		return (
			<div>
				<p>子页面输入： <input type="text" onChange={this.handleInputChange} /></p>
				<p>{this.props.userid}-{this.props.username}-{this.props.id}</p>
			</div>
		)
	}
}

export default BodyChild