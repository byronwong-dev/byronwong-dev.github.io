import { Link } from "react-router-dom"
import ThemeToggler from "../components/themeToggler"
import { RouteLink } from "../types"

type Props = {
  className?: string
  routes: RouteLink[]
}

const Navigation: React.FC<Props> = (props) => {
  return <nav className={"flex justify-around px-4 " + props.className}>
    <ThemeToggler />
      {
        props.routes.map((m: RouteLink) => {
          return <Link to={m.disabled ? '#' : m.path} key={m.path + m.name} className={"font-display " + (m.disabled ? "text-gray-400 dark:text-gray-500" : "text-gray-800 dark:text-white")}>
            {m.name}
          </Link>
        })
      }
  </nav>
}

export default Navigation
