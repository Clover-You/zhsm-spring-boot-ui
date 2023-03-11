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
 * 占据整行的头部
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-08-30 10:10
 */
import React, { memo } from 'react'
import { Col, Layout, MenuProps, Row, Space, Tabs, theme } from 'antd'
import { Dropdown } from 'antd/lib'

const { Header } = Layout

export interface BlockHeaderProps {
}

export const BlockHeader = memo<BlockHeaderProps>(() => {
  const { token: themeToken } = theme.useToken()
  const tabItems = [
    {
      label: '销售',
      key: '1',
    },
    {
      label: '库存',
      key: '2',
    },
    {
      label: '账务',
      key: '3',
    },
  ]
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
  ]
  return <>
    <Header
      className="header"
      style={{
        backgroundColor: themeToken.colorBgContainer,
        boxShadow: themeToken.boxShadow,
        padding: `0 ${themeToken.padding}px`
      }}
    >
      <Row style={{ width: '100%' }} align={'bottom'} justify={'space-between'} gutter={themeToken.padding}
        wrap={false}>
        <Col flex={1}>
          <Tabs items={tabItems} tabBarStyle={{ margin: 0 }} />
        </Col>
        <Col flex={0}>
          <Space>
            <Dropdown menu={{
              items: items
            }} dropdownRender={(menus) => (<>
              <div>hello world</div>
              {menus}
            </>)} >
              <div>老板</div>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Header>
  </>
})