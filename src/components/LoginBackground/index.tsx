/**
 * <p>
 * 登录背景
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-26 12:55
 */
import { Outlet } from 'react-router-dom'

import bg from '@/assets/bg.svg'

export const LoginAndRegisterPage = () => {
  return <>
    <div style={{
      width: '100vw',
      height: '100vh',
      background: `url(${bg})`,
      position: 'relative'
    }}>
      <Outlet />
    </div>
  </>
}
