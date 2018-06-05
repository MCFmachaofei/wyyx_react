import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './ShopCar.styl'
class ShopCar extends Component {
  render() {
    return (
      <section className="ShopCar">
        <header className="ShopCar_head">
          <section className="ShopCarContainer"/>
          <p className="ShopCar_head_title">购物车</p>
        </header>
        <section className="ShopCar_content">
          <ul className="ShopCar_content_wrap">
            <li><span/>30天无忧退货</li>
            <li><span/>48小时极速退款</li>
            <li><span/>满88元免邮费</li>
          </ul>
          <div className="shopLogo">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt=""/>
            <p className="shopLogo_title">去添加点什么吧</p>
            <div  className="login">登录</div>

          </div>
        </section>
      </section>
    )
  }
}
export default withRouter(ShopCar)