import React from 'react'
import ReactDOM from 'react-dom/client'
import './18n'

import { App } from './App'
import './assets/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);