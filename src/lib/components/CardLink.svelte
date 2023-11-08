<script lang="ts">
  export let href: string;
  export let target = '_blank';
</script>

<a {href} {target} class={`relative m-0 cursor-pointer overflow-hidden rounded-none border-y-2  border-neutral-700/40 p-0 transition-all duration-300 md:rounded-3xl md:border-2 lg:hover:scale-105 ${$$props.class}`}>
  <slot />
</a>
