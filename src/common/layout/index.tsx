import { PropsWithChildren } from "react"
import Navigation from "./navigation"
import { MenuItem } from "./types"


interface LayoutProp extends PropsWithChildren {
  menu: MenuItem[] 
}

const Layout = (prop: LayoutProp) => {

  return <div className="w-full h-screen transition-colors duration-500 bg-white dark:bg-gray-800">
    <div className="py-5 m-auto md:max-w-5xl">
    <Navigation className="mt-8" menu={prop.menu} />
    {prop.children}
    </div>
  </div>
}

export default Layout