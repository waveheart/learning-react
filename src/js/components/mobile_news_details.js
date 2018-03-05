/** 
    **author:gyx
    **msg:Be happy! Guy!
**/

import React from 'react'
import MobileHeader from './mobile_header.js'
import MobileFooter from './mobile_footer.js';
import {Row, Col, BackTop} from 'antd' 
import CommonComments from './common_comments.js'

class MobileNewsDetails extends React.Component{
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
      <div id="mobileDetailsContainer">
      	<MobileHeader></MobileHeader>
        <div class="ucmobileList">
          <Row>
            <Col span={24} className="container">
              <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
              <hr />
              <CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
            </Col>
          </Row>
          <MobileFooter></MobileFooter>
          <BackTop></BackTop>
        </div>
      </div>
    )
  }
}

export default MobileNewsDetails