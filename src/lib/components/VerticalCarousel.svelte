<script lang="ts">
  import gsap from 'gsap/dist/gsap';
  import { verticalLoop } from '$lib/utils/verticalLoop';
  import { onMount } from 'svelte';
  export let reversed = false;
  export let speed = 0.3;
  export let id: string;
  onMount(() => {
    let ctx: gsap.Context;
    // setTimeout needed. For some reason, without it the Deepdive slide animation is not working
    setTimeout(() => {
      ctx = gsap.context((self) => {
        verticalLoop(`#${id} .card`, {
          repeat: -1,
          draggable: false,
          paused: false,
          center: false,
          speed,
          reversed
        });
      });
    }, 0);

    return () => ctx.revert(); // <- Cleanup!
  });

  export let text: string;
</script>

<div class="relative m-auto h-full w-96">
  <div class="relative z-0 h-screen w-96 items-center overflow-hidden">
    <div class="absolute flex h-full flex-col items-center justify-center">
      <div class="z-10 h-full w-96 backdrop-grayscale" />
      <div class="relative z-20 h-full w-full text-center">
        <div class="h-[23rem] w-96 rounded-md border-4 border-white" />
        <p class="absolute left-1/2 mt-2 -translate-x-1/2 text-center text-xs text-neutral-500/40">{text}</p>
      </div>
      <div class="z-10 h-full w-96 backdrop-grayscale" />
    </div>
    <div {id} class="absolute block h-screen w-96 overflow-hidden">
      <slot />
    </div>
  </div>
</div>
