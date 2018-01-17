import React from 'react'
import ReactDom from 'react-dom'


class ComponentHeader extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			miniHeader: false
		}
	}

	switchHeader() {
		this.setState({
			miniHeader: !this.state.miniHeader
		})
	}

	render() {

		const styleComponentHeader = {
			header: {
				backgroundColor: "#333",
				color: "#fff",
				// 如果一定要用CSS格式，要加引号,但是依然会有warning
				"padding-top": (this.state.miniHeader) ? "3px" : "15px",
				paddingBottom: this.state.miniHeader ? "3px" : "15px"
			}
		}

		return (
    		<header style={styleComponentHeader.header} className="smallFontSize"
    		onClick={this.switchHeader.bind(this)}>
				<h1>这里是头部</h1>
    		</header>
		)
	}
}


export default ComponentHeader