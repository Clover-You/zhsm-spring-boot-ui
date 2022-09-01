import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'

import './index.less'
import { BaseLayout } from '@/layouts/BaseLayout'
import { UserAccountPage } from './pages/User/Account'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BaseLayout /> */}
    <UserAccountPage/>
  </React.StrictMode>
)
