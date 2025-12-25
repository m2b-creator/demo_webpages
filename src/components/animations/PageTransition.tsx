"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  mode?: "fade" | "slide" | "scale" | "slideUp";
}

const variants = {
  fade: {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.98 },
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

export function PageTransition({
  children,
  className,
  mode = "slideUp",
}: PageTransitionProps) {
  const pathname = usePathname();
  const variant = variants[mode];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variant}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Page wrapper with reveal effect
interface PageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function PageReveal({ children, className }: PageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(className)}
    >
      {/* Reveal overlay */}
      <motion.div
        className="fixed inset-0 z-50 bg-[var(--color-background)] pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ transformOrigin: "top" }}
      />
      {children}
    </motion.div>
  );
}

// Section transition for scroll-based reveals
interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionTransition({
  children,
  className,
  delay = 0,
}: SectionTransitionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
