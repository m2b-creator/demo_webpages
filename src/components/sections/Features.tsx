"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Card } from "@/components/ui";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon?: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "cards" | "simple" | "icons" | "list";
  className?: string;
}

export function Features({
  badge,
  title,
  subtitle,
  features,
  columns = 3,
  variant = "cards",
  className,
}: FeaturesProps) {
  const columnClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section
      className={cn(
        "py-20 md:py-28 lg:py-32",
        "bg-[var(--color-background)]",
        className
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        {(badge || title || subtitle) && (
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-foreground)]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Features grid */}
        <motion.div
          className={cn("grid gap-6 lg:gap-8", columnClasses[columns])}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {variant === "cards" ? (
                <Card
                  variant="elevated"
                  hover="lift"
                  padding="lg"
                  className="h-full"
                >
                  {feature.icon && (
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ) : variant === "icons" ? (
                <div className="text-center p-6">
                  {feature.icon && (
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {feature.description}
                  </p>
                </div>
              ) : variant === "list" ? (
                <div className="flex gap-4 p-4">
                  {feature.icon && (
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-[var(--color-foreground)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted-foreground)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {feature.icon && (
                    <feature.icon className="w-8 h-8 text-[var(--color-primary)]" />
                  )}
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)]">
                    {feature.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Stats variant
interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

export function Stats({ stats, className }: StatsProps) {
  return (
    <section className={cn("py-16 bg-[var(--color-muted)]", className)}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
