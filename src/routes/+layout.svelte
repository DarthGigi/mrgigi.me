<script lang="ts">
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import { GlitterCloth } from "$lib/components/motion-core";
  import { DATA } from "$lib/data/resume";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import * as Sidebar from "$ui/sidebar";
  import SvelteSeo from "svelte-seo";
  import "./layout.css";

  let { children } = $props();

  const isMobile = new IsMobile();
</script>

<SvelteSeo
  title={DATA.name}
  description={DATA.description}
  canonical={DATA.url}
  openGraph={{
    title: DATA.name,
    description: DATA.description,
    type: "website",
    url: DATA.url,
    // @ts-expect-error It accepts any property
    image: "/og-image",
    images: [
      {
        url: "/og-image",
        alt: "Open Graph Image",
        width: 1200,
        height: 630,
        secure_url: `${DATA.url}/og-image`,
        type: "image/png"
      }
    ]
  }}
  themeColor="#0a0a0a"
  twitter={{
    title: DATA.name,
    description: DATA.description,
    image: "/og-image",
    imageAlt: `${DATA.name} Logo`,
    card: "summary_large_image",
    creator: "@DarthGigi"
  }} />

<GlitterCloth
  class="fixed top-0 left-0 -z-10 h-screen w-screen"
  color="#171717"
  blendStrength={0.02}
  brightness={1}
  vignettePower={0.5}
  vignetteStrength={50} />

<Sidebar.Provider>
  <AppSidebar />
  <div
    class="fixed bottom-2 z-50 data-[mobile=false]:left-2 data-[mobile=true]:right-2"
    data-mobile={isMobile.current}>
    <Sidebar.Trigger class="size-8" />
  </div>

  {@render children?.()}
</Sidebar.Provider>
