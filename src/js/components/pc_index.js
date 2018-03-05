/** 
    **author:gyx
    **msg:Be happy! Guy!
**/

import React from 'react'
import PCHeader from './pc_header.js'
import PCFooter from './pc_footer.js'
import PCNewsContainer from './pc_newscontainer.js'

export default class PCIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render(){
    return (
      <div>
        <PCHeader></PCHeader>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter></PCFooter>
      </div>
    )
  }
}