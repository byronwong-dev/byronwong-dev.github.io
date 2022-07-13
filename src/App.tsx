import Layout from './pages/layout/default'
import { navigations } from './routes'

function App() {

  return (
    <div className="App">
      <Layout navigations={navigations}>
      </Layout>
    </div>
  )
}

export default App
