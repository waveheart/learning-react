import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import ReactMixin from 'react-mixin'
import MixinLog from './mixin.js'

import BodyChild from './bodychild.js'


const defaultProps = {
	username: '这是一个默认用户名'
}


class BodyIndex extends React.Component {
	constructor(props) {
		super(props)
		this.state = {userName: "parry", age: 20}
		this.changeUserInfo = this.changeUserInfo.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}

	changeUserInfo() {
		this.setState({
			age: 50
		})

		// 第一种方式
		// var mySubmitBtn = document.getElementById('submitButton')
		// ReactDOM.findDOMNode(mySubmitBtn).style.color = "red"
		
		// 第二种方式
		console.log(this.refs.submitButton)
		this.refs.submitButton.style.color = "blue"
		MixinLog.log()
	}

	inputChange(e) {
		this.setState({
			age: e.target.value
		})
	}

	render() {

		// setTimeout(() => {
		// 	this.setState({
		// 		userName: 'imooc'
		// 	})
		// }, 1000)

		return (
    		<div>
				<h1>页面主题部分</h1>
				<p>接收到的父页面的属性: userid: {this.props.userid}, username: {this.props.username} </p>
				<p>{this.state.age}</p>
				<BodyChild {...this.props} id={4} inputChange={this.inputChange}></BodyChild>
				<input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo}/>
			</div>
		)
	}
}

BodyIndex.propTypes = {
	userid: PropTypes.number.isRequired,
	username: PropTypes.string
}

BodyIndex.defaultProps = defaultProps

ReactMixin(BodyIndex.propTypes, MixinLog)

export default BodyIndex