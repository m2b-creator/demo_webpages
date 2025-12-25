"use client";

import { motion } from "framer-motion";
import { Dumbbell, Clock, Users, Flame, Heart, Trophy, ArrowRight, Calendar, Play, Star, Zap } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer, Stats } from "@/components/sections";
import { Button, Card, DemoImage, AvatarImage } from "@/components/ui";
import { ScrollReveal, Floating } from "@/components/animations";
import { gymTheme } from "@/lib/themes";

const classes = [
  {
    name: "HIIT Training",
    description: "Hochintensives Intervalltraining für maximale Kalorienverbrennung",
    duration: "45 Min",
    level: "Fortgeschritten",
    trainer: "Mike Johnson",
    icon: Flame,
  },
  {
    name: "Kraft & Power",
    description: "Muskelaufbau und Kraftsteigerung mit Grundübungen",
    duration: "60 Min",
    level: "Mittelstufe",
    trainer: "Sarah Chen",
    icon: Dumbbell,
  },
  {
    name: "Yoga Flow",
    description: "Verbessern Sie Flexibilität und Achtsamkeit durch fließende Posen",
    duration: "60 Min",
    level: "Alle Level",
    trainer: "Emma Wilson",
    icon: Heart,
  },
  {
    name: "Spinning",
    description: "Energiegeladenes Radtraining mit motivierender Musik",
    duration: "45 Min",
    level: "Alle Level",
    trainer: "James Miller",
    icon: Zap,
  },
];

const trainers = [
  { name: "Mike Johnson", specialty: "Kraft & Kondition", experience: "10+ Jahre" },
  { name: "Sarah Chen", specialty: "Olympisches Heben", experience: "8 Jahre" },
  { name: "Emma Wilson", specialty: "Yoga & Wellness", experience: "12 Jahre" },
  { name: "James Miller", specialty: "Cardio & HIIT", experience: "6 Jahre" },
];

const memberships = [
  {
    name: "Basic",
    price: "€29",
    period: "/Monat",
    features: ["Studiozugang", "Umkleide", "Grundausstattung", "Mobile App"],
    popular: false,
  },
  {
    name: "Premium",
    price: "€59",
    period: "/Monat",
    features: ["Alle Basic-Leistungen", "Gruppenkurse", "Personal Training (1x/Mo)", "Sauna & Dampfbad", "Ernährungsplan"],
    popular: true,
  },
  {
    name: "Elite",
    price: "€99",
    period: "/Monat",
    features: ["Alle Premium-Leistungen", "Unbegrenzte PT-Sessions", "Prioritäts-Buchung", "Gästepässe", "Recovery-Zone"],
    popular: false,
  },
];

const testimonials = [
  {
    quote: "Ich habe 15 kg in 3 Monaten verloren! Die Trainer hier sind unglaublich und motivieren mich jeden Tag.",
    author: "David Martinez",
    role: "Mitglied",
    company: "6 Monate",
    rating: 5,
  },
  {
    quote: "Das beste Fitnessstudio, in dem ich je war. Die Ausstattung ist erstklassig und die Gemeinschaft so unterstützend.",
    author: "Lisa Thompson",
    role: "Mitglied",
    company: "2 Jahre",
    rating: 5,
  },
  {
    quote: "Die Gruppenkurse sind fantastisch! Ich habe so viele Freunde gefunden, während ich in die beste Form meines Lebens gekommen bin.",
    author: "Kevin Park",
    role: "Mitglied",
    company: "1 Jahr",
    rating: 5,
  },
];

const stats = [
  { value: "5000+", label: "Aktive Mitglieder" },
  { value: "50+", label: "Wöchentliche Kurse" },
  { value: "20+", label: "Experten-Trainer" },
  { value: "24/7", label: "Immer geöffnet" },
];

