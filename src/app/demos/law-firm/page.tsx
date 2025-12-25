"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Users, Award, Phone, Clock, ArrowRight, Briefcase, FileText, Building2, ChevronRight } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { lawFirmTheme } from "@/lib/themes";

const practiceAreas = [
  {
    icon: Briefcase,
    title: "Gesellschaftsrecht",
    description: "Umfassende Rechtslösungen für Unternehmen jeder Größe, von Startups bis zu DAX-Konzernen.",
  },
  {
    icon: FileText,
    title: "Prozessführung",
    description: "Erfahrene Prozessanwälte mit nachgewiesener Erfolgsgeschichte bei komplexen Wirtschaftsstreitigkeiten.",
  },
  {
    icon: Building2,
    title: "Immobilienrecht",
    description: "Fachkundige Beratung bei Immobilientransaktionen, Projektentwicklung und Bauplanungsrecht.",
  },
  {
    icon: Scale,
    title: "Arbeitsrecht",
    description: "Schutz der Rechte von Arbeitgebern und Arbeitnehmern in arbeitsrechtlichen Angelegenheiten.",
  },
  {
    icon: Shield,
    title: "Geistiges Eigentum",
    description: "Schutz Ihrer Innovationen, Marken und kreativen Werke.",
  },
  {
    icon: Users,
    title: "Familienrecht",
    description: "Einfühlsame Vertretung bei Scheidung, Sorgerecht und Familienangelegenheiten.",
  },
];

const attorneys = [
  {
    name: "Dr. Robert J. Harrison",
    title: "Geschäftsführender Partner",
    specialty: "Gesellschaftsrecht",
    experience: "30+ Jahre",
  },
  {
    name: "Dr. Elisabeth Chen",
    title: "Seniorpartnerin",
    specialty: "Prozessführung",
    experience: "25 Jahre",
  },
  {
    name: "Michael Thompson",
    title: "Partner",
    specialty: "Immobilienrecht",
    experience: "20 Jahre",
  },
  {
    name: "Sarah Williams",
    title: "Assoziierte Partnerin",
    specialty: "Arbeitsrecht",
    experience: "15 Jahre",
  },
];

const testimonials = [
  {
    quote: "Ihre Expertise im Gesellschaftsrecht hat uns geholfen, eine komplexe Fusion nahtlos zu bewältigen. Wirklich außergewöhnliche Rechtsberatung.",
    author: "Thomas Müller",
    role: "Geschäftsführer",
    company: "TechCorp Industries",
    rating: 5,
  },
  {
    quote: "Professionell, gründlich und immer erreichbar, wenn wir sie brauchten. Sie haben unsere Interessen zu jeder Zeit geschützt.",
    author: "Patricia Schmidt",
    role: "Finanzvorstand",
    company: "Schmidt Holding",
    rating: 5,
  },
  {
    quote: "Haben einen schwierigen Arbeitsrechtsfall für unser Unternehmen gewonnen. Ihr Prozessteam ist einfach das Beste in der Region.",
    author: "David Weber",
    role: "Syndikusanwalt",
    company: "Global Manufacturing GmbH",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Jahre Gesamterfahrung" },
  { value: "2000+", label: "Gewonnene Fälle" },
  { value: "98%", label: "Erfolgsquote" },
  { value: "500+", label: "Unternehmenskunden" },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Preisgekröntes Team",
    description: "Ausgezeichnet von führenden Rechtspublikationen für herausragende Praxis.",
  },
  {
    icon: Clock,
    title: "Reaktionsschneller Service",
    description: "Wir verstehen die Dringlichkeit und reagieren umgehend auf Mandantenanfragen.",
  },
  {
    icon: Shield,
    title: "Bewährte Ergebnisse",
    description: "Eine Erfolgsgeschichte mit positiven Ergebnissen für unsere Mandanten.",
  },
  {
    icon: Users,
    title: "Mandantenorientiert",
    description: "Ihre Ziele und Interessen haben für uns immer höchste Priorität.",
  },
];

