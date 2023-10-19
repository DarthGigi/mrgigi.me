<script lang="ts">
  import Card from '$lib/components/Card.svelte';

  export let isDeepDiveOpen: boolean;
</script>

<Card bind:isDeepDiveOpen class="group row-span-1 flex h-full w-full flex-col items-center justify-center rounded-none !border-0 bg-black transition-all duration-300 md:col-span-1 md:overflow-visible">
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
