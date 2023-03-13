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
import { FormattedMessage } from '@/components/Locale/FormattedMessage'
import { useIntl } from 'react-intl/lib'
import { useLocale } from '@/hooks/useLocale'

export const RegisterPage = () => {
  const { token } = theme.useToken()
  const locale = useLocale()
  return <>
    <Card
      className={styles.card}
      title={locale.formatMessage({ id: 'register.card.title' })}
      style={{ boxShadow: token.boxShadowSecondary }}
    >
      <Form>
        <Form.Item>
          <Space>
            <FormattedMessage id={'register.card.have-account'} tagName={'span'} />
            <FormattedMessage id={'register.card.goLogin'}>
              {nodes => <Link to={'/login'}>{nodes}</Link>}
            </FormattedMessage>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  </>
}
