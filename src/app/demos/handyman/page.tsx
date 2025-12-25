"use client";

import { motion } from "framer-motion";
import { Wrench, Phone, Clock, Shield, CheckCircle, Star, ArrowRight, Hammer, Paintbrush, Zap, Droplets, Home } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Hero, Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { handymanTheme } from "@/lib/themes";

const services = [
  {
    icon: Hammer,
    title: "Allgemeine Reparaturen",
    description: "Von der Türreparatur bis zur Wandausbesserung – wir erledigen alle Ihre Hausreparaturen.",
    price: "Ab €75",
  },
  {
    icon: Zap,
    title: "Elektroarbeiten",
    description: "Lizenzierte Elektriker für sichere Installationen, Reparaturen und Modernisierungen.",
    price: "Ab €95",
  },
  {
    icon: Droplets,
    title: "Sanitärarbeiten",
    description: "Professionelle Klempnerarbeiten für Lecks, Verstopfungen und Neuinstallationen.",
    price: "Ab €85",
  },
  {
    icon: Paintbrush,
    title: "Malerarbeiten",
    description: "Innen- und Außenanstrich mit professionellen Materialien.",
    price: "Ab €250",
  },
  {
    icon: Home,
    title: "Hausrenovierung",
    description: "Komplette Renovierungsleistungen von der Planung bis zur Fertigstellung.",
    price: "Individuelles Angebot",
  },
  {
    icon: Wrench,
    title: "Gerätereparatur",
    description: "Reparatur und Wartung für alle großen Haushaltsgeräte.",
    price: "Ab €65",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Lizenziert & Versichert",
    description: "Vollständig lizenzierte Fachleute mit umfassendem Versicherungsschutz.",
  },
  {
    icon: Clock,
    title: "Taggleicher Service",
    description: "Verfügbar für Notfallreparaturen mit schnellen Reaktionszeiten.",
  },
  {
    icon: CheckCircle,
    title: "Zufriedenheitsgarantie",
    description: "100% Zufriedenheitsgarantie auf alle unsere Arbeiten und Materialien.",
  },
  {
    icon: Star,
    title: "5-Sterne-Bewertung",
    description: "Durchgängig mit 5 Sternen von unseren zufriedenen Kunden bewertet.",
  },
];

const testimonials = [
  {
    quote: "Problem mit der Sanitärinstallation in unter einer Stunde behoben. Professionell, sauber und erschwinglich. Sehr empfehlenswert!",
    author: "Robert Martinez",
    role: "Hausbesitzer",
    company: "Berlin",
    rating: 5,
  },
  {
    quote: "Sie haben unsere gesamte Küche renoviert und das Ergebnis ist fantastisch. Großartige Kommunikation während des gesamten Projekts.",
    author: "Jennifer Lee",
    role: "Hausbesitzerin",
    company: "München",
    rating: 5,
  },
  {
    quote: "Habe an einem Sonntag wegen einer elektrischen Notfallreparatur angerufen. Sie waren innerhalb einer Stunde da. Lebensretter!",
    author: "David Thompson",
    role: "Geschäftsinhaber",
    company: "Hamburg",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "10K+", label: "Erledigte Aufträge" },
  { value: "4.9", label: "Durchschnittsbewertung" },
  { value: "24/7", label: "Notdienst" },
];

export default function HandymanDemo() {
  return (
    <DemoLayout theme={handymanTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">FixIt Pro</span>
          </div>
        }
        links={[
          { label: "Leistungen", href: "#services" },
          { label: "Über uns", href: "#about" },
          { label: "Bewertungen", href: "#testimonials" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Kostenloses Angebot"
      />

      {/* Hero */}
      <Hero
        variant="split"
        badge="Vertrauenswürdige Haushaltsservices"
        title="Ihr Zuhause verdient die beste Pflege"
        titleHighlight="beste"
        subtitle="Professionelle Handwerkerservices für alle Ihre Reparatur- und Renovierungsbedürfnisse. Lizenziert, versichert und der Exzellenz verpflichtet."
        primaryCTA={{ text: "Kostenloses Angebot" }}
        secondaryCTA={{ text: "Jetzt anrufen" }}
        image={
          <div className="relative">
            <DemoImage
              alt="Professional handyman at work"
              category="handyman"
              aspect="square"
              className="rounded-2xl shadow-2xl"
              overlay
            />
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-muted-foreground)]">24/7 Erreichbar</div>
                  <div className="text-lg font-bold text-[var(--color-foreground)]">(030) 123-4567</div>
                </div>
              </div>
            </motion.div>
          </div>
        }
      />

      {/* Stats */}
      <section className="py-12 bg-[var(--color-secondary)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-secondary-foreground)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-secondary-foreground)]/70 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Unsere Leistungen
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Fachkundige Lösungen für jeden Bedarf
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Von kleinen Reparaturen bis zu großen Renovierungen – unsere qualifizierten Fachleute liefern Qualitätsarbeit
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
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="elevated" hover="lift" padding="lg" className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)] mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <span className="font-semibold text-[var(--color-primary)]">{service.price}</span>
                    <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Mehr erfahren
                    </Button>
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
        title="Der FixIt Pro Unterschied"
        subtitle="Wir gehen über das Erwartete hinaus, um Ihre vollständige Zufriedenheit zu gewährleisten"
        features={whyChooseUs}
        columns={4}
        variant="cards"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Kundenstimmen"
        title="Was unsere Kunden sagen"
        subtitle="Schließen Sie sich Tausenden zufriedener Hausbesitzer an, die FixIt Pro vertrauen"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Bereit loszulegen?"
        subtitle="Holen Sie sich noch heute ein kostenloses Angebot und erfahren Sie, warum wir die Nr. 1 für Haushaltsservices sind."
        primaryCTA={{ text: "Kostenloses Angebot" }}
        secondaryCTA={{ text: "Anrufen (030) 123-4567" }}
      />

      {/* Contact */}
      <Contact
        badge="Kontakt"
        title="Kontaktieren Sie uns"
        subtitle="Wir sind hier, um Ihnen bei allen Ihren Reparaturbedürfnissen zu helfen"
        contactInfo={{
          email: "info@fixitpro.de",
          phone: "+49 (30) 123-4567",
          address: "Handwerkerstraße 123, 10115 Berlin",
          hours: "Mo-Sa: 7:00 - 20:00 Uhr, So: 9:00 - 17:00 Uhr",
        }}
        variant="split"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">FixIt Pro</span>
          </div>
        }
        description="Professionelle Handwerkerservices für alle Ihre Reparatur- und Renovierungsbedürfnisse. Lizenziert, versichert und der Exzellenz verpflichtet."
        columns={[
          {
            title: "Leistungen",
            links: [
              { label: "Allgemeine Reparaturen", href: "#" },
              { label: "Elektrik", href: "#" },
              { label: "Sanitär", href: "#" },
              { label: "Malerarbeiten", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Bewertungen", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
          {
            title: "Hilfe",
            links: [
              { label: "Kontakt", href: "#contact" },
              { label: "FAQ", href: "#" },
              { label: "Servicegebiete", href: "#" },
              { label: "Notdienst", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
