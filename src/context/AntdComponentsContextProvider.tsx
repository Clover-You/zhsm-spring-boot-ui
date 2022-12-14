/**
 * <p>
 * antd 组件全局上下文
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-22 21:38
 */

import {message} from "antd";
import {MessageInstance} from "antd/es/message/interface";
import React, {PropsWithChildren, ReactFragment, ReactNode} from "react"

export type ContextMember = {
  message?: MessageInstance
}

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

  return <AntdComponentsContextProvider.Context.Provider value={context}>
    {children}
  </AntdComponentsContextProvider.Context.Provider>
}

AntdComponentsContextProvider.Context = React.createContext<ContextMember>({})

AntdComponentsContextProvider.ContextHolder = AntdComponentsContextProvider.Context
