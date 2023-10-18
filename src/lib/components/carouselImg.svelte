<script lang="ts">
  import Image from '$lib/components/image.svelte';
  import type { Picture } from '$lib/types';

  export let src: Picture;
  export let alt: string;

  export let caption = '';
</script>

<figure class={`card relative block h-96 w-96 py-4 text-center ${$$props.class ? $$props.class : ''}`}>
  <Image {src} {alt} class="h-full w-full rounded-lg object-cover object-center shadow-md" />
  <figcaption class="sr-only text-xs text-neutral-500/40">{caption}</figcaption>
</figure>
