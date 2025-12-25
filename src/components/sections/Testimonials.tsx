"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Card } from "@/components/ui";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  variant?: "cards" | "carousel" | "single" | "masonry";
  className?: string;
}

export function Testimonials({
  badge,
  title,
  subtitle,
  testimonials,
  variant = "cards",
  className,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (variant === "carousel" || variant === "single") {
    const testimonial = testimonials[currentIndex];

    return (
      <section
        className={cn(
          "py-20 md:py-28",
          "bg-[var(--color-background)]",
          className
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          {(title || badge) && (
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {badge && (
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  {badge}
                </span>
              )}
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  {title}
                </h2>
              )}
            </motion.div>
          )}

          {/* Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <Quote className="w-12 h-12 text-[var(--color-primary)]/30 mx-auto mb-6" />
                  <p className="text-xl md:text-2xl lg:text-3xl text-[var(--color-foreground)] leading-relaxed mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-col items-center">
                    {testimonial.avatar && (
                      <div className="w-16 h-16 rounded-full bg-[var(--color-muted)] mb-4 overflow-hidden">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="font-semibold text-[var(--color-foreground)]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">
                      {testimonial.role}
                      {testimonial.company && ` at ${testimonial.company}`}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-4 mt-10">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-muted)] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-muted)] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      index === currentIndex
                        ? "bg-[var(--color-primary)] w-6"
                        : "bg-[var(--color-border)]"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Cards grid variant (default)
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        "bg-[var(--color-muted)]",
        className
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        {(title || badge || subtitle) && (
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {badge && (
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
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

        {/* Grid */}
        <motion.div
          className={cn(
            "grid gap-6",
            variant === "masonry"
              ? "md:columns-2 lg:columns-3"
              : "md:grid-cols-2 lg:grid-cols-3"
          )}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className={variant === "masonry" ? "break-inside-avoid mb-6" : ""}
            >
              <Card variant="default" padding="lg" hover="lift" className="h-full">
                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < testimonial.rating!
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-[var(--color-border)]"
                        )}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Quote */}
                <p className="text-[var(--color-foreground)] leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {testimonial.avatar ? (
                    <div className="w-10 h-10 rounded-full bg-[var(--color-muted)] overflow-hidden">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-[var(--color-primary)]">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-[var(--color-foreground)] text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-[var(--color-muted-foreground)]">
                      {testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
