<svelte:options accessors={true} />

<script lang="ts">
  import Trafficlight from '$lib/components/Trafficlight.svelte';
  export let placeholder = '';
  export let easteregg = false;
  export let style = '';
  export let id: string = '';
</script>

<div {id} class={`group max-w-3xl p-4 md:p-0 ${$$props.class}`}>
  <div style={`box-shadow: 0 0 0 1px rgb(255 255 255 / 30%),0 0 0 1.5px rgba(0,0,0,.8),0 2.8px 2.2px rgba(0,0,0,.034),0 6.7px 5.3px rgba(0,0,0,.048),0 12.5px 10px rgba(0,0,0,.06),0 22.3px 17.9px rgba(0,0,0,.072),0 41.8px 33.4px rgba(0,0,0,.086),0 100px 80px rgba(0,0,0,.12); ${style}`} class="flex min-h-[120px] flex-col items-stretch rounded-xl bg-black/90 text-white transition-all duration-300 ease-linear md:bg-black/75">
    <div id={`topbar${id}`} class="grid h-6 grid-cols-[45px_1fr_45px] items-center gap-3 px-4 pt-3">
      <Trafficlight />
      <div class="relative h-4 text-center text-xs leading-3 tracking-[.32px] text-white/30">
        <input type="text" required class="peer absolute inset-0 m-0 border-none bg-transparent text-center text-xs leading-3 tracking-[.32px] text-white/60 outline-none ring-0 ring-transparent ring-offset-0" {placeholder} />
        {#if easteregg}
          <span class="absolute inset-0 top-4 -z-10 m-0 scale-0 border-none text-center text-xs text-white/60 transition-all duration-300 group-hover:peer-invalid:scale-100 group-hover:peer-invalid:opacity-100 peer-focus-visible:!scale-0 peer-focus-visible:!opacity-0">☝️</span>
          <span class="absolute inset-0 top-7 -z-10 m-0 scale-0 border-none text-center text-xs text-white/60 transition-all duration-300 group-hover:peer-invalid:scale-100 group-hover:peer-invalid:opacity-100 peer-focus-visible:!scale-0 peer-focus-visible:!opacity-0">Psst.. wanna type something here?</span>
        {/if}
      </div>
    </div>
    <div class="grid w-full [grid-template:1fr/1fr]">
      <div class="p-4 [grid-column:1/1] [grid-row:1/1]">
        <slot />
      </div>
    </div>
  </div>
</div>
