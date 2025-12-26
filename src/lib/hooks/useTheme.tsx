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
    const appliedProperties: string[] = [];

    // Apply theme CSS variables
    Object.entries(currentScheme.colors).forEach(([key, value]) => {
      const propertyName = `--color-${kebabCase(key)}`;
      root.style.setProperty(propertyName, value);
      appliedProperties.push(propertyName);
    });

    // Cleanup: remove inline styles when unmounting or changing schemes
    // This allows the base CSS variables from globals.css to take effect again
    return () => {
      appliedProperties.forEach((propertyName) => {
        root.style.removeProperty(propertyName);
      });
    };
  }, [currentScheme]);

  const setScheme = (schemeId: string) => {
    const scheme = theme.schemes.find((s) => s.id === schemeId);
    if (scheme) setCurrentScheme(scheme);
  };

  const contextValue: ThemeContextValue = {
    currentScheme,
    availableSchemes: theme.schemes,
    setScheme,
    themeName: theme.name,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
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
