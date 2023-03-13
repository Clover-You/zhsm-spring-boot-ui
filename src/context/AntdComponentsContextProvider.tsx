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
import { MessageInstance } from 'antd/es/message/interface'

export type ContextMember = {
  message?: MessageInstance
}

export const AntdComponentsContext = React.createContext<ContextMember>({})

export const AntdComponentsContextProvider = (props: PropsWithChildren) => {
  const [messageApi, msgContextHolder] = message.useMessage()
  let children: ReactNode

  const context: ContextMember = {
    message: messageApi
  }

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
