import { useState } from "react"
import SvgNight from "../../assets/icons/components/svgNight"
import SvgSunlight from "../../assets/icons/components/svgSunlight"

const ThemeToggler = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(() => { return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)})
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (isDarkTheme) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    
  }

  return <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
    {
      isDarkTheme && <SvgSunlight className="w-8 h-8 text-white"></SvgSunlight>
    }
    {
      !isDarkTheme && <SvgNight className="w-8 h-8 text-gray-700"></SvgNight>
    }
  </button>
}

export default ThemeToggler
