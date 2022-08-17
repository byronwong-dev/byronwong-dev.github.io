import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
  
  const filename = '20220718-case-study'

  const [ renderedHtml, setRenderedHtml ] = useState('')

  useEffect(() => {
    async function generateHtml () {
      const { html } = await import(`../contents/${filename}.md`)
      setRenderedHtml(html)
    }
    generateHtml()
  }, [filename])

  return <article className="px-4 markdown-body" dangerouslySetInnerHTML={{ __html: renderedHtml }} />

}

export default Blog