<script lang="ts">
  import { DATA } from "$lib/data/resume";
</script>

<div class="dark relative flex size-full flex-col bg-background">
  <div class="relative flex size-full flex-col bg-background p-10">
    <div
      class="relative flex size-full flex-col rounded-3xl border border-solid border-border bg-card p-10">
      <div class="absolute top-10 left-10 z-2 flex items-center">
        <img
          src="avatar"
          alt={DATA.name}
          class="size-[8.75rem] rounded-3xl border border-solid border-border object-cover" />
      </div>

      <div class="relative z-1 flex size-full flex-col items-start justify-end">
        <div
          class="mb-4 max-w-[56.25rem] text-left text-5xl leading-[1.1] font-semibold tracking-[-0.02em] text-primary">
          {DATA.name}
        </div>
        {#if DATA.description}
          <div
            class="mb-8 max-w-[50rem] text-left text-xl leading-[1.5] font-normal text-balance text-muted-foreground">
            {DATA.description.replaceAll("&", "and")}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
