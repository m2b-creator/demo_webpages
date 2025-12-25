"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui";

type HeroVariant = "centered" | "split" | "minimal" | "bold";

interface HeroProps {
  variant?: HeroVariant;
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  image?: React.ReactNode;
  background?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function Hero({
  variant = "centered",
  badge,
  title,
  titleHighlight,
  subtitle,
  primaryCTA,
  secondaryCTA,
  image,
  background,
  className,
  align = "center",
}: HeroProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  // Split title at highlight word
  const renderTitle = () => {
    if (!titleHighlight) {
      return <span>{title}</span>;
    }
    const parts = title.split(titleHighlight);
    return (
      <>
        {parts[0]}
        <span className="text-[var(--color-primary)]">{titleHighlight}</span>
        {parts[1]}
      </>
    );
  };

  if (variant === "split") {
    return (
      <section
        className={cn(
          "relative min-h-[90vh] flex items-center overflow-hidden",
          "bg-[var(--color-background)]",
          className
        )}
      >
        {background}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {badge && (
                <motion.span
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {badge}
                </motion.span>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.1]">
                {renderTitle()}
              </h1>

              {subtitle && (
                <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-lg leading-relaxed">
                  {subtitle}
                </p>
              )}

              <div className="flex flex-wrap gap-4 pt-4">
                {primaryCTA && (
                  <Button size="lg" onClick={primaryCTA.onClick}>
                    {primaryCTA.text}
                  </Button>
                )}
                {secondaryCTA && (
                  <Button variant="outline" size="lg" onClick={secondaryCTA.onClick}>
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Image */}
            {image && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {image}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "minimal") {
    return (
      <section
        className={cn(
          "relative py-24 md:py-32 lg:py-40",
          "bg-[var(--color-background)]",
          className
        )}
      >
        {background}
        <div className={cn("container mx-auto px-6 lg:px-8", alignmentClasses[align])}>
          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
              {renderTitle()}
            </h1>
            {subtitle && (
              <p className="text-lg text-[var(--color-muted-foreground)]">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "bold") {
    return (
      <section
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden",
          "bg-[var(--color-background)]",
          className
        )}
      >
        {background}
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {badge && (
              <motion.span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {badge}
              </motion.span>
            )}

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[var(--color-foreground)]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {renderTitle()}
            </motion.h1>

            {subtitle && (
              <motion.p
                className="text-xl md:text-2xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {primaryCTA && (
                <Button size="lg" onClick={primaryCTA.onClick}>
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button variant="ghost" size="lg" onClick={secondaryCTA.onClick}>
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: centered
  return (
    <section
      className={cn(
        "relative min-h-[80vh] flex items-center justify-center overflow-hidden",
        "bg-[var(--color-background)]",
        className
      )}
    >
      {background}
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {badge && (
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              {badge}
            </motion.span>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-foreground)] leading-[1.1]">
            {renderTitle()}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {primaryCTA && (
              <Button size="lg" onClick={primaryCTA.onClick}>
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button variant="outline" size="lg" onClick={secondaryCTA.onClick}>
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </motion.div>

        {image && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {image}
          </motion.div>
        )}
      </div>
    </section>
  );
}
