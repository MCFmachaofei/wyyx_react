/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import info from './data.json'

// 获取热搜页的更多信息
Mock.mock('/hotList', {code: 0, data: info.hotKeywordVOList})
// 获取分类的信息列表
Mock.mock('/headcatelist', {code: 0, data: info.headCateList})
// 返回识物的更多产品
Mock.mock('/findMore', {code: 0, data: info.findMore})
// 返回识物的严选LOOK
Mock.mock('/yxLook', {code: 0, data: info.yxLook})
// 返回识物的严选甄品
Mock.mock('/zhenthings', {code: 0, data: info.zhenThings})
// 返回识物的十点一刻
Mock.mock('/tenfifteen', {code: 0, data: info.tenfifteen})
// 返回识物的推荐内容
Mock.mock('/recommend', {code: 0, data: info.recommend})
// 返回识物的navSub导航
Mock.mock('/column', {code: 0, data: info.column})

// 返回识物的nav导航
Mock.mock('/banner', {code: 0, data: info.banner})

// 返回导航nav的接口
Mock.mock('/navinfo', {code: 0, data: info.headNavCateList})
// 返回ratings的接口
Mock.mock('/focuslist', {code: 0, data: info.focusList})
// 返回info的接口
Mock.mock('/brand', {code: 0, data: info.tagList})
// 获取新品
Mock.mock('/newitem', {code: 0, data: info.newItemList})
// 获取人气新品
Mock.mock('/popular', {code: 0, data: info.popularItemList})
// 获取专题精选
Mock.mock('/topiclist', {code: 0, data: info.topicList})
// 获取更多商品
Mock.mock('/cateList', {code: 0, data: info.cateList})
// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
