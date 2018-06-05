import React from 'react'
import PropTypes from 'prop-types'
import './NewsList.styl'
class NewsList extends React.Component{
  static propTypes = {
    newItemList: PropTypes.array.isRequired
  }
  render () {
    const {newItemList} = this.props
    return (
      <section className='newsList'>
        <ul className="newsList_news">
          {
            newItemList.map((item, index) => (
              <li className="newsList_items" key={index} >
                <div className="content">
                  <img src={item.listPicUrl} />
                  <div className="contentText">
                    {
                      item.itemTagList[1] ? item.itemTagList[1].name ? <p className="ellipsis preferential" >{item.itemTagList[1].name}</p> : null : null
                    }
                    {
                      item.itemTagList[0].name ? <p className="ellipsis preferential">{item.itemTagList[0].name}</p>: null
                    }
                    <p className="ellipsis newsList_title" >{item.name}</p>
                    <p className="ellipsis newsList_about">{item.simpleDesc}</p>
                    <p className="newsList_price">￥{item.retailPrice}</p>
                  </div>
                </div>
              </li>
            ))
          }
          <li className="newsList_items last">
            <div className="content last">
              <p className="lastText">查看全部</p>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}
export default NewsList