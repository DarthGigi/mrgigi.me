<script lang="ts">
  import { GlitterCloth, PixelatedImage } from "$lib/components/motion-core";
  import { DATA } from "$lib/data/resume";
  import ContactSection from "$lib/sections/contact-section.svelte";
  import ProjectsSection from "$lib/sections/projects-section.svelte";
  import rehypeExternalLinks from "rehype-external-links";
  import Markdown, { type Plugin } from "svelte-exmarkdown";

  const mdPlugins: Plugin[] = [
    {
      rehypePlugin: [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]
    }
  ];
</script>

<GlitterCloth
  class="fixed inset-0 top-0 h-screen w-screen"
  color="#171717"
  blendStrength={0.02}
  brightness={1}
  vignettePower={0.5}
  vignetteStrength={50} />

<div class="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 select-none sm:py-24">
  <main class="relative flex min-h-dvh flex-col gap-14">
    <section id="hero" class="motion-preset-blur-down">
      <div class="mx-auto w-full max-w-2xl space-y-8">
        <div class="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
          <div class="order-2 flex flex-col gap-2 md:order-1">
            <span class="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
              Hi, I'm {DATA.name.split(" ")[0]}
            </span>
            <span class="max-w-150 text-muted-foreground md:text-lg lg:text-xl">
              {DATA.description}
            </span>
          </div>
          <div class="order-1 md:order-2">
            <PixelatedImage
              class="size-24 rounded-full border-0 shadow-lg data-[status=loaded]:motion-preset-focus data-[status=loading]:opacity-0 md:size-32"
              src={DATA.avatarUrl} />
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div
        class="flex min-h-0 flex-col gap-y-4 **:motion-preset-blur-down **:motion-delay-[calc((sibling-index()+1)*0.1s)]">
        <h2 class="text-xl font-bold">About</h2>
        <div
          class="prose max-w-full font-sans leading-relaxed text-pretty text-muted-foreground dark:prose-invert">
          <Markdown md={DATA.summary} plugins={mdPlugins} />
        </div>
      </div>
    </section>
    <section id="skills">
      <div class="flex min-h-0 flex-col gap-y-4">
        <h2 class="motion-preset-blur-down text-xl font-bold motion-delay-500">Skills</h2>

        <div class="flex flex-wrap gap-2">
          {#each DATA.skills as skill (skill)}
            <div
              class="flex h-8 w-fit motion-preset-blur-down items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20 motion-delay-[calc((sibling-index()+5)*0.1s)]">
              {#if skill.icon}
                <skill.icon class="size-4 overflow-hidden rounded object-contain" />
              {/if}
              <span class="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <section id="projects">
      <ProjectsSection />
    </section>
    <section id="contact">
      <ContactSection />
    </section>
  </main>
</div>
