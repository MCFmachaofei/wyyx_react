/*
    包含n个action creator
    异步action
    同步action
 */
import {
  RECEIVE_HEADCATELIST,
  RECEIVE_HOTLIST
} from './action-types'
import {
  reqHeadcatelist,
  reqhotList
} from '../api/index'

const headCateList = (headCateList) => ({type: RECEIVE_HEADCATELIST, data: headCateList})
const hotList = (hotList) => ({type: RECEIVE_HOTLIST, data: hotList})

export const getHotlist = () => {
  return async dispatch => {
    const result = await reqhotList()
    if (result.code === 0) {
      dispatch(hotList(result.data))
    }
  }
}
export const getHeadCateList = () => {
  return async dispatch => {
    const result = await reqHeadcatelist()
      if (result.code === 0) {
        dispatch(headCateList(result.data))
      }
  }
}
