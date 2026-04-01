<script lang="ts">
  import { TWEETS_COLLECTION_ID } from "$lib/constants";
  import { getTweetDataContext } from "$lib/context/tweet.svelte";
  import "$lib/css/twitter-theme.css";
  import { formatDate } from "$lib/shared/date";
  import { getTweetBatchData } from "$lib/shared/remote-functions/tweet.remote";
  import type { RaindropBookmarkItem } from "$lib/types/raindrop";
  import * as Avatar from "$ui/avatar";
  import * as Card from "$ui/card";
  import { Spinner } from "$ui/spinner";
  import CalendarDays from "@lucide/svelte/icons/calendar-days";
  import ImageOffIcon from "@lucide/svelte/icons/image-off";
  import Link2Icon from "@lucide/svelte/icons/link-2";
  import type { AvatarImageLoadingStatus } from "bits-ui";

  type Props = {
    bookmark: RaindropBookmarkItem;
  };

  let { bookmark }: Props = $props();
  let loadingStatus = $derived<AvatarImageLoadingStatus>(bookmark.cover ? "loading" : "loaded");
  const tweetDataCache = getTweetDataContext();

  const createdAt = $derived(formatDate(bookmark.created));
  const tweetId = $derived.by(() => {
    if (bookmark.link && bookmark.collection.$id === TWEETS_COLLECTION_ID) {
      const match = bookmark.link.match(/\/status\/(\d+)/) ?? [];
      const tweetId = match[1];
      return tweetId;
    } else {
      return null;
    }
  });
  const hasCachedTweetData = $derived.by(() =>
    Boolean(tweetId && tweetDataCache.hasTweet(tweetId))
  );
  const tweetDataQuery = $derived.by(() => {
    if (!tweetId || hasCachedTweetData) {
      return null;
    }

    return getTweetBatchData(tweetId);
  });
  const tweetData = $derived.by(() => {
    if (!tweetId) {
      return null;
    }

    if (hasCachedTweetData) {
      return tweetDataCache.getTweet(tweetId);
    }

    return tweetDataQuery?.current ?? null;
  });
  const isLoadingTweet = $derived(
    Boolean(tweetId && !hasCachedTweetData && tweetDataQuery?.loading)
  );

  $effect(() => {
    const id = tweetId;
    const query = tweetDataQuery;

    if (!id || !query?.ready || query.error) {
      return;
    }

    tweetDataCache.setTweet(id, query.current ?? null);
  });
</script>

<Card.Root
  class="tweetCard group/bookmark w-full min-w-0 shrink-0 grow pt-0 data-[tweet=true]:gap-0"
  data-tweet={tweetId ? true : false}>
  {#if tweetId}
    <svelte:boundary>
      {#if isLoadingTweet}
        {@render tweetSkeleton()}
      {:else if tweetData}
        {#await import("sveltweet").then((mod) => mod.Tweet) then Tweet}
          <Tweet tweet={tweetData} />
        {/await}
      {:else}
        {#await import("sveltweet").then((mod) => mod.TweetNotFound) then TweetNotFound}
          <TweetNotFound />
        {/await}
      {/if}

      {#snippet failed()}
        {#await import("sveltweet").then((mod) => mod.TweetNotFound) then TweetNotFound}
          <TweetNotFound />
        {/await}
      {/snippet}
    </svelte:boundary>
  {:else}
    <Avatar.Root
      class="size-full h-44 *:rounded-none after:rounded-none after:border-none"
      bind:loadingStatus>
      {#if bookmark.cover}
        <Avatar.Image
          class="object-cover"
          loading="lazy"
          src={bookmark.cover}
          alt={bookmark.title} />
      {/if}
      <Avatar.Fallback class="uppercase">
        {#if loadingStatus === "loading"}
          <span class="sr-only">Loading image...</span>
          <Spinner class="size-14" />
        {:else}
          <span class="sr-only">No image available</span>
          <ImageOffIcon class="size-14" />
        {/if}
      </Avatar.Fallback>
    </Avatar.Root>
    <Card.Header>
      <Card.Title class="line-clamp-4 text-lg leading-snug">{bookmark.title}</Card.Title>
      <Card.Description
        class="line-clamp-4 inline-flex items-center gap-1 text-sm text-muted-foreground">
        <Link2Icon class="size-4" />
        {bookmark.domain}
      </Card.Description>
    </Card.Header>
    {#if bookmark.excerpt}
      <Card.Content>
        <p class="line-clamp-6 text-sm">{bookmark.excerpt}</p>
      </Card.Content>
    {/if}
  {/if}
  {#if createdAt}
    <Card.Footer>
      <p class="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <CalendarDays class="size-3.5" />
        Saved {createdAt}
      </p>
    </Card.Footer>
  {/if}
</Card.Root>

{#snippet tweetSkeleton()}
  {#await import("sveltweet").then((mod) => mod.TweetSkeleton) then TweetSkeleton}
    <TweetSkeleton />
  {/await}
{/snippet}
