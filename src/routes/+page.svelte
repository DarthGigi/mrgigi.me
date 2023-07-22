<script lang="ts">
  import { Transition } from '@rgossiaux/svelte-headlessui';
  import Card from '$lib/components/Card.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import ProgressBar from '$lib/components/progressBar.svelte';
  import lozad from 'lozad';
  import { onMount } from 'svelte';
  import Image from 'svelte-image';
  const observer = lozad('.lozad', {
    rootMargin: '10px 0px',
    threshold: 0.3,
    enableAutoReload: true
  });
  onMount(() => {
    observer.observe();
  });

  let isDeepDiveOpen = false;
  let scrollProgress = 0;
</script>

<Transition unmount={false} show={!isDeepDiveOpen} class="flex h-screen items-center justify-center transition-transform duration-1000" leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*-1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*-1_+_10vw)]" enterTo="translate-x-0">
  <div class="grid w-full max-w-[980px] auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-[21rem_11rem_21rem]">
    <Card class="group col-span-2 row-span-2 flex items-center justify-center bg-black  ">
      <div class="absolute top-0 -z-10 h-0 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] transition-all duration-300 ease-in group-hover:h-full" />
      <div class="flex h-full w-full flex-col">
        <h2 class="relative mt-6 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] bg-clip-text text-6xl font-semibold text-transparent transition-colors delay-100 duration-300 group-hover:text-black">Meet Me.</h2>
        <Image loading="eager" src="/assets/images/gigi/Gigi3.png" alt="Waving Memoji" />
      </div>
    </Card>
    <Card class="group col-span-1 row-span-1 flex items-center justify-center bg-black  ">
      <div class="flex h-full w-full flex-col">
        <h3 class="relative flex h-full w-full flex-col items-center justify-between py-6 text-4xl font-semibold">
          <pre class="relative inline-block -translate-x-full overflow-hidden bg-black text-white text-opacity-20 transition-all duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">&lt;h3&gt;</pre>
          <span class="relative inline-block -translate-x-1/2 overflow-hidden bg-black text-white text-opacity-20 transition-all delay-100 duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-100 before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">Pro</span>
          <span class="relative inline-block translate-x-0 overflow-hidden bg-black text-white text-opacity-20 transition-all delay-200 duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-200 before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">gram</span>
          <span class="relative inline-block translate-x-1/2 overflow-hidden bg-black text-white text-opacity-20 transition-all delay-300 duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-300 before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">ing</span>
          <pre class="relative inline-block translate-x-full overflow-hidden bg-black text-white text-opacity-20 transition-all delay-[400ms] duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-[400ms] before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">&lt;/h3&gt;</pre>
        </h3>
      </div>
    </Card>
    <Card bind:isDeepDiveOpen class="group col-span-1 row-span-1 flex items-center justify-center border-none bg-black  ">
      <div class="flex h-full w-full flex-col">
        <video muted playsinline loop autoplay preload="metadata" class="lozad h-full w-full rounded-lg object-cover object-center active:!pointer-events-none" data-poster="/assets/images/jpg/lettherebelife_thumbnail.jpg">
          <source data-src="/assets/videos/webm/lettherebelife.webm" type="video/webm" />
          <source data-src="/assets/videos/mp4/lettherebelife.mp4" type="video/mp4" />
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

  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen bind:scrollProgress class="bg-orange-500" />
  <ProgressBar slot="progress" bind:scrollProgress class="from-white via-orange-400" />
</Deepdive>
