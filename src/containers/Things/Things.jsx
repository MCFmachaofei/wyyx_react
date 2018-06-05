import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeadIndex from '../../components/HeadIndex/HeadIndex'
import Recommend from '../../components/Recommend/Recommend'
import TenOclock from '../../components/TenOclock/TenOclock'
import MoreWonderful from '../../components/MoreWonderful/MoreWonderful'
import './Things.styl'
import {reqBanner, reqColumn, reqRecommend, reqTenfifteen, reqZhenThings, reqYxLook, reqFindMore} from "../../api";
import BScroll from "better-scroll";
class Things extends Component {
  state = {
    banner: [],
    column: [],
    recommend: [],
    tenfifteen: [],
    zhenThings: [],
    yxLook: [],
    findMore: []
  }
  componentDidUpdate () {
    if (this.swiper) {
      this.swiper.destroy()
    }
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1.15,
      centeredSlides: true,
      onInit: function (swiper) {
        swiper.slides[1].className = 'swiper-slide swiper-slide-active'
      },
      autoplay: {
        autoplay: true,
        delay: 3000
      }
    })
  }
  componentWillUnmount() {
    if (this.swiper) { // 销毁swiper
      this.swiper.destroy()
    }
  }
  componentDidMount () {
    this.getBanner()
    this.getColumn()
    this.getRecommend()
    this.getTenfifteen()
    this.getZhenThings()
    this.getYxlook()
    this.getFindMore()
    this._initScroll()
  }
  async getBanner () {
    const result = await reqBanner()
    if (result.code === 0) {
      const banner = result.data
      this.setState({
        banner
      })
    }
  }
  async getColumn () {
    const result = await reqColumn()
    if (result.code === 0) {
      const column = result.data
      this.setState({
        column
      })
    }
  }
  async getRecommend () {
    const result = await reqRecommend()
    if (result.code === 0) {
      const recommend = result.data
      this.setState({
        recommend
      })
    }
  }
  async getTenfifteen () {
    const result = await reqTenfifteen()
    if (result.code === 0) {
      const tenfifteen = result.data
      this.setState({
        tenfifteen
      })
    }
  }
  async getZhenThings () {
    const result = await reqZhenThings()
    if (result.code === 0) {
      const zhenThings = result.data
      this.setState({
        zhenThings
      })
    }
  }
  async getYxlook () {
    const result = await reqYxLook()
    if (result.code === 0) {
      const yxLook = result.data
      this.setState({
        yxLook
      })
    }
  }
  async getFindMore () {
    const result = await reqFindMore()
    if (result.code === 0) {
      const findMore = result.data
      this.setState({
        findMore
      })
    }
  }
  _initScroll () {
    /* eslint-disable no-new */
    new BScroll('.navSub', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
    window.scrollTo(0, 0)
  }
  render() {
    const {banner, column, recommend, tenfifteen, zhenThings, yxLook, findMore} = this.state
    return (
      <section className="wrap">
        <HeadIndex/>
        <section className="container">
          <section className="navCarrousel">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  banner.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      <img src={item.picUrl}  width="100%" height="100%"/>
                      <div className="navContent">
                        <div className="subTitle">— {item.subTitle} —</div>
                        <div className="titile">{item.title}</div>
                        <div className="desc">{item.desc}</div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </section>
          <section className="navSub">
            <ul className="newsList_news">
              {
                column.map((item, index) => (
                  <li className="newsList_items" key={index}>
                    <img className="newsList_items_image" src={item.picUrl}/>
                    <div className="contentText">
                      <p className="ellipsis preferential">{item.articleCount}</p>
                    </div>
                    <div className="contentTitle ellipsis">
                      <p className="contentTitle_text">{item.title}</p>
                    </div>
                  </li>
                  ))
              }
          </ul>
        </section>
          <section className="recommend">
            <Recommend recommend={recommend}/>
        </section>
          <section className="tenOclock">
            <TenOclock tenfifteen={tenfifteen}/>
          </section>
          <section className="goodThings">
            <Recommend recommend={zhenThings}/>
          </section>
          <section className="yxLook">
            <header className="yxLook_head">
              <p className="yxLook_title">严选LOOK</p>
            </header>
            <section className="container">
              <div className="container_image">
                <img src={yxLook.picUrl} alt=""/>
              </div>
              <div className="container_text">
                <div className="container_text_top">
                  <img src={yxLook.avatar}/>
                  <span className="text_top ellipsis">{yxLook.nickname}</span>
                </div>
                <div className="container_text_bottom">{yxLook.content}</div>
              </div>
            </section>
            <section className="container">
            </section>
          </section>
          <section className="MoreWonderful">
            <MoreWonderful findMore={findMore}/>
          </section>
        </section>
      </section>
    )
  }
}
export default withRouter(Things)