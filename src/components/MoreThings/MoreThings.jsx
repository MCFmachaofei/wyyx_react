import React from 'react'
import PropTypes from 'prop-types'
import './MoreThings.styl'
class MoreThings extends React.Component{
  static propTypes = {
    cateList: PropTypes.object.isRequired
  }
  render () {
    const {cateList} = this.props
    return (
      <section className="moreThings">
        <header className="moreThings_head">
          <p className="moreThings_head_title">{cateList.name}好物</p>
        </header>
        <ul className="moreThings_content">
          {
            cateList.itemList.map((item, index) => (
              <li className="moreThings_item"  key={index}>
                <div className="show">
                  <img className="moreThings_item_image" src={item.listPicUrl} alt=""/>
                    <p className="moreThings_item_titile ellipsis" >{item.simpleDesc}</p>
                </div>
                <div className="about">
                  <p className="about_title ellipsis">{item.name}</p>
                  <p className="about_price">￥{item.couponPrice}</p>
                </div>
              </li>
              ))
          }
          <li className="moreThings_item last">
            <div className="moreThings_item_last_content">
              <p className="last_text">更多{cateList.name}好物</p>
              <span className="icon"/>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}
export default MoreThings