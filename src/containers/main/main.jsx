import React, {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Shop from '../Shop/Shop'
import Things from '../Things/Things'
import Classify from '../Classify/Classify'
import ShopCar from '../ShopCar/ShopCar'
import Personal from '../Personal/personal'
import Search from '../Search/Search'
import Login from '../Login/Login'
import SearchLogin from '../SearchLogin/SearchLogin'
import FooterGuide from '../../components/FooterGuide/FooterGuide'
class Main extends Component {
  render () {
    let path = this.props.location.pathname
    if (path === '/') {
      return <Redirect to='/shop'/>
    }
    return (
      <div>
        <Switch>
          <Route path='/shop' component={Shop}/>
          <Route path='/things' component={Things}/>
          <Route path='/shopcar' component={ShopCar}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/search' component={Search}/>
          <Route path='/searchlogin' component={SearchLogin}/>
          <Route path='/login' component={Login}/>
        </Switch>
        {
         this.props.location.pathname !== '/personal'
          && this.props.location.pathname !== '/search'
            && this.props.location.pathname !== '/searchlogin'
              && this.props.location.pathname !== '/login'?  <FooterGuide/> : null
        }
      </div>
    )
  }
}
export default withRouter(Main)