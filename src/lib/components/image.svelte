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

<picture>
  {#each Object.entries(src.sources) as [format, sources]}
    <source srcset={sources} type={'image/' + format} />
  {/each}

  <img src={src.img.src} {alt} class={classes} {loading} {decoding} {draggable} width={src.img.w} height={src.img.h} />
</picture>
