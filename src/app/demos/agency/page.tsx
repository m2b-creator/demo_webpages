"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Code, Palette, Megaphone, TrendingUp, Users } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { agencyTheme } from "@/lib/themes";

const services = [
  {
    icon: Palette,
    title: "Markenidentität",
    description: "Strategische Markenentwicklung, die Ihr Wesen einfängt und bei Ihrer Zielgruppe Anklang findet.",
  },
  {
    icon: Code,
    title: "Webentwicklung",
    description: "Maßgeschneiderte digitale Erlebnisse mit modernster Technologie und pixelgenauem Design.",
  },
  {
    icon: Megaphone,
    title: "Digitales Marketing",
    description: "Datengesteuerte Kampagnen, die Ihre Botschaft verstärken und messbare Ergebnisse liefern.",
  },
  {
    icon: TrendingUp,
    title: "Wachstumsstrategie",
    description: "Umfassende Wachstumspläne, die Startups zu Marktführern entwickeln.",
  },
];

const caseStudies = [
  {
    client: "TechVision",
    category: "Webdesign & Entwicklung",
    title: "Die Zukunft der KI-Schnittstellen neu definieren",
    stats: { metric: "+340%", label: "Nutzer-Engagement" },
  },
  {
    client: "Bloom Beauty",
    category: "Markenidentität",
    title: "Ein frischer Blick auf nachhaltige Schönheit",
    stats: { metric: "2,5M", label: "Soziale Reichweite" },
  },
  {
    client: "FinFlow",
    category: "Digitales Produkt",
    title: "Banking neu gedacht für Generation Z",
    stats: { metric: "€12M", label: "Series A Finanzierung" },
  },
  {
    client: "Atlas Travel",
    category: "Marketingkampagne",
    title: "Fernweh: Ein globales Abenteuer",
    stats: { metric: "+180%", label: "Konversionen" },
  },
];

const testimonials = [
  {
    quote: "Die Zusammenarbeit war transformativ. Sie haben nicht nur eine Website gebaut – sie haben ein Markenerlebnis geschaffen, das unsere Kunden lieben.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechVision",
    rating: 5,
  },
  {
    quote: "Das kreativste Team, mit dem wir je gearbeitet haben. Sie haben Grenzen überschritten und sind dabei unserer Vision treu geblieben.",
    author: "Marcus Johnson",
    role: "CMO",
    company: "Bloom Beauty",
    rating: 5,
  },
  {
    quote: "Unsere Konversionsraten haben sich im ersten Monat nach dem Launch verdoppelt. Der ROI spricht für sich.",
    author: "Elena Rodriguez",
    role: "Gründerin",
    company: "FinFlow",
    rating: 5,
  },
];

const stats = [
  { value: "150+", label: "Abgeschlossene Projekte" },
  { value: "50M+", label: "Erreichte Nutzer" },
  { value: "98%", label: "Kundenbindung" },
  { value: "12", label: "Branchenauszeichnungen" },
];

export default function AgencyDemo() {
  return (
    <DemoLayout theme={agencyTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <span className="text-2xl font-bold">
            PIXEL<span className="text-[var(--color-primary)]">.</span>
          </span>
        }
        links={[
          { label: "Arbeiten", href: "#work" },
          { label: "Leistungen", href: "#services" },
          { label: "Über uns", href: "#about" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Projekt starten"
      />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-muted-foreground)]">
                Preisgekrönte Digitalagentur
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-foreground)] leading-none tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Wir gestalten
              <br />
              <span className="text-[var(--color-primary)]">digitale</span>
              <br />
              Erlebnisse
            </motion.h1>

            <motion.p
              className="mt-8 text-xl text-[var(--color-muted-foreground)] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Wir sind ein Kreativstudio, das mutige Ideen in unvergessliche digitale Produkte und Markenerlebnisse verwandelt.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Unsere Arbeiten ansehen
              </Button>
              <Button variant="outline" size="lg">
                Kontakt aufnehmen
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-[var(--color-border)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  Ausgewählte Arbeiten
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                  Fallstudien
                </h2>
              </div>
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Alle ansehen
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="group cursor-pointer overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <DemoImage
                      alt={study.title}
                      category="agency"
                      aspect="video"
                      className="w-full h-full"
                    />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--color-foreground)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-background)]" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {study.category}
                      </span>
                      <span className="text-xs font-medium text-[var(--color-primary)]">
                        {study.client}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-2xl font-bold text-[var(--color-foreground)]">
                        {study.stats.metric}
                      </span>
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {study.stats.label}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Features
        badge="Was wir machen"
        title="Leistungen"
        subtitle="Umfassende digitale Lösungen für ambitionierte Marken"
        features={services}
        columns={4}
        variant="cards"
      />

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  Über uns
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  Wir glauben, dass großartiges Design gutes Geschäft ist
                </h2>
                <p className="mt-6 text-[var(--color-muted-foreground)] leading-relaxed">
                  2015 gegründet, sind wir von einem kleinen Designstudio zu einer Full-Service-Digitalagentur gewachsen. Unser Team aus über 25 Kreativen, Strategen und Technologen arbeitet zusammen, um außergewöhnliche Ergebnisse für Marken weltweit zu liefern.
                </p>
                <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">
                  Wir erstellen nicht nur – wir arbeiten zusammen. Jedes Projekt ist eine Partnerschaft, und wir messen unseren Erfolg an Ihrem.
                </p>
                <div className="flex items-center gap-6 mt-8">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] border-2 border-[var(--color-background)] flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-[var(--color-muted-foreground)]">
                    25+ talentierte Kreative
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <DemoImage
                alt="Creative agency team"
                category="agency"
                aspect="square"
                className="rounded-2xl shadow-2xl"
                overlay
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        badge="Kundenstimmen"
        title="Was sie sagen"
        subtitle="Verlassen Sie sich nicht nur auf unser Wort"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Haben Sie ein Projekt im Sinn?"
        subtitle="Lassen Sie uns gemeinsam etwas Großartiges erschaffen. Kontaktieren Sie uns, um das Gespräch zu beginnen."
        primaryCTA={{ text: "Projekt starten" }}
        secondaryCTA={{ text: "Prozess ansehen" }}
      />

      {/* Contact */}
      <Contact
        badge="Kontakt aufnehmen"
        title="Lassen Sie uns sprechen"
        subtitle="Bereit, Ihre Vision zum Leben zu erwecken?"
        contactInfo={{
          email: "hallo@pixelagentur.de",
          phone: "+49 (30) 123-4567",
          address: "Kreativstraße 123, 10115 Berlin",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <span className="text-2xl font-bold">
            PIXEL<span className="text-[var(--color-primary)]">.</span>
          </span>
        }
        description="Preisgekrönte Digitalagentur, die unvergessliche Markenerlebnisse gestaltet."
        columns={[
          {
            title: "Arbeiten",
            links: [
              { label: "Fallstudien", href: "#" },
              { label: "Branchen", href: "#" },
              { label: "Kompetenzen", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Kontakt", href: "#" },
            ],
          },
          {
            title: "Folgen",
            links: [
              { label: "Instagram", href: "#" },
              { label: "Dribbble", href: "#" },
              { label: "LinkedIn", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
