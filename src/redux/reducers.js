/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'

import {
  RECEIVE_HEADCATELIST,
  RECEIVE_HOTLIST
} from './action-types'
const initlistClassify = []
const inithotList = []
function headCateList(state=initlistClassify, action) {
  switch (action.type) {
    case RECEIVE_HEADCATELIST:
      return action.data
    default:
      return state
  }
}
function hotList(state=inithotList, action) {
  switch (action.type) {
    case RECEIVE_HOTLIST:
      return action.data
    default:
      return state
  }
}
export default combineReducers({
  headCateList,
  hotList
})

