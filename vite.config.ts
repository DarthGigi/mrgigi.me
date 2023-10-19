import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'avif;webp;jpeg',
        w: '640;1280;1920',
        as: 'picture'
      })
    })
  ]
});
