import { PropsWithChildren } from "react"

const Layout = (prop: PropsWithChildren) => {

  return <div className="text-red-500">
    {prop.children}
  </div>
}

export default Layout