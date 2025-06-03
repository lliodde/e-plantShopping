import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/lliodde/e-plantShopping/', // ✅ Correct base path for GitHub Pages deployment
});
