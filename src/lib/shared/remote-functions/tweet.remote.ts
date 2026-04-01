import { getRequestEvent, query } from "$app/server";
import type { Tweet } from "sveltweet/api";
import { getTweet } from "sveltweet/api";
import { z } from "zod";

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

async function safeGetTweet(id: string): Promise<Tweet | null> {
  const { request } = getRequestEvent();
  try {
    return (
      (await getTweet(id, {
        headers: {
          ...request.headers,
          "User-Agent": "node"
        }
      })) ?? null
    );
  } catch (error) {
    console.error(`Failed to fetch tweet ${id}: ${getErrorMessage(error)}`);
    return null;
  }
}

export const getTweetData = query(
  z.string(),
  async (id: string): Promise<Tweet | null> => await safeGetTweet(id)
);

export const getTweetBatchData = query.batch(z.string(), async (ids: string[]) => {
  const tweets = await Promise.all(ids.map(async (id) => [id, await safeGetTweet(id)] as const));
  const lookup = new Map(tweets);

  return (id: string) => lookup.get(id) ?? null;
});
