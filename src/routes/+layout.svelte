<script lang="ts">
  import { browser, dev } from '$app/environment';
  import { page } from '$app/stores';
  import { webVitals } from '$lib/vitals';
  import { inject } from '@vercel/analytics';
  import '../app.postcss';
  inject({ mode: dev ? 'development' : 'production' });

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    });
  }
</script>

<svelte:head>
  <title>Gigi's Useless Website</title>
  <meta name="description" content="This is my portfolio website. Made with SvelteKit and TailwindCSS." />
</svelte:head>

<slot />
