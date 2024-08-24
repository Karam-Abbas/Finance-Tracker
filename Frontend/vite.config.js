import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      "/user":"http://localhost:3000",
      "/income":"http://localhost:3000",
      "/expenses":"http://localhost:3000",
      "/index":"http://localhost:3000",
    },
  },
})
