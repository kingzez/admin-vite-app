import path from 'path'
import type { UserConfig } from 'vite'
import { sassPlugin } from './plugins/sassPlugin'

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

const config: UserConfig = {
  alias: {
    // '@': ,
  },
  minify: false,
  plugins: [sassPlugin],
}

export default config
