import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import './assets/css/reset.css'
import './mock/mockServer'
import store from './redux/store'
import Main from './containers/main/main'
import SearchLogin from './containers/SearchLogin/SearchLogin'
ReactDOM.render(
    (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route component={Main}/> {/*默认路由*/}
          </Switch>
        </HashRouter>
      </Provider>
    ), document.getElementById('root'))
// 15110026164
//