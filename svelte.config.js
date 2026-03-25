import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // defaults to rune mode for the project. Can be removed in svelte 6.
    runes: true
  },
  kit: { adapter: adapter() }
};

export default config;
