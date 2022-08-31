import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'

import './index.less'
import {BaseLayout} from '@/layouts/BaseLayout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BaseLayout />
  </React.StrictMode>
)
