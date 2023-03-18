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
 * 用户
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/17 18:17
 */
import { MockMethod } from 'vite-plugin-mock'
import Mock, { Random } from 'mockjs'
import { R } from '../src/types/response'
import { LoginTo } from '../src/types/to/login'
import * as strings from '../src/utils/strings'



const UserList: LoginTo[] = [
  {
    account: 'admin',
    password: '123456'
  }
]

const login: MockMethod = {
  url: '/user/login',
  method: 'post',
  timeout: 1000,
  response: ({ body }): R => {
    const { account: username, password } = body as LoginTo
    if (!strings.hasText(username)) {
      return Mock.mock({ ode: 100000, message: '请输入用户名' })
    }

    if (!strings.hasText(password)) {
      return Mock.mock({ ode: 100001, message: '请输入密码' })
    }

    const user = UserList.find(it => it.account === username?.trim())
    if (user == void 0) {
      return Mock.mock({ code: 100002, message: '用户不存在' })
    }

    if (user.password.trim() !== password?.trim()) {
      return Mock.mock({ code: 100003, message: '密码错误' })
    }

    return Mock.mock({ code: 200, message: '登录成功' })
  }
}

export default [login] as MockMethod[]
