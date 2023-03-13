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


type FormatMessageParams = OmitFirstFormatMessageParams<ParamsType<IntlFormatMessage>>
export const useLocale = () => {
  const intl = useIntl()

  /** 自定义MessageDescriptor，增强Intl的id提示*/
  type CustomMessageDescriptor = {
    id: keyof LocaleMessages
  } & Omit<MessageDescriptor, 'id'>

  return {
    formatMessage: (descriptor: CustomMessageDescriptor, ...args: FormatMessageParams) => {
      return intl.formatMessage(descriptor, args[0] as any, args[1]) as string | undefined
    }
  }
}