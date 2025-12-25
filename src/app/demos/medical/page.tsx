"use client";

import { motion } from "framer-motion";
import { Stethoscope, Heart, Clock, Shield, Users, Phone, ArrowRight, Calendar, Star, MapPin, Award, Activity } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer, Stats } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { medicalTheme } from "@/lib/themes";

const services = [
  {
    icon: Heart,
    title: "Allgemeinmedizin",
    description: "Umfassende Gesundheitsversorgung für Ihre ganze Familie mit persönlicher Betreuung.",
  },
  {
    icon: Activity,
    title: "Kardiologie",
    description: "Modernste Herzbehandlung mit innovativen Diagnose- und Therapiemöglichkeiten.",
  },
  {
    icon: Stethoscope,
    title: "Pädiatrie",
    description: "Spezialisierte Versorgung für Säuglinge, Kinder und Jugendliche in freundlicher Atmosphäre.",
  },
  {
    icon: Users,
    title: "Frauengesundheit",
    description: "Umfassende gynäkologische Leistungen mit einfühlsamer, fachkundiger Betreuung.",
  },
  {
    icon: Shield,
    title: "Vorsorge",
    description: "Gesundheitsuntersuchungen, Impfungen und Wellness-Programme für Ihre Gesundheit.",
  },
  {
    icon: Award,
    title: "Fachärztliche Versorgung",
    description: "Zugang zu Spezialisten verschiedener Fachrichtungen unter einem Dach.",
  },
];

const doctors = [
  {
    name: "Dr. Sarah Müller",
    specialty: "Allgemeinmedizin",
    experience: "15 Jahre",
    education: "Charité Berlin",
  },
  {
    name: "Dr. Thomas Chen",
    specialty: "Kardiologie",
    experience: "20 Jahre",
    education: "LMU München",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pädiatrie",
    experience: "12 Jahre",
    education: "Uni Heidelberg",
  },
  {
    name: "Dr. Michael Weber",
    specialty: "Innere Medizin",
    experience: "18 Jahre",
    education: "Uni Freiburg",
  },
];

