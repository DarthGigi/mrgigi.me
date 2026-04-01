import { query } from "$app/server";
import { env as envPrivate } from "$env/dynamic/private";
import { COLLECTION_IDS } from "$lib/constants";
import type {
  RaindropBookmarkItem,
  RaindropCollection,
  RaindropCollectionWithSlug
} from "$lib/types/raindrop";
import { error } from "@sveltejs/kit";
import { z } from "zod";

const RAINDROP_API_URL = "https://api.raindrop.io/rest/v1";
const { RAINDROP_ACCESS_TOKEN } = envPrivate;

const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${RAINDROP_ACCESS_TOKEN}`
  }
} satisfies RequestInit;

export const getBookmarkItems = query(
  z.object({
    id: z.unknown(),
    pageIndex: z.number().optional()
  }),
  async ({ id, pageIndex = 0 }) => {
    if (!id) error(400, "Missing bookmark ID.");
    if (typeof pageIndex !== "number" || pageIndex < 0) {
      error(400, "Invalid page index");
    }

    try {
      const response = await fetch(
        `${RAINDROP_API_URL}/raindrops/${id}?` +
          new URLSearchParams({
            page: pageIndex.toString(),
            perpage: "50"
          }),
        { ...options, signal: AbortSignal.timeout(10000) }
      );

      if (!response.ok) {
        error(500, `HTTP error! status: ${response.status}`);
      }

      const data: { items: RaindropBookmarkItem[] } = await response.json();

      return data;
    } catch (error) {
      console.error(`Failed to fetch bookmark items: ${getErrorMessage(error)}`);
      return null;
    }
  }
);

export const getCollections = query(async () => {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collections`, {
      ...options,
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      error(500, `HTTP error! status: ${response.status}`);
    }

    const collections: { result: boolean; items: RaindropCollectionWithSlug[] } =
      await response.json();
    const filteredCollections = collections.items.filter((collection) =>
      COLLECTION_IDS.includes(collection._id)
    );
    return filteredCollections;
  } catch (error) {
    console.error(`Failed to fetch collections: ${getErrorMessage(error)}`);
    return null;
  }
});

export const getCollection = query(
  z.object({
    id: z.unknown()
  }),
  async ({ id }) => {
    try {
      const response = await fetch(`${RAINDROP_API_URL}/collection/${id}`, {
        ...options,
        signal: AbortSignal.timeout(10000)
      });
      const data: RaindropCollection = await response.json();
      return data;
    } catch (error) {
      console.info(error);
      return null;
    }
  }
);
