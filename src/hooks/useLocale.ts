/**
 * █████▒█      ██  ▄████▄   ██ ▄█▀     ██████╗ ██╗   ██╗ ██████╗
 * ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒      ██╔══██╗██║   ██║██╔════╝
 * ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░      ██████╔╝██║   ██║██║  ███╗
 * ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄      ██╔══██╗██║   ██║██║   ██║
 * ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄     ██████╔╝╚██████╔╝╚██████╔╝
 * ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒     ╚═════╝  ╚═════╝  ╚═════╝
 * ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
 * ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
 * ░     ░ ░      ░  ░
 * Copyright 2023 Clover You.
 * <p>
 * 国际化上下文
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/10 18:36
 */
import { MessageDescriptor, useIntl } from 'react-intl'
import { LocaleMessages } from '@/locale/messages'

type IntlFormatMessage = ReturnType<typeof useIntl>['formatMessage']


/** 获取方法参数列表*/
type ParamsType<T> = T extends (...args: infer P) => void ? P : never

/** 排除元组第一个元素*/
type OmitFirstFormatMessageParams<T extends any[] = []> =
  ((...args: T) => void) extends (first: any, ...args: infer P) => void ? P : never

type FormatMessageParams = ParamsType<IntlFormatMessage>
type check = OmitFirstFormatMessageParams<FormatMessageParams>
export const useLocale = () => {
  const intl = useIntl()

  /** 自定义MessageDescriptor，增强Intl的id提示*/
  type CustomMessageDescriptor = {
    id: keyof LocaleMessages
  } & Omit<MessageDescriptor, 'id'>

  return {
    formatMessage: (descriptor: CustomMessageDescriptor, ...args: check) => {
      return intl.formatMessage(descriptor, args[0], args[1]) as string | undefined
    }
  }
}