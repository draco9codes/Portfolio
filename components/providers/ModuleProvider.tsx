"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { sectionRegistry } from "@/lib/section-registry";

type ModuleContextType = {
  activeSection: string;
};

const ModuleContext =
  createContext<ModuleContextType | null>(null);

export function ModuleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const activeSection = useActiveSection(
    sectionRegistry.map((s) => s.id)
  );

  return (
    <ModuleContext.Provider
      value={{ activeSection }}
    >
      {children}
    </ModuleContext.Provider>
  );
}

export function useModuleContext() {
  const context = useContext(ModuleContext);

  if (!context) {
    throw new Error(
      "useModuleContext must be used within ModuleProvider"
    );
  }

  return context;
}