import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH is set by the GitHub Pages workflow, because the site lives under /<repo-name>/ there.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
