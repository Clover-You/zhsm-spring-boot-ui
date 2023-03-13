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
import { LocaleMessages } from '@/locale/messages'

export const en_Message: LocaleMessages = {
  'login.card.title': 'login',
  'login.card.forgot-password': 'forgot password',
  'login.card.go-register': 'go register',
  'login.card.input.password': 'please enter password',
  'login.card.input.username': 'please enter username or mailbox',
  'login.card.login-methods': 'other login methods',
  'login.card.no-account-yet': 'no account yet?',
  'login.card.password-cannot-empty': 'please enter your password',
  'login.card.remember-me': 'remember me',
  'login.card.user-name-or-mailbox-not-empty': 'please enter your username or mailbox',
  'login.card.button.login': 'login',
  'register.card.goLogin': 'go login',
  'register.card.have-account': 'already have an account?',
  'register.card.title': 'register account'

}

export const en = { name: 'en', messages: en_Message }