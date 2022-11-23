/**
 * <p>
 * antd 类型映射
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-23 17:44
 */
import { FormProps } from 'antd'

/**
 * 表单自定义验证错误实体
 */
export type ValidateErrorEntity<T> = Parameters<FormProps<T>['onFinishFailed']>[0]
