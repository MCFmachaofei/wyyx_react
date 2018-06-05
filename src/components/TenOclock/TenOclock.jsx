import React from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import more from './images/more.png'
import './TenOclock.styl'
class TenOclock extends React.Component{
 /* componentDidUpdate () {
   new BScroll('.recommend_container', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
  }*/
 /* _initScroll() {
    /!* eslint-disable no-new *!/
    new BScroll('.recommend_container', {
      click: true,
      scrollX: true,
      eventPassthrough: 'vertical'
    })
  }*/
  static propTypes = {
    tenfifteen: PropTypes.array.isRequired
  }
  render () {
    const {tenfifteen} = this.props
    return (
      <section className="tenOclock">
        <header className="tenOclock_head">
          <p className="tenOclock_title">十点一刻</p>
        </header>
          {
            tenfifteen[0] ? (
              <section className="recommend_container">
                <ul className="container">
                {
                  tenfifteen.map((item, index) => (
                    <li className="container_items" key={index}>
                      <p className="inner_title">— 今日话题 —</p>
                      <div className="container_title">
                        <p className="mainTitile">{item.title}</p>
                        <p className="subTitle ellipsis">{item.desc}</p>
                      </div>
                      <div className="container_bottom" >
                        <div className="imgs">
                          {
                            item.participantAvatar.map((icons, index1) => (
                              <img  src= {icons} className="container_bottom_icon" key={index1}/>
                            ))
                          }
                          <img className="container_bottom_icon last" src={more}/>
                        </div>
                        <span className="container_bottom_text">{item.participantNum}人参与话题</span>
                      </div>
                    </li>
                  ))
                }
                <li className="container_items last">
                  <div className="content last">
                    <p className="lastText">查看全部话题 <span className="icon"/></p>
                  </div>
                </li>
              </ul>
              </section>
            ) : null
          }

      </section>
    )
  }
}
export default TenOclock