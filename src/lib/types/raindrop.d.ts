// https://developer.raindrop.io/v1/raindrops

type RaindropBookmarkItem = {
  _id: number;
  collection: {
    $id: number;
  };
  cover: string;
  created: string;
  domain: string;
  excerpt: string;
  note: string;
  lastUpdate: string;
  link: string;
  media: Array<{
    link: string;
  }>;
  tags: Array<string>;
  title: string;
  type: "link" | "article" | "image" | "video" | "document" | "audio";
  user: {
    $id: number;
  };

  // Other fields
  broken?: boolean;
  cache?: {
    status: "ready" | "retry" | "failed" | "invalid-origin" | "invalid-timeout" | "invalid-size";
    size: number;
    created: string;
  };
  creatorRef?: {
    _id: number;
    fullName: string;
  };
  file?: {
    name: string;
    size: number;
    type: string;
  };
  important?: boolean;
  highlights?: Array<{
    _id: string;
    text: string;
    color?:
      | "blue"
      | "brown"
      | "cyan"
      | "gray"
      | "green"
      | "indigo"
      | "orange"
      | "pink"
      | "purple"
      | "red"
      | "teal"
      | "yellow";
    note?: string;
    created: string;
  }>;
  reminder?: {
    data: string;
  };
};

// https://developer.raindrop.io/v1/collections

type RaindropCollection = {
  _id: number;
  access: {
    level: 1 | 2 | 3 | 4;
    draggable: boolean;
  };
  collaborators?: object;
  color: string;
  count: number;
  cover: Array<string>;
  created: string;
  expanded: boolean;
  lastUpdate: string;
  parent?: {
    $id: number;
  };
  public: boolean;
  sort: number;
  title: string;
  user: {
    $id: number;
  };
  view: "list" | "simple" | "grid" | "masonry";
};

type RaindropCollectionWithSlug = RaindropCollection & {
  // Undocumented in the public API docs, so we keep it opt-in.
  slug?: string;
};

export { RaindropBookmarkItem, RaindropCollection, RaindropCollectionWithSlug };
