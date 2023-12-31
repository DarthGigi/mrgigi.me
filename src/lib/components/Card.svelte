<script lang="ts">
  export let isDeepDiveOpen = false;
  export let tabindex = 0;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'Space') {
      isDeepDiveOpen = true;
    }
  }
</script>

<div class={`relative m-0 cursor-pointer overflow-hidden rounded-none border-y-2  border-neutral-700/40 p-0 transition-all duration-300 md:rounded-3xl md:border-2 lg:hover:scale-105 ${$$props.class}`} on:click={() => (isDeepDiveOpen = true)} on:keydown={(e) => handleKeyDown(e)} {tabindex} role="button" aria-label="Deep dive">
  <slot />
</div>
