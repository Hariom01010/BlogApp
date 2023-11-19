import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build:{
    rollupOptions:{
      input:{
        main:"./index.html",
        about:resolve(__dirname,"src/pages/About.html"),
        posts:resolve(__dirname,"src/pages/AddPost.html"),
        "add-post":resolve(__dirname,"src/pages/AddPost.html"),
        login:resolve(__dirname,"src/pages/Login.html"),
        signup:resolve(__dirname,"src/pages/Signup.html"),
        verify:resolve(__dirname,"src/pages/Verify.html")
      }
    }
  }
})
