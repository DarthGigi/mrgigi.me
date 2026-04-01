<script lang="ts">
  import { page } from "$app/state";
  import { DATA } from "$lib/data/resume";
  import * as Sidebar from "$ui/sidebar";
  import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
  import BookmarkIcon from "@lucide/svelte/icons/bookmark";
  import HouseIcon from "@lucide/svelte/icons/house";

  const items = [
    {
      title: "Home",
      url: "/",
      icon: HouseIcon
    },
    {
      title: "Bookmarks",
      url: "/bookmarks",
      icon: BookmarkIcon
    }
  ];

  const nestedSidebarRoutes = ["/bookmarks"];

  const isNested = $derived(
    nestedSidebarRoutes.some((route) => page.url.pathname.startsWith(route))
  );
</script>

<Sidebar.Root
  variant="sidebar"
  collapsible="icon"
  class="data-[nested=true]:border-e-muted"
  data-nested={isNested}>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu class="gap-1">
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton
                class="h-auto [&_svg]:h-lh [&_svg]:w-4"
                isActive={item.url === page.url.pathname}>
                {#snippet child({ props })}
                  <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                  <a href={item.url} {...props}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Links</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu class="gap-1">
          {#each Object.values(DATA.contact.social) as contact (contact.name)}
            {#if contact.navbar}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton
                  class="flex h-auto items-center justify-between [&_svg]:h-lh [&_svg]:w-4">
                  {#snippet child({ props })}
                    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
                    <a href={contact.url} {...props}>
                      <div class="flex items-center-safe gap-2">
                        <contact.icon />

                        <span>{contact.name}</span>
                      </div>
                      <ArrowUpRightIcon />
                    </a>
                  {/snippet}
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {/if}
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
