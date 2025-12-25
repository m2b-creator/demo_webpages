"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type { ColorScheme, DemoTheme } from "@/lib/themes/types";

interface ThemeContextValue {
  currentScheme: ColorScheme;
  availableSchemes: ColorScheme[];
  setScheme: (schemeId: string) => void;
  themeName: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

interface ThemeProviderProps {
  theme: DemoTheme;
  children: ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(
    theme.schemes.find((s) => s.id === theme.defaultScheme) || theme.schemes[0]
  );

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(currentScheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${kebabCase(key)}`, value);
    });
  }, [currentScheme]);

  const setScheme = (schemeId: string) => {
    const scheme = theme.schemes.find((s) => s.id === schemeId);
    if (scheme) setCurrentScheme(scheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentScheme,
        availableSchemes: theme.schemes,
        setScheme,
        themeName: theme.name,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
