import { query } from "$app/server";
import { getTweet } from "sveltweet/api";
import type { Tweet } from "sveltweet/api";
import { z } from "zod";

export const getTweetData = query(
  z.string(),
  async (id: string): Promise<Tweet | null> => (await getTweet(id)) ?? null
);

export const getTweetBatchData = query.batch(z.string(), async (ids: string[]) => {
  const tweets = await Promise.all(
    ids.map(async (id) => [id, (await getTweet(id)) ?? null] as const)
  );
  const lookup = new Map(tweets);

  return (id: string) => lookup.get(id) ?? null;
});
