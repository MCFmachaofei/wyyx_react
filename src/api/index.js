/*
  包含 n 个接口请求函数的模块
  函数的返回值，promise对象
*/
import ajax from './ajax'

// 获取导航栏信息
export const reqNavInfo = () => ajax('/navinfo')
// 获取首页导航信息
export const reqFocusList = () => ajax('/focuslist')
// 获取品牌直供信息
export const reqTagList = () => ajax('/brand')
// 获取新品
export const reqNewItems = () => ajax('/newitem')
// 获取人气商品
export const reqPopular = () => ajax('/popular')
// 获取专题精选
export const reqTopicList = () => ajax('/topiclist')
// 获取更多商品
export const reqCateList = () => ajax('/cateList')

// 获取识物nav导航
export const reqBanner = () => ajax('/banner')
// 获取识物Subnav导航
export const reqColumn = () => ajax('/column')
// 获取识物推荐信息
export const reqRecommend = () => ajax('/recommend')
// 获取十点一刻信息
export const reqTenfifteen = () => ajax('/tenfifteen')
// 获取严选甄品的信息
export const reqZhenThings = () => ajax('/zhenthings')
// 获取严选LOOK的信息
export const reqYxLook = () => ajax('/yxLook')
// 获取识物的更多精彩
export const reqFindMore = () => ajax('/findMore')
// 获取分类的更多信息
export const reqHeadcatelist = () => ajax('/headcatelist')
// 获取热搜产品
export const reqhotList = () => ajax('/hotList')
