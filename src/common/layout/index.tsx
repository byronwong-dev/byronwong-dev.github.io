import { PropsWithChildren } from "react"
import Navigation from "./navigation"
import { RouteLink } from "../types"


interface LayoutProp extends PropsWithChildren {
  routes: RouteLink[] 
}

const Layout = (prop: LayoutProp) => {

  return <div className="w-full h-screen transition-colors duration-500 bg-white dark:bg-gray-800">
    <div className="py-5 m-auto md:max-w-3xl">
    <Navigation className="mt-8" routes={prop.routes} />
    {prop.children}
    </div>
  </div>
}

export default Layout