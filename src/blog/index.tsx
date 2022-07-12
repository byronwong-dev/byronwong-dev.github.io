import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom"


const Blog = () => {

  const params = useParams()

  const slug = params.slug


  return <>
  <div>
    slug is {slug}
  </div>
  <ReactMarkdown children=""></ReactMarkdown>
  </>

}

export default Blog