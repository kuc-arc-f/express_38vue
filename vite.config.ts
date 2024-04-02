import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import buildCommon from './src/lib/buildCommon';
const directoryPath = './src/client';
// https://vitejs.dev/config/
//@ts-ignore
export default defineConfig(async({ mode }) => {
  const entryFiles = await buildCommon.getEntryItems(directoryPath);
//console.log(entryFiles);
  return {
    plugins: [vue()],
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    build: {
      lib: {
        entry: entryFiles,
        formats: ['es'],
        fileName: '[name]',
      },
      rollupOptions: {
        output: {
          dir: './public/static'
        }
      },
      emptyOutDir: false,
      copyPublicDir: false
    }
  }
})