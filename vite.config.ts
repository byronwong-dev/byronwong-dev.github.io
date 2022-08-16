import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import md from 'markdown-it'
import hljs from 'highlight.js'

// TODO: continue
const markdownIt = md({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) { }
    }

    return ''; // use external default escaping
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin({
    mode: [Mode.REACT, Mode.HTML],
    markdownIt
  })]
})
