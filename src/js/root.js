import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {Button} from 'antd'
import PCIndex from './components/pc_index.js'
import MobileIndex from './components/mobile_index.js'
import MediaQuery from 'react-responsive'
import PCNewsDtails from './components/pc_news_details.js'
import MobileNewsDetails from './components/mobile_news_details.js'
import PCUserCenter from './components/pc_usercenter.js'
import MobileUsercenter from './components/mobile_usercenter.js'
import 'antd/dist/antd.css'

export default class Root extends React.Component{
  render(){
    return (
      <div>
      	<MediaQuery query='(min-device-width: 1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDtails}></Route>
            <Route path="/usercenter" component={PCUserCenter}></Route>
          </Router>
      	</MediaQuery>
      	<MediaQuery query='(max-device-width: 1224px)'>
            <Router history={hashHistory}>
              <Route path="/" component={MobileIndex}></Route>
              <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
              <Route path="/usercenter" component={MobileUsercenter}></Route>
            </Router>   
      	</MediaQuery>
	  </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
