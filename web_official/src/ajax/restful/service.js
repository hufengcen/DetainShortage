import AjaxClient from 'ajax/restful/client'

//接口地址未配置出来
const HOST = 'http://106.12.28.16'

const SAVE_USER = HOST + '/saveUser'              // 注册
const LOGIN = HOST + '/login'                     // 登录
const UPDATE_USER = HOST + '/updateUser'          // 更新用户信息
const PUBLISH_ACT = HOST + '/publishAct'          // 创建活动
const APPLY_ACT = HOST + '/applyAct'              // 参加活动
const ACTLIST = HOST + '/actList'                 // 周边活动列表
const ACT_DETAIL = HOST + '/actDetail'            // 活动详情
const ACT_RATE = HOST + '/actRate'                // 活动后评价
const GRADE_FILTER = HOST + '/gradeFilter'        // 等级系数


export function registLogin (params) {
  return AjaxClient.post(SAVE_USER, params)
}

export function login (params) {
  return AjaxClient.post(LOGIN, params)
}

export function updateUser (params) {
  return AjaxClient.post(UPDATE_USER, params)
}

export function publishAct (params) {
  return AjaxClient.post(PUBLISH_ACT, params)
}

export function applyAct (params) {
  return AjaxClient.post(APPLY_ACT, params)
}

export function actList (params) {
  return AjaxClient.post(ACTLIST, params)
}

export function actDetail (params) {
  return AjaxClient.post(ACT_DETAIL, params)
}
