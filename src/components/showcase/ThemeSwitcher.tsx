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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
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

// Minimal version - more prominent and centered
export function ThemeSwitcherMinimal() {
  const { currentScheme, availableSchemes, setScheme } = useTheme();

  return (
    <motion.div
      className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-md sm:max-w-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Pulsing glow effect behind */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/40 to-cyan-500/40 blur-2xl scale-110"
        animate={{
          scale: [1.1, 1.2, 1.1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative flex flex-col items-center gap-2 sm:gap-3">
        {/* Label */}
        <motion.span
          className="text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg shadow-violet-500/30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline mr-1.5 sm:mr-2 -mt-0.5" />
          <span className="hidden sm:inline">Try Different Themes</span>
          <span className="sm:hidden">Themes</span>
        </motion.span>

        {/* Color buttons */}
        <div className="flex gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 bg-zinc-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl shadow-black/40">
          {availableSchemes.map((scheme, index) => (
            <motion.button
              key={scheme.id}
              onClick={() => setScheme(scheme.id)}
              className={cn(
                "relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden",
                "transition-all duration-200",
                "hover:shadow-lg hover:shadow-white/20",
                currentScheme.id === scheme.id && "ring-2 ring-white ring-offset-2 ring-offset-zinc-900 scale-110"
              )}
              style={{ backgroundColor: scheme.colors.primary }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              aria-label={`Switch to ${scheme.name} theme`}
            >
              {/* Gradient shine effect */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)`,
                }}
              />

              {/* Active check */}
              {currentScheme.id === scheme.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                >
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-md" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
