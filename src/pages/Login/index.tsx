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
 * Copyright 2022 Clover You.
 * <p>
 * 登录页
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-10-24 23:01
 */
import { memo, useContext, useState } from 'react'
import styles from './login.module.less'
import { Button, Card, Checkbox, Col, Divider, Form, Input, Row, Space, theme } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import * as StringUtils from '@/utils/StringUtils'
import { Link } from 'react-router-dom'
import { ValidateStatus } from 'antd/es/form/FormItem'
import { LoginMethodTab } from '@/components/LoginMethodList'
import { AntdComponentsContextProvider } from '@/context/AntdComponentsContextProvider'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { FormattedMessage } from '@/components/Locale/FormattedMessage'
import { useLocale } from '@/hooks/useLocale'

export const LoginPage = memo((p, c) => {

  const [form] = Form.useForm<Account.LoginTo>()
  const context = useContext(AntdComponentsContextProvider.Context)
  const [validateStatus, setValidateStatus] = useState<{ [key in Account.LoginToKeys]: ValidateStatus }>({
    password: '',
    username: ''
  })
  const locale = useLocale()

  const onFormFinishFailed = async (errorInfo: ValidateErrorEntity<Account.LoginTo>) => {
    let firstField
    if ((firstField = errorInfo.errorFields[0])) {
      if (firstField.errors[0]) {
        context.message?.error(firstField.errors[0])
        setValidateStatus({
          ...validateStatus,
          [firstField.name[0]]: 'error'
        })
      }
    }
  }

  const clearValidateStatus = (field: Account.LoginToKeys) => {
    if (StringUtils.hasText(validateStatus[field])) {
      setValidateStatus({ ...validateStatus, [field]: '' })
    }
  }

  const onFinish = (value: Account.LoginTo) => {
    console.log(value)

  }

  const { token } = theme.useToken()

  return <>
    <Card
      className={styles.card}
      title={locale.formatMessage({ id: 'login.card.title' })}
      style={{ boxShadow: token.boxShadowSecondary }}
    >
      <Form
        form={form}
        scrollToFirstError={true}
        labelCol={{ span: 2 }}
        onFinishFailed={onFormFinishFailed}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item>
          <Space>
            <FormattedMessage id={'login.card.no-account-yet'} tagName={'span'} />
            <Link to={'/register'}><FormattedMessage id={'login.card.go-register'} /></Link>
          </Space>
        </Form.Item>
        <Form.Item
          name={'username'}
          validateStatus={validateStatus.username}
          help={''}
          rules={[
            {
              required: true,
              message: locale.formatMessage({ id: 'login.card.user-name-or-mailbox-not-empty' })
            }
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: token.colorTextPlaceholder }} />}
            placeholder={locale.formatMessage({ id: 'login.card.input.username' })}
            onChange={() => clearValidateStatus('username')}
          />
        </Form.Item>
        <Form.Item
          name={'password'}
          help={''}
          validateStatus={validateStatus.password}
          rules={[
            {
              required: true,
              message: locale.formatMessage({ id: 'login.card.password-cannot-empty' })
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: token.colorTextPlaceholder }} />}
            onChange={() => clearValidateStatus('password')}
            autoComplete={'none'}
            placeholder={locale.formatMessage({ id: 'login.card.input.password' })}
          />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col flex={1}>
              <FormattedMessage id={'login.card.remember-me'}>
                {nodes => <Checkbox>{nodes}</Checkbox>}
              </FormattedMessage>
            </Col>
            <Col>
              <FormattedMessage id={'login.card.forgot-password'}>
                {nodes => <Link to={'/forget'}>{nodes}</Link>}
              </FormattedMessage>
            </Col>
          </Row>
        </Form.Item>
        <FormattedMessage id={'login.card.button.login'}>
          {nodes => <Button block htmlType={'submit'} type={'primary'}>{nodes}</Button>}
        </FormattedMessage>
      </Form>
      <FormattedMessage id={'login.card.login-methods'}>
        {nodes => <Divider plain>{nodes}</Divider>}
      </FormattedMessage>
      <LoginMethodTab />
    </Card>
  </>
})
