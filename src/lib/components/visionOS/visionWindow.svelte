<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  <div class="absolute -top-4 left-1/2 flex -translate-x-1/2 -translate-y-full justify-center gap-2 rounded-full border border-solid border-white/[0.18] bg-white/25 p-2 drop-shadow backdrop-blur-xl md:-left-4 md:top-1/2 md:-translate-x-full md:-translate-y-1/2 md:flex-col">
    <slot name="buttons" />
  </div>
  <div class={`relative max-h-[28rem] w-screen overflow-hidden rounded-3xl border border-solid border-white/[0.18] bg-white/25 p-4 drop-shadow-md backdrop-blur-xl will-change-contents md:w-[36rem] lg:max-h-[36rem] lg:w-[72rem] ${$$props.class}`}>
    <slot />
  </div>
  <div class="relative mt-4 flex w-full justify-center gap-6">
    <div class="h-[0.625rem] w-[0.625rem] rounded-full bg-white/25 shadow backdrop-blur-xl" />
    <div class="h-[0.625rem] w-24 rounded-full bg-white/25 shadow backdrop-blur-xl" />
  </div>
</div>
