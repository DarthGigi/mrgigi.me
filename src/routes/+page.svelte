<script lang="ts">
  import { DATA } from "$lib/data/resume";
  import ContactSection from "$lib/sections/contact-section.svelte";
  import ProjectsSection from "$lib/sections/projects-section.svelte";
  import * as Avatar from "$ui/avatar";
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

<div class="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
  <main class="relative flex min-h-dvh flex-col gap-14">
    <section id="hero">
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
            <Avatar.Root class="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
              <Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
              <Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
            </Avatar.Root>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="flex min-h-0 flex-col gap-y-4">
        <div>
          <h2 class="text-xl font-bold">About</h2>
        </div>
        <div>
          <div
            class="prose max-w-full font-sans leading-relaxed text-pretty text-muted-foreground dark:prose-invert">
            <Markdown md={DATA.summary} plugins={mdPlugins} />
          </div>
        </div>
      </div>
    </section>
    <section id="skills">
      <div class="flex min-h-0 flex-col gap-y-4">
        <div>
          <h2 class="text-xl font-bold">Skills</h2>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each DATA.skills as skill (skill)}
            <div>
              <div
                class="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                {#if skill.icon}
                  <skill.icon class="size-4 overflow-hidden rounded object-contain" />
                {/if}
                <span class="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
    <section id="projects">
      <div>
        <ProjectsSection />
      </div>
    </section>
    <section id="contact">
      <div>
        <ContactSection />
      </div>
    </section>
  </main>
</div>
