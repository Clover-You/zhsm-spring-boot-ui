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
import * as strings from '@/utils/strings'
import { Link, useNavigate } from 'react-router-dom'
import { ValidateStatus } from 'antd/es/form/FormItem'
import { LoginMethodTab } from '@/components/LoginMethodList'
import { AntdComponentsContext } from '@/context/AntdComponentsContextProvider'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import { FormattedMessage } from '@/components/Locale/FormattedMessage'
import { useLocale } from '@/hooks/useLocale'
import { userLogin } from '@/services/login'
import { LoginTo, LoginToKeys } from '@/types/to/login'
import { useStoreDispatch, useUserStore } from '@/redux/hooks'
import { login } from '@/redux/modules/user'

export const LoginPage = memo((p, c) => {

  const [form] = Form.useForm<LoginTo>()
  const context = useContext(AntdComponentsContext)

  const [validateStatus, setValidateStatus] = useState<{ [key in LoginToKeys]: ValidateStatus }>({
    password: '',
    account: ''
  })
  const locale = useLocale()
  const navigate = useNavigate()
  /**
   * 去到首页
   */
  const goHome = () => navigate('/index', { replace: true })

  const onFormFinishFailed = async (errorInfo: ValidateErrorEntity<LoginTo>) => {
    let firstField
    if ((firstField = errorInfo.errorFields[0])) {
      if (firstField.errors[0]) {
        context.showPerMessage?.error(firstField.errors[0])
        setValidateStatus({
          ...validateStatus,
          [firstField.name[0]]: 'error'
        })
      }
    }
  }

  /**
   * 清楚表单验证状态
   */
  const clearValidateStatus = (field: LoginToKeys) => {
    if (strings.hasText(validateStatus[field])) {
      setValidateStatus({ ...validateStatus, [field]: '' })
    }
  }

  /**
   * 表单校验通过触发
   * @param form 用户名密码
   */
  const onFinish = async (form: LoginTo) => {
    try {
      const { data: { code, message } } = await userLogin(form.account, form.password)
      if (code != 200) return context.showPerMessage?.error(message)
      goHome()
    } catch (e) {
      context.message?.error('系统异常')
      console.error(e)
    }
  }

  const { token } = theme.useToken()

  const [state, action] = useUserStore()
  const dispatch = useStoreDispatch()

  return <>
    <Card
      className={styles.card}
      title={locale.formatMessage({ id: 'login.card.title' })}
      style={{ boxShadow: token.boxShadowSecondary }}
    >
      <Button onClick={() => {
        action.loginAsync()
      }}>{state.count}</Button>
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
          name={'account'}
          validateStatus={validateStatus.account}
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
            onChange={() => clearValidateStatus('account')}
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
