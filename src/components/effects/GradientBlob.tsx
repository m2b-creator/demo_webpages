"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface GradientBlobProps {
  className?: string;
  colors?: string[];
  blur?: number;
  opacity?: number;
  animate?: boolean;
  speed?: "slow" | "medium" | "fast";
}

const speedMap = {
  slow: 20,
  medium: 12,
  fast: 6,
};

export function GradientBlob({
  className,
  colors = ["var(--color-primary)", "var(--color-accent)"],
  blur = 100,
  opacity = 0.5,
  animate = true,
  speed = "slow",
}: GradientBlobProps) {
  const duration = speedMap[speed];

  return (
    <motion.div
      className={cn(
        "absolute rounded-full pointer-events-none",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colors.join(", ")})`,
        filter: `blur(${blur}px)`,
        opacity,
      }}
      animate={
        animate
          ? {
              scale: [1, 1.2, 1],
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }
          : undefined
      }
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Multiple blobs for background effect
interface GradientBackgroundProps {
  className?: string;
  variant?: "default" | "vibrant" | "subtle";
}

export function GradientBackground({
  className,
  variant = "default",
}: GradientBackgroundProps) {
  const variants = {
    default: {
      colors1: ["var(--color-primary)", "transparent"],
      colors2: ["var(--color-accent)", "transparent"],
      opacity: 0.3,
    },
    vibrant: {
      colors1: ["var(--color-primary)", "var(--color-accent)"],
      colors2: ["var(--color-accent)", "var(--color-primary)"],
      opacity: 0.5,
    },
    subtle: {
      colors1: ["var(--color-primary)", "transparent"],
      colors2: ["var(--color-muted)", "transparent"],
      opacity: 0.15,
    },
  };

  const v = variants[variant];

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <GradientBlob
        className="w-[600px] h-[600px] -top-48 -left-48"
        colors={v.colors1}
        opacity={v.opacity}
        speed="slow"
      />
      <GradientBlob
        className="w-[500px] h-[500px] top-1/2 -right-32"
        colors={v.colors2}
        opacity={v.opacity}
        speed="medium"
      />
      <GradientBlob
        className="w-[400px] h-[400px] -bottom-32 left-1/3"
        colors={v.colors1}
        opacity={v.opacity * 0.7}
        speed="slow"
      />
    </div>
  );
}

// Noise overlay for texture
export function NoiseOverlay({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity,
      }}
    />
  );
}

// Grid pattern background
interface GridPatternProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function GridPattern({
  className,
  size = 40,
  opacity = 0.05,
}: GridPatternProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      style={{
        backgroundSize: `${size}px ${size}px`,
        backgroundImage: `
          linear-gradient(to right, var(--color-foreground) 1px, transparent 1px),
          linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)
        `,
        opacity,
      }}
    />
  );
}

// Dot pattern background
interface DotPatternProps {
  className?: string;
  size?: number;
  gap?: number;
  opacity?: number;
}

export function DotPattern({
  className,
  size = 2,
  gap = 20,
  opacity = 0.1,
}: DotPatternProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none",
        className
      )}
      style={{
        backgroundSize: `${gap}px ${gap}px`,
        backgroundImage: `radial-gradient(circle, var(--color-foreground) ${size}px, transparent ${size}px)`,
        opacity,
      }}
    />
  );
}
