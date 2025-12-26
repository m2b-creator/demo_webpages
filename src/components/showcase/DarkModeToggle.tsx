"use client";

import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
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
];

// Moon crater positions
const CRATERS = [
  { x: 65, y: 35, size: 6 },
  { x: 45, y: 55, size: 4 },
  { x: 70, y: 60, size: 3 },
];

// Fluid spring config for buttery smooth animations
const fluidSpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 1,
};

const snappySpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export function DarkModeToggle() {
  const { isDark, setMode, isTransitioning, transitionOrigin } = useDarkMode();
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
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Main fluid ripple */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: transitionOrigin.x,
                top: transitionOrigin.y,
                x: "-50%",
                y: "-50%",
                width: "300vmax",
                height: "300vmax",
                background: isDark
                  ? "radial-gradient(circle, #0f172a 0%, #1e1b4b 50%, transparent 70%)"
                  : "radial-gradient(circle, #fffbeb 0%, #fef3c7 50%, transparent 70%)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={fluidSpring}
            />

            {/* Soft glow ring */}
            <motion.div
              className="absolute rounded-full"
              style={{
                left: transitionOrigin.x,
                top: transitionOrigin.y,
                x: "-50%",
                y: "-50%",
                width: "200vmax",
                height: "200vmax",
                boxShadow: isDark
                  ? "inset 0 0 100px 50px rgba(99, 102, 241, 0.15)"
                  : "inset 0 0 100px 50px rgba(251, 191, 36, 0.2)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                ...fluidSpring,
                delay: 0.05,
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
          "relative w-[72px] h-[72px] rounded-full overflow-hidden cursor-pointer",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isDark
            ? "bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 shadow-lg shadow-indigo-500/20 focus-visible:ring-indigo-400"
            : "bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-400 shadow-lg shadow-orange-400/40 focus-visible:ring-orange-400"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        transition={snappySpring}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Ambient glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark
              ? "0 0 40px 10px rgba(99, 102, 241, 0.3)"
              : "0 0 40px 10px rgba(251, 191, 36, 0.4)",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
                    opacity: [0.3, 1, 0.3],
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { ...snappySpring, delay: star.delay },
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
              initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
              transition={fluidSpring}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-4 bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full origin-bottom"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-22px)`,
                  }}
                  animate={{
                    scaleY: [1, 1.4, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sun/Moon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{ rotate: isDark ? 360 : 0 }}
            transition={{
              ...fluidSpring,
              stiffness: 60,
              damping: 15,
            }}
          >
            {/* Sun core / Moon */}
            <motion.div
              className={cn(
                "w-9 h-9 rounded-full relative overflow-hidden",
                isDark
                  ? "bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300"
                  : "bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400"
              )}
              animate={{
                boxShadow: isDark
                  ? "0 0 20px rgba(148, 163, 184, 0.6), inset -2px -2px 6px rgba(0,0,0,0.1)"
                  : "0 0 30px rgba(251, 191, 36, 0.9), 0 0 60px rgba(251, 146, 60, 0.4)",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Moon craters */}
              <AnimatePresence>
                {isDark && (
                  <>
                    {CRATERS.map((crater, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-slate-300/50"
                        style={{
                          left: `${crater.x}%`,
                          top: `${crater.y}%`,
                          width: crater.size,
                          height: crater.size,
                          transform: "translate(-50%, -50%)",
                          boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.15)",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          ...snappySpring,
                          delay: 0.1 + i * 0.05,
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Moon shadow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800/20 to-transparent"
                animate={{
                  opacity: isDark ? 1 : 0,
                  x: isDark ? 0 : 8,
                  y: isDark ? 0 : 8,
                }}
                transition={fluidSpring}
              />
            </motion.div>

            {/* Eclipse overlay */}
            <motion.div
              className="absolute top-0 right-0 w-9 h-9 rounded-full"
              style={{
                background: isDark
                  ? "transparent"
                  : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              }}
              animate={{
                x: isDark ? 26 : 0,
                opacity: isDark ? 0 : 1,
              }}
              transition={fluidSpring}
            />
          </motion.div>
        </div>

        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            background: isDark
              ? "radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.2) 0%, transparent 60%)"
              : "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)",
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    </>
  );
}

// Compact version
export function DarkModeToggleCompact() {
  const { isDark, setMode } = useDarkMode();

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
      onClick={handleClick}
      className={cn(
        "relative w-10 h-10 rounded-full overflow-hidden",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        isDark
          ? "bg-slate-800 shadow-md shadow-indigo-500/20 focus-visible:ring-indigo-400"
          : "bg-gradient-to-br from-amber-300 to-orange-400 shadow-md shadow-orange-400/30 focus-visible:ring-orange-400"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={snappySpring}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={fluidSpring}
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
