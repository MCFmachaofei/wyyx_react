import React from 'react'
import PropTypes from 'prop-types'
import './MoreWonderful.styl'
class MoreWonderful extends React.Component{
  static propTypes = {
    findMore: PropTypes.array.isRequired
  }
  render () {
    const {findMore} = this.props
    console.log(findMore)
    return (
      <section className="MoreWonderful">
        <header className="MoreWonderful_head">
          <p className="MoreWonderful_title">更多精彩</p>
        </header>
        {
          findMore.length ? findMore.map((item, index) => (
            <section className="otherThings" key={index}>
              <div className="otherthing" >
                {
                item.picList.length === 0?
                    <img className="otherthing_image"  src={item.scenePicUrl} alt=""/> :
                   <div className="otherthing_image other" >
                     <img className="firstImage" src={item.scenePicUrl} alt=""/>
                     <div className="otherImage">
                       {
                         item.picList.map((imgs, index) => (
                           <img src={imgs}  alt=""  key={index}/>
                         ))
                       }
                     </div>
                   </div>
                }
                <div className="otherthing_title ellipsis ">{item.subtitle}</div>
              </div>
          </section>
          )) : null
        }
      </section>
    )
  }
}
export default MoreWonderful