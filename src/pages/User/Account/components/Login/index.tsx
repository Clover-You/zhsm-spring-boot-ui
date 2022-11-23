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
import styles from './Login.module.less'
import { Button, Card, Checkbox, Col, Divider, Form, Input, Row } from 'antd'
import Icon, { LockOutlined, UserOutlined } from '@ant-design/icons'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import * as StringUtils from '@/utils/StringUtils'
import { Link } from 'react-router-dom'
import { ValidateStatus } from 'antd/es/form/FormItem'
import { theme } from 'antd'
import { LoginMethodTab } from '@/components/tab/login_method'
import { ContextProvider } from '@/components/ContextProvider'

export const LoginPage = memo((p, c) => {

  const [form] = Form.useForm<Account.LoginTo>()
  const context = useContext(ContextProvider.Context)
  const [validateStatus, setValidateStatus] = useState<{ [key in Account.LoginToKeys]: ValidateStatus }>({
    password: '',
    username: ''
  })

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
    console.log(value);

  }

  const { token } = theme.useToken()

  console.log(token.boxShadowSecondary);

  return <>
    <div className={styles.loginBox}>
      <Card
        className={styles.card}
        title={'登录'}
        style={{ boxShadow: token.boxShadowSecondary }}
      >
        <Form
          form={form}
          scrollToFirstError={true}
          labelCol={{ span: 2 }}
          onFinishFailed={onFormFinishFailed}
          autoComplete='off'
          onFinish={onFinish}
        >
          <Form.Item
            name={'username'}
            validateStatus={validateStatus.username}
            help={''}
            rules={[{ required: true, message: '用户名/邮箱不能为空!' }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: token.colorTextPlaceholder }} />}
              placeholder='用户名/邮箱'
              onChange={() => clearValidateStatus('username')}
            />
          </Form.Item>
          <Form.Item
            name={'password'}
            help={''}
            validateStatus={validateStatus.password}
            rules={[{ required: true, message: '密码不能为空!' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: token.colorTextPlaceholder }} />}
              onChange={() => clearValidateStatus('password')}
              autoComplete={'none'}
              placeholder={'密码'}
            />
          </Form.Item>
          <Form.Item>
            <Row>
              <Col flex={1}>
                <Checkbox>记住我</Checkbox>
              </Col>
              <Col>
                <Link to={'/forget'}>忘记密码?</Link>
              </Col>
            </Row>
          </Form.Item>
          <Button
            block
            htmlType={'submit'}
            type={'primary'}
          >登录</Button>
        </Form>
        <Divider plain>其它登录方式</Divider>
        <LoginMethodTab/>
      </Card>
    </div>
  </>
})
