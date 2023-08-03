<script>
  export let style = '';
</script>

<div class={`relative overflow-hidden rounded-none transition-all duration-300 md:rounded-3xl ${$$props.class}`} {style}>
  <slot />
</div>
