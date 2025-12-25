"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { DemoInfo } from "@/lib/themes/types";

interface DemoCardProps {
  demo: DemoInfo;
  index: number;
  featured?: boolean;
}

// Demo-specific tag colors (matches background gradient)
const demoTagColors: Record<string, { bg: string; text: string }> = {
  restaurant: { bg: "bg-amber-500/30", text: "text-amber-200" },
  handyman: { bg: "bg-emerald-500/30", text: "text-emerald-200" },
  portfolio: { bg: "bg-fuchsia-500/30", text: "text-fuchsia-200" },
  saas: { bg: "bg-cyan-500/30", text: "text-cyan-200" },
  ecommerce: { bg: "bg-rose-500/30", text: "text-rose-200" },
  agency: { bg: "bg-violet-500/30", text: "text-violet-200" },
  blog: { bg: "bg-indigo-500/30", text: "text-indigo-200" },
  "real-estate": { bg: "bg-sky-500/30", text: "text-sky-200" },
  gym: { bg: "bg-orange-500/30", text: "text-orange-200" },
  "law-firm": { bg: "bg-slate-400/30", text: "text-slate-200" },
  medical: { bg: "bg-teal-500/30", text: "text-teal-200" },
  photography: { bg: "bg-pink-500/30", text: "text-pink-200" },
};

// Demo-specific gradient overlays
const demoGradients: Record<string, string> = {
  restaurant: "from-amber-900/95 via-red-900/80 to-transparent",
  handyman: "from-emerald-900/95 via-teal-900/80 to-transparent",
  portfolio: "from-fuchsia-900/95 via-violet-900/80 to-transparent",
  saas: "from-cyan-900/95 via-blue-900/80 to-transparent",
  ecommerce: "from-rose-900/95 via-pink-900/80 to-transparent",
  agency: "from-violet-900/95 via-purple-900/80 to-transparent",
  blog: "from-indigo-900/95 via-blue-900/80 to-transparent",
  "real-estate": "from-sky-900/95 via-cyan-900/80 to-transparent",
  gym: "from-orange-900/95 via-red-900/80 to-transparent",
  "law-firm": "from-slate-900/95 via-zinc-900/80 to-transparent",
  medical: "from-teal-900/95 via-emerald-900/80 to-transparent",
  photography: "from-pink-900/95 via-rose-900/80 to-transparent",
};

// Demo-specific background images (Unsplash)
const demoImages: Record<string, string> = {
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  handyman: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  portfolio: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  saas: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  ecommerce: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  agency: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  "real-estate": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  "law-firm": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  medical: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  photography: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
};

export function DemoCard({ demo, index, featured = false }: DemoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  // Glare effect position
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const tagStyle = demoTagColors[demo.id] || { bg: "bg-zinc-500/30", text: "text-zinc-200" };
  const gradient = demoGradients[demo.id] || "from-zinc-900/95 to-transparent";
  const backgroundImage = demoImages[demo.id] || "";

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative",
        featured ? "md:col-span-2 md:row-span-2" : ""
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: 1000,
      }}
    >
      <Link href={demo.href} data-cursor="view" data-cursor-text="View">
        <motion.div
          className={cn(
            "relative overflow-hidden rounded-2xl",
            "bg-zinc-900/50 backdrop-blur-sm",
            "border border-white/[0.08]",
            featured ? "h-[400px] md:h-[500px]" : "h-[280px] md:h-[320px]"
          )}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(255,255,255,0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background image */}
          {backgroundImage && (
            <motion.img
              src={backgroundImage}
              alt={demo.name}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: isHovered ? 1.15 : 1.05 }}
              transition={{ duration: 0.6 }}
            />
          )}

          {/* Gradient overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
              gradient
            )}
          />

          {/* Glare effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
            style={{
              background: `conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.1) 60deg, transparent 120deg)`,
              opacity: isHovered ? 1 : 0,
            }}
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Content */}
          <div
            className="relative h-full flex flex-col justify-end p-6 md:p-8"
            style={{ transform: "translateZ(40px)" }}
          >
            {/* Category badge */}
            <motion.div
              className={cn(
                "absolute top-6 left-6 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase",
                "backdrop-blur-md border border-white/10",
                tagStyle.bg,
                tagStyle.text
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 + 0.3 }}
            >
              {demo.category}
            </motion.div>

            {/* Arrow icon */}
            <motion.div
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
                rotate: isHovered ? 0 : -45,
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </motion.div>

            {/* Text content */}
            <div className="space-y-3">
              <motion.h3
                className={cn(
                  "font-semibold text-white tracking-tight",
                  featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                )}
                style={{ transform: "translateZ(20px)" }}
              >
                {demo.name}
              </motion.h3>

              <motion.p
                className={cn(
                  "text-white/60 leading-relaxed",
                  featured ? "text-base md:text-lg" : "text-sm"
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0.8,
                  y: isHovered ? 0 : 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {demo.description}
              </motion.p>

              {/* View project link */}
              <motion.div
                className="flex items-center gap-2 text-white/80 text-sm font-medium pt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                <span>View Demo</span>
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Bottom gradient line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: isHovered ? 1 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
