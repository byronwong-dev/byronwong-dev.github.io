import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import hljs from 'highlight.js'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import mdEmojiPlugin from 'markdown-it-emoji'
import mdContainerPlugin from 'markdown-it-container'
import md from 'markdown-it'

const mdIt = md({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const res = hljs.highlight(str, { language: lang }).value;
        return res
      } catch (__) { }
    }
    return ''; // use external default escaping
  }
})
  .use(mdEmojiPlugin)
  .use(mdContainerPlugin, 'emphasize')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin({
    mode: [Mode.HTML],
    markdownIt: mdIt
  }), ViteYaml()]
})
