import React from 'react'
import PropTypes from 'prop-types'
import './RightClassify.styl'
import {connect} from "react-redux";
import {getHeadCateList} from "../../redux/actions";
class RightClassify extends React.Component{
  static propTypes = {
    currentIndex: PropTypes.number.isRequired
  }
  componentDidMount () {
    this.setState({
      rightData: this.props.headCateList[this.props.currentIndex]
    })
  }
  render () {
    const rightData = this.props.headCateList[this.props.currentIndex]
    return (
      <section className="rightClassify">
        {
          rightData ? (
            <section>
              <header className="rightClassify_head">
                <img className="rightClassify_head_img" src={rightData.imgUrl} alt=""/>
              </header>
              <p className="title"><span>——</span> {rightData.name}区分类 <span>——</span></p>
              <section className="right_content">
                <ul className="right_content_main">
                  {
                    rightData.subCateList.map((item, index) => (
                      <li className="right_content_main_item" key={index}>
                        <img src={item.wapBannerUrl} alt=""/>
                        <p>{item.name}</p>
                      </li>
                    ))
                  }
                </ul>
              </section>
            </section>

          ) : null
        }


      </section>
    )
  }
}
export default connect(
  state => ({headCateList: state.headCateList}),
)(RightClassify)