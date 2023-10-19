<script lang="ts">
  import GigiImage from '$assets/images/gigi/Gigi3.png';
  import Card from '$lib/components/Card.svelte';
  import Image from '$lib/components/image.svelte';
  import type { Picture } from '$lib/types';

  const GigiImg = GigiImage as unknown as Picture;

  export let isDeepDiveOpen: boolean;
</script>

<Card bind:isDeepDiveOpen class="group row-span-2 flex items-center justify-center bg-black md:col-span-2">
  <div class="absolute top-0 -z-10 h-0 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] transition-all duration-300 ease-in group-hover:h-full" />
  <div class="flex h-full w-full flex-col">
    <h2 class="relative mt-6 w-full bg-gradient-to-b from-[#726C4C] to-[#4D4D4D] bg-clip-text text-center text-6xl font-semibold text-transparent transition-colors delay-100 duration-300 group-hover:text-black">Meet Me.</h2>
    <Image src={GigiImg} loading="eager" class="w-full select-none" alt="Waving Memoji" />
  </div>
</Card>
