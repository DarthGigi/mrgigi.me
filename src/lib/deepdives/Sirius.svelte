<script lang="ts">
  import Deepdive from '$lib/layout/Deepdive.svelte';
  import DeepdiveCloseBtn from '$lib/components/deepdiveCloseBtn.svelte';
  import ProgressBar from '$lib/components/progressBar.svelte';

  export let isDeepDiveSiriusOpen: boolean;
  export let scrollProgress = 0;
</script>

<Deepdive bind:isDeepDiveOpen={isDeepDiveSiriusOpen} on:scroll={(e) => (scrollProgress = e.detail)}>
  <div class="relative mx-4 flex h-dvh flex-shrink-0 items-center gap-4 md:mx-8 md:gap-8">
    <div class="relative flex h-full w-[90vw] flex-col items-center justify-center py-24">
      <a href="https://sirius.menu/" target="_blank" class="group relative mb-8 flex items-center justify-center text-2xl font-semibold md:text-7xl"
        >Sirius<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute -right-7 inline-flex h-6 w-6 scale-0 text-white/30 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
      <iframe title="Sirius" src="https://sirius.menu/" class="h-full w-full rounded-3xl border-2 border-neutral-700/40">
        <p>Your browser does not support iframes.</p>
      </iframe>
      <a href="https://sirius.menu/" target="_blank" class="mt-4 text-sm font-semibold text-white/30 underline">sirius.menu</a>
    </div>
    <div class="relative flex h-full w-[90vw] flex-col items-center justify-center py-24">
      <a href="https://store.sirius.menu/" target="_blank" class="group relative mb-8 flex items-start justify-center text-2xl font-semibold md:text-7xl"
        >Store<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute -right-7 inline-flex h-6 w-6 scale-0 text-white/30 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
      <iframe title="Sirius Store" src="https://store.sirius.menu/" class=" h-full w-full rounded-3xl border-2 border-neutral-700/40">
        <p>Your browser does not support iframes.</p>
      </iframe>
      <a href="https://store.sirius.menu/" target="_blank" class="mt-4 text-sm font-semibold text-white/30 underline">store.sirius.menu</a>
    </div>
    <div class="relative flex h-full w-[90vw] flex-col items-center justify-center py-24">
      <a href="https://blog.sirius.menu/" target="_blank" class="group relative mb-8 flex items-start justify-center text-2xl font-semibold md:text-7xl"
        >Newsroom<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute -right-7 inline-flex h-6 w-6 scale-0 text-white/30 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
      <iframe title="Sirius Newsroom" src="https://blog.sirius.menu/" class=" h-full w-full rounded-3xl border-2 border-neutral-700/40">
        <p>Your browser does not support iframes.</p>
      </iframe>
      <a href="https://blog.sirius.menu/" target="_blank" class="mt-4 text-sm font-semibold text-white/30 underline">blog.sirius.menu</a>
    </div>
    <div class="relative flex h-full w-[90vw] flex-col items-center justify-center py-24">
      <a href="https://docs.sirius.menu/" target="_blank" class="group relative mb-8 flex items-start justify-center text-2xl font-semibold md:text-7xl"
        >Documentation<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute -right-7 inline-flex h-6 w-6 scale-0 text-white/30 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
      <iframe title="Sirius Docs" src="https://docs.sirius.menu/" class=" h-full w-full rounded-3xl border-2 border-neutral-700/40">
        <p>Your browser does not support iframes.</p>
      </iframe>
      <a href="https://docs.sirius.menu/" target="_blank" class="mt-4 text-sm font-semibold text-white/30 underline">docs.sirius.menu</a>
    </div>
    <div class="relative flex h-full w-[90vw] flex-col items-center justify-center py-24">
      <a href="https://apply.sirius.menu/" target="_blank" class="group relative mb-8 flex items-start justify-center text-2xl font-semibold md:text-7xl"
        >Application<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute -right-7 inline-flex h-6 w-6 scale-0 text-white/30 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
      <iframe title="Sirius Application" src="https://web.archive.org/web/20230327224505/https://apply.sirius.menu/" class=" h-full w-full rounded-3xl border-2 border-neutral-700/40">
        <p>Your browser does not support iframes.</p>
      </iframe>
      <a href="https://apply.sirius.menu/" target="_blank" class="mt-4 text-sm font-semibold text-white/30 underline">apply.sirius.menu</a>
    </div>
  </div>

  <ProgressBar slot="progress" bind:scrollProgress class="from-white via-white to-neutral-700" />
  <DeepdiveCloseBtn slot="button" invert={true} bind:isDeepDiveOpen={isDeepDiveSiriusOpen} bind:scrollProgress class="border-2 border-white bg-black" />
</Deepdive>
