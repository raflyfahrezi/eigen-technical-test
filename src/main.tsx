import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import App from '@/app'
import { Global } from '@/styles'

import 'antd/dist/antd.css'
import '@fontsource/open-sans/400.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Global />
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
