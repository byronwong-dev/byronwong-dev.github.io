import { Link } from "react-router-dom"
import ThemeToggler from "./components/themeToggler"
import { MenuItem } from "./types"

type Props = {
  className?: string
  menu: MenuItem[]
}

const Navigation: React.FC<Props> = (props) => {
  return <nav {...props}>
    <ThemeToggler />
      {
        props.menu.map((m: MenuItem) => {
          return <Link to={m.path} className="text-white">
            {m.name}
          </Link>
        })
      }
  </nav>
}

export default Navigation
