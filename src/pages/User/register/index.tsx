/**
 * <p>
 * a1
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-26 12:54
 */
import { Card, Form, Space, theme } from "antd"
import { Link } from "react-router-dom"
import styles from './index.module.less'

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
