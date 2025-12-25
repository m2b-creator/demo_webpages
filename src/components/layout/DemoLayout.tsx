"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Palette, Menu, X } from "lucide-react";
import { ThemeProvider } from "@/lib/hooks/useTheme";
import { ThemeSwitcherMinimal } from "@/components/showcase/ThemeSwitcher";
import { CustomCursor } from "@/components/effects";
import type { DemoTheme } from "@/lib/themes/types";

interface DemoLayoutProps {
  children: ReactNode;
  theme: DemoTheme;
  showThemeSwitcher?: boolean;
  showBackButton?: boolean;
}

export function DemoLayout({
  children,
  theme,
  showThemeSwitcher = true,
  showBackButton = true,
}: DemoLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CustomCursor />

      {/* Back to Overview floating button */}
      {showBackButton && (
        <motion.div
          className="fixed top-6 left-6 z-[100]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900/95 backdrop-blur-xl border border-white/15 shadow-2xl text-sm font-semibold text-white"
              whileHover={{
                scale: 1.05,
                x: -4,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.div>
              <span>Back to Overview</span>
            </motion.div>
          </Link>
        </motion.div>
      )}

      {/* Theme switcher */}
      {showThemeSwitcher && <ThemeSwitcherMinimal />}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
        }}
      >
        {children}
      </motion.div>
    </ThemeProvider>
  );
}

// Demo page header/navigation component
interface DemoNavProps {
  logo?: ReactNode;
  links?: { label: string; href: string }[];
  ctaText?: string;
  ctaHref?: string;
  variant?: "default" | "transparent" | "dark";
}

export function DemoNav({
  logo,
  links = [],
  ctaText,
  variant = "default",
}: DemoNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const variantStyles = {
    default: "bg-[var(--color-background)] border-b border-[var(--color-border)]",
    transparent: "bg-transparent absolute top-0 left-0 right-0 z-40",
    dark: "bg-zinc-900 text-white",
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        staggerChildren: 0.05,
        staggerDirection: -1 as const,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className={`py-4 ${variantStyles[variant]} relative z-50`}>
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {logo || (
              <span className="text-xl font-bold text-[var(--color-foreground)]">
                Logo
              </span>
            )}
          </div>

          {/* Desktop Links */}
          {links.length > 0 && (
            <div className="hidden md:flex items-center gap-8">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors relative"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--color-primary)]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          )}

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            {ctaText && (
              <motion.button
                className="hidden sm:block px-4 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-sm font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 20px var(--color-primary)/30" }}
                whileTap={{ scale: 0.95 }}
              >
                {ctaText}
              </motion.button>
            )}

            {/* Mobile Menu Toggle */}
            {links.length > 0 && (
              <motion.button
                className="md:hidden p-2 rounded-lg hover:bg-[var(--color-muted)] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-[var(--color-foreground)]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-[var(--color-foreground)]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && links.length > 0 && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="pt-4 pb-2 space-y-1">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-[var(--color-foreground)] hover:bg-[var(--color-muted)] transition-colors font-medium"
                    variants={itemVariants}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                {ctaText && (
                  <motion.button
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] font-medium"
                    variants={itemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    {ctaText}
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
