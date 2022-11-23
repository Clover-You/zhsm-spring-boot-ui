/**
 * <p>
 * 全局上下文
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-22 21:38
 */

import { message } from "antd";
import { MessageInstance } from "antd/es/message/interface";
import React, { PropsWithChildren } from "react"

export type ContextMember = {
  message?: MessageInstance
}

export const ContextProvider = (props: PropsWithChildren) => {
  const [messageApi, msgContextHolder] = message.useMessage()
  let children = props.children

  const context: ContextMember = {
    message: messageApi
  }

  if (props.children instanceof Array) {
    children = [msgContextHolder, ...props.children]
  } else {
    children = [msgContextHolder, props.children]
  }

  return <ContextProvider.Context.Provider value={context}>
    {children}
  </ContextProvider.Context.Provider>
}

ContextProvider.Context = React.createContext<ContextMember>({})

ContextProvider.ContextHolder = ContextProvider.Context
