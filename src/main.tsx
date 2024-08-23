import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

import { FlagProvider, IConfig } from '@unleash/proxy-client-react'

const config: IConfig = {
  url: 'https://sandbox.getunleash.io/nuno/api/frontend',
  clientKey:
    'default:development.bfd7db711054fcac8354d6622a3f1e4b3c1ca4c648cec28ad1fc8a28',
  refreshInterval: 2,
  appName: 'feature-wrapper'
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>
)
