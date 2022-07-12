import { PropsWithChildren } from "react"

const Header = (prop: PropsWithChildren) => {

  return (<div>
    {prop.children}
  </div>)
}

export default Header