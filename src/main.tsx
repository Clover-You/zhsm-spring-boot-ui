import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'

import 'antd/dist/reset.css';
// import './index.less'
import { LoginPage } from '@/pages/User/Account/components/Login'
import { ConfigProvider, theme } from 'antd'
import { HashRouter } from 'react-router-dom'
import { light_theme } from './themes/light'

import './assets/font-icon/iconfont.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider componentSize={'large'} theme={{ token: light_theme, }}>
      <HashRouter>
        <LoginPage />
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>
)
