<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Trafficlight from '$lib/components/Trafficlight.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import Window from '$lib/layout/Window.svelte';
  import { Transition } from '@rgossiaux/svelte-headlessui';
  import lozad from 'lozad';
  import { onMount } from 'svelte';
  import { Highlight } from 'svelte-highlight';
  import markdown from 'svelte-highlight/languages/markdown';
  import 'svelte-highlight/styles/github-dark.css';
  import ts from 'svelte-highlight/languages/typescript';
  import Banner from '$lib/components/Banner.svelte';
  import gsap from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let lettherebelife: HTMLVideoElement;
  let macosWindow;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    lozad('.lozad', {
      rootMargin: '10px 0px',
      threshold: 0.3,
      enableAutoReload: true
    }).observe();
    lettherebelife = document.getElementById('lettherebelife') as HTMLVideoElement;

    const ctx = gsap.context((self) => {
      let mm = gsap.matchMedia();
      gsap.set('.macoswindow', { '--gradient-start': '0%', '--gradient-end': '40%' });
      mm.add('(min-width: 768px)', () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            markers: false,
            start: '1% top',
            end: '35% 30%',
            scrub: true
          }
        });

        tl.fromTo(
          '.macoswindow',
          {
            y: 60,
            '--gradient-start': '0%',
            '--gradient-end': '50%',
            duration: 1
          },
          {
            y: 0,
            '--gradient-start': '0%',
            '--gradient-end': '65%',
            duration: 1
          }
        );
      });
    });

    return () => ctx.revert(); // <- Cleanup!
  });

  let isDeepDiveAboutOpen = false;
  let isDeepDiveCodingOpen = false;
  let isDeepDiveSpaceOpen = false;
</script>

