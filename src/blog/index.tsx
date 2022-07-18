// import { readFileSync } from "fs"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
// import { useParams } from "react-router-dom"


const Blog = () => {

  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| something interesting| indeed |
`

  return <>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </>
  

}

export default Blog