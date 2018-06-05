import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './FooterGuide.styl'
class FooterGuide extends Component {
  render() {
    return (
      <footer className="footer_nav" >
        <a href="javascript:;" className= {`guide_item ${this.props.location.pathname==='/shop' ? 'on' : ''}`} onClick={() => this.props.history.replace('/shop')}>
        <span className="item_icon" >
          <i className="iconfont icon-shouye2"/>
        </span>
         <p className="title">首页</p>
      </a>
      <a href="javascript:;" className={`guide_item ${this.props.location.pathname==='/things' ? 'on' : ''}`} onClick={() => this.props.history.replace('/things')}>
        <span className="item_icon" >
          <i className="iconfont icon-fangkuai"/>
        </span>
        <p className="title">识物</p>
      </a>
        <a href="javascript:;" className={`guide_item ${this.props.location.pathname==='/classify' ? 'on' : ''}`} onClick={() => this.props.history.replace('/classify')}>
        <span className="item_icon" >
          <i className="iconfont icon-fenlei"/>
        </span>
          <p className="title">分类</p>
        </a>
        <a href="javascript:;" className={`guide_item ${this.props.location.pathname==='/shopcar' ? 'on' : ''}`} onClick={() => this.props.history.replace('/shopcar')}>
        <span className="item_icon" >
          <i className="iconfont icon-gouwuchekong"/>
      </span>
          <p className="title">购物车</p>
        </a>
        <a href="javascript:;" className={`guide_item ${this.props.location.pathname==='/personal' ? 'on' : ''}`} onClick={() => this.props.history.replace('/personal')}>
        <span className="item_icon" >
          <i className="iconfont icon-icon-"/>
      </span>
          <p className="title">个人</p>
        </a>
      </footer>
    )
  }
}
export default withRouter(FooterGuide)