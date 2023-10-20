<script lang="ts">
  import Image from '$lib/components/image.svelte';
  import type { Picture } from '$lib/types';

  export let src: Picture;
  export let alt: string;

  export let caption = '';
</script>

<figure class={`card group relative my-4 block h-96 w-96 text-center ${$$props.class ? $$props.class : ''}`}>
  <div class="absolute z-10 flex h-full w-full items-center justify-center rounded-lg opacity-0 backdrop-blur-sm backdrop-brightness-50 transition-all duration-300 group-hover:opacity-100">
    <p class="text-lg font-semibold text-white">{alt}</p>
  </div>
  <Image {src} {alt} class="relative z-0 h-full w-full rounded-lg object-cover object-center shadow-md" />
  <figcaption class="sr-only text-xs text-neutral-500/40">{caption}</figcaption>
</figure>
