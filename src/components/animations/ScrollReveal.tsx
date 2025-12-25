"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

const getVariants = (direction: Direction, distance: number): Variants => {
  const directions: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  threshold = 0.2,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    // @ts-expect-error - framer-motion margin type is overly strict
    margin: `-${threshold * 100}px 0px`,
  });

  const variants = getVariants(direction, distance);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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

// Staggered children variant
interface StaggerRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  containerDelay?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  className?: string;
}

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  containerDelay = 0.1,
  direction = "up",
  distance = 30,
  once = true,
  className,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px 0px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  const itemVariants = getVariants(direction, distance);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn(className)}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
