import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// PT Korin Technomic — static company profile
export default defineConfig({
  site: 'https://ptkorintechnomic.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
