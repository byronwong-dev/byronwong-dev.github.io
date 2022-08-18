import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getFileNameBySlug } from '../lib/helper'

const Blog = () => {

  const { slug } = useParams()
  const navigate = useNavigate()

  if (!slug) {
    navigate('/404')
   }

  const [ renderedHtml, setRenderedHtml ] = useState('')

  useEffect(() => {
    async function generateHtml () {

      const filename = await getFileNameBySlug('blogs', slug)
      if (!filename) {
        navigate('/404')
      }
      const { html } = await import(`../contents/${filename}.md`)
      setRenderedHtml(html)
    }
    generateHtml()
  }, [slug])

  return <article className="px-4 markdown-body" dangerouslySetInnerHTML={{ __html: renderedHtml }} />

}

export default Blog