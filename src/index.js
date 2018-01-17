var React = require('react')
var ReactDom = require('react-dom')
import ComponentHeader from './components/header.js'
import ComponentFooter from './components/footer.js'
import BodyIndex from './components/bodyindex.js'

import "./css/style.css"

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {type: 'React'}
	}
	
	componentWillMount() {
		console.log('index页面将要加载')
	}

	componentDidMount() {
		console.log('index页面加载完成')
	}

	render() {
		return (
			<div>
				<ComponentHeader></ComponentHeader>
				<BodyIndex userid={123456} username="nick"></BodyIndex>
				<ComponentFooter></ComponentFooter>
			</div>
		)
	}
}

ReactDom.render(
	<Index/>,
	document.getElementById('example')
)