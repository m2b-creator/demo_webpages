"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/lib/hooks/useTheme";
import { cn } from "@/lib/utils/cn";

export function ThemeSwitcher() {
  const { currentScheme, availableSchemes, setScheme, themeName } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-3 p-4 bg-zinc-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl min-w-[200px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                {themeName} Theme
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-3 h-3 text-zinc-500" />
              </button>
            </div>

            <div className="space-y-2">
              {availableSchemes.map((scheme) => (
                <button
                  key={scheme.id}
                  onClick={() => {
                    setScheme(scheme.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200",
                    currentScheme.id === scheme.id
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  )}
                >
                  {/* Color preview */}
                  <div className="flex -space-x-1">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-zinc-800"
                      style={{ backgroundColor: scheme.colors.primary }}
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 border-zinc-800"
                      style={{ backgroundColor: scheme.colors.accent }}
                    />
                  </div>

                  <span
                    className={cn(
                      "flex-1 text-left text-sm font-medium",
                      currentScheme.id === scheme.id
                        ? "text-white"
                        : "text-zinc-400"
                    )}
                  >
                    {scheme.name}
                  </span>

                  {currentScheme.id === scheme.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-full",
          "bg-zinc-900/90 backdrop-blur-xl border border-white/10",
          "shadow-lg shadow-black/20",
          "transition-all duration-300",
          isOpen && "bg-white/10"
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Palette className="w-4 h-4 text-white" />
        </motion.div>
        <span className="text-sm font-medium text-white">Theme</span>

        {/* Current color indicator */}
        <div className="flex -space-x-1 ml-1">
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: currentScheme.colors.primary }}
            layoutId="primaryColor"
          />
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: currentScheme.colors.accent }}
            layoutId="accentColor"
          />
        </div>
      </motion.button>
    </div>
  );
}

// Minimal version - just color dots
export function ThemeSwitcherMinimal() {
  const { currentScheme, availableSchemes, setScheme } = useTheme();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex gap-2 p-2 bg-zinc-900/90 backdrop-blur-xl rounded-full border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {availableSchemes.map((scheme) => (
        <motion.button
          key={scheme.id}
          onClick={() => setScheme(scheme.id)}
          className={cn(
            "relative w-8 h-8 rounded-full overflow-hidden",
            "transition-transform duration-200"
          )}
          style={{ backgroundColor: scheme.colors.primary }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Switch to ${scheme.name} theme`}
        >
          {currentScheme.id === scheme.id && (
            <motion.div
              layoutId="activeTheme"
              className="absolute inset-0 ring-2 ring-white ring-offset-2 ring-offset-zinc-900 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
}
