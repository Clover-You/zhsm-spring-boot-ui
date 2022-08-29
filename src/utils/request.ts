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
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import qs from 'qs'
import Nprogress from 'nprogress'

/**
 * HTTP响应类型
 */
export interface RespType<T = any> {
  /**
   * 数据
   */
  data?: T
  /**
   * 业务状态码
   */
  code?: string
  /**
   * 状态码对应消息
   */
  message?: string
  /**
   * 返回时间
   */
  timestamp?: bigint
  /**
   * 执行时间
   */
  executeTime?: number
}

/**
 * 分页数据响应类型
 */
export interface RespPageType<T = any> {
  /**
   * 数据列表
   */
  list?: T[]
  /**
   * 总条数
   */
  total?: bigint
  /**
   * 页大小
   */
  pageSize?: number
  /**
   * 当前页
   */
  currentPage?: number
}

const req = axios.create({
  paramsSerializer: (p) => {
    return qs.stringify(p)
  },
})

type CustomeConfig = {
  nprogress: typeof Nprogress
}
type AxiosConfig = CustomeConfig & AxiosRequestConfig
req.interceptors.request.use<AxiosConfig>((config) => {
  const conf = config as AxiosConfig
  // 打开全局进度条
  conf.nprogress = Nprogress.start()
  return conf
})

req.interceptors.response.use<AxiosResponse<RespType>>((resp) => {
  const conf = resp.config as AxiosConfig
  // 关闭全局进度条
  conf.nprogress.done()
  return Promise.resolve(resp)
})

export default req
export {  req }