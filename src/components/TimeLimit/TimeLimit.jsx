import React from 'react'
import './TimeLimit.styl'
class TimeLimit extends React.Component{
  render () {
    return (
      <section className="timeLimit_wrap">
        <section className="timeLimit">
          <div className="timeLimit_left">
            <p className="timeLimit_left_title">严选限时购</p>
            <p className="timeLimit_left_time">
              <span>00</span><span>:</span><span>00</span><span>:</span><span>00</span>
            </p>
            <p className="timeLimit_left_next">下一场 10:00 开始</p>
          </div>
          <div className="timeLimit_right">
            <img className="timeLimit_right_img" src="http://yanxuan.nosdn.127.net/ac88d5c3228c15a5e166f4d54d76d7d0.png" />
              <div className="timeLimit_right_price">
                <p className="timeLimit_right_price_text">
                  <span>￥22</span>
                  <span>￥25</span>
                </p>
              </div>
          </div>
        </section>
        <section className="welfare">
          <img className="welfare_image" src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" />
        </section>
      </section>
    )
  }
}
export default TimeLimit