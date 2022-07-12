import { Route, Routes } from "react-router-dom"
import About from "../about"
import Blog from "../../blog"
import Error from "./error"


const NavigationOutlet: React.FC = () => {

  return <>
    <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog/:slug" element={<Blog />}></Route>
        <Route path="*" element={<Error />}></Route>
    </Routes>
  </>

}

export default NavigationOutlet