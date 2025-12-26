"use client";

import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "underline";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      variant = "default",
      className,
      type = "text",
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    const variantStyles = {
      default: cn(
        "bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-xl",
        "hover:border-[var(--color-muted-foreground)]",
        isFocused && "border-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/10",
        error && "border-red-500 hover:border-red-500"
      ),
      filled: cn(
        "bg-[var(--color-muted)] border-2 border-transparent rounded-xl",
        "hover:bg-[var(--color-muted)]/80",
        isFocused && "bg-[var(--color-card)] border-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/10",
        error && "border-red-500"
      ),
      underline: cn(
        "bg-transparent border-b-2 border-[var(--color-border)] rounded-none",
        "hover:border-[var(--color-muted-foreground)]",
        isFocused && "border-[var(--color-primary)]",
        error && "border-red-500"
      ),
    };

    return (
      <div className="relative w-full">
        {/* Floating Label */}
        {label && (
          <motion.label
            className={cn(
              "absolute left-4 pointer-events-none z-10",
              "text-[var(--color-muted-foreground)]",
              leftIcon && "left-11",
              variant === "underline" && "left-0"
            )}
            initial={false}
            animate={{
              y: isFocused || hasValue ? -24 : 12,
              scale: isFocused || hasValue ? 0.85 : 1,
              x: isFocused || hasValue ? (leftIcon ? -28 : -4) : 0,
              color: isFocused
                ? "var(--color-primary)"
                : error
                ? "#ef4444"
                : "var(--color-muted-foreground)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            {label}
          </motion.label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <motion.div
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2",
                "text-[var(--color-muted-foreground)]",
                variant === "underline" && "left-0"
              )}
              animate={{
                color: isFocused
                  ? "var(--color-primary)"
                  : "var(--color-muted-foreground)",
              }}
              transition={{ duration: 0.2 }}
            >
              {leftIcon}
            </motion.div>
          )}

          {/* Input */}
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={cn(
              "w-full h-12 px-4 py-3",
              "text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]",
              "transition-all duration-200",
              "focus:outline-none",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              leftIcon && "pl-11",
              rightIcon && "pr-11",
              variant === "underline" && leftIcon && "pl-7",
              variantStyles[variant],
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)]"
              animate={{
                color: isFocused
                  ? "var(--color-primary)"
                  : "var(--color-muted-foreground)",
              }}
              transition={{ duration: 0.2 }}
            >
              {rightIcon}
            </motion.div>
          )}

          {/* Focus Line Animation (underline variant) */}
          {variant === "underline" && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-[var(--color-primary)]"
              initial={false}
              animate={{
                width: isFocused ? "100%" : "0%",
                left: isFocused ? "0%" : "50%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
        </div>

        {/* Error / Hint Message */}
        <AnimatePresence mode="wait">
          {(error || hint) && (
            <motion.p
              className={cn(
                "mt-2 text-sm",
                error ? "text-red-500" : "text-[var(--color-muted-foreground)]"
              )}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {error || hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";

// Textarea component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, disabled, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        {label && (
          <motion.label
            className="absolute left-4 pointer-events-none z-10 text-[var(--color-muted-foreground)]"
            initial={false}
            animate={{
              y: isFocused || hasValue ? -24 : 16,
              scale: isFocused || hasValue ? 0.85 : 1,
              x: isFocused || hasValue ? -4 : 0,
              color: isFocused
                ? "var(--color-primary)"
                : error
                ? "#ef4444"
                : "var(--color-muted-foreground)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            {label}
          </motion.label>
        )}

        <textarea
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full min-h-[120px] px-4 py-4",
            "bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-xl",
            "text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)]",
            "transition-all duration-200 resize-y",
            "hover:border-[var(--color-muted-foreground)]",
            "focus:outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-500 hover:border-red-500",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...props}
        />

        <AnimatePresence mode="wait">
          {(error || hint) && (
            <motion.p
              className={cn(
                "mt-2 text-sm",
                error ? "text-red-500" : "text-[var(--color-muted-foreground)]"
              )}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {error || hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
