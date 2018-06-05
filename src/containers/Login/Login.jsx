import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'
import HeadIndex from '../../components/HeadIndex/HeadIndex'
import './Login.styl'
let alert = Modal.alert
class Login extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    if (this.phone.value && this.code.value) {
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone.value)) {
        alert("警告', '手机号格式不正确")
      } else if (!/^\d{6}$/.test(this.code.value)) {
        alert('警告', '验证码格式正确')
      } else {
        sessionStorage.setItem('phone', this.phone.value)
        this.props.history.replace('/shop')
      }
    } else {
      alert('警告', '用户名或验证码不能为空')
    }
    event.preventDefault()
  }
  render() {
    return (
      <section className="LoginWrap">
        <HeadIndex/>
        <section className="container">
          <div className="logo">
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <form action="#" onSubmit={this.handleSubmit}>
            <input type="text"  className="phone"  placeholder="请输入手机号" ref={(input) => this.phone = input}/>
            <div className="number">
              <input type="text" className="code"  placeholder="请输入短信验证码" ref={(input) => this.code = input}/>
                <span className="inputNumber">{"获取验证码"}</span>
            </div>
            <div className="other">
              <a href="javascript:;" className="question">遇到问题？</a>
              <a href="javascript:;" className="password">使用密码验证登录</a>
            </div>
            <div className="bottom">
              <input type="submit" value="登录"/>
              <input type="button" value="其他登录方式"/>
              <p>注册账号></p>
            </div>
          </form>
        </section>
      </section>
    )
  }
}
export default withRouter(Login)