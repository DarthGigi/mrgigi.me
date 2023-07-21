<script>
  export let isDeepDiveOpen = false;
</script>

<button type="button" class={`relative overflow-hidden hover:scale-105 transition-all duration-300 rounded-3xl border-2 border-neutral-700/40 ${$$props.class}`} on:click={() => (isDeepDiveOpen = true)}>
  <slot />
</button>
