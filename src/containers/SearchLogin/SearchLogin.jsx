// 应用主界面的路由组件
import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import './SearchLogin.styl'
class SearchLogin extends Component {
  render() {
    return (
      <section className="wrap">
        <section className="wrapContainer">
          <div className="Loginlogo">
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <div className="loginHander">
            <Link className="login" to='/login'>
              <span className="login_icon iconfont icon-shouji"/>
              手机号码登录
            </Link>
            <Link className="register" to='/login'>
              <span className="register_icon iconfont icon-youxiang"/>
              邮箱账号登录
            </Link>
          <p className="fastRegister">手机号快捷注册 <span className="fastRegister_icon"/></p>
          </div>
          <div className="otherLogin">
            <p className="wx"><span className="wx_icon iconfont icon-weixin"/>微信</p>
            <p className="qq"><span className="qq_icon iconfont icon-QQ" />QQ</p>
            <p className="wb"><span className="wb_icon iconfont icon-weibo"/>微博</p>
          </div>
        </section>
      </section>
    )
  }
}
export default withRouter(SearchLogin)