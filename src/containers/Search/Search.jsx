import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Search.styl'
import {connect} from "react-redux";
import {getHotlist} from "../../redux/actions";
class Search extends Component {
  state= {
    contentList: ['手拿', '衫女', '睡衣', '上衣', '四件套', '三件套', '手机壳', '水晶球', '手机扣', '世界'],
  }
  componentDidMount () {
    this.props.getHotlist()
  }
  render () {
    const hotList = this.props.hotList
    return (
      <section className="search">
        <header className="search_head">
          <div className="inpt">
            <span className="icon"/>
            <input type="text"  placeholder="Fendi等大牌制造商墨镜99元起"/>
            <span className="icon2" />
        </div>
        <Link className="cancal" to="/shop">取消</Link>
        </header>
        <section className="search_container">
          <ul className="contentList">
            {
              this.state.contentList.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                </li>
              ))
            }
          </ul>
          <section>
            <p>热门搜索</p>
            <nav className="navList">
              {
                hotList.map((item, index) => (
                  <a href="javascript:;" key={index}>{item.keyword}</a>
                ))
              }
          </nav>
          </section>
        </section>
      </section>
    )
  }
}
export default connect(
  state => ({hotList: state.hotList}),
  {getHotlist}
)(Search)