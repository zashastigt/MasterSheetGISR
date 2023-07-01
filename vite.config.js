import { resolve }  from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    base: '/master_sheet_gisr/',
    root,
    plugins: [react()],
    build: {
        assetsInlineLimit: 0,
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                genshin: resolve(root, 'Genshin', 'index.html'),
                starRail: resolve(root, 'StarRail', 'index.html'),
            }
        }
    }
})
