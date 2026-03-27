<script lang="ts">
  import ProjectCard from "$lib/components/project-card.svelte";
  import { DATA } from "$lib/data/resume";
</script>

<section id="projects">
  <div class="flex min-h-0 flex-col gap-y-8">
    <div class="flex flex-col items-center justify-center gap-y-4">
      <div class="flex w-full items-center">
        <div
          class="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent">
        </div>
        <div class="z-10 rounded-xl border bg-primary px-4 py-1">
          <span class="text-sm font-medium text-background">My Projects</span>
        </div>
        <div
          class="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent">
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-y-3">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my projects</h2>
        <p
          class="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
          I work on a variety of projects, here are a few of them. If you want to see more, check
          out my GitHub.
        </p>
      </div>
    </div>
    <div class="mx-auto grid max-w-200 auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
      {#each DATA.projects as project (project)}
        <div class="h-full">
          <ProjectCard {...project} />
        </div>
      {/each}
    </div>
  </div>
</section>
