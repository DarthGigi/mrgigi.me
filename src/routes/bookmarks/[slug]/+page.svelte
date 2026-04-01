<script lang="ts">
  import { page } from "$app/state";
  import BookmarkCard from "$components/bookmarks/bookmark-card.svelte";
  import { TWEETS_COLLECTION_ID } from "$lib/constants";
  import {
    getRaindropBookmarksContext,
    getRaindropCollectionsContext
  } from "$lib/context/raindrop.svelte";
  import type { RaindropBookmarkItem } from "$lib/types/raindrop";
  import { Button } from "$ui/button";
  import * as Card from "$ui/card";
  import * as Empty from "$ui/empty";
  import ArrowLeft from "@lucide/svelte/icons/arrow-left";
  import BookMarkedIcon from "@lucide/svelte/icons/book-marked";
  import BookmarkXIcon from "@lucide/svelte/icons/bookmark-x";
  import { getBookmarkItems } from "../raindrop.remote";

  const collections = getRaindropCollectionsContext();
  const raindropBookmarks = getRaindropBookmarksContext();
  const currentCollection = $derived(
    collections.current?.find((bookmark) => (bookmark.slug ?? bookmark.title) === page.params.slug)
  );
  const hasCachedBookmarks = $derived.by(() => {
    const collectionId = currentCollection?._id;

    return collectionId !== undefined && raindropBookmarks.hasCollection(collectionId);
  });
  const getBookmarkItemsQuery = $derived.by(() => {
    if (!currentCollection || hasCachedBookmarks) {
      return null;
    }

    return getBookmarkItems({ id: currentCollection._id });
  });
  const bookmarks = $derived.by(() => {
    if (!currentCollection) {
      return null;
    }

    if (hasCachedBookmarks) {
      return {
        items: raindropBookmarks.getCollection(currentCollection._id) ?? []
      };
    }

    return getBookmarkItemsQuery?.current ?? null;
  });
  const isLoadingBookmarks = $derived(
    Boolean(currentCollection && !hasCachedBookmarks && getBookmarkItemsQuery?.loading)
  );

  const chunkBookmarks = (items: RaindropBookmarkItem[]) => {
    const firstChunk: typeof items = [];
    const lastChunk: typeof items = [];
    items.forEach((element, index) => {
      if (index % 2 === 0) {
        firstChunk.push(element);
      } else {
        lastChunk.push(element);
      }
    });
    return [[...firstChunk], [...lastChunk]];
  };

  $effect(() => {
    const collectionId = currentCollection?._id;
    const query = getBookmarkItemsQuery;

    if (!collectionId || !query?.ready) {
      return;
    }

    if (query.current !== null) {
      raindropBookmarks.setCollection(collectionId, query.current.items);
    }
  });
</script>

<div class="relative flex scrollable-area w-full flex-col">
  <section class="content-wrapper">
    <div class="@container content">
      <Button href="/bookmarks" variant="outline" class="lg:hidden">
        <ArrowLeft />
        Back to bookmarks
      </Button>
      <div class="my-6 lg:mt-0">
        <h1
          class="inline-block align-top text-3xl font-semibold text-balance [text-decoration:inherit]">
          {currentCollection?.title || page.params.slug}
        </h1>
      </div>

      <div>
        {#if isLoadingBookmarks}
          {@render loading()}
        {/if}
        {#if collections.current && currentCollection}
          {#if bookmarks && bookmarks.items.length > 0}
            <div
              class="group/twitter contents"
              data-twitter={currentCollection._id === TWEETS_COLLECTION_ID}>
              <div class="flex flex-col gap-4 @lg:hidden">
                {#each bookmarks.items as bookmark (bookmark._id)}
                  <div
                    class="flex gap-4 group-data-[twitter=false]/twitter:place-content-start group-data-[twitter=true]/twitter:h-fit">
                    <BookmarkCard {bookmark} />
                  </div>
                {/each}
              </div>
              <div class="hidden @lg:grid @lg:grid-cols-2 @lg:gap-4">
                {#each chunkBookmarks(bookmarks.items) as chunk, index (index)}
                  <div
                    class="grid gap-4 group-data-[twitter=false]/twitter:place-content-start group-data-[twitter=true]/twitter:h-fit">
                    {#each chunk as bookmark (bookmark._id)}
                      <BookmarkCard {bookmark} />
                    {/each}
                  </div>
                {/each}
              </div>
            </div>
          {:else}
            {@render empty()}
          {/if}
        {:else}
          {@render empty()}
        {/if}
      </div>
    </div>
  </section>
</div>

{#snippet empty()}
  <Empty.Root class="border">
    <Empty.Header>
      <Empty.Media variant="icon">
        {#if currentCollection}
          <BookmarkXIcon />
        {:else}
          <BookMarkedIcon />
        {/if}
      </Empty.Media>
      <Empty.Title>
        {currentCollection ? "No bookmarks found" : "Collection not found"}
      </Empty.Title>
      <Empty.Description>
        {currentCollection
          ? "This collection doesn't have any bookmarks yet."
          : "The collection you are looking for does not exist."}
      </Empty.Description>
    </Empty.Header>
  </Empty.Root>
{/snippet}

{#snippet skeletonCard()}
  <Card.Root class="pt-0">
    <div class="h-44 w-full animate-pulse bg-muted"></div>
    <Card.Header>
      <div
        class="h-(--height) w-full animate-pulse rounded-md bg-muted"
        style="--height: {Math.random() + 1}rem">
      </div>
      <div
        class="h-(--height) w-full animate-pulse rounded-md bg-muted"
        style="--height: {Math.random() * 4 + 4}rem">
      </div>
    </Card.Header>
    <Card.Footer>
      <div class="h-4 w-full animate-pulse rounded-md bg-muted"></div>
    </Card.Footer>
  </Card.Root>
{/snippet}

{#snippet loading()}
  <div>
    <div class="flex flex-col gap-4 @lg:hidden">
      {#each Array(4), index (index)}
        {@render skeletonCard()}
      {/each}
    </div>
    <div class="hidden @lg:grid @lg:grid-cols-2 @lg:gap-4">
      {#each Array(4), index (index)}
        <div
          class="grid gap-4 group-data-[twitter=false]/twitter:place-content-start group-data-[twitter=true]/twitter:h-fit">
          {#each Array(4), idx (idx)}
            {@render skeletonCard()}
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/snippet}
