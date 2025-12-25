"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Play, Star } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Hero, Features, Testimonials, CTA, Contact, Footer, Stats } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { saasTheme } from "@/lib/themes";

const features = [
  {
    icon: Zap,
    title: "Blitzschnell",
    description: "Optimierte Leistung mit Reaktionszeiten unter einer Sekunde und 99,99% Verfügbarkeitsgarantie.",
  },
  {
    icon: Shield,
    title: "Enterprise-Sicherheit",
    description: "Banktaugliche Verschlüsselung, SOC 2-Konformität und fortschrittlicher Bedrohungsschutz.",
  },
  {
    icon: BarChart3,
    title: "Erweiterte Analysen",
    description: "Echtzeit-Einblicke und anpassbare Dashboards zur Verfolgung Ihrer Kennzahlen.",
  },
  {
    icon: Users,
    title: "Team-Zusammenarbeit",
    description: "Nahtlose Zusammenarbeit mit Echtzeit-Bearbeitung und Kommentarfunktion.",
  },
  {
    icon: Clock,
    title: "Automatisierung",
    description: "Sparen Sie Stunden mit intelligenten Workflows und automatisiertem Aufgabenmanagement.",
  },
  {
    icon: Star,
    title: "Prioritäts-Support",
    description: "24/7 dediziertes Support-Team mit durchschnittlicher Antwortzeit unter 2 Stunden.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "€29",
    period: "/Monat",
    description: "Perfekt für kleine Teams, die gerade anfangen",
    features: [
      "Bis zu 5 Teammitglieder",
      "10GB Speicherplatz",
      "Basis-Analysen",
      "E-Mail-Support",
      "API-Zugang",
    ],
    cta: "Kostenlos testen",
    popular: false,
  },
  {
    name: "Professional",
    price: "€79",
    period: "/Monat",
    description: "Für wachsende Teams, die mehr Power brauchen",
    features: [
      "Bis zu 20 Teammitglieder",
      "100GB Speicherplatz",
      "Erweiterte Analysen",
      "Prioritäts-Support",
      "Benutzerdefinierte Integrationen",
      "Audit-Protokolle",
    ],
    cta: "Kostenlos testen",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Individuell",
    period: "",
    description: "Für große Organisationen mit individuellen Anforderungen",
    features: [
      "Unbegrenzte Teammitglieder",
      "Unbegrenzter Speicherplatz",
      "Benutzerdefinierte Analysen",
      "Dedizierter Support",
      "Individuelles SLA",
      "On-Premise-Option",
    ],
    cta: "Vertrieb kontaktieren",
    popular: false,
  },
];

const testimonials = [
  {
    quote: "Diese Plattform hat die Art und Weise, wie unser Team arbeitet, verändert. Wir haben seit der Einführung eine 40%ige Produktivitätssteigerung verzeichnet.",
    author: "Sarah Johnson",
    role: "VP Operations",
    company: "TechStart GmbH",
    rating: 5,
  },
  {
    quote: "Die beste Investition, die wir für unser Unternehmen getätigt haben. Allein die Analysen haben das Abonnement mehrfach rentiert.",
    author: "Michael Chen",
    role: "CEO",
    company: "GrowthLabs",
    rating: 5,
  },
  {
    quote: "Unglaublicher Kundensupport und ein Produkt, das einfach funktioniert. Wir haben viele Lösungen ausprobiert und diese ist bei weitem die beste.",
    author: "Emily Rodriguez",
    role: "Produktmanagerin",
    company: "Innovate GmbH",
    rating: 5,
  },
];

const stats = [
  { value: "10K+", label: "Aktive Nutzer" },
  { value: "99,99%", label: "Verfügbarkeit" },
  { value: "500M+", label: "Erledigte Aufgaben" },
  { value: "150+", label: "Länder" },
];

const logos = ["Acme Inc", "TechCorp", "Innovate", "StartupXYZ", "Enterprise Co", "Growth Labs"];

