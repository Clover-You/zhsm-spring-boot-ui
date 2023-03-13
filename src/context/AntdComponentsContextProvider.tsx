/**
 * <p>
 * antd 组件全局上下文
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-22 21:38
 */

import React, { PropsWithChildren, ReactFragment, ReactNode } from 'react'
import { message } from 'antd'
import { MessageInstance, TypeOpen } from 'antd/es/message/interface'

type CustomMessage = 'info' | 'success' | 'error' | 'warning' | 'loading'
type TypeOpenParams = ParamsType<TypeOpen>
type CustomMessageMethod = (
  content: TypeOpenParams[0],
  duration?: TypeOpenParams[1],
  onClose?: TypeOpenParams[2]
) => ReturnType<TypeOpen> | undefined

export type ContextMember = {
  message?: Omit<MessageInstance, CustomMessage> & {
    info: CustomMessageMethod
    success: CustomMessageMethod
    error: CustomMessageMethod
    warning: CustomMessageMethod
    loading: CustomMessageMethod
  },
  /** 每次都显示消息*/
  showPerMessage?: MessageInstance
}

export const AntdComponentsContext = React.createContext<ContextMember>({})

const MessageStateHolder: { [key in CustomMessage]: boolean } = {
  error: false,
  info: false,
  success: false,
  warning: false,
  loading: false
}

export const AntdComponentsContextProvider = (props: PropsWithChildren) => {
  const [messageApi, msgContextHolder] = message.useMessage()

  const infoMessage: CustomMessageMethod = (content, duration, onClose) =>
    showMessage('info', content, duration, onClose)

  const successMessage: CustomMessageMethod = (content, duration, onClose) =>
    showMessage('success', content, duration, onClose)

  const errorMessage: CustomMessageMethod = (content, duration, onClose) =>
    showMessage('error', content, duration, onClose)

  const warningMessage: CustomMessageMethod = (content, duration, onClose) =>
    showMessage('warning', content, duration, onClose)

  const loadingMessage: CustomMessageMethod = (content, duration, onClose) =>
    showMessage('loading', content, duration, onClose)

  const showMessage = (type: CustomMessage, ...args: ParamsType<TypeOpen>) => {
    if (MessageStateHolder[type]) return
    MessageStateHolder[type] = true
    return message[type](args[0], args[1], () => {
      MessageStateHolder[type] = false
      args[2]?.()
    })
  }

  const context: ContextMember = {
    message: {
      ...messageApi,
      info: infoMessage,
      success: successMessage,
      error: errorMessage,
      warning: warningMessage,
      loading: loadingMessage
    },
    showPerMessage: messageApi
  }

  let children: ReactFragment

  if (props.children as ReactFragment instanceof Array) {
    children = [msgContextHolder, ...props.children as ReactFragment]
  } else {
    children = [msgContextHolder, props.children]
  }

  return <>
    <AntdComponentsContext.Provider value={context}>
      {children}
    </AntdComponentsContext.Provider>
  </>
}
