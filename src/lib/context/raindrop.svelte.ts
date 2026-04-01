import type { RaindropBookmarkItem, RaindropCollectionWithSlug } from "$lib/types/raindrop";
import { PersistedState } from "runed";
import { createContext } from "svelte";

class RaindropCollectionsContext {
  #data = new PersistedState<RaindropCollectionWithSlug[] | null>("raindropCollections", null, {
    syncTabs: true,
    storage: "session"
  });

  get current() {
    return this.#data.current;
  }

  set current(value: RaindropCollectionWithSlug[] | null) {
    this.#data.current = value;
  }

  get hasCurrent() {
    return this.#data.current !== null;
  }
}

function initRaindropCollections() {
  const raindropCollections = new RaindropCollectionsContext();
  setRaindropCollectionsContext(raindropCollections);
  return raindropCollections;
}

const [getRaindropCollectionsContext, setRaindropCollectionsContext] =
  createContext<RaindropCollectionsContext>();

class RaindropBookmarksContext {
  #data = new PersistedState<Record<number, RaindropBookmarkItem[] | null>>(
    "raindropBookmarks",
    {},
    {
      syncTabs: true,
      storage: "session"
    }
  );

  get current() {
    return this.#data.current;
  }

  set current(value: Record<number, RaindropBookmarkItem[] | null>) {
    this.#data.current = value;
  }

  hasCollection(id: number) {
    return Object.hasOwn(this.#data.current, id);
  }

  getCollection(id: number) {
    return this.#data.current[id] ?? null;
  }

  setCollection(id: number, items: RaindropBookmarkItem[] | null) {
    this.#data.current = {
      ...this.#data.current,
      [id]: items
    };
  }
}

function initRaindropBookmarks() {
  const raindropBookmarks = new RaindropBookmarksContext();
  setRaindropBookmarksContext(raindropBookmarks);
  return raindropBookmarks;
}

const [getRaindropBookmarksContext, setRaindropBookmarksContext] =
  createContext<RaindropBookmarksContext>();

export {
  getRaindropBookmarksContext,
  getRaindropCollectionsContext,
  initRaindropBookmarks,
  initRaindropCollections,
  RaindropBookmarksContext,
  RaindropCollectionsContext
};
