<script lang="ts">
  import ProjectsBanner from '$lib/banners/ProjectsBanner.svelte';
  import AboutCard from '$lib/cards/AboutCard.svelte';
  import CodingCard from '$lib/cards/CodingCard.svelte';
  import MinionCard from '$lib/cards/MinionCard.svelte';
  import SiriusCard from '$lib/cards/SiriusCard.svelte';
  import SpaceCard from '$lib/cards/SpaceCard.svelte';
  import About from '$lib/deepdives/About.svelte';
  import Coding from '$lib/deepdives/Coding.svelte';
  import Minion from '$lib/deepdives/Minion.svelte';
  import Sirius from '$lib/deepdives/Sirius.svelte';
  import Space from '$lib/deepdives/Space.svelte';
  import { Transition } from '@rgossiaux/svelte-headlessui';
  import 'svelte-highlight/styles/github-dark.css';

  let isDeepDiveAboutOpen = false;
  let isDeepDiveCodingOpen = false;
  let isDeepDiveSpaceOpen = false;
  let isDeepDiveMinionOpen = false;
  let isDeepDiveSiriusOpen = false;
  let notification: HTMLDivElement;

  $: isAnyDeepDiveOpen = !isDeepDiveAboutOpen && !isDeepDiveCodingOpen && !isDeepDiveSpaceOpen && !isDeepDiveSiriusOpen && !isDeepDiveMinionOpen;
</script>

<Transition unmount={false} show={isAnyDeepDiveOpen} leave="transition ease-in-out duration-1000 transform" leaveTo="translate-x-[calc(100vw*-1_+_10vw)]" leaveFrom="translate-x-0" enter="transition ease-in-out duration-1000 transform" enterFrom="translate-x-[calc(100vw*-1_+_10vw)]" enterTo="translate-x-0">
  <div class="fixed top-0 z-50 flex h-auto w-full flex-grow items-center justify-between bg-red-500 px-4 py-2 transition-all duration-300" bind:this={notification}>
    <div class="w-14 flex-shrink" />
    <p class="max-w-7xl flex-grow text-center text-white/80">Please keep in mind that this website is not finished yet and is in its very early stages of development. Some things may not work as expected or at all, some things may be missing, and some things may be broken. If you find any bugs or have any suggestions, please let me know.</p>
    <button
      type="button"
      class="flex flex-shrink rounded-lg bg-red-700 px-4 py-2 text-red-200"
      on:click|self={() => {
        notification.classList.add('-translate-y-full');
        setTimeout(() => {
          notification.remove();
        }, 1000);
      }}
      ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pointer-events-none h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <div class="mx-auto grid h-full max-w-[980px] auto-rows-[18rem] grid-cols-1 justify-center gap-2 py-4 md:grid-cols-[21rem_11rem_21rem] md:gap-5">
    <AboutCard bind:isDeepDiveOpen={isDeepDiveAboutOpen} />
    <CodingCard bind:isDeepDiveOpen={isDeepDiveCodingOpen} />
    <SpaceCard bind:isDeepDiveOpen={isDeepDiveSpaceOpen} />
    <ProjectsBanner />
    <MinionCard href="https://minions.mrgigi.me" />
    <SiriusCard bind:isDeepDiveOpen={isDeepDiveSiriusOpen} />
  </div>
</Transition>

<About bind:isDeepDiveAboutOpen />

<Coding bind:isDeepDiveCodingOpen />

<Space bind:isDeepDiveSpaceOpen />

<Minion bind:isDeepDiveMinionOpen />

<Sirius bind:isDeepDiveSiriusOpen />
