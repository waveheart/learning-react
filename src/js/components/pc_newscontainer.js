/** 
    **author:gyx
    **msg:Be happy! Guy!
**/

import React from 'react'
import {Row, Col, Carousel } from 'antd' 
import {Tabs} from 'antd'
import PCNewsBlock from './pc_news_block.js'
import PCNewsImageBlock from './pc_news_image_block.js'

const TabPane = Tabs.TabPane

class PCNewsContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){

  	const settings = {
  		dots: true,
  		infinite: true,
  		speed: 500,
  		slidesToShow: 1,
  		autoplay: true
  	}

    return (
      <div>
        <Row>
        	<Col span={2}></Col>
        	<Col span={20} className="container">
				<div className="leftContainer">
					<div className="carousel">
						<Carousel {...settings}>
							<div>
								<img src="./src/images/carousel_1.jpg" alt="carousel"/>
							</div>
							<div>
								<img src="./src/images/carousel_1.jpg" alt="carousel"/>
							</div>
							<div>
								<img src="./src/images/carousel_1.jpg" alt="carousel"/>
							</div>
							<div>
								<img src="./src/images/carousel_1.jpg" alt="carousel"/>
							</div>
						</Carousel>
					</div>
					<PCNewsImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px"></PCNewsImageBlock>
				</div>
				<Tabs className="tabs_news">
					<TabPane tab="新闻" key="1">
						<PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
					</TabPane>
					<TabPane tab="国际" key="2">
						<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"></PCNewsBlock>
					</TabPane>
				</Tabs>
				<Tabs className="tabs_product">
					
				</Tabs>
				<div>
					<PCNewsImageBlock count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="124px"></PCNewsImageBlock>
					<PCNewsImageBlock count={16} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="124px"></PCNewsImageBlock>
				</div>
        	</Col>
        	<Col span={2}></Col>
        </Row>
      </div>
    )
  }
}

export default PCNewsContainer