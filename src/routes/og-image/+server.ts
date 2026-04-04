import { building, dev } from "$app/environment";
import OgImage from "$lib/components/og-image.svelte";
import { DATA } from "$lib/data/resume";
import appStyles from "$src/routes/layout.css?inline";
import { html as toReactNode } from "satori-html";
import { render } from "svelte/server";
import { ImageResponse } from "takumi-js/response";
import type { RequestHandler } from "./$types";

const { persistentImages } = await initializeAssets();

export const GET: RequestHandler = async ({ request }) => {
  try {
    const { body: renderedHTML } = render(OgImage);

    const isSameOrigin = request.headers.get("sec-fetch-site") === "same-origin";
    console.log(
      `Generating OG image. Same origin: ${isSameOrigin}, Dev mode: ${dev}, Building: ${building}`
    );

    const imageResponse = new ImageResponse(toReactNode(renderedHTML), {
      width: 1200,
      height: 630,
      format: "png",
      headers: {
        ...request.headers,
        "cache-control":
          dev || isSameOrigin
            ? "no-cache, no-store, must-revalidate"
            : "public, max-age=2629746, immutable"
      },
      stylesheets: [appStyles],
      emoji: "twemoji",
      persistentImages
    });

    const response = new Response(await imageResponse.arrayBuffer(), {
      status: imageResponse.status,
      statusText: imageResponse.statusText,
      headers: imageResponse.headers
    });

    return response;
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response(
      `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
      {
        status: 500
      }
    );
  }
};

async function initializeAssets() {
  if (building) return { persistentImages: [] };
  const avatarBuffer = await fetch(new URL(DATA.avatarUrl, DATA.url).toString()).then((res) =>
    res.arrayBuffer()
  );

  const persistentImages = [
    {
      src: "avatar",
      data: avatarBuffer
    }
  ];

  return { persistentImages };
}
