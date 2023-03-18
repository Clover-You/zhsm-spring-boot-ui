/**
 * <p>
 * axios 二次封装
 * </p>
 *
 * @version: v1.0
 * @author: Clover You
 * @email: cloveryou02@163.com
 * @create: 2022-08-29 12:03
 **/
import axios, { InternalAxiosRequestConfig } from 'axios'
import qs from 'qs'
import Nprogress from 'nprogress'

const req = axios.create({
  paramsSerializer: {
    serialize: p => qs.stringify(p)
  }
})

type CustomeConfig = {
  nprogress: typeof Nprogress
}
type AxiosConfig = CustomeConfig & InternalAxiosRequestConfig
req.interceptors.request.use((config) => {
  const conf = config as AxiosConfig
  // 打开全局进度条
  conf.nprogress = Nprogress.start()
  return conf
})

req.interceptors.response.use((resp) => {
  const conf = resp.config as AxiosConfig
  // 关闭全局进度条
  conf.nprogress.done()
  return Promise.resolve(resp)
})

export default req

export { req }
