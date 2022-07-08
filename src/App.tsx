import Layout from './common/layout'
import { routes } from './routes'

function App() {

  return (
    <div className="App">
      <Layout menu={routes}>
        <div>this is a header</div>
      </Layout>
    </div>
  )
}

export default App
