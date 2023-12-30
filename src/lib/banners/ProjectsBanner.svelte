<script lang="ts">
  import ProContainerImage from '$assets/images/png/pro-container-image.png';
  import Banner from '$lib/components/Banner.svelte';
  import Trafficlight from '$lib/components/Trafficlight.svelte';
  import Image from '$lib/components/image.svelte';
  import Window from '$lib/layout/Window.svelte';
  import type { Picture } from '$lib/types';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import gsap from 'gsap/dist/gsap';
  import { onMount } from 'svelte';
  import { Highlight } from 'svelte-highlight';
  import ts from 'svelte-highlight/languages/typescript';
  import 'svelte-highlight/styles/github-dark.css';

  const ProContainerImg = ProContainerImage as unknown as Picture;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      gsap.set('.macoswindow', { '--gradient-start': '0%', '--gradient-end': '40%' });
      gsap.fromTo(
        '.macoswindow',
        {
          scale: 0.8,
          opacity: 0,
          y: 100,
          '--gradient-start': '0%',
          '--gradient-end': '10%',
          duration: 1
        },
        {
          scale: 1,
          opacity: 1,
          display: 'block',
          y: 60,
          '--gradient-start': '0%',
          '--gradient-end': '50%',
          duration: 1
        }
      );
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
</script>

<Banner class="col-span-full row-span-1 flex items-center justify-center !overflow-visible rounded-none border-none md:col-span-full">
  <Image class="absolute inset-0 h-full w-full rounded-none object-cover object-center md:rounded-3xl" src={ProContainerImg} alt="Pro Container Image" loading="eager" />
  <Window placeholder="My Projects" class="macoswindow relative z-20 h-2/3 overflow-hidden opacity-0 md:absolute md:left-1/2 md:h-auto md:-translate-x-1/2 md:translate-y-1/2" style="-webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) var(--gradient-start), rgba(0, 0, 0, 0) var(--gradient-end));">
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
