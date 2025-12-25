"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  logo?: React.ReactNode;
  description?: string;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  copyright?: string;
  variant?: "default" | "simple" | "centered";
  className?: string;
}

export function Footer({
  logo,
  description,
  columns = [],
  socialLinks = [],
  copyright,
  variant = "default",
  className,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || `© ${currentYear} All rights reserved.`;

  if (variant === "simple") {
    return (
      <footer
        className={cn(
          "py-8 border-t border-[var(--color-border)] bg-[var(--color-background)]",
          className
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {logo && <div>{logo}</div>}
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {copyrightText}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "centered") {
    return (
      <footer
        className={cn(
          "py-16 border-t border-[var(--color-border)] bg-[var(--color-background)]",
          className
        )}
      >
        <div className="container mx-auto px-6 lg:px-8 text-center">
          {logo && <div className="mb-6 flex justify-center">{logo}</div>}
          {description && (
            <p className="text-[var(--color-muted-foreground)] max-w-md mx-auto mb-8">
              {description}
            </p>
          )}

          {columns.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
              {columns.flatMap((column) =>
                column.links.map((link, index) => (
                  <Link
                    key={`${column.title}-${index}`}
                    href={link.href}
                    className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </nav>
          )}

          {socialLinks.length > 0 && (
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[var(--color-muted)] flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          <p className="text-sm text-[var(--color-muted-foreground)]">
            {copyrightText}
          </p>
        </div>
      </footer>
    );
  }

  // Default: multi-column footer
  return (
    <footer
      className={cn(
        "py-16 md:py-20 border-t border-[var(--color-border)] bg-[var(--color-background)]",
        className
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            {logo && <div className="mb-4">{logo}</div>}
            {description && (
              <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed max-w-xs">
                {description}
              </p>
            )}
            {socialLinks.length > 0 && (
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-[var(--color-muted)] flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              <h3 className="font-semibold text-[var(--color-foreground)] mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {copyrightText}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
