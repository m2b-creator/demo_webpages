"use client";

import { forwardRef, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outline" | "gradient";
  hover?: "lift" | "tilt" | "glow" | "none";
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "article" | "section";
  className?: string;
  onClick?: () => void;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantClasses = {
  default: `
    bg-[var(--color-card)]
    border border-[var(--color-border)]
  `,
  elevated: `
    bg-[var(--color-card)]
    shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)]
  `,
  outline: `
    bg-transparent
    border-2 border-[var(--color-border)]
  `,
  gradient: `
    bg-[var(--color-card)]
    border border-transparent
  `,
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "default",
      hover = "lift",
      padding = "md",
      onClick,
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth tilt
    const springConfig = { stiffness: 300, damping: 30 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

    // Glare position
    const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (hover !== "tilt") return;

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

    const MotionComponent = motion.div;

    return (
      <MotionComponent
        ref={ref || cardRef}
        className={cn(
          // Base styles
          "relative rounded-2xl overflow-hidden",
          "transition-colors duration-300",
          // Padding
          paddingClasses[padding],
          // Variant
          variantClasses[variant],
          // Hover cursor
          hover !== "none" && "cursor-pointer",
          className
        )}
        style={
          hover === "tilt"
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000,
              }
            : undefined
        }
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={
          hover === "lift"
            ? {
                y: -8,
                boxShadow:
                  "0 20px 40px -12px rgba(0,0,0,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)",
              }
            : hover === "glow"
            ? {
                boxShadow: `0 0 40px -10px var(--color-primary)`,
              }
            : undefined
        }
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        onClick={onClick}
      >
        {/* Gradient border effect */}
        {variant === "gradient" && (
          <>
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                padding: "1px",
                background: `linear-gradient(
                  135deg,
                  var(--color-primary) 0%,
                  var(--color-accent) 50%,
                  var(--color-primary) 100%
                )`,
                backgroundSize: "200% 200%",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              animate={
                isHovered
                  ? {
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }
                  : {
                      backgroundPosition: "0% 0%",
                    }
              }
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          </>
        )}

        {/* Tilt glare effect */}
        {hover === "tilt" && isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
            style={{
              background: `radial-gradient(
                circle at ${glareX}% ${glareY}%,
                rgba(255,255,255,0.15) 0%,
                transparent 60%
              )`,
            }}
          />
        )}

        {/* Hover shine sweep for elevated cards */}
        {(variant === "elevated" || variant === "default") && hover !== "none" && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            initial={false}
          >
            <motion.div
              className="absolute top-0 -left-full w-1/2 h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                transform: "skewX(-20deg)",
              }}
              animate={
                isHovered
                  ? {
                      left: ["−100%", "200%"],
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}

        {/* Content wrapper with 3D depth for tilt */}
        <div
          className="relative z-10"
          style={
            hover === "tilt"
              ? {
                  transform: "translateZ(20px)",
                  transformStyle: "preserve-3d",
                }
              : undefined
          }
        >
          {children}
        </div>
      </MotionComponent>
    );
  }
);

Card.displayName = "Card";

// Sub-components for structured card content
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5", className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        "text-xl font-semibold tracking-tight text-[var(--color-card-foreground)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);
CardTitle.displayName = "CardTitle";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-[var(--color-muted-foreground)]", className)}
      {...props}
    >
      {children}
    </p>
  )
);
CardDescription.displayName = "CardDescription";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("pt-4", className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center pt-6", className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";
