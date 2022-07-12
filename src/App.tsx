import Layout from './pages/layout'
import { routes } from './routes'

function App() {

  return (
    <div className="App">
      <Layout routes={routes}>
      </Layout>
    </div>
  )
}

export default App
