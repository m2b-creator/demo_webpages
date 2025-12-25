"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface DemoImageProps {
  src?: string;
  alt: string;
  category?: "restaurant" | "portfolio" | "saas" | "handyman" | "ecommerce" | "agency" | "blog" | "real-estate" | "gym" | "law-firm" | "medical" | "photography" | "general";
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
  overlay?: boolean;
  priority?: boolean;
}

// Curated Unsplash images for each category
const categoryImages: Record<string, string[]> = {
  restaurant: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  ],
  portfolio: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "https://images.unsplash.com/photo-1522542550221-31fd8575f294?w=800&q=80",
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
  ],
  saas: [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  ],
  handyman: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  ],
  ecommerce: [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  ],
  agency: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  ],
  blog: [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
  ],
  "real-estate": [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  ],
  gym: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
  ],
  "law-firm": [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
  ],
  medical: [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  ],
  photography: [
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&q=80",
    "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&q=80",
  ],
  general: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
  ],
};

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function DemoImage({
  src,
  alt,
  category = "general",
  aspect = "video",
  className,
  overlay = false,
}: DemoImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Get a random image from the category if no src provided
  const images = categoryImages[category] || categoryImages.general;
  const imageIndex = Math.abs(alt.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % images.length;
  const imageSrc = src || images[imageIndex];

  return (
    <div className={cn("relative overflow-hidden bg-[var(--color-muted)]", aspectClasses[aspect], className)}>
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-border)] to-[var(--color-muted)]"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 100%" }}
        />
      )}

      {/* Image */}
      {!hasError && (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            !isLoaded && "opacity-0"
          )}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      )}

      {/* Fallback gradient */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20" />
      )}

      {/* Optional overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      )}
    </div>
  );
}

// Avatar/Profile image component
interface AvatarImageProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const avatarSizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

export function AvatarImage({ name, size = "md", className }: AvatarImageProps) {
  // Generate a consistent color based on name
  const colors = [
    "from-rose-400 to-pink-500",
    "from-violet-400 to-purple-500",
    "from-blue-400 to-indigo-500",
    "from-cyan-400 to-teal-500",
    "from-emerald-400 to-green-500",
    "from-amber-400 to-orange-500",
  ];
  const colorIndex = Math.abs(name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % colors.length;
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-br",
        colors[colorIndex],
        avatarSizes[size],
        className
      )}
    >
      <span className={size === "sm" ? "text-xs" : size === "xl" ? "text-lg" : "text-sm"}>
        {initials}
      </span>
    </div>
  );
}
