<script>
  export let scrollProgress = 0;
</script>

<div class="relative w-1/2 overflow-hidden h-1 bg-gradient-to-r from-white/20 to-transparent">
  <div class={`absolute bottom-0 left-0 h-full bg-gradient-to-r ${$$props.class}`} style="width: {scrollProgress * 100}%"></div>
</div>
