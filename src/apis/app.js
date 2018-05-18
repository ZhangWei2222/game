// import http from './http.js'
import axios from 'axios'

const buildQuery = (params) => {
  let q = []
  for (let k in params) {
    q.push(`${k}=${params[k]}`)
  }
  return encodeURI(q.join('&'))
}

// user_v2:正式接口 || user_test:测试接口
const userApi = 'user_v2'

export default {

  // 获取当前用户信息（token）
  getUserInfo () {
    return axios.get('/token')
  },

  // 获取用户信息(cookie)
  getCurrentuserinfo (cookie) {
    console.log(cookie)
    return axios.post(`/rbapi/${userApi}/get_currentuserinfo`, `cookie=${cookie}`)
  },

  // 获取NONCE
  getNonce (type) {
    return axios.get(`/rbapi/get_nonce/?controller=${userApi}&method=${type}`)
  },

  // 用户注册
  sendUserInfo (info) {
    return axios.post(`/rbapi/${userApi}/register/`, buildQuery(info))
  },

  // 用户登录（账号密码验证通过后生成cookie）
  generateAuthCookie (info) {
    return axios.post(`/rbapi/${userApi}/generate_auth_cookie/`, buildQuery(info))
  },

  // 验证用户cookie
  validateCookie (cookie) {
    return axios.post(`/rbapi/${userApi}/validate_auth_cookie/`, buildQuery(cookie))
  },

  // 刷新cookie
  refreshAuthCookie (info) {
    return axios.get(`/rbapi/${userApi}/refresh_auth_cookie`, buildQuery(info))
  },

  // 重置密码
  retrievePassword (email) {
    return axios.get(`/rbapi/${userApi}/retrieve_password/?user_login=${email}`)
  },

  // 获取微信个人信息
  generateAuthCookieByWechat (code) {
    return axios.post(`/rbapi/${userApi}/generate_auth_cookie_by_wechat/`, `code=${code}`)
  },

  checkGiftcode (info) {
    return axios.post(`/check_giftcode`, buildQuery(info))
  }

}
