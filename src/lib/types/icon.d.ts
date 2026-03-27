import { type Icon as LucideIcon } from "@lucide/svelte";
import { type Component } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface SvgProps extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
}

type IconType = Component<SvgProps> | typeof LucideIcon;

export { IconType, SvgProps };
