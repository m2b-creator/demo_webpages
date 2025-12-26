"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useCallback } from "react";
import { useDarkMode } from "@/lib/hooks/useDarkMode";
import { cn } from "@/lib/utils/cn";

// Star positions for the night sky effect
const STARS = [
  { x: 15, y: 20, size: 2, delay: 0.1 },
  { x: 85, y: 15, size: 1.5, delay: 0.2 },
  { x: 25, y: 75, size: 1, delay: 0.15 },
  { x: 70, y: 80, size: 2, delay: 0.25 },
  { x: 45, y: 10, size: 1.5, delay: 0.3 },
  { x: 90, y: 50, size: 1, delay: 0.05 },
  { x: 10, y: 55, size: 1.5, delay: 0.2 },
  { x: 60, y: 30, size: 1, delay: 0.35 },
];

// Moon crater positions
const CRATERS = [
  { x: 65, y: 35, size: 6 },
  { x: 45, y: 55, size: 4 },
  { x: 70, y: 60, size: 3 },
  { x: 35, y: 40, size: 2.5 },
];

export function DarkModeToggle() {
  const { mode, isDark, setMode, isTransitioning, transitionOrigin } =
    useDarkMode();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      setMode(isDark ? "light" : "dark", { x, y });
    },
    [isDark, setMode]
  );

  return (
    <>
      {/* Full-screen transition overlay */}
      <AnimatePresence>
        {isTransitioning && transitionOrigin && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-[9999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <motion.div
              className={cn(
                "absolute rounded-full",
                isDark ? "bg-slate-900" : "bg-amber-50"
              )}
              style={{
                left: transitionOrigin.x,
                top: transitionOrigin.y,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ width: 0, height: 0 }}
              animate={{
                width: "300vmax",
                height: "300vmax",
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(
          "relative w-14 h-14 rounded-full overflow-hidden",
          "transition-shadow duration-500",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isDark
            ? "bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 shadow-lg shadow-indigo-500/20 focus-visible:ring-indigo-400"
            : "bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-400 shadow-lg shadow-orange-400/40 focus-visible:ring-orange-400"
        )}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isDark
              ? "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)"
              : "radial-gradient(circle at 70% 70%, rgba(251, 191, 36, 0.5) 0%, transparent 50%)",
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Stars (visible in dark mode) */}
        <AnimatePresence>
          {isDark && (
            <>
              {STARS.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: star.size,
                    height: star.size,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      delay: star.delay,
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      delay: star.delay,
                    },
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Sun rays (visible in light mode) */}
        <AnimatePresence>
          {!isDark && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-3 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full origin-bottom"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-17px)`,
                  }}
                  animate={{
                    scaleY: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sun/Moon icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{
              rotate: isDark ? 360 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Sun core / Moon */}
            <motion.div
              className={cn(
                "w-7 h-7 rounded-full relative overflow-hidden",
                isDark
                  ? "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300"
                  : "bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-400"
              )}
              animate={{
                boxShadow: isDark
                  ? "0 0 20px rgba(148, 163, 184, 0.5), inset -3px -3px 8px rgba(0,0,0,0.1)"
                  : "0 0 25px rgba(251, 191, 36, 0.8), 0 0 50px rgba(251, 146, 60, 0.4)",
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Moon craters */}
              <AnimatePresence>
                {isDark && (
                  <>
                    {CRATERS.map((crater, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-slate-300/60"
                        style={{
                          left: `${crater.x}%`,
                          top: `${crater.y}%`,
                          width: crater.size,
                          height: crater.size,
                          transform: "translate(-50%, -50%)",
                          boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Moon shadow (eclipse effect) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-900 to-transparent"
                animate={{
                  opacity: isDark ? 0.15 : 0,
                  x: isDark ? -2 : 10,
                  y: isDark ? -2 : 10,
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Moon eclipse overlay (slides in from right) */}
            <motion.div
              className="absolute top-0 right-0 w-7 h-7 rounded-full bg-slate-900"
              animate={{
                x: isDark ? 20 : 0,
                opacity: isDark ? 0 : 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>
        </div>

        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark
              ? "inset 0 0 15px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.2)"
              : "inset 0 0 15px rgba(251, 191, 36, 0.3), 0 0 30px rgba(251, 146, 60, 0.3)",
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    </>
  );
}

// Compact version that can be placed inline
export function DarkModeToggleCompact() {
  const { isDark, setMode } = useDarkMode();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      setMode(isDark ? "light" : "dark", { x, y });
    },
    [isDark, setMode]
  );

  return (
    <motion.button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        "relative w-10 h-10 rounded-full overflow-hidden",
        "transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark
          ? "bg-slate-800 shadow-md shadow-indigo-500/20 focus-visible:ring-indigo-400"
          : "bg-gradient-to-br from-amber-300 to-orange-400 shadow-md shadow-orange-400/30 focus-visible:ring-orange-400"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Stars for dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            {STARS.slice(0, 4).map((star, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size * 0.8,
                  height: star.size * 0.8,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: star.delay }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={cn(
              "w-5 h-5 rounded-full",
              isDark
                ? "bg-gradient-to-br from-slate-200 to-slate-300"
                : "bg-gradient-to-br from-yellow-300 to-orange-400"
            )}
            animate={{
              boxShadow: isDark
                ? "0 0 10px rgba(148, 163, 184, 0.5)"
                : "0 0 15px rgba(251, 191, 36, 0.8)",
            }}
          />
        </motion.div>
      </div>
    </motion.button>
  );
}
