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
 * 增强react-intl FormattedMessage组件
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/10 18:17
 */
import React from 'react'
import { FormattedMessage as FormattedMessageIntl, IntlContext } from 'react-intl'
import { LocaleMessages } from '@/locale/messages'
import { FormatXMLElementFn } from 'intl-messageformat'
import { Props } from 'react-intl/src/components/message'

export type FormattedMessageProps<ID = keyof LocaleMessages> = {
  id: ID
} & Omit<
  Props<Record<string, string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | Date | FormatXMLElementFn<React.ReactNode, React.ReactNode> | null | undefined>>,
  'id'>

export const FormattedMessage: React.FC<FormattedMessageProps> = (props) => {

  return <>
    <FormattedMessageIntl id={props.id} children={props.children} tagName={props.tagName} defaultMessage={props.defaultMessage} />
  </>
}