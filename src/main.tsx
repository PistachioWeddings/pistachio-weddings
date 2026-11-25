import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LangProvider } from './i18n'
import { RouterProvider } from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LangProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </LangProvider>
  </React.StrictMode>,
)
