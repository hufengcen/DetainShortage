import axios from 'axios'
import md5 from 'md5'
import config from './cache'
import Qs from 'qs'

let client = new AjaxClient('')

function AjaxClient (baseUrl) {
  this.axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 30000
  })
  this.axiosInstance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(config.method === 'post') {
        config.data = Qs.stringify( {
            ...config.data
        })
    }
    return config
  })
  this.axiosInstance.interceptors.response.use((res) => {
    if (res.data && res.status === 200 && res.data.code === 4) {
      alert('您的账号已在别处登录，如果想继续浏览，请您重新登录')
      return
    }
    if (res.data && (res.status === 200)) {
      return res
    }
    if (res.status !== 200) {
      alert(res.data.message)
    }
  })
}

AjaxClient.prototype.post = function (url, params) {
  return new Promise((resolve, reject) => {
    return this.axiosInstance.post(url, params).then(response => {
      if (response) {
        resolve(response)
      }
    }).catch((error) => {
      if (error.message === 'Network Error') {
        reject(error)
      } else {
        alert(error)
      }
    })
  })
}


AjaxClient.prototype.get = function (url, params) {
  const key = md5(url + JSON.stringify(params))
  if (config.cached && params.cache && config.cached.has(key)) {
    return Promise.resolve(config.cached.get(key))
  }
  return new Promise((resolve, reject) => {
    return this.axiosInstance.get(url, {params: params}).then(response => {
      if (response) {
        resolve(response)
        if (config.cached && params.cache) {
          config.cached.set(key, response.data)
        }
      }
    }).catch((error) => {
      if (error.message === 'Network Error') {
        reject(error)
      } else {
        alert(error)
      }
    })
  })
}

export default client
