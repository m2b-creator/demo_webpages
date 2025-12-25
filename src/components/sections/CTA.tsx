"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui";

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  variant?: "default" | "centered" | "split" | "gradient" | "dark";
  className?: string;
  background?: React.ReactNode;
}

export function CTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "default",
  className,
  background,
}: CTAProps) {
  if (variant === "gradient") {
    return (
      <section className={cn("py-20 md:py-28 relative overflow-hidden", className)}>
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-accent)]" />

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {background}

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-white/80">
                {subtitle}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                size="lg"
                onClick={primaryCTA.onClick}
                className="bg-white text-[var(--color-primary)] hover:bg-white/90"
              >
                {primaryCTA.text}
              </Button>
              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={secondaryCTA.onClick}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "dark") {
    return (
      <section className={cn("py-20 md:py-28 bg-zinc-900 relative overflow-hidden", className)}>
        {background}
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-zinc-400">
                {subtitle}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button size="lg" onClick={primaryCTA.onClick}>
                {primaryCTA.text}
              </Button>
              {secondaryCTA && (
                <Button variant="ghost" size="lg" onClick={secondaryCTA.onClick} className="text-white">
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (variant === "split") {
    return (
      <section className={cn("py-20 md:py-28 bg-[var(--color-muted)]", className)}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-foreground)]">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-2 text-[var(--color-muted-foreground)]">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={primaryCTA.onClick}>
                {primaryCTA.text}
              </Button>
              {secondaryCTA && (
                <Button variant="outline" size="lg" onClick={secondaryCTA.onClick}>
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: centered on background
  return (
    <section
      className={cn(
        "py-20 md:py-28 bg-[var(--color-background)]",
        className
      )}
    >
      {background}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" onClick={primaryCTA.onClick}>
              {primaryCTA.text}
            </Button>
            {secondaryCTA && (
              <Button variant="outline" size="lg" onClick={secondaryCTA.onClick}>
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple banner CTA
interface BannerCTAProps {
  text: string;
  ctaText: string;
  href?: string;
  onClick?: () => void;
}

export function BannerCTA({ text, ctaText, onClick }: BannerCTAProps) {
  return (
    <div className="bg-[var(--color-primary)] py-3">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="text-sm text-[var(--color-primary-foreground)]">{text}</p>
        <button
          onClick={onClick}
          className="text-sm font-medium text-[var(--color-primary-foreground)] underline underline-offset-4 hover:no-underline"
        >
          {ctaText} →
        </button>
      </div>
    </div>
  );
}
