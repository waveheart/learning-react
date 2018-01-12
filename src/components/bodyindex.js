import React from 'react'

class BodyIndex extends React.Component {
	constructor(props) {
		super(props)
	}
	
	componentWillMount() {
		console.log('body页面将要加载')
	}

	componentDidMount() {
		console.log('body页面加载完成')
	}

	render() {
		let userName = ''
		let boolInput = false
		let html = 'IMOOC&nbsp; LESSON'

		return (
    		<div>
				<h1>页面主题部分</h1>
				<p>{userName === '' ? '空用户名' : userName}</p>
				<p>
					<input type="text" value="默认按钮" type="button" disabled={false}/>
				</p>
			{/*这是一段注*/}
			<p>{html}</p> {/*需要进行Unicode转码*/}
			<p dangerouslySetInnerHTML={{__html: html}}></p>
    		</div>
		)
	}
}

export default BodyIndex