<Transition unmount={false} show={!isDeepDiveAboutOpen && !isDeepDiveCodingOpen && !isDeepDiveSpaceOpen} leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*-1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*-1_+_10vw)]" enterTo="translate-x-0">
  <div class="grid max-w-[980px] h-auto justify-center mx-auto py-4 auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-[21rem_11rem_21rem]">
    <Card bind:isDeepDiveOpen={isDeepDiveAboutOpen} class="group row-span-2 flex items-center justify-center bg-black md:col-span-2">
      <div class="absolute top-0 -z-10 h-0 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] transition-all duration-300 ease-in group-hover:h-full" />
      <div class="flex h-full w-full flex-col">
        <h2 class="relative mt-6 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] bg-clip-text text-6xl font-semibold text-transparent transition-colors delay-100 duration-300 group-hover:text-black">Meet Me.</h2>
        <img src="/assets/images/gigi/Gigi3.png" alt="Waving Memoji" />
      </div>
    </Card>
    <Card bind:isDeepDiveOpen={isDeepDiveCodingOpen} class="group row-span-1 flex h-full w-full flex-col items-center justify-center rounded-none !border-0 bg-black transition-all duration-300 md:col-span-1 md:overflow-visible">
      <div class="relative flex h-full w-full flex-col items-start justify-between border-2 border-x-0 border-b-0 border-neutral-700/40 px-4 pt-6 text-4xl font-semibold transition-all duration-200 group-hover:translate-x-12 group-hover:rotate-[-45deg] group-hover:skew-x-[12deg] md:rounded-t-3xl md:border-x-2">
        <pre class="relative block overflow-hidden bg-black text-white text-opacity-20 transition-all duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">&lt;h3&gt;</pre>
        <div class="relative flex w-full flex-col items-center justify-center">
          <span class="relative block -translate-x-full overflow-hidden bg-black text-white text-opacity-20 transition-all delay-300 duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-300 before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">Pro</span>
        </div>
      </div>
      <div class="relative flex h-full w-full flex-col items-center justify-between border-neutral-700/40 text-4xl font-semibold transition-all duration-200 group-hover:-translate-x-32 group-hover:rotate-[32deg] group-hover:skew-x-[-32deg] md:border-x-2">
        <span class="relative block overflow-hidden bg-black text-white text-opacity-20 transition-all delay-200 duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-200 before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">gram</span>
        <span class="relative block translate-x-1/2 overflow-hidden bg-black text-white text-opacity-20 transition-all delay-300 duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-300 before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">ming</span>
      </div>
      <div class="relative flex h-full w-full flex-row items-center justify-end border-2 border-x-0 border-t-0 border-neutral-700/40 px-4 text-4xl font-semibold transition-all duration-200 group-hover:translate-x-24 group-hover:rotate-[24deg] group-hover:skew-x-[24deg] md:rounded-b-3xl md:border-x-2">
        <pre class="relative block overflow-hidden bg-black text-white text-opacity-20 transition-all delay-[400ms] duration-300 ease-linear before:absolute before:left-0 before:block before:h-full before:w-0 before:bg-purple-600 before:mix-blend-darken before:transition-all before:delay-[400ms] before:duration-300 before:ease-linear before:content-[''] group-hover:text-purple-400 group-hover:text-opacity-100 group-hover:before:w-full">&lt;/h3&gt;</pre>
      </div>
    </Card>
    <Card bind:isDeepDiveOpen={isDeepDiveSpaceOpen} class="group row-span-1 flex items-center justify-center border-none bg-[#06273b] md:col-span-1">
      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="flex h-full w-full flex-col"
        on:mouseover={() => {
          if (lettherebelife) {
            lettherebelife.play();
          }
        }}
        on:mouseleave={() => {
          setTimeout(() => {
            if (lettherebelife) {
              lettherebelife.pause();
            }
          }, 1000);
        }}>
        <video
          id="lettherebelife"
          muted
          playsinline
          loop
          preload="metadata"
          class="lozad h-full w-full object-cover object-center active:!pointer-events-none md:rounded-lg"
          data-poster="/assets/images/jpg/lettherebelife_thumbnail.jpg"
          on:loadedmetadata={(e) => {
            // set start time to 1/3 of the video
            e.target.currentTime = 22;
          }}>
          <source data-src="/assets/videos/webm/lettherebelife.webm" type="video/webm" />
          <source data-src="/assets/videos/mp4/lettherebelife.mp4" type="video/mp4" />
        </video>
        <!-- Sound button for the video -->

        <button
          type="button"
          class="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 transform text-white opacity-0 transition-all delay-500 duration-300 group-hover:-translate-y-3 group-hover:opacity-20"
          on:click={() => {
            if (lettherebelife.muted) {
              lettherebelife.muted = false;
            } else {
              lettherebelife.muted = true;
            }
          }}>
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {#if lettherebelife}
              {#if lettherebelife.muted}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              {/if}
            {/if}
          </svg>
        </button>
      </div>
    </Card>
    <Banner class="rounded-none row-span-1 !overflow-visible flex items-center justify-center border-none bg-[url('/assets/images/pro-container-image.png')] bg-cover bg-center  col-span-full md:col-span-full">
      <Window placeholder="My Projects" class="h-2/3 md:h-auto overflow-hidden md:overflow-visible  md:left-1/2 md:translate-y-1/2 md:-translate-x-1/2 md:absolute macoswindow" style="-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) var(--gradient-start), rgba(0, 0, 0, 0) var(--gradient-end))" bind:this={macosWindow}>
        <Highlight
          code={`// Import the Window component
import Window from '$lib/components/Window.svelte';
// Set the title of the window
Window.title.set('My Projects', false);
// Load the buttons
Window.trafficlight.load('red', 'yellow', 'green');
// Add a click event to the buttons
Window.trafficlight.addEventListener('click', (e) => {
  Window.trafficlight.destory(e.target);
};
        `}
          language={ts}
          class="whitespace-pre-wrap p-0 text-left leading-[22.5px] tracking-[.1px]" />
      </Window>
      <Trafficlight class="hidden md:flex absolute bottom-5 left-10" />
    </Banner>
  </div>
</Transition>

<Deepdive bind:isDeepDiveOpen={isDeepDiveAboutOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveAboutOpen} />
</Deepdive>

<Deepdive bind:isDeepDiveOpen={isDeepDiveCodingOpen}>
  <div class="flex h-full">
    <img loading="lazy" src="/assets/images/jpg/Coding.jpg" class="absolute aspect-[4_/_3] h-full w-full object-cover md:-left-1/3 md:top-1/2 md:h-auto md:-translate-y-1/2" alt="Coding" />

    <div class="absolute -left-1/2 flex h-full w-full translate-x-1/2 items-center justify-center">
      <Window placeholder="👨🏻‍💻" easteregg={true}>
        <Highlight class="whitespace-pre-wrap bg-transparent leading-[22.5px] tracking-[.1px]" language={markdown} code={`### 👨🏻‍💻 Coding\nFrom crafting captivating minimalistic masterpieces to weaving immersive user experiences, I infuse every project with my obsession for perfection.\n\nThe art of coding allows me to quickly bring my visions to life, while I find inspiration in the lines of code I type. This creative process is not just about beauty but also about design, as Steve Jobs famously said:`} />
        <span class="mt-2 block text-center text-lg">“Design is not just what it looks like and feels like. Design is how it works.”</span>
      </Window>
    </div>
  </div>

  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveCodingOpen} />
  <!-- <ProgressBar slot="progress" bind:scrollProgress class="from-white via-orange-400" /> -->
</Deepdive>

<Deepdive bind:isDeepDiveOpen={isDeepDiveSpaceOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveSpaceOpen} />
</Deepdive>
