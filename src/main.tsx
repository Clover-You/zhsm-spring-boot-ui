import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'

import './index.less'
import {LoginPage} from '@/pages/User/Account/components/Login'
import {ConfigProvider} from 'antd'
import {HashRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider componentSize={'large'}>
      <HashRouter>
        <LoginPage/>
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>
)