export default function GymDemo() {
  return (
    <DemoLayout theme={gymTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">IRONFORGE</span>
          </div>
        }
        links={[
          { label: "Kurse", href: "#classes" },
          { label: "Mitgliedschaft", href: "#membership" },
          { label: "Trainer", href: "#trainers" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Jetzt starten"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                🔥 Transformieren Sie Ihren Körper
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--color-foreground)] leading-none tracking-tight">
                ÜBERSCHREITE DEINE
                <br />
                <span className="text-[var(--color-primary)]">GRENZEN</span>
              </h1>
              <p className="mt-6 text-xl text-[var(--color-muted-foreground)] max-w-lg">
                Werde Teil der modernsten Fitnessanlage der Stadt. Erstklassige Ausstattung, erfahrene Trainer und eine Gemeinschaft, die dich zu deinem Besten antreibt.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Kostenlos testen
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Play className="w-4 h-4" />}>
                  Virtuelle Tour
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { value: "4.9", label: "Bewertung", icon: Star },
                  { value: "5K+", label: "Mitglieder", icon: Users },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--color-foreground)]">{stat.value}</div>
                      <div className="text-sm text-[var(--color-muted-foreground)]">{stat.label}</div>
                    </div>
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
                alt="Fitness training"
                category="gym"
                aspect="portrait"
                className="rounded-3xl shadow-2xl"
                overlay
              />
              {/* Floating decorative elements */}
              <Floating duration={4} distance={12}>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--color-primary)]/20 blur-2xl" />
              </Floating>
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[var(--color-card)]/95 backdrop-blur-xl shadow-xl border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-foreground)]">500+ Kcal</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Durchschn. pro Training</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats stats={stats} />

      {/* Classes */}
      <section id="classes" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Unsere Kurse
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Trainiere wie ein Champion
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Von hochintensiven Workouts bis zu achtsamer Bewegung – finde den perfekten Kurs für deine Ziele
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
            {classes.map((classItem, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="elevated" hover="lift" padding="lg" className="h-full group">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                    <classItem.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                    {classItem.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                    {classItem.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {classItem.duration}
                    </div>
                    <span className="px-2 py-1 rounded-full bg-[var(--color-muted)] text-xs">
                      {classItem.level}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
              Vollständigen Kursplan ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Mitgliedschaftspläne
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Wähle deinen Weg
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Flexible Pläne, die zu deiner Fitnessreise passen
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
            {memberships.map((plan, index) => (
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full">
                      AM BELIEBTESTEN
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[var(--color-foreground)]">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-5xl font-black text-[var(--color-foreground)]">{plan.price}</span>
                      <span className="text-[var(--color-muted-foreground)]">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                          <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-[var(--color-foreground)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                    Jetzt starten
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        badge="Erfolgsgeschichten"
        title="Echte Ergebnisse, echte Menschen"
        subtitle="Sehen Sie, was unsere Mitglieder erreicht haben"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Bereit zur Transformation?"
        subtitle="Starten Sie heute Ihre 7-tägige kostenlose Testphase. Keine Verpflichtung, keine Kreditkarte erforderlich."
        primaryCTA={{ text: "Kostenlos testen" }}
        secondaryCTA={{ text: "Kontaktieren Sie uns" }}
      />

      {/* Contact */}
      <Contact
        badge="Besuchen Sie uns"
        title="Kontakt aufnehmen"
        subtitle="Bereit, Ihre Fitnessreise zu starten?"
        contactInfo={{
          email: "hallo@ironforge.de",
          phone: "+49 (30) 123-4567",
          address: "Fitnessallee 456, 10115 Berlin",
          hours: "Geöffnet 24/7",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">IRONFORGE</span>
          </div>
        }
        description="Die modernste Fitnessanlage der Stadt. Transformiere deinen Körper, transformiere dein Leben."
        columns={[
          {
            title: "Programme",
            links: [
              { label: "Kurse", href: "#" },
              { label: "Personal Training", href: "#" },
              { label: "Ernährung", href: "#" },
              { label: "Recovery", href: "#" },
            ],
          },
          {
            title: "Mitgliedschaft",
            links: [
              { label: "Preise", href: "#" },
              { label: "Firmenkunden", href: "#" },
              { label: "Studenten", href: "#" },
              { label: "FAQ", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Kontakt", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
