<script>
  export let isDeepDiveOpen;
  export let scrollProgress = 0;
</script>

<button
  class="relative rounded-full overflow-hidden bg-white"
  on:click={() => {
    isDeepDiveOpen = false;
    setTimeout(() => {
      scrollProgress = 0;
    }, 500);
  }}
>
  <div class={`absolute z-10 w-3 h-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${$$props.class}`} style="--scroll-progress: {scrollProgress}; width: calc(var(--scroll-progress) * 100%); height: calc(var(--scroll-progress) * 100%);" />
  <svg class="relative z-20" xmlns="http://www.w3.org/2000/svg" width="41" height="41"><path fill-rule="evenodd" d="M22.173 20.25l6.345-6.345c.481-.481.481-1.346 0-1.923-.48-.481-1.346-.481-1.922 0l-6.346 6.345-6.345-6.345c-.481-.481-1.346-.481-1.923 0-.481.481-.481 1.346 0 1.923l6.345 6.345-6.345 6.346c-.481.48-.481 1.346 0 1.922.481.481 1.346.481 1.923 0l6.345-6.345 6.346 6.345c.48.481 1.346.481 1.922 0 .481-.48.481-1.346 0-1.922l-6.345-6.346z"></path></svg>
</button>
