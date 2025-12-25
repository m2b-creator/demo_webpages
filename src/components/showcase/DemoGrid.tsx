"use client";

import { motion } from "framer-motion";
import { DemoCard } from "./DemoCard";
import type { DemoInfo } from "@/lib/themes/types";

interface DemoGridProps {
  demos: DemoInfo[];
}

export function DemoGrid({ demos }: DemoGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2,
          },
        },
      }}
    >
      {demos.map((demo, index) => (
        <DemoCard key={demo.id} demo={demo} index={index} />
      ))}
    </motion.div>
  );
}

// Alternate layout with masonry-like effect
export function DemoGridMasonry({ demos }: DemoGridProps) {
  return (
    <motion.div
      className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {demos.map((demo, index) => (
        <div key={demo.id} className="break-inside-avoid">
          <DemoCard
            demo={demo}
            index={index}
            featured={index === 0 || index === 5}
          />
        </div>
      ))}
    </motion.div>
  );
}

// Filter tabs for categories
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === null
            ? "bg-white text-zinc-900"
            : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-white/10"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-white text-zinc-900"
              : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-white/10"
          }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
}
