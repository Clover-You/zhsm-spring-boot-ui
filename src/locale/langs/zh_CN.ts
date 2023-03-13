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
  'login.card.title': '登录',
  'login.card.login-methods': '其它登录方式',
  'login.card.remember-me': '记住我',
  'login.card.forgot-password': '忘记密码',
  'login.card.go-register': '去注册',
  'login.card.no-account-yet': '还没有账号?',
  'login.card.user-name-or-mailbox-not-empty': '请输入用户名/邮箱',
  'login.card.password-cannot-empty': '请输入密码',
  'login.card.input.username': '用户名/邮箱',
  'login.card.input.password': '密码',
  'login.card.button.login': '登录',
  'register.card.title': '注册',
  'register.card.have-account': '已有账号?',
  'register.card.goLogin': '去登录',
}

export const zh_CN = { name: 'zh-CN', messages: zh_CN_Message } as LocaleList