<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import ProgressBar from '$lib/components/progressBar.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import { Transition } from '@rgossiaux/svelte-headlessui';
  import lozad from 'lozad';
  import { onMount } from 'svelte';

  let lettherebelife: HTMLVideoElement;

  onMount(async () => {
    lozad('.lozad', {
      rootMargin: '10px 0px',
      threshold: 0.3,
      enableAutoReload: true
    }).observe();
    lettherebelife = document.getElementById('lettherebelife') as HTMLVideoElement;
  });

  let isDeepDiveOpen = false;
</script>

<Transition unmount={false} show={!isDeepDiveOpen} class="flex h-screen items-center justify-center transition-transform duration-1000" leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*-1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*-1_+_10vw)]" enterTo="translate-x-0">
  <div class="grid w-full max-w-[980px] auto-rows-[18rem] grid-cols-1 gap-5 md:grid-cols-[21rem_11rem_21rem]">
    <Card class="group row-span-2 flex items-center justify-center bg-black md:col-span-2">
      <div class="absolute top-0 -z-10 h-0 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] transition-all duration-300 ease-in group-hover:h-full" />
      <div class="flex h-full w-full flex-col">
        <h2 class="relative mt-6 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] bg-clip-text text-6xl font-semibold text-transparent transition-colors delay-100 duration-300 group-hover:text-black">Meet Me.</h2>
        <img src="/assets/images/gigi/Gigi3.png" alt="Waving Memoji" />
      </div>
    </Card>
    <Card bind:isDeepDiveOpen class="group relative row-span-1 flex h-full w-full flex-col items-center justify-center rounded-none !border-0 bg-black transition-all duration-300 md:col-span-1 md:overflow-visible">
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
    <Card class="group row-span-1 flex items-center justify-center border-none bg-[#06273b] md:col-span-1">
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
        }}
      >
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
          }}
        >
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
          }}
        >
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
  </div>
</Transition>

<Deepdive
  bind:isDeepDiveOpen
  on:scroll={(e) => {
    scrollProgress = e.detail;
  }}
>
  <div class="flex h-full">
    <img loading="lazy" src="/assets/images/jpg/Coding.jpg" class="absolute aspect-[4_/_3] h-full w-full object-cover md:-left-1/3 md:top-1/2 md:h-auto md:-translate-y-1/2" alt="Coding" />

    <div class="absolute -left-1/2 flex h-full w-full translate-x-1/2 items-center justify-center">
      <div class="group max-w-3xl p-4 md:p-0">
        <div style="box-shadow: 0 0 0 1px rgb(255 255 255 / 30%),0 0 0 1.5px rgba(0,0,0,.8),0 2.8px 2.2px rgba(0,0,0,.034),0 6.7px 5.3px rgba(0,0,0,.048),0 12.5px 10px rgba(0,0,0,.06),0 22.3px 17.9px rgba(0,0,0,.072),0 41.8px 33.4px rgba(0,0,0,.086),0 100px 80px rgba(0,0,0,.12);" class="flex min-h-[120px] flex-col items-stretch rounded-xl bg-black/90 pt-3 text-white transition-all duration-300 ease-linear md:bg-black/75">
          <div class="grid h-6 grid-cols-[45px_1fr_45px] items-center gap-3 px-4">
            <div class="flex gap-1">
              <button
                type="button"
                class="h-3 w-3 rounded-full bg-white/20 transition-all duration-200 hover:bg-[#FF5F57]"
                on:click={(e) => {
                  // give the element classes
                  e.target.classList.add('scale-150', 'opacity-0');
                  setTimeout(() => {
                    e.target.classList.add('scale-0');
                    e.target.classList.remove('scale-150');
                  }, 300);
                  setTimeout(() => {
                    e.target.classList.remove('scale-0', 'opacity-0', 'scale-150');
                  }, 5000);
                }}
              />
              <button
                type="button"
                class="h-3 w-3 rounded-full bg-white/20 transition-all duration-200 hover:bg-[#FDBB2E]"
                on:click={(e) => {
                  // give the element classes
                  e.target.classList.add('scale-150', 'opacity-0');
                  setTimeout(() => {
                    e.target.classList.add('scale-0');
                    e.target.classList.remove('scale-150');
                  }, 300);
                  setTimeout(() => {
                    e.target.classList.remove('scale-0', 'opacity-0', 'scale-150');
                  }, 5000);
                }}
              />
              <button
                class="h-3 w-3 rounded-full bg-white/20 transition-all duration-200 hover:bg-[#27C840]"
                on:click={(e) => {
                  // give the element classes
                  e.target.classList.add('scale-150', 'opacity-0');
                  setTimeout(() => {
                    e.target.classList.add('scale-0');
                    e.target.classList.remove('scale-150');
                  }, 300);
                  setTimeout(() => {
                    e.target.classList.remove('scale-0', 'opacity-0', 'scale-150');
                  }, 5000);
                }}
              />
            </div>
            <div class="relative h-4 text-center text-xs leading-3 tracking-[.32px] text-white/30">
              <input type="text" required class="peer absolute inset-0 m-0 border-none bg-transparent text-center text-xs leading-3 tracking-[.32px] text-white/60 outline-none ring-0 ring-transparent ring-offset-0" placeholder="👨🏻‍💻" />
              <span class="absolute inset-0 top-4 -z-10 m-0 scale-0 border-none text-center text-xs text-white/60 transition-all duration-300 group-hover:peer-invalid:scale-100 group-hover:peer-invalid:opacity-100 peer-focus-visible:!scale-0 peer-focus-visible:!opacity-0">☝️</span>
              <span class="absolute inset-0 top-7 -z-10 m-0 scale-0 border-none text-center text-xs text-white/60 transition-all duration-300 group-hover:peer-invalid:scale-100 group-hover:peer-invalid:opacity-100 peer-focus-visible:!scale-0 peer-focus-visible:!opacity-0">Psst.. wanna type something here?</span>
            </div>
          </div>
          <div class="grid w-full [grid-template:1fr/1fr]">
            <div class="p-4 [grid-column:1/1] [grid-row:1/1]">
              <pre class="whitespace-pre-wrap leading-[22.5px] tracking-[.1px]">
<span class="text-[#51D0F8]">### 👨🏻‍💻 Coding</span>
From crafting captivating minimalistic masterpieces to weaving immersive user experiences, I infuse every project with my obsession for perfection.  

The art of coding allows me to quickly bring my visions to life, while I find inspiration in the lines of code I type. This creative process is not just about beauty but also about design, as Steve Jobs famously said:</pre>
              <span class="mt-2 block text-center text-lg">“Design is not just what it looks like and feels like. Design is how it works.”</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen />
  <!-- <ProgressBar slot="progress" bind:scrollProgress class="from-white via-orange-400" /> -->
</Deepdive>
