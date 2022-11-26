import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'
import { StyleProvider } from '@ant-design/cssinjs';

import 'antd/dist/reset.css';
// import './index.less'
import { LoginPage } from '@/pages/user/Account/components/Login'
import { ConfigProvider, theme } from 'antd'
import { HashRouter } from 'react-router-dom'
import { light_theme } from './themes/light'

import './assets/font-icon/iconfont.js'
import { ContextProvider } from './components/ContextProvider';
import { Routers } from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority='high'>
      <ConfigProvider componentSize={'large'} theme={{ token: light_theme, }}>
        <ContextProvider>
          <HashRouter>
            <Routers></Routers>
          </HashRouter>
        </ContextProvider>
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
)
