/** 
    **author:gyx
    **msg:Be happy! Guy!
**/

import React from 'react'
import PCHeader from './pc_header.js'
import PCFooter from './pc_footer.js';
import PCNewsImageBlock from './pc_news_image_block.js'
import {Row, Col, BackTop} from 'antd' 
import CommonComments from './common_comments.js'

class PCNewsDetails extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    	newsItem: ''
    }
  }

  componentDidMount() {
  	var myFetchOptions = {
		method: 'GET'
	};
	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
	.then(response => response.json())
	.then(json => {
		this.setState({newsItem: json});
		document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
	})
  }

  createMarkup() {
  	return {__html: this.state.newsItem.pagecontent}
  }

  render(){
    return (
      <div>
      	<PCHeader></PCHeader>
        <Row>
        	<Col span={2}></Col>
        	<Col span={14} className="container">
				    <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            <hr />
            <CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
        	</Col>
        	<Col span={6}>
				    <PCNewsImageBlock count={20} type="top" width="100%" cardTitle="相关新闻" imageWidth="140px"></PCNewsImageBlock>
        	</Col>
        	<Col span={2}></Col>
        </Row>
        <PCFooter></PCFooter>
        <BackTop></BackTop>
      </div>
    )
  }
}

export default PCNewsDetails