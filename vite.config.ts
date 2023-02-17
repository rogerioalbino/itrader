import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  resolve: {
    alias: [
      { find: "@app", replacement: path.resolve(__dirname, "./src/App.tsx") },
      { find: "@router", replacement: path.resolve(__dirname, "./src/routers") },
      { find: "@theme", replacement: path.resolve(__dirname, "./src/shared/theme") },
      { find: "@layout", replacement: path.resolve(__dirname, "./src/shared/layout/index.tsx") },
      { find: "@views", replacement: path.resolve(__dirname, "./src/views") },
      { find: "@component", replacement: path.resolve(__dirname, "./src/shared/components") },
      { find: "@feature", replacement: path.resolve(__dirname, "./src/features") },
      { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks") },
      { find: "@store", replacement: path.resolve(__dirname, "./src/store/index.ts") },
      
    ]
  },
  plugins: [react(), tsconfigPaths()]
})
