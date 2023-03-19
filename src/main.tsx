import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'
import { StyleProvider } from '@ant-design/cssinjs'
import { Provider as ReduxProvider } from 'react-redux'

import 'antd/dist/reset.css'
import { ConfigProvider, theme } from 'antd'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { light_theme } from './themes/light'

import './assets/font-icon/iconfont.js'
import { AntdComponentsContextProvider } from './context/AntdComponentsContextProvider'
import { Routers } from './routers'
import { LocaleProvider } from '@/locale'
import Store from './redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority="high">
      <ConfigProvider componentSize={'large'} theme={{ token: light_theme, }}>
        <ReduxProvider store={Store}>
          <AntdComponentsContextProvider>
            <LocaleProvider>
              <BrowserRouter>
                <Routers />
              </BrowserRouter>
            </LocaleProvider>
          </AntdComponentsContextProvider>
        </ReduxProvider>
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>
)
