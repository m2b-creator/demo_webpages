"use client";

import { motion } from "framer-motion";
import { Camera, Instagram, Mail, ArrowRight, ArrowUpRight, Heart, Award, Users, Calendar, Play } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { photographyTheme } from "@/lib/themes";

const portfolioItems = [
  { title: "Bergmorgen", category: "Landschaft", featured: true },
  { title: "Urbane Geometrie", category: "Architektur", featured: true },
  { title: "Sarah & Thomas", category: "Hochzeit" },
  { title: "Mode Avantgarde", category: "Editorial" },
  { title: "Unternehmensvision", category: "Kommerziell" },
  { title: "Wilde Seele", category: "Tierwelt" },
  { title: "Stadtlichter", category: "Nacht" },
  { title: "Goldene Stunde", category: "Portrait", featured: true },
];

const services = [
  {
    title: "Hochzeitsfotografie",
    description: "Ihr besonderer Tag festgehalten mit Kunst und Emotion.",
    startingAt: "€3.200",
  },
  {
    title: "Portrait-Sessions",
    description: "Professionelle Portraits für Einzelpersonen und Familien.",
    startingAt: "€420",
  },
  {
    title: "Kommerzielle Arbeit",
    description: "Markenfotografie und Produktaufnahmen für Unternehmen.",
    startingAt: "€1.100",
  },
  {
    title: "Eventbegleitung",
    description: "Firmenveranstaltungen, Feiern und besondere Anlässe.",
    startingAt: "€750",
  },
];

const awards = [
  { title: "Bester Landschaftsfotograf", org: "National Geographic", year: "2025" },
  { title: "Hochzeitsfotograf des Jahres", org: "WPPI", year: "2023" },
  { title: "Ausgewählter Künstler", org: "Adobe Creative", year: "2023" },
];

const stats = [
  { value: "500+", label: "Projekte" },
  { value: "12", label: "Jahre" },
  { value: "50+", label: "Auszeichnungen" },
  { value: "100%", label: "Zufriedenheit" },
];

export default function PhotographyDemo() {
  return (
    <DemoLayout theme={photographyTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <span className="text-2xl font-light tracking-widest">
            LENS<span className="font-bold">CRAFT</span>
          </span>
        }
        links={[
          { label: "Portfolio", href: "#portfolio" },
          { label: "Leistungen", href: "#services" },
          { label: "Über mich", href: "#about" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Session buchen"
        variant="transparent"
      />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-transparent to-[var(--color-background)]" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-muted-foreground)] mb-8">
                Preisgekrönte Fotografie
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[var(--color-foreground)] leading-none tracking-tight">
                Momente
                <br />
                <span className="font-bold italic">einfangen</span>
                <br />
                die bleiben
              </h1>
              <p className="mt-8 text-xl text-[var(--color-muted-foreground)] max-w-lg mx-auto">
                Professionelle Fotografie, die Ihre Geschichte durch beeindruckende Bilder und authentische Emotionen erzählt.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Portfolio ansehen
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Play className="w-4 h-4" />}>
                  Showreel
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-[var(--color-foreground)]">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--color-muted-foreground)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                  Ausgewählte Arbeiten
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-light text-[var(--color-foreground)]">
                  Portfolio
                </h2>
              </div>
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Alle ansehen
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.featured ? "md:col-span-2 md:row-span-2" : ""}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div className="group relative aspect-square overflow-hidden bg-[var(--color-muted)] cursor-pointer">
                  <DemoImage
                    alt={item.title}
                    category="photography"
                    aspect="square"
                    className="w-full h-full"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-foreground)]/0 group-hover:bg-[var(--color-foreground)]/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center text-[var(--color-background)] p-4">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="text-sm opacity-70 mt-1">{item.category}</p>
                      <motion.button
                        className="mt-4 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <DemoImage
                alt="Photographer portrait"
                category="photography"
                aspect="portrait"
                className="rounded-2xl shadow-2xl"
                overlay
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                  Über mich
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-light text-[var(--color-foreground)]">
                  Alex Rivera
                </h2>
                <p className="mt-6 text-[var(--color-muted-foreground)] leading-relaxed">
                  Mit über 12 Jahren hinter der Kamera habe ich mein Handwerk dem Festhalten der kostbarsten Momente des Lebens gewidmet. Meine Arbeiten wurden in National Geographic, Vogue und zahlreichen internationalen Publikationen veröffentlicht.
                </p>
                <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">
                  Ich glaube, dass jedes Bild eine Geschichte erzählen sollte – eine, die Emotionen weckt und die Zeit überdauert. Ob Hochzeit, Firmenveranstaltung oder persönliches Portrait – ich bringe dieselbe Leidenschaft und Liebe zum Detail in jedes Projekt ein.
                </p>

                {/* Awards */}
                <div className="mt-8 space-y-4">
                  <h3 className="font-medium text-[var(--color-foreground)]">Auszeichnungen</h3>
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Award className="w-5 h-5 text-[var(--color-accent)]" />
                      <div>
                        <span className="font-medium text-[var(--color-foreground)]">{award.title}</span>
                        <span className="text-sm text-[var(--color-muted-foreground)]"> — {award.org}, {award.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  {[Instagram, Mail].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                Leistungen
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-light text-[var(--color-foreground)]">
                Mein Angebot
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Professionelle Fotografie-Dienstleistungen, auf Ihre Bedürfnisse zugeschnitten
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="lg" className="group cursor-pointer border-l-4 border-l-transparent hover:border-l-[var(--color-accent)] transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[var(--color-muted-foreground)]">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <span className="text-sm text-[var(--color-muted-foreground)]">Ab</span>
                    <span className="ml-2 text-lg font-medium text-[var(--color-foreground)]">{service.startingAt}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
              Beratungsgespräch buchen
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-[var(--color-foreground)]">
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@lenscraft.studio</span>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="aspect-square group cursor-pointer overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <DemoImage
                  alt={`Instagram photo ${index + 1}`}
                  category="photography"
                  aspect="square"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-[var(--color-foreground)]/0 group-hover:bg-[var(--color-foreground)]/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="dark"
        title="Lassen Sie uns etwas Schönes erschaffen"
        subtitle="Bereit, Ihre Geschichte festzuhalten? Lassen Sie uns über Ihre Vision sprechen und sie zum Leben erwecken."
        primaryCTA={{ text: "Kontakt aufnehmen" }}
        secondaryCTA={{ text: "Preise ansehen" }}
      />

      {/* Contact */}
      <Contact
        badge="Kontakt aufnehmen"
        title="Session buchen"
        subtitle="Lassen Sie uns über Ihre Fotografie-Wünsche sprechen"
        contactInfo={{
          email: "hallo@lenscraft.studio",
          phone: "+49 (30) 123-4567",
          address: "Berlin, Deutschland",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <span className="text-2xl font-light tracking-widest">
            LENS<span className="font-bold">CRAFT</span>
          </span>
        }
        description="Momente einfangen, die ein Leben lang bleiben. Professionelle Fotografie-Dienstleistungen für jeden Anlass."
        socialLinks={[
          { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
          { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
        ]}
        variant="centered"
      />
    </DemoLayout>
  );
}
