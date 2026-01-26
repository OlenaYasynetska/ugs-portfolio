import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Настройка для GitHub Pages (если используется)
  base: '/',
  build: {
    // Копируем 404.html в dist при сборке
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './public/404.html'
      }
    }
  }
})
