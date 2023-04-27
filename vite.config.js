import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars';
import layout from './src/data/layout.json'

const SRC_DIR = __dirname + '/src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pugPlugin(
        { localImports: true, pretty: true }
    ),
    handlebars({
      partialDirectory: resolve(SRC_DIR, 'partials'),
      context: {...layout}
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        // "app.css": resolve(__dirname, 'src/scss/app.scss'),
        main: resolve(__dirname, 'index.html'),
        signin: resolve(__dirname, 'signin.html'),
        signup: resolve(__dirname, 'signup.html'),
        training: resolve(__dirname, 'training.html'),
        "service-training": resolve(__dirname, 'service-training.html'),
        news: resolve(__dirname, 'news.html'),
        newsDetail: resolve(__dirname, 'news-detail.html'),
        member: resolve(__dirname, 'member.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})
