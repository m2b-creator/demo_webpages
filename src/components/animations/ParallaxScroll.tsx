"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number; // -1 to 1, negative moves opposite to scroll
  className?: string;
}

export function ParallaxScroll({
  children,
  speed = 0.5,
  className,
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={cn(className)}>
      {children}
    </motion.div>
  );
}

// Parallax image that zooms slightly on scroll
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className,
  overlay = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden relative", className)}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ scale, y }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      )}
    </div>
  );
}

// Character by character reveal
interface CharRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function CharReveal({ children, className, delay = 0 }: CharRevealProps) {
  const chars = children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {chars.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Magnetic button effect
interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// Floating animation for decorative elements
interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function Floating({
  children,
  className,
  duration = 3,
  distance = 10,
}: FloatingProps) {
  return (
    <motion.div
      className={cn(className)}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Counter animation for numbers
interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function Counter({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const count = useTransform(scrollYProgress, [0, 1], [0, value]);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
