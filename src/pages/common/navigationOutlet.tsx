import { useRoutes } from "react-router-dom"
import { routes } from "../../routes"

const NavigationOutlet: React.FC = () => {
  const router = useRoutes(routes)
  return router
}

export default NavigationOutlet