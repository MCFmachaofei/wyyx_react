import React, {Component} from 'react'
import {withRouter, Redirect, Link} from 'react-router-dom'
import HeadIndex from '../../components/HeadIndex/HeadIndex'
import './personal.styl'
class Personal extends Component {
  state = {
    name: ''
  }
  componentDidMount () {
    this.init()
  }
  init () {
    this.setState({
      name: sessionStorage.getItem('phone')
    })
  }
  goOut () {
    sessionStorage.removeItem('phone')
    this.props.history.replace('/searchlogin')
  }
  render() {
    if (!this.state.name) {
      return <Redirect to='/searchlogin'/>
    }
    return (
      <section className="personal" ref="wrap">
        <HeadIndex/>
        <section className="personal_wrap">
          <div className="titile">
            <p>欢迎{this.state.name}用户</p>
          </div>
          <Link className="out" to='/shop'> 退出登录</Link>
        </section>
      </section>
    )
  }
}
export default withRouter(Personal)