export default function SaaSDemo() {
  return (
    <DemoLayout theme={saasTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowSync</span>
          </div>
        }
        links={[
          { label: "Funktionen", href: "#features" },
          { label: "Preise", href: "#pricing" },
          { label: "Kundenstimmen", href: "#testimonials" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Jetzt starten"
      />

      {/* Hero */}
      <Hero
        variant="centered"
        badge="Neu: FlowSync 2.0"
        title="Die moderne Art, die Arbeit Ihres Teams zu verwalten"
        titleHighlight="moderne"
        subtitle="Optimieren Sie Ihren Workflow, steigern Sie die Produktivität und arbeiten Sie nahtlos zusammen – mit der All-in-One-Plattform, der über 10.000 Teams weltweit vertrauen."
        primaryCTA={{ text: "Kostenlos testen" }}
        secondaryCTA={{ text: "Demo ansehen" }}
        image={
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl border border-[var(--color-border)] overflow-hidden shadow-2xl relative">
              <DemoImage
                alt="SaaS Dashboard Preview"
                category="saas"
                aspect="video"
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <motion.button
                  className="w-20 h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </div>
            {/* Floating UI elements */}
            <motion.div
              className="absolute -left-8 top-1/4 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Aufgabe erledigt</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">Gerade eben</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-8 bottom-1/4 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">+24% Wachstum</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">Diesen Monat</div>
                </div>
              </div>
            </motion.div>
          </div>
        }
      />

      {/* Logos */}
      <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-[var(--color-muted-foreground)] mb-8">
            Vertraut von führenden Unternehmen weltweit
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="text-xl font-bold text-[var(--color-muted-foreground)]/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats stats={stats} />

      {/* Features */}
      <Features
        badge="Funktionen"
        title="Alles, was Sie für den Erfolg brauchen"
        subtitle="Leistungsstarke Funktionen, die Ihrem Team helfen, intelligenter statt härter zu arbeiten"
        features={features}
        columns={3}
        variant="cards"
      />

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Preise
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Einfache, transparente Preise
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Starten Sie kostenlos, upgraden Sie bei Bedarf. Keine versteckten Gebühren.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  variant={plan.popular ? "gradient" : "elevated"}
                  padding="lg"
                  className={`h-full relative ${plan.popular ? "ring-2 ring-[var(--color-primary)]" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-medium rounded-full">
                      Am beliebtesten
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                      {plan.name}
                    </h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[var(--color-foreground)]">
                        {plan.price}
                      </span>
                      <span className="text-[var(--color-muted-foreground)]">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[var(--color-primary)]" />
                        <span className="text-sm text-[var(--color-foreground)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        badge="Kundenstimmen"
        title="Geliebt von Teams überall"
        subtitle="Sehen Sie, was unsere Kunden über ihre Erfahrungen sagen"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Bereit, Ihren Workflow zu transformieren?"
        subtitle="Schließen Sie sich über 10.000 Teams an, die bereits FlowSync nutzen. Starten Sie Ihre kostenlose 14-tägige Testversion."
        primaryCTA={{ text: "Kostenlos testen" }}
        secondaryCTA={{ text: "Demo vereinbaren" }}
      />

      {/* Contact */}
      <Contact
        badge="Kontakt"
        title="Kontaktieren Sie uns"
        subtitle="Haben Sie Fragen? Wir freuen uns, von Ihnen zu hören."
        contactInfo={{
          email: "hallo@flowsync.de",
          phone: "+49 (30) 123-4567",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowSync</span>
          </div>
        }
        description="Die moderne Art, die Arbeit Ihres Teams zu verwalten. Vertraut von über 10.000 Teams weltweit."
        columns={[
          {
            title: "Produkt",
            links: [
              { label: "Funktionen", href: "#features" },
              { label: "Preise", href: "#pricing" },
              { label: "Integrationen", href: "#" },
              { label: "Änderungsprotokoll", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Presse", href: "#" },
            ],
          },
          {
            title: "Ressourcen",
            links: [
              { label: "Dokumentation", href: "#" },
              { label: "Hilfe-Center", href: "#" },
              { label: "Community", href: "#" },
              { label: "Status", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
