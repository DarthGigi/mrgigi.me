<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import { GlitterCloth } from "$lib/components/motion-core";
  import { IsMobile } from "$lib/hooks/is-mobile.svelte";
  import * as Sidebar from "$ui/sidebar";
  import "./layout.css";

  let { children } = $props();

  const isMobile = new IsMobile();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

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
