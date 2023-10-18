<script lang="ts">
  import BackgroundImage from '$assets/images/melodysheep/BROWN_DWARF.jpeg';
  import VerticalCarousel from '$lib/components/VerticalCarousel.svelte';
  import CarouselImg from '$lib/components/carouselImg.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import Image from '$lib/components/image.svelte';
  import ProgressBar from '$lib/components/progressBar.svelte';
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import type { Picture } from '$lib/types';

  const Background: Picture = BackgroundImage as unknown as Picture;
  const pictures: Record<string, Picture> = import.meta.glob('$assets/images/{melodysheep,kurzgesagt}/*.{png,jpg,jpeg}', {
    import: 'default',
    eager: true
  });

  const melodysheepCards = [
    { src: 'melodysheep/Blinker.png', caption: 'Courtesy of melodysheep.com', alt: 'Blinker' },
    { src: 'melodysheep/COSMIC_BRETHREN2.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Cosmic Brethren' },
    { src: 'melodysheep/Dyson Sphere 2.png', caption: 'Courtesy of melodysheep.com', alt: 'Dyson Sphere' },
    { src: 'melodysheep/Dyson Swarm.png', caption: 'Courtesy of melodysheep.com', alt: 'Dyson Swarm' },
    { src: 'melodysheep/MUSEUM_EXHIBIT2.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Museum Exhibit' },
    { src: 'melodysheep/MUSEUM_EYEWALL.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Museum Eyewall' },
    { src: 'melodysheep/MUSEUM_OCULA2.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Museum Ocula' },
    { src: 'melodysheep/MUSEUM_REPLICA_K2.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Museum Replica' },
    { src: 'melodysheep/MUSEUM.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Museum' },
    { src: 'melodysheep/Preserve Planet.png', caption: 'Courtesy of melodysheep.com', alt: 'Preserve Planet' },
    { src: 'melodysheep/RedPurpleNebula.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Red Purple Nebula' },
    { src: 'melodysheep/TREE_OF_LIFE.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Tree of Life' },
    { src: 'melodysheep/TwinPlanets.jpeg', caption: 'Courtesy of melodysheep.com', alt: 'Twin Planets' }
  ].sort(() => Math.random() - 0.5);

  export let isDeepDiveSpaceOpen: boolean;
  let scrollProgress = 0;
  let spaceMusic: HTMLAudioElement;
</script>

<Deepdive on:scroll={(e) => (scrollProgress = e.detail)} class="" bind:isDeepDiveOpen={isDeepDiveSpaceOpen}>
  <Image class="fixed inset-0 h-full w-full bg-fixed object-cover object-center" src={Background} alt="Brown Dwarf" />
  <div class="fixed left-1/2 top-0 z-20 flex -translate-x-1/2 items-center justify-center">
    <h2 class="relative mt-6 w-full bg-[url('https://www.urbanexile.net/wordpress/wp-content/uploads/2015/03/Starfield_Instancing_white_uniform.png')] bg-cover bg-clip-text bg-center text-9xl font-bold text-transparent transition-colors delay-100 duration-300 group-hover:text-black">Space.</h2>
  </div>
  <div class="relative flex flex-shrink-0 backdrop-blur">
    <div class="relative mx-24 flex w-full items-center gap-24">
      <p class="relative z-20 max-w-2xl text-2xl text-white">I have a lot of interest in space and science, from black holes to the particles that make up our universe. I love to learn new things about the universe.</p>
      <VerticalCarousel id="melodysheep" text="Courtesy of melodysheep.com">
        {#each melodysheepCards as card}
          <CarouselImg src={pictures[`/src/assets/images/${card.src}`]} caption={card.caption} alt={card.alt} />
        {/each}
      </VerticalCarousel>

      <div class="relative z-50">
        <p class="mb-4 max-w-2xl text-2xl text-white">
          That's why I love to watch videos from <a href="https://www.youtube.com/user/Melodysheep" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-neutral-400">Melodysheep</a>, one of the best space channels on Youtube. The videos they create are just stunning to look at. Covering topics from the future of the universe, to visualizing the various alien lifes that could exist.
        </p>
        <figure class="mx-auto max-w-screen-md text-center">
          <svg class="mx-auto mb-3 h-10 w-10 text-neutral-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p class="text-2xl font-medium italic text-white">"Tickle your brain."</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center justify-center space-x-3">
            <img class="h-auto w-6 rounded-full" src="https://images.squarespace-cdn.com/content/v1/595f00fc36e5d3078c629dd7/1499459636422-6BJCC2I10REUN1FHOLHA/image-asset.png?format=24w" alt="Melodysheep Logo" />
            <div class="flex items-center divide-x-2 divide-neutral-700">
              <cite class="pr-3 font-medium text-white">Melodysheep</cite>
            </div>
          </figcaption>
        </figure>
      </div>

      <VerticalCarousel id="kurzgesagt" text="Courtesy of melodysheep.com" reversed={true}>
        {#each melodysheepCards as card}
          <CarouselImg src={pictures[`/src/assets/images/${card.src}`]} caption={card.caption} alt={card.alt} />
        {/each}
      </VerticalCarousel>

      <div class="relative z-50">
        <p class="mb-4 max-w-2xl text-2xl text-white">
          I also enjoy watching videos from <a href="https://www.youtube.com/user/Kurzgesagt" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-neutral-400">Kurzgesagt</a>, one of the biggest science channels on Youtube. The videos they create are supported by NGOs, scientists and leading brands; and are beautifully animated.
        </p>
        <figure class="mx-auto max-w-screen-md text-center">
          <svg class="mx-auto mb-3 h-10 w-10 text-neutral-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p class="text-2xl font-medium italic text-white">"We want to make science look beautiful. Because it is beautiful."</p>
          </blockquote>
          <figcaption class="mt-6 flex items-center justify-center space-x-3">
            <img class="h-6 w-6 rounded-full" src="https://kurzgesagt.org/wp-content/themes/kurzgesagt/library/images/logo.gif" alt="Spinning Kurzgesagt Logo" />
            <div class="flex items-center divide-x-2 divide-neutral-700">
              <cite class="pr-3 font-medium text-white">Kurzgesagt</cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="absolute inset-0 z-0 w-full bg-gradient-to-b from-black from-15%" />
  </div>

  <DeepdiveCloseBtn on:click={() => spaceMusic.pause()} invert={true} class="bg-black" slot="button" bind:isDeepDiveOpen={isDeepDiveSpaceOpen} bind:scrollProgress />
  <ProgressBar slot="progress" bind:scrollProgress class="from-[#0e2036] via-black" />
  <button
    slot="extra"
    type="button"
    class="relative z-10 rounded-full bg-white text-black"
    on:click={() => {
      if (spaceMusic.paused) {
        spaceMusic.play();
      } else {
        spaceMusic.pause();
      }
      if (spaceMusic.muted) {
        spaceMusic.muted = false;
      } else {
        spaceMusic.muted = true;
      }
    }}>
    <svg class="p-2" width="41" height="41" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {#if spaceMusic}
        {#if spaceMusic.muted}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        {/if}
      {/if}
    </svg>
  </button>
  <audio bind:this={spaceMusic} class="hidden" loop autoplay src="/assets/audio/mp3/Sights_of_Space_Bside_01_mp3.mp3" />
</Deepdive>
