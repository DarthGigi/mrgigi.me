<script lang="ts">
  import { Transition } from '@rgossiaux/svelte-headlessui';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let isDeepDiveOpen = false;
</script>

<Transition show={isDeepDiveOpen} class="z-[9995] [inset-inline-start:0] fixed top-0 overflow-x-scroll w-full h-full" leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*1_+_10vw)]" enterTo="translate-x-0">
  <div
    class="relative w-full h-screen flex gap-y-6 overflow-x-auto overflow-y-hidden p-14"
    on:mousewheel={(e) => {
      e.currentTarget.scrollLeft += e.deltaY * 0.5;
      dispatch('scroll', e.currentTarget.scrollLeft / (e.currentTarget.scrollWidth - e.currentTarget.clientWidth));
    }}
  >
    <slot />
  </div>
  <div class="w-full absolute left-0 bottom-5 flex justify-center items-center flex-row-reverse">
    <slot name="button" />
    <slot name="progress" />
  </div>
</Transition>
