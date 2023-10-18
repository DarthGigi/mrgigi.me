<script>
  export let src = '';
  export let alt = '';
  export let caption = '';
</script>

<figure class={`card relative block h-96 w-96 py-4 text-center ${$$props.class ? $$props.class : ''}`}>
  <img loading="lazy" {src} class="h-full w-auto rounded-md object-cover" {alt} />
  <figcaption class="sr-only text-xs text-neutral-500/40">{caption}</figcaption>
</figure>
