"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  blur?: boolean;
  scale?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "none",
  distance = 24,
  blur = false,
  scale = false,
  className,
}: FadeInProps) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
      ...(blur && { filter: "blur(10px)" }),
      ...(scale && { scale: 0.95 }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Staggered FadeIn for lists
interface FadeInStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = "up",
  className,
}: FadeInStaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

// Text reveal animation (word by word)
interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  wordClassName?: string;
}

export function TextReveal({
  text,
  delay = 0,
  className,
  wordClassName,
}: TextRevealProps) {
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn("inline-flex flex-wrap", className)}
      style={{ perspective: 1000 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={cn("inline-block mr-[0.25em]", wordClassName)}
          style={{ transformOrigin: "center bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
