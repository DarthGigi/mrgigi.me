import { PersistedState } from "runed";
import { createContext } from "svelte";
import type { Tweet } from "sveltweet/api";

class TweetDataContext {
  #data = new PersistedState<Record<string, Tweet | null>>(
    "tweetData",
    {},
    {
      syncTabs: true,
      storage: "session"
    }
  );

  get current() {
    return this.#data.current;
  }

  set current(value: Record<string, Tweet | null>) {
    this.#data.current = value;
  }

  hasTweet(id: string) {
    return Object.hasOwn(this.#data.current, id);
  }

  getTweet(id: string) {
    return this.#data.current[id] ?? null;
  }

  setTweet(id: string, tweet: Tweet | null) {
    this.#data.current = {
      ...this.#data.current,
      [id]: tweet
    };
  }
}

function initTweetData() {
  const tweetData = new TweetDataContext();
  setTweetDataContext(tweetData);
  return tweetData;
}

const [getTweetDataContext, setTweetDataContext] = createContext<TweetDataContext>();

export { getTweetDataContext, initTweetData, TweetDataContext };
