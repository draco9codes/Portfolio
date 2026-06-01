"use client";

import { sectionRegistry } from "@/lib/section-registry";
import { useModuleContext } from "@/components/providers/ModuleProvider";

export function useCurrentModule() {
  const { activeSection } = useModuleContext();

  const currentModule =
    sectionRegistry.find(
      (section) => section.id === activeSection
    );

  return {
    activeSection,
    currentModule,
  };
}