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
import React, { ReactNode } from "react"

export type ContextProviderProps = {
  children?: ReactNode | undefined;
}

export type ContextMember = {
  message?: MessageInstance
}
export const ContextProvider = (props: ContextProviderProps) => {
  const [messageApi, contextHolder] = message.useMessage()
  
  const context: ContextMember = {
    message: messageApi
  }

  return <ContextProvider.Context.Provider value={context}>
    {contextHolder}
    {props.children}
  </ContextProvider.Context.Provider>
}

ContextProvider.Context = React.createContext<ContextMember>({})

ContextProvider.ContextHolder = ContextProvider.Context
