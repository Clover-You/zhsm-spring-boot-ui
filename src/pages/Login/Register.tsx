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
 * 注册页面
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/10 17:38
 */
import { Card, Form, Space, theme } from 'antd'
import { Link } from 'react-router-dom'
import styles from './register.module.less'

export const RegisterPage = () => {
  const { token } = theme.useToken()

  return <>
    <Card
      className={styles.card}
      title={'注册'}
      style={{ boxShadow: token.boxShadowSecondary }}
    >
      <Form>
        <Form.Item>
          <Space>
            <span>已有账号?</span>
            <Link to={'/login'}>去登录</Link>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  </>
}