export default function LawFirmDemo() {
  return (
    <DemoLayout theme={lawFirmTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-[var(--color-primary)]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">HARRISON</span>
              <span className="text-xs tracking-widest text-[var(--color-muted-foreground)]">& ASSOCIATES</span>
            </div>
          </div>
        }
        links={[
          { label: "Rechtsgebiete", href: "#practice-areas" },
          { label: "Anwälte", href: "#attorneys" },
          { label: "Über uns", href: "#about" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Kostenlose Beratung"
      />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                Gegründet 1975
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
                Rechtliche Exzellenz,
                <br />
                <span className="text-[var(--color-primary)]">Vertrauenswürdige Ergebnisse</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Seit fast 50 Jahren bieten wir erstklassige Rechtsvertretung für Unternehmen und Privatpersonen deutschlandweit.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Beratung vereinbaren
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-4 h-4" />}>
                  +49 (30) 123-4567
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[var(--color-border)]">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DemoImage
                alt="Law firm office"
                category="law-firm"
                aspect="portrait"
                className="rounded-2xl shadow-2xl"
                overlay
              />
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-foreground)]">Spitzenbewertung</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Chambers & Partners 2025</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Rechtsgebiete
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Umfassende Rechtsdienstleistungen
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Unsere erfahrenen Anwälte beraten Sie in einem breiten Spektrum juristischer Disziplinen
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="elevated" hover="lift" padding="lg" className="h-full group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                    <area.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)]">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[var(--color-primary)]">
                    Mehr erfahren <ChevronRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Unser Team
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Lernen Sie unsere Anwälte kennen
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Erfahrene Juristen, die sich für die bestmöglichen Ergebnisse einsetzen
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {attorneys.map((attorney, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="overflow-hidden group">
                  <div className="aspect-[3/4]">
                    <DemoImage
                      alt={attorney.name}
                      category="law-firm"
                      aspect="portrait"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                      {attorney.name}
                    </h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium">
                      {attorney.title}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {attorney.specialty}
                      </span>
                      <span className="text-xs text-[var(--color-muted-foreground)]">
                        {attorney.experience}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Features
        badge="Warum wir"
        title="Der Harrison-Unterschied"
        subtitle="Was uns von anderen Kanzleien unterscheidet"
        features={whyChooseUs}
        columns={4}
        variant="cards"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Mandantenstimmen"
        title="Was unsere Mandanten sagen"
        subtitle="Hören Sie von denen, die wir vertreten durften"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="dark"
        title="Benötigen Sie rechtliche Unterstützung?"
        subtitle="Vereinbaren Sie eine kostenlose Erstberatung mit einem unserer erfahrenen Anwälte."
        primaryCTA={{ text: "Beratung vereinbaren" }}
        secondaryCTA={{ text: "Anrufen: +49 (30) 123-4567" }}
      />

      {/* Contact */}
      <Contact
        badge="Kontakt aufnehmen"
        title="Sprechen Sie mit uns"
        subtitle="Wir sind für Ihre rechtlichen Anliegen da"
        contactInfo={{
          email: "kontakt@harrisonrecht.de",
          phone: "+49 (30) 123-4567",
          address: "Unter den Linden 21, 10117 Berlin",
          hours: "Mo-Fr: 8:30 - 18:00 Uhr",
        }}
        variant="split"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-[var(--color-primary)]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">HARRISON</span>
              <span className="text-xs tracking-widest text-[var(--color-muted-foreground)]">& ASSOCIATES</span>
            </div>
          </div>
        }
        description="Erstklassige Rechtsvertretung seit 1975. Das Vertrauen von Unternehmen und Privatpersonen deutschlandweit."
        columns={[
          {
            title: "Rechtsgebiete",
            links: [
              { label: "Gesellschaftsrecht", href: "#" },
              { label: "Prozessführung", href: "#" },
              { label: "Immobilienrecht", href: "#" },
              { label: "Arbeitsrecht", href: "#" },
            ],
          },
          {
            title: "Kanzlei",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Unser Team", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Aktuelles", href: "#" },
            ],
          },
          {
            title: "Ressourcen",
            links: [
              { label: "Blog", href: "#" },
              { label: "Publikationen", href: "#" },
              { label: "FAQ", href: "#" },
              { label: "Kontakt", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
