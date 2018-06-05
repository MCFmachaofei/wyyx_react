import React, {Component} from 'react'
import './Classify.styl'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getHeadCateList} from '../../redux/actions'
import RightClassify from '../../components/RightClassify/RightClassify'
class Classify extends Component {
  state = {
    currentIndex: 3
  }
  componentDidMount () {
      this.props.getHeadCateList()
      this._init()
  }
  _init() {
    new BScroll('.content_left', {
      click: true,
      scrollY: true
    })
  }
  render() {
    const headCateList = this.props.headCateList
    return (
      <section className="classify">
        <header className="classify_head">
          <div className="search">
            <span className="icon"/>
            <p className="search_text">搜索商品，共9788款好物</p>
          </div>
        </header>
        <section className="classify_container">
          <section className="classify_content">
            <div className="content_left">
              <ul className="content_left_text">
                {
                  headCateList.map((item, currentIndex) => (
                    <li className={`content_left_item ${currentIndex === 3 ? 'on': ''}`} key={currentIndex}
                        onClick={
                          (event) => {
                            this.setState({
                              currentIndex
                            })
                            const liNodes = document.querySelectorAll('.content_left_item')
                            for (let i = 0; i < liNodes.length; i++) {
                              liNodes[i].className = 'content_left_item'
                            }
                            event.currentTarget.className = 'content_left_item on'
                          }
                        } ref="lisNode">
                      <p>{item.name}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/*{
              headCateList[this.state.currentIndex] ? (<RightClassify rightData={headCateList[this.state.currentIndex]}/>) : null
            }*/}
            <RightClassify currentIndex={this.state.currentIndex}/>
          </section>
        </section>
      </section>
    )
  }
}
export default connect(
  state => ({headCateList: state.headCateList}),
  {getHeadCateList}
)(Classify)