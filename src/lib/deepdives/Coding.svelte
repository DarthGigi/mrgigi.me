<script lang="ts">
  import CodingImage from '$assets/images/jpg/Coding.jpg';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import Image from '$lib/components/image.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import Window from '$lib/layout/Window.svelte';
  import type { Picture } from '$lib/types';
  import { Draggable } from 'gsap/dist/Draggable';
  import gsap from 'gsap/dist/gsap';
  import { onMount } from 'svelte';
  import { Highlight } from 'svelte-highlight';
  import markdown from 'svelte-highlight/languages/markdown';

  const CodingImg = CodingImage as unknown as Picture;

  export let isDeepDiveCodingOpen: boolean;

  onMount(() => {
    gsap.registerPlugin(Draggable);
  });

  function initializeDrag() {
    Draggable.create('#codingwindow', {
      bounds: document.getElementById('codingcontainer'),
      dragClickables: false,
      edgeResistance: 0.5,
      trigger: '#topbarcodingwindow'
    });
  }
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveCodingOpen} on:introend={initializeDrag}>
  <div class="flex h-full">
    <Image src={CodingImg} class="absolute aspect-[4_/_3] h-full w-full select-none object-cover md:-left-1/3 md:top-1/2 md:h-auto md:-translate-y-1/2" alt="Coding" />
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
