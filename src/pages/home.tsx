import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadContentMap } from '../lib/helper'
import { YamlContentItem } from './types'

const Home = () => {

  const [pages, setPages] = useState<any>()

  useEffect(() => {

    async function getHomePageListings () {
      const maps = (await loadContentMap()).default.blogs as Record<string, YamlContentItem>
      const p = []
      for (const [_, entry] of Object.entries(maps).sort((a, b) => {
        return Date.parse(a[1].isoString) < Date.parse(b[1].isoString) ? 1 : -1;
      })) {
        p.push(<Link key={entry.filename} to={`/journal/${entry.slug}`} className="markdown-body">
          <div className="flex flex-col gap-x-4 gap-y-2 sm:items-center sm:flex-row">
            <span className="text-base md:text-lg">
              { entry.title }
            </span>
            <div className="hidden w-4 -mt-4 border-b border-white sm:flex" style={{height: '1rem'}}></div>
          <span className="text-xs md:text-sm">{ entry.createdAt }</span>
          </div>
        </Link>)
      }
      setPages(p)
    }

    getHomePageListings()

  }, [])

  return <div>
    <div className="flex flex-col px-4 gap-y-4">
      <h1 className="text-xl font-semibold md:text-2xl font-display">Opinions</h1>
      {pages}
    </div>
  </div>

}

export default Home