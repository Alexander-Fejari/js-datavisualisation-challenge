// vite.config.js
import {dirname, resolve} from "path";
import {fileURLToPath} from 'url'; // Importez la fonction fileURLToPath
import {defineConfig} from 'vite';

const __filename = fileURLToPath(import.meta.url); // Obtenez le nom du fichier en cours
const __dirname = dirname(__filename); // Obtenez le répertoire en cours
const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");



export default defineConfig({
    base: "/js-datavisualisation-challenge/",
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
            },
            format: 'esm',
        },
    },
});