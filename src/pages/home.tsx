import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadContentMap } from '../lib/helper'

const Home = () => {

  const [pages, setPages] = useState<any>()

  useEffect(() => {

    async function getHomePageListings () {
      const maps = (await loadContentMap()).default.blogs as Record<string, {title: string, filename: string, slug: string}>
      const p = []
      for (const [_, entry] of Object.entries(maps)) {
        p.push(<Link key={entry.filename} to={`/blog/${entry.slug}`} className="px-4 markdown-body">{ entry.title }</Link>)
      }
      setPages(p)
    }

    getHomePageListings()

  }, [])

  return <div>
    {pages}
  </div>

}

export default Home