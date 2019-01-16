import axios from 'axios';
import { baseURL } from '@/config'

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideCOnfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  //请求拦截器
  interceptors(instance, url) {
    //请求拦截器
    instance.interceptors.request.use(config => {
      //例如添加全局loading
      if (!Object.keys(this.queue).length) {
        // Spin.show()
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    //响应拦截器
    instance.interceptors.response.use(res => {
      this.distroy(url)
      const { status, data } = res;
      return { status, data }
    }, error => {
      this.distroy(url)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideCOnfig(), options)
    this.interceptors(instance, options.url);
    return instance(options)
  }
}
export default HttpRequest
