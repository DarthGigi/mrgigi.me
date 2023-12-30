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
  <div class="flex h-full w-screen">
    <Image src={CodingImg} class="absolute aspect-[4_/_3] h-full w-full select-none object-cover md:-left-1/3 md:top-1/2 md:h-auto md:-translate-y-1/2" alt="Coding" />
    <div id="codingcontainer" class="absolute -left-1/2 flex h-full w-full translate-x-1/2 items-center justify-center">
      <Window id="codingwindow" placeholder="👨🏻‍💻" easteregg={true}>
        <Highlight class="whitespace-pre-wrap bg-transparent leading-[22.5px] tracking-[.1px]" language={markdown} code={`## 👨🏻‍💻 Programming\nI love to code new, cool hobby projects in my free time. So I can learn a new thing or two, a new framework or a whole new language and develop my skills even more.\n\n### Design\nI get my inspiration from the things I see in my daily life and the things I see on the internet. I love to create things that I can use myself, but I also love to create things that other people can use.\n\nTake this macOS window for example, I studied the code from ray.so and made my own version of it.`} />
      </Window>
    </div>
    <div class="w-[200vw]"></div>
  </div>

  <DeepdiveCloseBtn slot="button" bind:isDeepDiveOpen={isDeepDiveCodingOpen} />
</Deepdive>
