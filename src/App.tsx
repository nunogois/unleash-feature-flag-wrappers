import './App.css'
import { DemoApp } from './components/DemoApp'
import { Metrics } from './components/Metrics'
import { Layout } from './layouts/Layout'

export const App = () => (
  <Layout>
    <DemoApp />
    <Metrics />
  </Layout>
)
