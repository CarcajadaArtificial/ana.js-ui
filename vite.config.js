import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/Atoms/index.ts'),
      name: 'Ana',
      fileName: (format) => `ana.${format}.js`,
    }
  },
  plugins: [dts()]
})