const testimonials = [
  {
    quote: "Das gesamte Team hat mir vom ersten Tag an ein gutes Gefühl gegeben. Dr. Müller nimmt sich Zeit zum Zuhören und erklärt alles verständlich.",
    author: "Jennifer Schmidt",
    role: "Patientin",
    company: "3 Jahre",
    rating: 5,
  },
  {
    quote: "Die beste Kinderversorgung in der Stadt. Meine Kinder freuen sich sogar auf ihre Vorsorgeuntersuchungen. Die Ärzte sind wunderbar mit Kindern.",
    author: "David & Maria Santos",
    role: "Eltern",
    company: "5 Jahre",
    rating: 5,
  },
  {
    quote: "Nach meinem Herzproblem hat mir Dr. Chen und sein Team das Leben gerettet. Die Nachsorge war außergewöhnlich.",
    author: "Robert Weber",
    role: "Patient",
    company: "2 Jahre",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Fachärzte" },
  { value: "100K+", label: "Behandelte Patienten" },
  { value: "25+", label: "Jahre Erfahrung" },
  { value: "4.9", label: "Patientenbewertung" },
];

const insuranceLogos = ["AOK", "TK", "Barmer", "DAK", "IKK", "BKK"];

export default function MedicalDemo() {
  return (
    <DemoLayout theme={medicalTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">CareFirst</span>
              <span className="text-xs text-[var(--color-muted-foreground)]">Medizinisches Zentrum</span>
            </div>
          </div>
        }
        links={[
          { label: "Leistungen", href: "#services" },
          { label: "Ärzte", href: "#doctors" },
          { label: "Patienten", href: "#" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Termin buchen"
      />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Star className="w-4 h-4 fill-current" />
                Nr. 1 in Patientenzufriedenheit
              </motion.span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
                Ihre Gesundheit,
                <br />
                <span className="text-[var(--color-primary)]">Unsere Priorität</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-lg mx-auto lg:mx-0">
                Umfassende Gesundheitsversorgung mit einfühlsamer, persönlicher Betreuung. Erleben Sie den Unterschied patientenzentrierter Medizin.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Termin buchen
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-4 h-4" />}>
                  +49 (30) 123-4567
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  7 Tage die Woche geöffnet
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  3 zentrale Standorte
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DemoImage
                alt="Medical center"
                category="medical"
                aspect="square"
                className="rounded-3xl shadow-2xl"
                overlay
              />
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-foreground)]">Kurzfristig</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Termine verfügbar</div>
                  </div>
                </div>
              </motion.div>
              {/* Another Floating Card */}
              <motion.div
                className="absolute -top-6 -right-6 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-foreground)]">Alle Kassen</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Privat & gesetzlich</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats stats={stats} />

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Unsere Leistungen
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Umfassende Versorgung
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Von Routineuntersuchungen bis zur Spezialbehandlung – wir begleiten Sie auf Ihrem Gesundheitsweg
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
                <Card variant="elevated" hover="lift" padding="lg" className="h-full group">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)]">
                    {service.description}
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Mehr erfahren
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Unser Team
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Lernen Sie unsere Ärzte kennen
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Approbierte Fachärzte, die sich Ihrem Wohlbefinden verschrieben haben
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
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="overflow-hidden text-center group">
                  <div className="aspect-square">
                    <DemoImage
                      alt={doctor.name}
                      category="medical"
                      aspect="square"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                      {doctor.name}
                    </h3>
                    <p className="text-[var(--color-primary)] font-medium text-sm">
                      {doctor.specialty}
                    </p>
                    <div className="flex justify-center gap-4 mt-3 text-xs text-[var(--color-muted-foreground)]">
                      <span>{doctor.experience}</span>
                      <span>•</span>
                      <span>{doctor.education}</span>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      Profil ansehen
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-12 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-[var(--color-muted-foreground)] mb-6">
            Wir akzeptieren alle gängigen Krankenkassen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {insuranceLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="text-lg font-bold text-[var(--color-muted-foreground)]/50"
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

      {/* Testimonials */}
      <Testimonials
        badge="Patientenberichte"
        title="Was unsere Patienten sagen"
        subtitle="Echte Erfahrungen von echten Patienten"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Bereit für Ihren Besuch?"
        subtitle="Neue Patienten willkommen. Kurzfristige Termine verfügbar."
        primaryCTA={{ text: "Termin buchen" }}
        secondaryCTA={{ text: "Anrufen: +49 (30) 123-4567" }}
      />

      {/* Contact */}
      <Contact
        badge="Besuchen Sie uns"
        title="Kontaktieren Sie uns"
        subtitle="Wir beantworten gerne Ihre Fragen"
        contactInfo={{
          email: "info@carefirst.de",
          phone: "+49 (30) 123-4567",
          address: "Gesundheitsallee 123, 10117 Berlin",
          hours: "Mo-Sa: 8-18 Uhr, So: 9-15 Uhr",
        }}
        variant="split"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">CareFirst</span>
              <span className="text-xs text-[var(--color-muted-foreground)]">Medizinisches Zentrum</span>
            </div>
          </div>
        }
        description="Umfassende Gesundheitsversorgung mit Herz. Ihr vertrauenswürdiger Partner für Gesundheit und Wohlbefinden."
        columns={[
          {
            title: "Leistungen",
            links: [
              { label: "Allgemeinmedizin", href: "#" },
              { label: "Fachärztliche Versorgung", href: "#" },
              { label: "Akutversorgung", href: "#" },
              { label: "Telemedizin", href: "#" },
            ],
          },
          {
            title: "Patienten",
            links: [
              { label: "Neue Patienten", href: "#" },
              { label: "Patientenportal", href: "#" },
              { label: "Versicherung", href: "#" },
              { label: "Abrechnung", href: "#" },
            ],
          },
          {
            title: "Über uns",
            links: [
              { label: "Unser Team", href: "#" },
              { label: "Standorte", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Aktuelles", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
