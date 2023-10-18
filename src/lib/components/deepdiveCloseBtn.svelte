<script>
  export let isDeepDiveOpen;
  export let scrollProgress = 0;
  export let invert = false;
</script>

<button
  on:click
  class="relative overflow-hidden rounded-full bg-white transition-colors duration-300 ease-in-out"
  class:!bg-transparent={scrollProgress >= 1}
  on:click={() => {
    isDeepDiveOpen = false;
    setTimeout(() => {
      scrollProgress = 0;
    }, 500);
  }}>
  <div class={`absolute left-1/2 top-1/2 z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out ${$$props.class}`} class:!w-full={scrollProgress >= 1} class:!h-full={scrollProgress >= 1} />
  <svg class="relative z-20 transition-all duration-300 ease-in-out" class:invert={invert && scrollProgress >= 1} xmlns="http://www.w3.org/2000/svg" width="41" height="41"><path fill-rule="evenodd" d="M22.173 20.25l6.345-6.345c.481-.481.481-1.346 0-1.923-.48-.481-1.346-.481-1.922 0l-6.346 6.345-6.345-6.345c-.481-.481-1.346-.481-1.923 0-.481.481-.481 1.346 0 1.923l6.345 6.345-6.345 6.346c-.481.48-.481 1.346 0 1.922.481.481 1.346.481 1.923 0l6.345-6.345 6.346 6.345c.48.481 1.346.481 1.922 0 .481-.48.481-1.346 0-1.922l-6.345-6.346z" /></svg>
</button>
