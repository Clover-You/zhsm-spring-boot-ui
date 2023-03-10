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
 * 中文简体
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/10 17:51
 */
import { LocaleList } from '@/locale/messages'

export const zh_CN_Message = {
  login: '登录',
  otherLoginMethod: '其它登录方式',
  register: '注册',
  rememberMe: '记住我',
  forgotPassword: '忘记密码',
  goLogin: '去登录',
  goRegister: '去注册',
  noAccountYet: '还没有账号',
  'login.page.userNameOrMailboxNotEmpty': '用户名/邮箱不能为空!',
  'login.page.passwordCannotEmpty': '密码不能为空',
  'login.page.input.username': '用户名/邮箱',
  'login.page.input.password': '密码',
}

export const zh_CN = { name: 'zh-CN', messages: zh_CN_Message } as LocaleList