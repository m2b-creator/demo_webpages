"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

type Mode = "light" | "dark";

interface DarkModeContextValue {
  mode: Mode;
  isDark: boolean;
  toggleMode: () => void;
  setMode: (mode: Mode, origin?: { x: number; y: number }) => void;
  isTransitioning: boolean;
  transitionOrigin: { x: number; y: number } | null;
}

const DarkModeContext = createContext<DarkModeContextValue | null>(null);

const STORAGE_KEY = "demo-dark-mode";

interface DarkModeProviderProps {
  children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [mode, setModeState] = useState<Mode>("light");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Mode | null;

    if (stored && (stored === "light" || stored === "dark")) {
      setModeState(stored);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setModeState(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply mode to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, mounted]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(STORAGE_KEY);
      // Only auto-switch if user hasn't set a preference
      if (!stored) {
        setModeState(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setMode = useCallback(
    (newMode: Mode, origin?: { x: number; y: number }) => {
      if (newMode === mode) return;

      // Set transition origin for the ripple effect
      if (origin) {
        setTransitionOrigin(origin);
        setIsTransitioning(true);

        // Start the mode change after a tiny delay to let the animation begin
        requestAnimationFrame(() => {
          setModeState(newMode);
        });

        // End transition after animation completes
        setTimeout(() => {
          setIsTransitioning(false);
          setTransitionOrigin(null);
        }, 800);
      } else {
        setModeState(newMode);
      }
    },
    [mode]
  );

  const toggleMode = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  const contextValue: DarkModeContextValue = {
    mode,
    isDark: mode === "dark",
    toggleMode,
    setMode,
    isTransitioning,
    transitionOrigin,
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
};
