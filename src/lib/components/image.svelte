<script lang="ts">
  import type { Picture } from '$lib/types';
  export let src: Picture;
  export let alt = '';

  export let draggable: boolean = false;

  export let decoding: 'async' | 'sync' | 'auto' = 'async';

  export let loading: 'lazy' | 'eager' = 'lazy';

  let classes = '';
  export { classes as class };
</script>

<picture class="pointer-events-none">
  {#each Object.entries(src.sources) as [format, images]}
    {@const sizes = images?.split(',').map((img) => img.match(/(\d+)w/)?.[1])}
    <source srcset={images} type={'image/' + format} sizes={sizes.map((size) => `(max-width: ${size}px) ${size}px`).join(', ')} />
  {/each}

  <img src={src.img.src} {alt} class={classes} {loading} {decoding} {draggable} width={src.img.w} height={src.img.h} />
</picture>
