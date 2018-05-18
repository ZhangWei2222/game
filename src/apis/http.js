import axios from 'axios'

let baseURL = window.APIBaseURL || (process.env.NODE_ENV === 'production' ? '/' : 'https://www.gancube.com')

if (baseURL[baseURL.length - 1] !== '/') {
  baseURL += '/'
}

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = false

const get = (url, params) => axios.get(url, params).then(resp => resp.data)
// .catch(err => console.error(err.message))
const post = (url, data) => axios.post(url, data).then(resp => resp.data)
// .catch(err => console.error(err.message))
const patch = (url, data) => axios.patch(url, data).then(resp => resp.data)
// .catch(err => console.error(err.message))
const _delete = (url) => axios.delete(url).then(resp => resp.status === 204)
// .catch(err => console.error(err.message))
// const remove = (url, data) => axios.delete(url, data).then(reapisp => resp.data).catch(err => console.error(err.message))

const buildQuery = (params) => {
  let q = []
  for (let k in params) {
    q.push(`${k}=${params[k]}`)
  }
  return encodeURI(q.join('&'))
}

// const setToken =

const http = {
  baseURL,
  csrfToken: null,

  get,
  post,
  patch,
  delete: _delete,
  buildQuery,

  setToken: token => {
    http.csrfToken = token
    axios.defaults.headers.post['X-CSRF-Token'] = token
    axios.defaults.headers.patch['X-CSRF-Token'] = token
    axios.defaults.headers.delete['X-CSRF-Token'] = token
  }
}

// get('session/token').then(token => http.setToken(token))

export default http
