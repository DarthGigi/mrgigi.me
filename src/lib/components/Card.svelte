<script>
  export let isDeepDiveOpen = false;
</script>

<button type="button" class={`relative  overflow-hidden rounded-none transition-all duration-300 md:rounded-3xl md:border-2 md:border-neutral-700/40 lg:hover:scale-105 ${$$props.class}`} on:click={() => (isDeepDiveOpen = true)}>
  <slot />
</button>
