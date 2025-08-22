import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { env } from '@/config'

import App from './app'
import './style/index.css'

async function prepareApp() {
  if (env.MSW_ENABLE) {
    const { worker } = await import('./__mocks__/browser')
    return worker.start({
      serviceWorker: {
        url: `${env.BASE_URL}mockServiceWorker.js`,
      },
    })
  }

  return Promise.resolve()
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

void prepareApp().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
