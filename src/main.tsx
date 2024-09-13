import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './App'
import './style/index.css'

async function prepareApp() {
  console.log(import.meta.env.VITE_APP_MSW_ENABLE)
  if (import.meta.env.VITE_APP_MSW_ENABLE === 'true') {
    const { worker } = await import('./__mocks__/browser')
    return worker.start({
      serviceWorker: {
        url: `${import.meta.env.BASE_URL || '/'}mockServiceWorker.js`,
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
