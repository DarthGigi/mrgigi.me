<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { initRaindropBookmarks, initRaindropCollections } from "$lib/context/raindrop.svelte";
  import { initTweetData } from "$lib/context/tweet.svelte";
  import { useSidebar } from "$ui/sidebar";
  import { getCollections } from "./raindrop.remote";

  const { children } = $props();

  const raindropCollections = initRaindropCollections();
  initRaindropBookmarks();
  initTweetData();
  const collections = $derived(raindropCollections.current ?? []);

  const initialCollections = !raindropCollections.hasCurrent ? await getCollections() : null;

  if (initialCollections !== null) {
    raindropCollections.current = initialCollections;
  }

  const sidebar = useSidebar();
</script>

<div class="flex flex-1">
  <div class="flex w-full">
    <div class="hidden min-h-svh has-data-[variant=inset]:bg-sidebar lg:flex">
      <div
        data-slot="sidebar-gap"
        class="relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180">
      </div>
      <div
        data-state={sidebar.state}
        class="fixed top-0 left-(--sidebar-width) flex w-(--sidebar-width) transition-all duration-200 ease-linear data-[state=collapsed]:left-(--sidebar-width-icon)">
        <div
          class="relative hidden scrollable-area w-full flex-col bg-sidebar lg:flex lg:w-80 lg:flex-col lg:border-r xl:w-96">
          <div class="flex flex-col gap-1 p-2 text-sm">
            {#each collections as collection (collection._id)}
              {#if collection.slug}
                <a
                  href={resolve("/bookmarks/[slug]", { slug: collection.slug })}
                  data-active={page.url.pathname.endsWith(collection.slug)}
                  class="flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 *:transition-colors *:duration-300 hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent">
                  <span class="font-medium">{collection.title}</span>
                  <span class="text-muted-foreground">
                    {collection.count}
                    {collection.count === 1 ? "bookmark" : "bookmarks"}
                  </span>
                </a>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </div>
    {#if page.url.pathname.endsWith("/bookmarks")}
      <div class="flex-1 bg-sidebar lg:hidden">
        <div class="relative flex scrollable-area w-full flex-col">
          {#each collections as collection (collection._id)}
            {#if collection.slug}
              <a
                href={resolve("/bookmarks/[slug]", { slug: collection.slug })}
                data-active={page.url.pathname.endsWith(collection.slug)}
                class="flex flex-col gap-1 border-b px-4 py-3 text-sm hover:bg-sidebar-accent">
                <span class="font-medium">{collection.title}</span>
                <span class="text-muted-foreground">
                  {collection.count}
                  {collection.count === 1 ? "bookmark" : "bookmarks"}
                </span>
              </a>
            {/if}
          {/each}
        </div>
      </div>
      {@render children?.()}
    {:else}
      <div class="flex-1">
        {@render children?.()}
      </div>
    {/if}
  </div>
</div>
