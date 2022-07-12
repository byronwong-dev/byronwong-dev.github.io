import { PropsWithChildren } from "react"
import Navigation from "../common/navigation"
import { RouteLink } from "../common/types"
import NavigationOutlet from "../common/navigationOutlet"
import { Outlet } from "react-router-dom"


interface LayoutProp extends PropsWithChildren {
  routes: RouteLink[] 
}

const Layout = (prop: LayoutProp) => {

  return <div className="w-full h-screen transition-colors duration-500 bg-white dark:bg-gray-800">
    <div className="flex flex-col h-full py-5 m-auto md:max-w-3xl">
      <Navigation className="mt-8" routes={prop.routes} />
      <main className="flex flex-col h-full mt-4 dark:text-gray-200 md:mt-8">
        <NavigationOutlet />
        <Outlet></Outlet>
      </main>
    </div>
  </div>
}

export default Layout