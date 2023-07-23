<script lang="ts">
  import { Transition } from '@rgossiaux/svelte-headlessui';
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  export let isDeepDiveOpen = false;
</script>

<Transition show={isDeepDiveOpen} class="fixed top-0 z-[9995] h-screen w-full overflow-x-scroll [inset-inline-start:0]" leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*1_+_10vw)]" enterTo="translate-x-0">
  <div
    class={`relative flex h-full w-full gap-y-6 overflow-x-auto overflow-y-hidden bg-black ${$$props.class}`}
    on:mousewheel={(e) => {
      e.currentTarget.scrollLeft += e.deltaY * 0.5;
      dispatch('scroll', e.currentTarget.scrollLeft / (e.currentTarget.scrollWidth - e.currentTarget.clientWidth));
    }}
  >
    <slot />
  </div>
  <div class="absolute bottom-5 left-0 flex w-full flex-row-reverse items-center justify-center">
    <slot name="button" />
    <slot name="progress" />
  </div>
</Transition>
