import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: (url) =>
        new URLSearchParams({
          format: 'avif;webp;' + url.pathname.substring(url.pathname.lastIndexOf('.') + 1),
          w: '500;900;1200',
          as: 'picture',
          metadata: 'true'
        })
    })
  ]
});
