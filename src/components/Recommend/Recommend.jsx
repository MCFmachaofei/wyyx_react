import React from 'react'
import PropTypes from 'prop-types'
import './Recommend.styl'
class Recommend extends React.Component{
  static propTypes = {
    recommend: PropTypes.array.isRequired
  }
  render () {
   const {recommend} = this.props
    return recommend[1] ? (
      <section className="recommend">
        <header className="recommend_head">
          <p className="recommend_head_title">为你推荐</p>
        </header>
        <section className="recommend_container">
          <div className="recommend_content">
            <img className="recommend_content_image" src= {recommend[0].picUrl} alt=""/>
            <span className="recommend_content_titile">{recommend[0].nickname}</span>
          </div>
          <div className="recommend_describe">
            <div className="recommend_describe_text">
              <p className="recommend_describe_title ellipsis">{recommend[0].title}</p>
              <p className="recommend_describe_price">{recommend[0].priceInfo}元起</p>
            </div>
            <p className="recommend_describe_text ellipsis">{recommend[0].subTitle}</p>
          </div>
        </section>
        <section className="recommend_container_Subs">
            <div className="container_Subs_left">
              <div className="container_Subs_left_top">
                <img src={recommend[1][0].avatar} alt=""/>
                <span className="ellipsis">{recommend[1][0].nickname}</span> <br/>
              </div>
              <div className="container_Subs_left_Bottom">
                <p className="title ellipsis">{recommend[1][0].subTitle}</p>
              </div>
            </div>
            <div className="container_Subs_right">
              <img src={recommend[1][0].picUrl}/>
              <div className="describe">{recommend[1][0].typeName}</div>
            </div>
        </section>
        <section className="recommend_container_Subs">
          <div className="container_Subs_left">
            <div className="container_Subs_left_top">
              <img src={recommend[1][1].avatar} alt=""/>
              <span className="ellipsis">{recommend[1][1].nickname}</span>
            </div>
            <div className="container_Subs_left_Bottom">
              <p className="title ellipsis">{recommend[1][1].subTitle}</p>
            </div>
          </div>
          <div className="container_Subs_right">
            <img src={recommend[1][1].picUrl} alt=""/>
            <div className="describe">{recommend[1][1].typeName}</div>
          </div>
        </section>
      </section>
    ) : null
  }
}
export default Recommend