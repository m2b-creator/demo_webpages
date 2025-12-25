"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone, Send } from "lucide-react";
import { demos } from "@/lib/themes";
import { DemoGrid } from "@/components/showcase";
import { CustomCursor } from "@/components/effects";
import { useState, FormEvent } from "react";

// Animated text reveal component with hover effects
function AnimatedTitle() {
  const titleWords = ["Wir schaffen", "Einzigartige", "Webseiten"];

  return (
    <motion.h1
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-[1.1]"
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
          className={`block cursor-default pb-4 ${
            wordIndex === 1 ? "text-cyan-400" : "text-white"
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
          whileHover={{
            scale: 1.05,
            x: wordIndex === 0 ? -10 : wordIndex === 2 ? 10 : 0,
            transition: { type: "spring", stiffness: 400, damping: 15 }
          }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className={`inline-block ${
                wordIndex === 1 ? "hover:text-orange-500" : "hover:text-cyan-400"
              }`}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 500, damping: 10 }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// Contact form component with webhook integration
function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    try {
      const response = await fetch('https://automate.m2b.solutions/webhook/6b6ed9e2-65a8-4fe1-b15b-6bfeaeeb9c8b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <motion.div
        className="relative bg-zinc-900/80 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[400px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Nachricht gesendet!</h3>
        <p className="text-zinc-400 text-center mb-6">Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.</p>
        <button
          onClick={() => setFormState('idle')}
          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          Weitere Nachricht senden
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-2xl blur opacity-20" />
      <form
        onSubmit={handleSubmit}
        className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="Ihr Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              required
              placeholder="ihre@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Telefon <span className="text-zinc-500">(optional)</span>
            </label>
            <input
              type="tel"
              placeholder="+49 123 456789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Projektart
            </label>
            <select
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-zinc-900">Projektart auswählen</option>
              <option value="Website Design & Entwicklung" className="bg-zinc-900">Website Design & Entwicklung</option>
              <option value="E-Commerce Shop" className="bg-zinc-900">E-Commerce Shop</option>
              <option value="Web-Applikation" className="bg-zinc-900">Web-Applikation</option>
              <option value="Landing Page" className="bg-zinc-900">Landing Page</option>
              <option value="Website Redesign" className="bg-zinc-900">Website Redesign</option>
              <option value="Sonstiges" className="bg-zinc-900">Sonstiges</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            Nachricht
          </label>
          <textarea
            rows={5}
            required
            placeholder="Erzählen Sie uns von Ihrem Projekt..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
          />
        </div>

        {formState === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm"
          >
            Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={formState === 'loading'}
          className="w-full inline-flex items-center justify-center gap-2 h-14 px-8 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_4px_20px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(6,182,212,0.6)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          whileHover={formState !== 'loading' ? { scale: 1.02 } : {}}
          whileTap={formState !== 'loading' ? { scale: 0.98 } : {}}
        >
          {formState === 'loading' ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Wird gesendet...
            </>
          ) : (
            <>
              Nachricht senden
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>
    </div>
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

        {/* Background gradient orbs - M2B Blue Theme */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <FloatingOrb
            className="w-[800px] h-[800px] -top-40 -left-40 bg-gradient-to-br from-cyan-500 to-blue-600"
            delay={0}
          />
          <FloatingOrb
            className="w-[600px] h-[600px] top-1/3 -right-32 bg-gradient-to-br from-blue-500 to-indigo-600"
            delay={2}
          />
          <FloatingOrb
            className="w-[500px] h-[500px] -bottom-20 left-1/4 bg-gradient-to-br from-indigo-500 to-blue-700"
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
            <a href="https://m2b.solutions" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M2B</span>
              </div>
              <span className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">M2B Solutions</span>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://m2b.solutions"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                ← Hauptseite
              </a>
              <a
                href="#demos"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Demos
              </a>
              <motion.a
                href="#contact"
                className="px-4 py-2 text-sm font-medium rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kontakt
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
                Wir entwickeln beeindruckende, vollständig responsive Websites mit
                modernem Design, flüssigen Animationen und außergewöhnlicher
                Benutzererfahrung. Entdecken Sie, was wir für Sie erstellen können.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="#demos"
                  className="inline-flex items-center justify-center gap-2.5 h-14 px-8 text-lg font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_4px_20px_-4px_rgba(6,182,212,0.5)] hover:shadow-[0_8px_30px_-4px_rgba(6,182,212,0.6)] transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Projekte ansehen
                  <ArrowDown className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium rounded-xl text-white hover:bg-white/10 transition-colors border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Kontakt aufnehmen
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
              <span className="text-xs uppercase tracking-widest">Scrollen</span>
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
              Was wir für Sie erstellen können
            </h2>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
              Von Restaurants bis Immobilien, E-Commerce bis SaaS — jede Branche
              verdient eine beeindruckende Webpräsenz. Hier sehen Sie, was wir für Sie entwickeln können.
            </p>
          </motion.div>

          {/* Demo grid */}
          <div className="max-w-7xl mx-auto">
            <DemoGrid demos={demos} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-6 md:px-12 lg:px-20 py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />

          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">
                Kontakt
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Lassen Sie uns zusammenarbeiten
              </h2>
              <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                Haben Sie ein Projekt im Sinn? Wir freuen uns darauf, mehr zu erfahren. Schreiben Sie uns und lassen Sie uns gemeinsam etwas Großartiges erschaffen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">Kontaktinformationen</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Ob Sie eine Frage haben, ein Projekt starten möchten oder einfach in Kontakt treten wollen — wir freuen uns auf Ihre Nachricht.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.a
                    href="mailto:info@m2b.solutions"
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-cyan-500/30 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">E-Mail</div>
                      <div className="text-white group-hover:text-cyan-400 transition-colors">info@m2b.solutions</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+4917656127211"
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-emerald-500/30 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">Telefon</div>
                      <div className="text-white group-hover:text-emerald-400 transition-colors">+49 176 56127211</div>
                    </div>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-white/5 rounded-xl"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">Standort</div>
                      <div className="text-white">Weltweit verfügbar (Remote)</div>
                    </div>
                  </motion.div>
                </div>

                {/* Availability Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 font-medium">Verfügbar für neue Projekte</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/5 px-6 md:px-12 lg:px-20 py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="https://m2b.solutions" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M2B</span>
              </div>
              <span className="font-semibold group-hover:text-cyan-400 transition-colors">M2B Solutions</span>
            </a>

            <p className="text-sm text-zinc-500">
              © 2026 M2B Solutions. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://m2b.solutions"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Hauptseite
              </a>
              <a
                href="mailto:info@m2b.solutions"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                info@m2b.solutions
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
