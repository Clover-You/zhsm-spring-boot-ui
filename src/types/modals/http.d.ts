/**
 * <p>
 * 请求类型
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-10-28 02:15
 */
import { AxiosResponse } from 'axios'

/** 基础响应体*/
export type BaseResp<T = any> = {
  /** 请求业务状态码*/
  code: number
  /** 请求消息*/
  message: string
  /** 请求响应数据*/
  data?: T
}

/** 默认响应结构*/
export type HttpResp<T = any> = AxiosResponse<BaseResp<T>>

/** 分页结构*/
export type HttpPage<T = any> = HttpResp<PageResp>

/** 分页数据响应类型*/
export type PageResp<T = any> = {
  /** 数据列表*/
  list?: T[]
  /** 总条数*/
  total?: bigint
  /** 页大小*/
  size?: number
  /** 当前页*/
  page?: number
}
