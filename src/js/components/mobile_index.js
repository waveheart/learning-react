/** 
    **author:gyx
    **msg:Be happy! Guy!
**/

import React from 'react'
import MobileHeader from './mobile_header.js'
import MobileFooter from './mobile_footer.js'
import {Tabs, Carousel} from 'antd'
import MobileList from './mobile_list.js'
import MobileListPullRefresh from './mobile_list_pull-refresh.js'

const TabPane = Tabs.TabPane

export default class MobileIndex extends React.Component{
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
        <MobileHeader></MobileHeader>
        <Tabs>
          <TabPane tab="头条" key="1">
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
            <MobileList count={20} type="top"></MobileList>
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui"></MobileList>
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileListPullRefresh count={20} type="guonei"></MobileListPullRefresh>
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji"></MobileList>
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={20} type="yule"></MobileList>
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}