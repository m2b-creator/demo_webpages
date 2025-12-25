"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { demos } from "@/lib/themes";
import { DemoGrid } from "@/components/showcase";
import { CustomCursor } from "@/components/effects";

// Animated text reveal component
function AnimatedTitle() {
  const titleWords = ["Build", "Beautiful", "Experiences"];

  return (
    <motion.h1
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
          },
        },
      }}
    >
      {titleWords.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className={`block ${
            wordIndex === 1
              ? "bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
              : "text-white"
          }`}
          variants={{
            hidden: { opacity: 0, y: 80, rotateX: 40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          style={{ transformOrigin: "center bottom", perspective: 1000 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// Floating orb decoration
function FloatingOrb({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`}
      animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <CustomCursor />

      <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
        {/* Noise texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Background gradient orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <FloatingOrb
            className="w-[800px] h-[800px] -top-40 -left-40 bg-gradient-to-br from-cyan-500 to-blue-600"
            delay={0}
          />
          <FloatingOrb
            className="w-[600px] h-[600px] top-1/3 -right-32 bg-gradient-to-br from-violet-500 to-purple-600"
            delay={2}
          />
          <FloatingOrb
            className="w-[500px] h-[500px] -bottom-20 left-1/4 bg-gradient-to-br from-fuchsia-500 to-pink-600"
            delay={4}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
          }}
        />

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
          {/* Navigation */}
          <motion.nav
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg">Portfolio</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#demos"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                My Work
              </a>
              <motion.a
                href="#contact"
                className="px-4 py-2 text-sm font-medium rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.nav>

          {/* Hero content */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="space-y-8">
              <AnimatedTitle />

              <motion.p
                className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                I create stunning, fully responsive websites with modern design
                patterns, smooth animations, and exceptional user experiences.
                Take a look at what I can build for you.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="#demos"
                  className="inline-flex items-center justify-center gap-2.5 h-14 px-8 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-[0_4px_20px_-4px_rgba(99,102,241,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(99,102,241,0.6)] transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <ArrowDown className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-xl text-white hover:bg-white/10 transition-colors border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-zinc-500"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </section>

        {/* Demos Section */}
        <section id="demos" className="relative px-6 md:px-12 lg:px-20 py-32">
          {/* Section header */}
          <motion.div
            className="max-w-7xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              My Work
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              Each project is crafted with attention to detail, featuring
              custom animations, responsive layouts, and thoughtful interactions.
            </p>
          </motion.div>

          {/* Demo grid */}
          <div className="max-w-7xl mx-auto">
            <DemoGrid demos={demos} />
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="relative border-t border-white/5 px-6 md:px-12 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Web Development</span>
            </div>

            <p className="text-sm text-zinc-500">
              Ready to bring your vision to life? Let&apos;s talk.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="mailto:hello@example.com"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                hello@example.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
