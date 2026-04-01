import AstroLogo from "$components/svg/astro.svelte";
import DrizzleORMLogo from "$components/svg/drizzle.svelte";
import GitHubLogo from "$components/svg/github.svelte";
import XformerlyTwitterLogo from "$components/svg/twitter.svelte";
import type { IconType } from "$lib/types/icon";
import GlobeIcon from "@lucide/svelte/icons/globe";
import {
  NuxtLogo,
  PostgreSQLLogo,
  ShadcnuiLogo,
  SvelteLogo,
  TailwindCSSLogo,
  VueLogo
} from "@selemondev/svgl-svelte";

export const DATA = {
  name: "Gigi",
  initials: "GG",
  url: "https://mrgigi.me",
  location: "'s-Hertogenbosch, NL",
  locationLink: "https://www.google.com/maps/place/'s-Hertogenbosch,+Netherlands",
  description:
    "Software & Design Engineer focused on building beautiful interfaces with Svelte and Tailwind CSS.",

  summary: `I am a software and design engineer with a passion for building beautiful animated interfaces and a focus on delightful user experiences. Most of my projects are open-source and free to use [because I do it for the craft, not the bling](https://x.com/ladygaga/status/284696040374927361). 

  While I have experiences across multiple different technologies and picking up new ones is easy for me, my toolkit of choice remains Svelte, Tailwind CSS, Drizzle ORM, shadcn/ui, and PostgreSQL.

  🐾 Little Monster at heart.`,

  avatarUrl: "https://avatars.githubusercontent.com/u/47110839",
  skills: [
    { name: "SvelteKit", icon: SvelteLogo },
    { name: "TailwindCSS", icon: TailwindCSSLogo },
    { name: "Drizzle ORM", icon: DrizzleORMLogo },
    { name: "Shadcn UI", icon: ShadcnuiLogo },
    { name: "PostgreSQL", icon: PostgreSQLLogo },
    { name: "Astro", icon: AstroLogo },
    { name: "Vue", icon: VueLogo },
    { name: "Nuxt", icon: NuxtLogo }
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/DarthGigi",
        icon: GitHubLogo,
        navbar: true
      },
      X: {
        name: "X (Twitter)",
        url: "https://x.com/iDarthGigi",
        icon: XformerlyTwitterLogo,
        navbar: true
      }
    }
  },

  projects: [
    {
      title: "MC-ID",
      href: "https://mc-id.com",
      subtitle: "mc-id.com",
      active: true,
      description:
        "Created a Minecraft authentication service that's more secure and RAT-proof than authenticating with your Microsoft account. It functions like 'Login with Google', but for Minecraft accounts, allowing users to prove their ownership of their accounts without sharing sensitive credentials.",
      technologies: [
        "SvelteKit",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "PostgreSQL",
        "Drizzle ORM",
        "Java",
        "Gradle"
      ],
      links: [
        {
          type: "Website",
          href: "https://mc-id.com",
          icon: GlobeIcon
        },
        {
          type: "Source",
          href: "https://github.com/Tonantzintla/MC-ID",
          icon: GitHubLogo
        }
      ],
      image:
        "https://raw.githubusercontent.com/Tonantzintla/MC-ID/refs/heads/main/website/static/assets/images/MC-ID.png"
    },
    {
      title: "SkyCrypt",
      subtitle: "sky.shiiyu.moe",
      href: "https://sky.shiiyu.moe",
      active: true,
      description:
        "Rewrote the entirety of SkyCrypt (a popular Minecraft Skyblock stats viewer) from scratch in SvelteKit, improving performance and user experience while adding a ton of new features like a pet simulator and profile comparison. The project is no longer using legacy technologies and is easier to maintain and contribute to.",
      technologies: ["SvelteKit", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://sky.shiiyu.moe",
          icon: GlobeIcon
        },
        {
          type: "Source",
          href: "https://github.com/SkyCryptWebsite/SkyCrypt-Frontend",
          icon: GitHubLogo
        }
      ],
      image:
        "https://raw.githubusercontent.com/SkyCryptWebsite/SkyCrypt-Frontend/dev/static/img/screenshots/desktop.avif"
    },
    {
      title: "MinionAH",
      href: "https://minionah.com",
      subtitle: "minionah.com",
      active: true,
      description:
        "Built a marketplace for Hypixel Skyblock minions, allowing users to easily buy and sell their minions with an intuitive interface and real-time pricing data.",
      technologies: [
        "SvelteKit",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "PostgreSQL",
        "Prisma ORM"
      ],
      links: [
        {
          type: "Website",
          href: "https://minionah.com",
          icon: GlobeIcon
        },
        {
          type: "Source",
          href: "https://github.com/Tonantzintla/MinionAH",
          icon: GitHubLogo
        }
      ],
      image:
        "https://raw.githubusercontent.com/Tonantzintla/MinionAH/refs/heads/main/static/assets/images/ogBanner.png"
    },
    {
      title: "Sirius",
      href: "https://sirius.menu",
      subtitle: "sirius.menu",
      active: true,
      description:
        "Built all the websites for a popular Roblox Script Hub, including the main marketing website with amazing animations, the store/purchase website, docs, and an internal admin dashboard. This was my first time working with and learning a Frontend/JavaScript framework.",
      technologies: ["AstroJS", "TypeScript", "TailwindCSS", "GSAP", "Express", "Stripe"],
      links: [
        {
          type: "Website",
          href: "https://sirius.menu",
          icon: GlobeIcon
        },
        {
          type: "Source",
          href: "https://github.com/SiriusSoftwareLtd/Website",
          icon: GitHubLogo
        }
      ],
      image:
        "https://raw.githubusercontent.com/SiriusSoftwareLtd/Website/refs/heads/main/public/assets/images/png/embedBanner.png"
    }
  ]
} as ResumeType;

export type ResumeType = {
  readonly name: string;
  readonly initials: string;
  readonly url: string;
  readonly location: string;
  readonly locationLink: string;
  readonly description: string;
  readonly summary: string;
  readonly avatarUrl: string;
  readonly skills: {
    readonly name: string;
    readonly icon: IconType;
  }[];
  readonly contact: {
    readonly social: Record<
      string,
      {
        readonly name: string;
        readonly url: string;
        readonly icon: IconType;
        readonly navbar?: boolean;
      }
    >;
  };
  readonly projects: {
    readonly title: string;
    readonly href?: string;
    readonly subtitle?: string;
    readonly active?: boolean;
    readonly description: string;
    readonly technologies: string[];
    readonly links?: {
      readonly type: string;
      readonly href: string;
      readonly icon: IconType;
    }[];
    readonly image?: string;
    readonly video?: string;
  }[];
};
