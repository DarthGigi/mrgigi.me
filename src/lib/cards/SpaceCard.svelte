<script lang="ts">
  import videoThumbnail from '$assets/images/jpg/lettherebelife_thumbnail.jpg';
  import Card from '$lib/components/Card.svelte';
  import type { Picture } from '$lib/types';
  import lozad from 'lozad';
  import { onMount } from 'svelte';

  onMount(() => {
    lozad('.lozad', {
      rootMargin: '10px 0px',
      threshold: 0.3,
      enableAutoReload: true
    }).observe();
  });

  const videoThumbnailImg = videoThumbnail as unknown as Picture;

  export let isDeepDiveOpen: boolean;
  let lettherebelife: HTMLVideoElement;
</script>

<Card bind:isDeepDiveOpen tabindex={-1} class="group row-span-1 flex items-center justify-center border-none bg-[#06273b] md:col-span-1">
  <div class="flex h-full w-full flex-col" on:mouseover={() => lettherebelife.play()} on:mouseleave={() => setTimeout(() => lettherebelife.pause(), 1000)} on:focus={() => lettherebelife.play()} on:blur={() => setTimeout(() => lettherebelife.pause(), 1000)} role="button" tabindex="0" aria-label="Let There Be Life">
    <video bind:this={lettherebelife} muted playsinline loop preload="metadata" class="lozad h-full w-full object-cover object-center active:!pointer-events-none md:rounded-lg" poster={videoThumbnailImg.img.src} on:loadedmetadata={() => (lettherebelife.currentTime = 22)}>
      <source data-src="/assets/videos/webm/lettherebelife.webm" type="video/webm" />
      <source data-src="/assets/videos/mp4/lettherebelife.mp4" type="video/mp4" />
    </video>
    <button type="button" aria-label="Toggle mute" class="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 transform text-white opacity-0 transition-all delay-500 duration-300 group-hover:-translate-y-3 group-hover:opacity-20" on:click|stopPropagation={() => (lettherebelife.muted = !lettherebelife.muted)}>
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
