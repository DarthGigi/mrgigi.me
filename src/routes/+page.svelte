<script lang="ts">
  import { Transition, TransitionChild } from '@rgossiaux/svelte-headlessui';
  import Card from '$lib/components/Card.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import ProgressBar from '$lib/components/progressBar.svelte';
  import { scale } from 'svelte/transition';

  let isDeepDiveOpen = false;
  let scrollProgress = 0;
  let animation = true;

  setTimeout(() => {
    animation = false;
  }, 500);
</script>

<Transition show={!isDeepDiveOpen} class="flex h-screen items-center justify-center transition-transform duration-1000" leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*-1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*-1_+_10vw)]" enterTo="translate-x-0">
  <div class="grid w-full max-w-[980px] auto-rows-[18rem] grid-cols-[21rem_11rem_21rem] gap-5">
    <Card bind:isDeepDiveOpen class="col-span-2 row-span-2 flex items-center justify-center border-none bg-black">
      <div class="h-full w-full">
        {#if animation}
          <h2 class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b bg-clip-text text-6xl font-semibold text-black/70" out:scale={{ duration: 1000, start: 10, opacity: 0 }}>Meet <br /> The Universe.</h2>
        {:else if !animation}
          <h2 class="absolute bottom-3 left-1/2 w-full -translate-x-1/2 text-white/70" in:scale={{ delay: 1000, duration: 1000, start: 0.5, opacity: 0 }}>Meet The Universe.</h2>
        {/if}

        <video id="lettherebelife" autoplay loop playsinline disablepictureinpicture poster="https://mrgigi.me/assets/images/jpg/lettherebelife_thumbnail.jpg" muted class="h-full w-full rounded-lg object-cover object-center active:!pointer-events-none">
          <source data-src="https://mrgigi.me/assets/videos/webm/lettherebelife.webm" type="video/webm" src="https://mrgigi.me/assets/videos/webm/lettherebelife.webm" />
          <source data-src="https://mrgigi.me/assets/videos/mp4/lettherebelife.mp4" type="video/mp4" src="https://mrgigi.me/assets/videos/mp4/lettherebelife.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  </div>
</Transition>

<Deepdive
  bind:isDeepDiveOpen
  on:scroll={(e) => {
    scrollProgress = e.detail;
  }}
>
  <div class="flex h-full shrink-0 flex-col first:pl-8 last:pr-8">
    <h2 class="ml-12 mt-5 self-start text-6xl font-semibold text-neutral-200">Meet The Universe</h2>
    <div class="flex h-full items-center">
      <img class="pointer-events-none block aspect-video h-[70%] w-auto" src="https://i.vgy.me/hbjfrj.png" alt="TON-618" />
      <p class="ml-36 max-w-sm text-lg font-semibold text-neutral-600"><span class="text-neutral-400">TON 618 (short for Tonantzintla 618) is a hyperluminous, broad-absorption-line, radio-loud quasar and Lyman-alpha blob </span> located near the border of the constellations Canes Venatici and Coma Berenices, with the projected comoving distance of approximately 18.2 billion light-years from Earth. <span class="text-neutral-400">It possesses one of the most massive black holes ever found,</span> at 40 billion M<sub>☉</sub>.</p>
    </div>
  </div>
  <div class="flex h-full w-screen shrink-0 flex-col last:pr-8">
    <div class="flex h-full items-center">
      <img class="pointer-events-none relative -z-10 -ml-72 block aspect-video h-[80%] w-auto" src="https://i.vgy.me/zg6eYG.jpg" alt="Stephenson 2-18" />
      <p class="max-w-sm text-lg font-semibold text-neutral-600"><span class="text-neutral-400">Stephenson 2-18 (St2-18, also known as Stephenson 2-18 and RSGC2-18) is a red supergiant (RSG) or red hypergiant (RHG) star.</span> It is close to, and a possible member of, the open cluster Stephenson 2. <span class="text-neutral-400">It is about 6,000 parsecs (20,000 ly) away from Earth in the constellation of Scutum and </span> is one of the largest known stars.</p>
    </div>
  </div>

  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen bind:scrollProgress class="bg-white" />
  <ProgressBar slot="progress" bind:scrollProgress class="from-white via-orange-400" />
</Deepdive>
