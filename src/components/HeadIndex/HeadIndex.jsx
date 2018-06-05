import React from 'react'
import {Link} from 'react-router-dom'
import './HeadIndex.styl'
class HeadIndex extends React.Component{
  render () {
    return (
      <header className="header">
        <Link className="head_left iconfont icon-shouye2" to='/shop'/>
        <div className="head_logo"/>
        <div className="head_right">
          <Link className="head_right_search" to='/search'/>
          <Link className="head_right_ShopCar" to='/shopcar'/>
        </div>
      </header>
    )
  }
}
export default HeadIndex