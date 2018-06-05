import React, {Component} from 'react'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {withRouter} from 'react-router-dom'
import './shop.styl'
import {reqNavInfo, reqFocusList, reqTagList, reqNewItems, reqPopular, reqTopicList, reqCateList} from '../../api'
import NewsList from '../../components/NewsList/NewsList'
import TimeLimit from '../../components/TimeLimit/TimeLimit'
import MoreThings from '../../components/MoreThings/MoreThings'
class Shop extends Component {
  state = {
    count: 0,
    headCateList: [], // nav导航的个数
    focusList: [], // 首页轮播
    tagList: [], // 品牌直供
    newItemList: [], // 新品首发
    popularItemList: [], // 人气商品
    topicList: [], // 专题精选
    cateList: [], // 更多好物
  }
  componentDidMount () {
    this.getCateList()
    this.getTopicList()
    this.getPopular()
    this.getNewItem()
    this.getFocusList()
    this.getNavList()
    this.getTagList()
    this._initScroll()
  }
  componentDidUpdate () {
    if (this.swiper) {
      this.swiper.destroy()
    }
     this.swiper = new Swiper('.swiper-container', {
        autoplay: true,
        loop: true, // 可以循环轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
  }
  componentWillUnmount() {
    if (this.swiper) { // 销毁swiper
      this.swiper.destroy()
    }
  }
  async getCateList () {
    const result = await reqCateList()
    if (result.code === 0) {
      const cateList = result.data
      this.setState({
        cateList
      })
    }
  }
  async getTopicList () {
    const result = await reqTopicList()
    if (result.code === 0) {
      const topicList = result.data
      this.setState({
        topicList
      })
    }
  }
  async getPopular () {
    const result = await reqPopular()
    if (result.code === 0) {
      const popularItemList = result.data
      this.setState({
        popularItemList
      })
    }
  }
  async getNewItem () {
    const result = await reqNewItems()
    if (result.code === 0) {
      const newItemList = result.data
      this.setState({
        newItemList
      })
    }
  }
  async getTagList () {
    const result = await reqTagList()
    if (result.code === 0) {
      const tagList = result.data
      this.setState({
        tagList
      })
    }
  }
  async getNavList () {
    const result = await reqNavInfo()
    if (result.code === 0) {
      const headCateList = result.data
      this.setState({
        headCateList
      })
    }
  }
  async getFocusList () {
    const result = await reqFocusList()
    if (result.code === 0) {
      const focusList = result.data
      this.setState({
        focusList
      })
    }
  }
  _initScroll () {
    /* eslint-disable no-new */
    new BScroll('.navList', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
    /* eslint-disable no-new */
    new BScroll('.news1', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
    /* eslint-disable no-new */
    new BScroll('.news2', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
    /* eslint-disable no-new */
    new BScroll('.subject_content', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
    const height = document.documentElement.clientHeight
    this.refs.wrap.style.height = height + 'px'
  }
  render() {
    const {headCateList, focusList, tagList, newItemList, popularItemList, topicList, cateList} = this.state
    return (
      <section className="wrap" ref="wrap">
        <section className="headTop">
          <header className="head">
            <span className="logo" onClick={() => this.props.history.replace('/shop')}/>
            <div className="search" onClick={() => this.props.history.replace('/search')}>
              <span className="icon"/>
              <p className="search_text">搜索商品，共9788款好物</p>
            </div>
          </header>
          <nav className="navList">
            <ul>
              <li className="item on" id="first">推荐</li>
              {
                headCateList.map((item, index) => (
                  <li className="item" key={index}>
                    <span className={`item_icon icon1 ${this.props.location.pathname==='/shop' ? 'on' : ''}`}/>
                    <p>{item.name}</p>
                  </li>
                ))
              }
            </ul>
          </nav>
        </section>
        <section className="wrapContainer">
          <section className="msite_nav">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  focusList.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      <img src={item.picUrl}  width="100%" height="100%"/>
                    </div>
                  ))
                }
            </div>
            <div className="swiper-pagination"/>
          </div>
            <ul className="describe">
              <li className="describe_item">
                <p className="describe_item_title"><span className="describe_icon"/>网易自营品牌</p>
              </li>
              <li className="describe_item">
                <p className="describe_item_title"><span className="describe_icon"/>30天无忧退货</p>
              </li>
              <li className="describe_item">
                <p className="describe_item_title"><span className="describe_icon"/>48小时快速退款</p>
              </li>
            </ul>
          </section>
          <section className="brand">
            <header className="brand_head">
              <p className="title">品牌制造商直供<span className="brand_icon"/></p>
            </header>
            <ul className="brand_item">
              {
                tagList.map((item, index) => (
                  <li key={index} >
                    <div className="about">
                      <h4 className="titile">{item.name}</h4>
                      <span className="price">{item.floorPrice}元起</span>
                      <br/>
                      <span className={item.newOnShelf ? 'news' : ''}/>
                    </div>
                    <img src={item.picUrl} alt=""/>
                </li>
                ))
              }
            </ul>
          </section>
          <section className="newThings">
            <div className="newsFirst">
              <div className="titleText">
                <p>新品首发</p>
                <p>查看全部 <span/></p>
              </div>
            </div>
            <section className="news1">
              <NewsList newItemList={newItemList}/>
            </section>
          </section>
          <section className="newThings">
            <div className="goodsFisrt">
              <div className="titleText">
                <p>人气推荐·好物精选</p>
                <p>查看全部 <span/></p>
              </div>
            </div>
            <section className="news2" >
              <NewsList newItemList={popularItemList}/>
          </section>
        </section>
          <section className="timeLimit_welfare">
            <TimeLimit/>
          </section>
          <section className="subject">
            <header className="subject_head">
              <p className="head_title">专题精选 <span className="subject_icon"/></p>
            </header>
            <section className="subject_content">
              <ul className="subject_container">
                {
                  topicList.map((item, index) => (
                    <li className="subject_items" key={index}>
                      <img className="subject_items_image" src={item.itemPicUrl}/>
                      <p className="title ellipsis">{item.title}</p>
                      <p className="pirce ellipsis">￥{item.priceInfo}元起</p>
                      <p className="about ellipsis">{item.subtitle}</p>
                    </li>
                  ))
                }
              </ul>
            </section>
          </section>
          {
            cateList.map((item, index) => (
              <MoreThings cateList={item} key={index}/>
            ))
          }
        </section>
      </section>
    )
  }
}
export default withRouter(Shop)