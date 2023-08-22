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
  import { Draggable } from 'gsap/dist/Draggable';
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let lettherebelife: HTMLVideoElement;
  let macosWindow;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(Draggable);
    lozad('.lozad', {
      rootMargin: '10px 0px',
      threshold: 0.3,
      enableAutoReload: true
    }).observe();
    lettherebelife = document.getElementById('lettherebelife') as HTMLVideoElement;

    const ctx = gsap.context((self) => {
      let mm = gsap.matchMedia();
      gsap.set('.macoswindow', { '--gradient-start': '0%', '--gradient-end': '40%' });
      mm.add('(min-width: 640px)', () => {
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
  let isDeepDiveMinionOpen = false;
  let isDeepDiveSiriusOpen = false;

  function initializeDrag() {
    Draggable.create('#codingwindow', {
      bounds: document.getElementById('codingcontainer'),
      dragClickables: false,
      edgeResistance: 0.5,
      trigger: '#topbarcodingwindow',
      onClick: function () {
        console.log('clicked');
      },
      onDragEnd: function () {
        console.log('drag ended');
      }
    });
  }
</script>

<Transition unmount={false} show={!isDeepDiveAboutOpen && !isDeepDiveCodingOpen && !isDeepDiveSpaceOpen && !isDeepDiveSiriusOpen && !isDeepDiveMinionOpen} leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*-1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*-1_+_10vw)]" enterTo="translate-x-0">
  <div class="mx-auto grid h-auto max-w-[980px] auto-rows-[18rem] grid-cols-1 justify-center gap-2 py-4 md:grid-cols-[21rem_11rem_21rem] md:gap-5">
    <Card bind:isDeepDiveOpen={isDeepDiveAboutOpen} class="group row-span-2 flex items-center justify-center bg-black md:col-span-2">
      <div class="absolute top-0 -z-10 h-0 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] transition-all duration-300 ease-in group-hover:h-full" />
      <div class="flex h-full w-full flex-col">
        <h2 class="relative mt-6 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] bg-clip-text text-6xl font-semibold text-transparent transition-colors delay-100 duration-300 group-hover:text-black">Meet Me.</h2>
        <img src="/assets/images/gigi/Gigi3.png" class="select-none" alt="Waving Memoji" />
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
          on:click={(e) => {
            e.stopPropagation();
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
    <Banner class="col-span-full row-span-1 flex items-center justify-center !overflow-visible rounded-none border-none bg-[url('/assets/images/pro-container-image.png')] bg-cover  bg-center md:col-span-full">
      <Window placeholder="My Projects" class="macoswindow relative z-20 h-2/3 overflow-hidden md:absolute  md:left-1/2 md:h-auto md:-translate-x-1/2 md:translate-y-1/2 md:overflow-visible" style="-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) var(--gradient-start), rgba(0, 0, 0, 0) var(--gradient-end))" bind:this={macosWindow}>
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
          class="select-none whitespace-pre-wrap p-0 text-left leading-[22.5px] tracking-[.1px]" />
      </Window>
      <div class="relative z-10 hidden h-full w-full overflow-hidden md:block md:rounded-3xl">
        <Trafficlight class="absolute bottom-5 left-10 hidden sm:flex" />
        <div class="absolute right-0 mt-3 flex translate-x-1/2 select-none text-left leading-6 tracking-tight opacity-40 shadow-2xl">
          <div class="group relative flex w-full items-center justify-between overflow-hidden rounded-lg bg-neutral-700 bg-opacity-[45%] p-[1px] shadow-sm backdrop-blur-md transition-all duration-500 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 peer-checked:!bg-opacity-[100%]">
            <div class="relative w-full rounded-[calc(0.5rem-1px)] bg-[#050505] bg-opacity-100 p-4">
              <div class="group-[:checked+&amp;]:scale-150 absolute inset-0 max-h-[100px] max-w-[100px] rounded-full bg-gradient-to-r from-pink-500 to-blue-600 blur-lg transition-all duration-500 will-change-transform group-hover:scale-150 group-active:group-hover:scale-125 group-active:group-hover:duration-200" style="transform: translate(10%, -10%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));"></div>
              <span class="z-20 flex w-full justify-between text-center leading-5 tracking-tight"
                ><span class="relative m-0 min-w-0 basis-1/2 self-center p-0 text-left"><span class=" text-left text-2xl font-semibold leading-5 tracking-tight text-white">Pro <span class="relative mt-1 block text-left text-xs font-normal tracking-normal opacity-70">Sound Suppression, Pro Scripts, and more.</span></span></span>
                <span class="relative m-0 min-w-0 basis-1/2 self-center p-0 text-right">
                  <span class="relative mt-1 block text-right text-xs font-normal tracking-normal text-white"><span class=" text-right text-xs leading-4 tracking-normal">From €17.99</span> </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <form>
          <div class="absolute -left-4 top-4 max-w-xs translate-y-2/3 -rotate-90 opacity-40">
            <input type="radio" id="Stripe" name="payment" class="hidden" value="Stripe" />
            <label for="Stripe" class="group relative flex h-24 w-full cursor-pointer select-none items-center justify-between overflow-hidden rounded-lg bg-neutral-800 p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 active:scale-50 active:hover:scale-100 peer-checked:scale-95 peer-disabled:pointer-events-none peer-disabled:cursor-default peer-disabled:hover:scale-100">
              <div class="absolute inset-0 max-h-[100px] max-w-[100px] transform rounded-full bg-gradient-to-r from-purple-500 to-blue-600 blur-lg transition-all duration-500 will-change-transform group-active:group-hover:duration-200 group-[:checked+&]:scale-[600%]" style="transform: translate(100%, 200%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));"></div>
              <span class=" z-20 flex w-full justify-center text-center leading-5 tracking-tight md:flex-col md:items-stretch md:justify-between"><span class="relative m-0 min-w-0 basis-1/2 p-0 text-left leading-5 tracking-tight"><span class=" text-left text-lg font-semibold leading-5 tracking-tight text-white">Stripe <span class="relative mt-1 block text-left text-xs font-normal tracking-normal opacity-70">Apple Pay, Google Pay, Card, iDeal</span></span></span> <span class="relative m-0 min-w-0 basis-1/2 p-0 text-right leading-5 tracking-tight"></span></span>
            </label>
          </div>
          <button type="reset" class="absolute bottom-10 right-4 cursor-pointer select-none items-center rounded-full border-0 bg-[#0071e3] px-[15px] py-1 text-center font-normal text-white opacity-40 shadow-lg outline-0 transition-all duration-500 [letter-spacing:-0.01em] hover:bg-[#147ce5]">Continue</button>
        </form>
        <button type="button" class="absolute bottom-32 right-28 inline-flex cursor-pointer select-none justify-center rounded-md border border-neutral-800 bg-black px-4 py-2 text-sm font-medium text-white opacity-40 shadow-lg transition-all duration-500 hover:border-neutral-500 hover:bg-white hover:text-black focus:ring-transparent focus:ring-offset-0 active:scale-90">Submit</button>
        <div class="absolute bottom-[5.625rem] right-20 inline-flex select-none items-center rounded-full border border-solid border-white border-opacity-60 bg-white bg-opacity-10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-normal text-stone-50 text-opacity-60 opacity-40 shadow-lg">Pro</div>
      </div>
    </Banner>
    <Card bind:isDeepDiveOpen={isDeepDiveMinionOpen} class="row-span-1 px-2 hover:!scale-100 md:col-span-1">
      <div class="group relative divide-y divide-neutral-700 rounded-lg bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-900 md:scale-90">
        <div class="flex h-full w-full items-center justify-center space-x-6 px-4">
          <div class="z-20 my-2 flex flex-col items-center truncate rounded p-1 transition-all duration-500 hover:scale-150 hover:bg-neutral-800">
            <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-neutral-700 p-1"><img class="pointer-events-none h-full w-full" src="https://mc-heads.net/head/bce70b1b8e30e90a5ad951f42ff469c19dd416cedf98d5aa4178ec953c584796" alt="Snow Minion XI head" /></div>
            <h3 class="truncate text-sm font-medium text-white">Snow Minion</h3>
          </div>
          <div class="z-20 my-2 flex flex-col items-center truncate rounded p-1 transition-all duration-500 hover:scale-150 hover:bg-neutral-800">
            <img class="pointer-events-none h-12 w-12 flex-shrink-0 rounded-full bg-neutral-700 object-cover" src="https://cdn.discordapp.com/avatars/389759544776982528/a_8c19a242e5ad487409f1f60c623eaf6c.png?size=64" alt="tim_cook's discord avatar" />
            <h3 class="text-sm font-medium text-white">tim_cook</h3>
          </div>
        </div>
        <div class="-mt-px flex divide-x divide-neutral-700">
          <div class="relative inline-flex w-0 flex-1 items-center justify-center overflow-hidden rounded-bl-lg text-sm font-medium text-neutral-200">
            <span class="z-10 inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-neutral-800 transition-transform duration-300 group-hover:scale-125 group-hover:text-neutral-900"> Tier XI (11)</span>
            <div class="absolute z-0 h-5 w-20 flex-shrink-0 rounded-[50px] bg-neutral-400 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-none"></div>
          </div>
          <div class="relative -ml-px inline-flex w-0 flex-1 overflow-hidden">
            <span class="relative z-10 inline-flex w-0 flex-1 items-center justify-center overflow-hidden py-4 text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:scale-125 group-hover:text-neutral-900"><img class="pointer-events-none mr-1 h-6 w-6" src="/assets/images/png/coin.png" alt="Coin icon" /> 1m <span class="ml-1 text-sm text-neutral-200/50 transition-all duration-300 group-hover:ml-0 group-hover:text-neutral-900/0">/</span> <span class="text-sm text-neutral-200/50 transition-all duration-300 group-hover:-ml-0.5 group-hover:text-neutral-900">each</span></span>
            <div class="absolute z-0 h-0 w-full flex-shrink-0 bg-neutral-400 transition-all duration-500 group-hover:h-full"></div>
          </div>
          <div class="relative inline-flex w-0 flex-1 items-center justify-center overflow-hidden rounded-br-lg text-sm font-medium text-neutral-200">
            <span class="z-10 inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-neutral-800 transition-transform duration-300 group-hover:scale-125 group-hover:text-neutral-900"> Amount: 14</span>
            <div class="absolute z-0 h-5 w-20 flex-shrink-0 rounded-[50px] bg-neutral-400 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-none"></div>
          </div>
        </div>
      </div>
    </Card>
    <Card bind:isDeepDiveOpen={isDeepDiveSiriusOpen} class="group row-span-1 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black md:col-span-2 ">
      <div class="flex h-full w-full items-center justify-center bg-cover object-cover p-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1315.24 1546.03" class="h-24 w-auto">
          <path fill="currentColor" d="m1046.7,106.38c0,.13-.13.26-.13.26l-14.81,43.14-32.61,94.85-.39-.52-59.9,188.39c-23.77-3.9-47.94-5.85-72.24-5.85-53.01,0-106.93,9.48-159.42,29.36-87.44,33.26-154.88,104.59-183.2,193.72l-147.47,463.71c-152.66-25.08-288.18-128.5-347.17-283.5C9.48,777.45,0,723.54,0,670.52c0-180.86,110.18-351.32,289.35-419.41L929.89,6.86l2.34-.91c.39-.13.78-.26,1.17-.39,65.22-24.29,129.67,35.08,113.3,100.83Z" />
          <path fill="currentColor" d="m268.55,1439.64c0-.13.13-.26.13-.26l14.81-43.14,32.61-94.85.39.52,59.9-188.39c23.77,3.9,47.94,5.85,72.24,5.85,53.01,0,106.93-9.48,159.42-29.36,87.44-33.26,154.88-104.59,183.2-193.72l147.47-463.71c152.66,25.08,288.18,128.5,347.17,283.5,19.88,52.49,29.36,106.41,29.36,159.42,0,180.86-110.18,351.32-289.35,419.41l-640.54,244.26-2.34.91c-.39.13-.78.26-1.17.39-65.22,24.29-129.67-35.08-113.3-100.83Z" />
        </svg>
      </div>
    </Card>
  </div>
</Transition>

<Deepdive bind:isDeepDiveOpen={isDeepDiveAboutOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveAboutOpen} />
</Deepdive>

<Deepdive bind:isDeepDiveOpen={isDeepDiveCodingOpen} on:introend={initializeDrag}>
  <div class="flex h-full">
    <img loading="lazy" src="/assets/images/jpg/Coding.jpg" class="absolute aspect-[4_/_3] h-full w-full select-none object-cover md:-left-1/3 md:top-1/2 md:h-auto md:-translate-y-1/2" alt="Coding" />
    <div id="codingcontainer" class="absolute -left-1/2 flex h-full w-full translate-x-1/2 items-center justify-center">
      <Window id="codingwindow" placeholder="👨🏻‍💻" easteregg={true}>
        <Highlight class="whitespace-pre-wrap bg-transparent leading-[22.5px] tracking-[.1px]" language={markdown} code={`### 👨🏻‍💻 Coding\nFrom crafting captivating minimalistic masterpieces to weaving immersive user experiences, I infuse every project with my obsession for perfection.\n\nThe art of coding allows me to quickly bring my visions to life, while I find inspiration in the lines of code I type. This creative process is not just about beauty but also about design, as Steve Jobs famously said:`} />
        <span class="mt-2 block text-center text-lg">“Design is not just what it looks like and feels like. Design is how it works.”</span>
        <span class="mt-2 block text-center text-sm text-red-400 opacity-40">This text is ChatGPT generated, it's just for placeholder purposes for now</span>
      </Window>
    </div>
    <div class="w-[200vw]"></div>
  </div>

  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveCodingOpen} />
</Deepdive>

<Deepdive bind:isDeepDiveOpen={isDeepDiveSpaceOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveSpaceOpen} />
</Deepdive>

<Deepdive bind:isDeepDiveOpen={isDeepDiveMinionOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveMinionOpen} />
</Deepdive>

<Deepdive bind:isDeepDiveOpen={isDeepDiveSiriusOpen}>
  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveSiriusOpen} />
</Deepdive>
