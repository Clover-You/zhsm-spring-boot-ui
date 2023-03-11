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
 * 侧边栏
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-08-30 10:36
 */
import { memo } from 'react'
import { Layout, theme, Menu } from 'antd'

const { Sider } = Layout

export interface SiderProps {
}

export const SiderMenu = memo<SiderProps>(() => {
  const { token } = theme.useToken()
  return <>
    <Sider style={{ backgroundColor: token.colorBgContainer, boxShadow: token.boxShadow, height: 'inherit' }} width={100}>
      <Menu mode={'inline'}>
        <Menu.Item>销售</Menu.Item>
        <Menu.Item>库存</Menu.Item>
        <Menu.Item>账务</Menu.Item>
        <Menu.Item>分析</Menu.Item>
        <Menu.Item>资料</Menu.Item>
        <Menu.Item>设置</Menu.Item>
      </Menu>
    </Sider>
  </>
})