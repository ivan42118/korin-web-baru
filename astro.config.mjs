import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// PT Korin Technomic — static company profile
export default defineConfig({
  site: 'https://ptkorintechnomic.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
