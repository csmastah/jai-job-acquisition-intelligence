/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState } from "react";

export type DesignPreset = "Bento Grid" | "Professional Polish" | "High Density" | "Elegant Dark" | "Sleek Interface";

interface DesignSystemState {
  preset: DesignPreset;
  setPreset: (preset: DesignPreset) => void;
}

const DesignSystemContext = createContext<DesignSystemState | undefined>(undefined);

export function DesignSystemProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPreset] = useState<DesignPreset>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem("jai-design-preset") as DesignPreset) || "Sleek Interface";
    }
    return "Sleek Interface";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-preset", preset.toLowerCase().replace(/\s+/g, '-'));
    localStorage.setItem("jai-design-preset", preset);
  }, [preset]);

  return (
    <DesignSystemContext.Provider value={{ preset, setPreset }}>
      {children}
    </DesignSystemContext.Provider>
  );
}

export const useDesignSystem = () => {
  const context = useContext(DesignSystemContext);
  if (!context) throw new Error("useDesignSystem must be used within DesignSystemProvider");
  return context;
};
