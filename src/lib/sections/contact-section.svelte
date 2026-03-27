<script lang="ts">
  import { DATA } from "$lib/data/resume";
  import { Button } from "bits-ui";
</script>

<div
  class="relative motion-preset-blur-down rounded-xl border bg-background p-10 motion-delay-2100">
  <div
    class="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
    <span class="text-sm font-medium text-background">Contact</span>
  </div>
  <div class="relative flex flex-col items-center gap-4 text-center">
    <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
    <p class="mx-auto max-w-lg text-balance text-muted-foreground">
      <Button.Root
        href={DATA.contact.social.X.url}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-sm text-blue-500 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none">
        Just dm me on Twitter/X
      </Button.Root>
      and I'll respond whenever I can.
    </p>
    <p class="mx-auto max-w-lg text-xs text-balance text-muted-foreground">
      Didn't include my email because of the spam bots. I will ignore all soliciting.
    </p>
  </div>
</div>
