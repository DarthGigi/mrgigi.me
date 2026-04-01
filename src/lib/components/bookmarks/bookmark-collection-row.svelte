<script lang="ts">
  import type { RaindropCollectionWithSlug } from "$lib/types/raindrop";
  import { Button } from "$ui/button";
  import ArrowUpRight from "@lucide/svelte/icons/arrow-up-right";

  type Props = {
    collection: RaindropCollectionWithSlug;
  };

  let { collection }: Props = $props();
  const collectionHref = $derived(`/bookmarks/${collection.slug ?? collection.title}`);
</script>

<article
  class="group overflow-hidden rounded-[calc(var(--radius-xl)*1.15)] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-[0_24px_80px_-36px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5">
  <div class="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
    <div class="flex min-w-0 items-center gap-4 sm:gap-5">
      {#if collection.cover}
        <div
          class="hidden size-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 sm:block">
          <img
            src={collection.cover[0]}
            alt=""
            class="h-full w-full object-cover opacity-80"
            loading="lazy" />
        </div>
      {/if}

      <div class="min-w-0 space-y-2.5">
        <div class="flex flex-wrap items-center gap-2">
          <h2 class="truncate text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {collection.title}
          </h2>
        </div>
      </div>
    </div>

    <Button
      href={collectionHref}
      variant="outline"
      class="border-white/12 bg-white/6 text-white/80 hover:bg-white/10 hover:text-white sm:shrink-0">
      Open collection
      <ArrowUpRight />
    </Button>
  </div>
</article>
