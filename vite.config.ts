import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'avif;webp;jpeg;png',
        w: '320;640;1280;1440;1920;2560;3840',
        as: 'picture'
      })
    })
  ]
});
