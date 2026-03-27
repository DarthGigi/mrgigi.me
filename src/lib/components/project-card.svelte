<script lang="ts">
  import type { ResumeType } from "$lib/data/resume";
  import { Badge } from "$ui/badge";
  import { cn } from "$utils";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";
  import { Avatar, Button } from "bits-ui";
  import Markdown from "svelte-exmarkdown";

  type Props = ResumeType["projects"][number] & {
    class?: string;
  };

  const {
    title,
    href,
    description,
    subtitle,
    technologies,
    image,
    video,
    links,
    class: className
  }: Props = $props();
</script>

<div class={cn("flex h-full flex-col overflow-hidden rounded-xl border border-border", className)}>
  <div class="relative shrink-0">
    <Button.Root
      href={href || undefined}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      class="block">
      {#if video}
        <video src={video} autoplay loop muted playsinline class="h-48 w-full object-cover"></video>
      {:else if image}
        <Avatar.Root class="h-48 w-full">
          <Avatar.Image class="h-48 w-full object-cover" src={image} alt={title} />
          <Avatar.Fallback class="h-48 w-full bg-muted">
            <div class="flex h-full items-center justify-center text-sm text-muted-foreground">
              {title}
            </div>
          </Avatar.Fallback>
        </Avatar.Root>
      {:else}
        <div class="h-48 w-full bg-muted"></div>
      {/if}
    </Button.Root>
    {#if links && links.length > 0}
      <div class="absolute top-2 right-2 flex flex-wrap gap-2">
        {#each links as link, idx (idx)}
          <Button.Root
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onclick={(e) => e.stopPropagation()}>
            <Badge
              class="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90"
              variant="default">
              <link.icon />
              {link.type}
            </Badge>
          </Button.Root>
        {/each}
      </div>
    {/if}
  </div>
  <div class="flex flex-1 flex-col gap-3 bg-background p-6">
    <div class="flex items-start justify-between gap-2">
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold">{title}</h3>
        {#if subtitle}
          <p class="text-xs text-muted-foreground">{subtitle}</p>
        {/if}
      </div>
      <Button.Root
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
        aria-label={`Open ${title}`}>
        <ArrowUpRight class="h-4 w-4" aria-hidden />
      </Button.Root>
    </div>
    <div
      class="prose max-w-full flex-1 font-sans text-xs leading-relaxed text-pretty text-muted-foreground dark:prose-invert">
      <Markdown md={description} />
    </div>
    {#if technologies && technologies.length > 0}
      <div class="mt-auto flex flex-wrap gap-1">
        {#each technologies as technology (technology)}
          <Badge
            class="h-6 w-fit border border-border px-2 text-[11px] font-medium"
            variant="outline">
            {technology}
          </Badge>
        {/each}
      </div>
    {/if}
  </div>
</div>
