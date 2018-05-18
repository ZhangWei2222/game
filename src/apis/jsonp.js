import originJSONP from 'jsonp'

// params参数对象拼接到url上
const formatUrl = (url, params) => {
  if (params === undefined) {
    console.log(1)
    return url
  }
  let arrParams = []
  for (let [key, value] of Object.entries(params)) {
    arrParams.push(`${key}=${value}`)
  }
  let strParam = arrParams.join('&')
  if (url.indexOf('?') === -1) {
    return `${url}?${strParam}`
  } else {
    return `${url}&${strParam}`
  }
}

export function jsonp (url, options, params) {
  return new Promise((resolve, reject) => {
    originJSONP(formatUrl(url, params), options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
