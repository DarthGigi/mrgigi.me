<script lang="ts">
  import CoinImage from '$assets/images/png/coin.png';
  import MinionImage from '$assets/images/png/snow_minion.png';
  import UserImage from '$assets/images/png/user.png';
  import CardLink from '$lib/components/CardLink.svelte';
  import Image from '$lib/components/image.svelte';
  import type { Picture } from '$lib/types';
  const CoinImg = CoinImage as unknown as Picture;
  const MinionImg = MinionImage as unknown as Picture;
  const UserImg = UserImage as unknown as Picture;

  export let href: string;
  export let target = '_blank';
</script>

<CardLink {href} {target} class="row-span-1 flex w-full items-center px-2 hover:!scale-100 md:col-span-1">
  <div class="group relative flex-grow divide-y divide-neutral-700 rounded-lg bg-neutral-800 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-900 md:scale-90">
    <div class="flex h-full w-full items-center justify-center space-x-6 px-4">
      <div class="z-20 my-2 flex flex-col items-center truncate rounded p-1 transition-all duration-500 hover:scale-150 hover:bg-neutral-800">
        <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-neutral-700 p-1"><Image class="pointer-events-none h-full w-auto" src={MinionImg} alt="Snow Minion XI head" /></div>
        <h3 class="truncate text-sm font-medium text-white">Snow Minion</h3>
      </div>
      <div class="z-20 my-2 flex flex-col items-center truncate rounded p-1 transition-all duration-500 hover:scale-150 hover:bg-neutral-800">
        <Image class="pointer-events-none h-12 w-12 flex-shrink-0 rounded-full bg-neutral-700 object-cover" src={UserImg} alt="tim_cook's discord avatar" />
        <h3 class="text-sm font-medium text-white">tim_cook</h3>
      </div>
    </div>
    <div class="-mt-px flex divide-x divide-neutral-700">
      <div class="relative inline-flex w-0 flex-1 items-center justify-center overflow-hidden rounded-bl-lg text-sm font-medium text-neutral-200">
        <span class="z-10 inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-neutral-800 transition-transform duration-300 group-hover:scale-125 group-hover:text-neutral-900"> Tier XI (11)</span>
        <div class="absolute z-0 h-5 w-20 flex-shrink-0 rounded-[50px] bg-neutral-400 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-none"></div>
      </div>
      <div class="relative -ml-px inline-flex w-0 flex-1 overflow-hidden">
        <span class="relative z-10 inline-flex w-0 flex-1 items-center justify-center overflow-hidden py-4 text-sm font-medium text-neutral-200 transition-all duration-300 group-hover:scale-125 group-hover:text-neutral-900"><Image class="pointer-events-none mr-1 h-6 w-6" src={CoinImg} alt="Coin icon" /> 1m <span class="ml-1 text-sm text-neutral-200/50 transition-all duration-300 group-hover:ml-0 group-hover:text-neutral-900/0">/</span> <span class="text-sm text-neutral-200/50 transition-all duration-300 group-hover:-ml-0.5 group-hover:text-neutral-900">each</span></span>
        <div class="absolute z-0 h-0 w-full flex-shrink-0 bg-neutral-400 transition-all duration-500 group-hover:h-full"></div>
      </div>
      <div class="relative inline-flex w-0 flex-1 items-center justify-center overflow-hidden rounded-br-lg text-sm font-medium text-neutral-200">
        <span class="z-10 inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium text-neutral-800 transition-transform duration-300 group-hover:scale-125 group-hover:text-neutral-900"> Amount: 14</span>
        <div class="absolute z-0 h-5 w-20 flex-shrink-0 rounded-[50px] bg-neutral-400 transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:rounded-none" />
      </div>
    </div>
  </div>
</CardLink>
