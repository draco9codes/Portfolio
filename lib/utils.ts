// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — Conditional + merged Tailwind class utility
 *
 * Why you need this:
 * Tailwind has specificity conflicts when merging classes.
 * e.g., "text-red-500" + "text-blue-500" → you want blue to win.
 * tailwind-merge handles this correctly. clsx handles conditionals.
 *
 * Usage:
 *   cn("base-class", isActive && "active-class", { "disabled": !enabled })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}