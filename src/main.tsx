import React from 'react'
import ReactDOM from 'react-dom/client'
import 'nprogress/nprogress.css'
import { createTheme, ThemeProvider } from '@material-ui/core'

import App from './App'
import './index.css'
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#900',
      main: '#900',
      dark: '#000',
      contrastText: '#fff'
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
