<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { cubicInOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let isDeepDiveOpen = false;
</script>

{#if isDeepDiveOpen}
  <div class="fixed top-0 z-[9995] h-svh w-full overflow-x-scroll will-change-transform [inset-inline-start:0]" transition:fly={{ duration: 1000, easing: cubicInOut, x: '110dvw' }} on:introend={() => dispatch('introend')}>
    <div
      class={`relative flex h-full w-full gap-y-6 overflow-x-auto overflow-y-hidden bg-black ${$$props.class}`}
      on:wheel|passive={(e) => {
        e.currentTarget.scrollLeft += e.deltaY * 0.5;
        dispatch('scroll', e.currentTarget.scrollLeft / (e.currentTarget.scrollWidth - e.currentTarget.clientWidth));
      }}>
      <slot />
    </div>
    <div class="absolute bottom-5 left-0 flex w-full flex-row-reverse items-center justify-center">
      <slot name="button" />
      <slot name="progress" />
      <slot name="extra" />
    </div>
  </div>
{/if}
