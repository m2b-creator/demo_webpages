"use client";

import { forwardRef, ButtonHTMLAttributes, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children" | "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-6 text-base gap-2",
  lg: "h-14 px-8 text-lg gap-2.5",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-primary)] text-[var(--color-primary-foreground)]
    shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_-2px_var(--color-primary)]
    hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_8px_24px_-4px_var(--color-primary)]
  `,
  secondary: `
    bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
    shadow-[0_1px_3px_rgba(0,0,0,0.08)]
    hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
  `,
  outline: `
    bg-transparent text-[var(--color-foreground)]
    border-2 border-[var(--color-border)]
    hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]
  `,
  ghost: `
    bg-transparent text-[var(--color-foreground)]
    hover:bg-[var(--color-muted)]
  `,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className,
      isLoading,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center font-medium",
          "rounded-xl overflow-hidden",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          // Size
          sizeClasses[size],
          // Variant
          variantClasses[variant],
          className
        )}
        disabled={disabled || isLoading}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        {...props}
      >
        {/* Shine effect on hover (primary variant only) */}
        {variant === "primary" && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.25), transparent)`,
              }}
            />
          </motion.div>
        )}

        {/* Shimmer sweep effect */}
        {variant === "primary" && (
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={false}
          >
            <motion.div
              className="absolute top-0 -left-full w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
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
                duration: 0.75,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}

        {/* Ripple effect on press */}
        {isPressed && (
          <motion.span
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span
              className="absolute rounded-full bg-white/20"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                width: 10,
                height: 10,
                transform: "translate(-50%, -50%)",
              }}
            />
          </motion.span>
        )}

        {/* Loading spinner */}
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-inherit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          </motion.div>
        )}

        {/* Content */}
        <span
          className={cn(
            "relative z-10 flex items-center justify-center",
            isLoading && "invisible"
          )}
        >
          {leftIcon && (
            <motion.span
              className="flex-shrink-0"
              initial={false}
              animate={{ x: isHovered ? -2 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {leftIcon}
            </motion.span>
          )}
          <span>{children}</span>
          {rightIcon && (
            <motion.span
              className="flex-shrink-0"
              initial={false}
              animate={{ x: isHovered ? 2 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {rightIcon}
            </motion.span>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
