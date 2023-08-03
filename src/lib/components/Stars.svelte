<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Hyperdrive mounted');
    const canvas = document.querySelector('#hyperdrive') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
  });
</script>

<canvas aria-hidden="true" class="relative inset-0 z-0 h-full w-full transition-opacity duration-1000" id="hyperdrive" style="mix-blend-mode: screen;" />
