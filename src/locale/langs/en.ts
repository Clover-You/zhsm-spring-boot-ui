import { LocaleMessages } from '@/locale/messages'

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
 * 英文国际化文件
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/11 02:32
 */
export const en_Message = {
  login: 'login',
  otherLoginMethod: 'other login methods',
  register: 'register',
  rememberMe: 'remember me',
  forgotPassword: 'forgot password',
  goLogin: 'go login',
  goRegister: 'go register',
  noAccountYet: 'no account yet',
  'login.page.userNameOrMailboxNotEmpty': 'username or mailbox cannot be empty',
  'login.page.passwordCannotEmpty': 'password cannot be empty',
  'login.page.input.username': 'username or mailbox',
  'login.page.input.password': 'password',
} as LocaleMessages

export const en = { name: 'en', messages: en_Message }