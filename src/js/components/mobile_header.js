/** 
    **author:gyx
    **msg:Be happy! Guy!
**/
import React from 'react'
import {Row, Col, Menu, Modal, Icon, Tabs, message, Form, Input, Button, CheckBox } from 'antd' 
import {Router, Route, Link, browserHistory} from 'react-router'

const FormItem = Form.Item
const SubMenu = Menu.SubMenu
const TabPane = Tabs.TabPane
const MenuItemGroup = Menu.ItemGroup

class MobileHeader extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userId: 0
    }
  }

  setModalVisible(value) {
    this.setState({
      modalVisible: value
    })
  }
  
  handleClick(e) {
    if (e.key == "register" ) {
      this.setState({
        current: 'register'
      })
      this.setModalVisible(true)
    } else {
      this.setState({current: e.key})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    var myFetchOptions = {
      method: 'GET'
    }
    var formData = this.props.form.getFieldsValue()
    console.log(formData)
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
      + "&username="+formData.userName+"&password="+formData.password
      +"&r_userName=" + formData.r_userName + "&r_password="
      + formData.r_password + "&r_confirmPassword="
      + formData.r_confirmPassword, myFetchOptions)
    .then(response => response.json()).then(json=>{
      this.setState({
        userNickName: json.NickUserName,
        userId: json.UserId
      })
    })

    if (this.state.action == "login") {
      this.setState({
        hasLogined: true
      })
    }
    message.success('请求成功')
    this.setModalVisible(false)
  }

  login() {
    this.setModalVisible(true)
  }

  callback(key) {
    if (key == 1) {
      this.setState({
        action: 'login'
      })
    } else if (key == 2) {
    this.setState({
        action: 'register'
      })
    }
  }

  render(){
    let {getFieldProps} = this.props.form
    const userShow = this.state.hasLogined ?
    <Link to={`/usercenter`}>
      <Icon type="inbox"></Icon>
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)}></Icon>
    
    return (
      <div id="mobileheader">
        <header>
			    <img src="./src/images/news.png" alt="logo"/>
        	<span>ReactNews</span>
          {userShow}
        </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} 
        onCancel={()=>this.setModalVisible(false)} 
        onOk={()=>this.setModalVisible(false)} okText="关闭">
          <Tabs type="card" onChange={this.callback.bind(this)}>
            

            <TabPane tab="登录" key="1">
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  <Input placeholder="请输入你的账号" {...getFieldProps('userName')}></Input>
                </FormItem>
                <FormItem label="密码">
                  <Input type="password" placeholder="请输入你的密码" {...getFieldProps('password')}></Input>
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
              </Form>
            </TabPane>

            <TabPane tab="注册" key="2">
              <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  <Input placeholder="请输入你的账号" {...getFieldProps('r_userName')}></Input>
                </FormItem>
                <FormItem label="密码">
                  <Input type="password" placeholder="请输入你的密码" {...getFieldProps('r_password')}></Input>
                </FormItem>
                <FormItem label="确认密码">
                  <Input type="password" placeholder="请再次输入你的密码" {...getFieldProps('r_confirmPassword')}></Input>
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>

          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default MobileHeader = Form.create({})(MobileHeader)