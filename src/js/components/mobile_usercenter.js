/** 
    **author:gyx
    **msg:Be happy! Guy!
**/

import React from 'react'
import ReactDOM from 'react-dom';
import MobileHeader from './mobile_header.js'
import MobileFooter from './mobile_footer.js';
import {Row, Col, Form, Input, Tabs, Button, Card, notification} from 'antd' 
import {Router,Route,hashHistory} from 'react-router';

const TabPane = Tabs.TabPane 

class MobileUserCenter extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			usercollection: '',
			usercomments: '',
			previewImage: '',
			previewVisible: false
		}
	}

	componentDidMount() {
		var myFetchOptions = {
			method: "GET"
		}
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userId, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercollection:json})
		})

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userId, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercomments:json})
		})
	}

	render(){

		const {usercollection, usercomments} = this.state
		const usercollectionList = usercollection.length
		?
		usercollection.map((item, index) => (
			<Card key={index} title={item.uniquekey} extra={<a href={`/#/details/${item.uniquekey}`} >查看</a>}>
				<p>{item.Title}</p>
			</Card>
		))
		:
		'你还没有收藏任何新闻，快去收藏一些新闻吧。'

		const usercommentsList = usercomments.length
		?
		usercomments.map((comment, index) => (
			<Card key={index} title={`${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a href={`/#/details/${comment.uniquekey}`} >查看</a>}>
				<p>{comment.Comments}</p>
			</Card>
		))
		:
		'你还没有发表过任何评论'

	    return (
	    	<div>
	    		<MobileHeader></MobileHeader>
	    		<Row>
	    			<Col span={24}>
						<Tabs>
				            <TabPane tab="我的收藏列表" key="1">
								<Row>
									<Col span={24}>
										{usercollectionList}
									</Col>
								</Row>
				            </TabPane>
				            <TabPane tab="我的评论列表" key="2">
								<Row>
									<Col span={24}>
										{usercommentsList}
									</Col>
								</Row>
				            </TabPane>
				            <TabPane tab="头像设置" key="3">

				            </TabPane>
				        </Tabs>
	    			</Col>
	    		</Row>
		        <MobileFooter></MobileFooter>
	    	</div>
	    	
	    )
	}
}

export default MobileUserCenter