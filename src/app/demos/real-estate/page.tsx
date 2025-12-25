"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, Heart, Search, SlidersHorizontal, Home, Building, Key, Phone, ArrowRight, Star } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { realEstateTheme } from "@/lib/themes";

const properties = [
  {
    title: "Moderne Luxusvilla",
    location: "Berlin-Grunewald",
    price: "€4.250.000",
    beds: 5,
    baths: 4,
    sqft: "480",
    type: "Villa",
    featured: true,
  },
  {
    title: "Penthouse in der City",
    location: "München Maxvorstadt",
    price: "€3.850.000",
    beds: 3,
    baths: 3,
    sqft: "290",
    type: "Penthouse",
  },
  {
    title: "Anwesen am Wasser",
    location: "Hamburg Blankenese",
    price: "€6.500.000",
    beds: 6,
    baths: 5,
    sqft: "720",
    type: "Anwesen",
    featured: true,
  },
  {
    title: "Zeitgenössisches Stadthaus",
    location: "Frankfurt Westend",
    price: "€2.150.000",
    beds: 4,
    baths: 3,
    sqft: "260",
    type: "Stadthaus",
  },
  {
    title: "Bergrefugium",
    location: "Garmisch-Partenkirchen",
    price: "€5.900.000",
    beds: 5,
    baths: 4,
    sqft: "420",
    type: "Chalet",
  },
  {
    title: "Urbanes Loft",
    location: "Düsseldorf Medienhafen",
    price: "€1.250.000",
    beds: 2,
    baths: 2,
    sqft: "170",
    type: "Loft",
  },
];

const services = [
  {
    icon: Home,
    title: "Immobilie kaufen",
    description: "Finden Sie Ihr Traumhaus aus unserer umfangreichen Sammlung von Luxusimmobilien.",
  },
  {
    icon: Key,
    title: "Immobilie verkaufen",
    description: "Erzielen Sie den besten Wert für Ihre Immobilie mit unseren Experten-Marketingstrategien.",
  },
  {
    icon: Building,
    title: "Mieten",
    description: "Entdecken Sie Premium-Mietimmobilien in erstklassigen Lagen weltweit.",
  },
];

const testimonials = [
  {
    quote: "Sie haben unser Traumhaus in nur zwei Wochen gefunden. Der Prozess war nahtlos und stressfrei.",
    author: "Michael & Sarah Hoffmann",
    role: "Hausbesitzer",
    company: "Berlin",
    rating: 5,
  },
  {
    quote: "Haben unsere Immobilie 20% über dem Angebotspreis verkauft. Ihre Marktkenntnis ist unübertroffen.",
    author: "Robert Chen",
    role: "Immobilieninvestor",
    company: "München",
    rating: 5,
  },
  {
    quote: "Professionell, reaktionsschnell und wirklich engagiert, die perfekte Lösung für Kunden zu finden.",
    author: "Jennifer Martinez",
    role: "Erstkäuferin",
    company: "Hamburg",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Verkaufte Immobilien" },
  { value: "€2Mrd+", label: "Umsatzvolumen" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "15+", label: "Jahre Erfahrung" },
];

export default function RealEstateDemo() {
  return (
    <DemoLayout theme={realEstateTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Luxe Realty</span>
          </div>
        }
        links={[
          { label: "Kaufen", href: "#properties" },
          { label: "Verkaufen", href: "#" },
          { label: "Mieten", href: "#" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Immobilie anbieten"
      />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
              Willkommen bei Luxe Realty
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
              Finden Sie Ihr perfektes
              <span className="text-[var(--color-primary)]"> Zuhause</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-xl mx-auto lg:mx-0">
              Entdecken Sie außergewöhnliche Immobilien in den begehrtesten Lagen der Welt mit unserem persönlichen Immobilienservice.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            className="mt-12 max-w-4xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="elevated" padding="md" className="shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-muted-foreground)]" />
                  <input
                    type="text"
                    placeholder="Standort"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-background)]">
                    <option>Immobilientyp</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Stadthaus</option>
                    <option>Anwesen</option>
                  </select>
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-background)]">
                    <option>Preisklasse</option>
                    <option>€1M - €2M</option>
                    <option>€2M - €5M</option>
                    <option>€5M - €10M</option>
                    <option>€10M+</option>
                  </select>
                </div>
                <Button size="lg" leftIcon={<Search className="w-4 h-4" />}>
                  Suchen
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[var(--color-foreground)]">
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

      {/* Featured Properties */}
      <section id="properties" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  Ausgewählte Angebote
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  Außergewöhnliche Immobilien
                </h2>
              </div>
              <Button variant="outline" leftIcon={<SlidersHorizontal className="w-4 h-4" />}>
                Mehr Filter
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {properties.map((property, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="group overflow-hidden">
                  {/* Property Image */}
                  <div className="relative aspect-[4/3]">
                    <DemoImage
                      alt={property.title}
                      category="real-estate"
                      aspect="video"
                      className="w-full h-full"
                    />
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {property.featured && (
                        <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-medium">
                          Empfohlen
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-[var(--color-background)]/90 backdrop-blur-sm text-xs font-medium">
                        {property.type}
                      </span>
                    </div>
                    {/* Favorite */}
                    <motion.button
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--color-background)]/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                  </div>
                  {/* Property Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-4 text-sm text-[var(--color-muted-foreground)]">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {property.beds} Zimmer
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {property.baths} Bäder
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {property.sqft} m²
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-2xl font-bold text-[var(--color-primary)]">
                        {property.price}
                      </span>
                      <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Alle Immobilien ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <Features
        badge="Unsere Leistungen"
        title="Wie wir helfen können"
        subtitle="Umfassende Immobiliendienstleistungen, auf Ihre Bedürfnisse zugeschnitten"
        features={services}
        columns={3}
        variant="cards"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Kundenstimmen"
        title="Was unsere Kunden sagen"
        subtitle="Hören Sie von Hausbesitzern, die ihre perfekte Immobilie mit uns gefunden haben"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Bereit, Ihr Traumhaus zu finden?"
        subtitle="Lassen Sie sich von unseren erfahrenen Maklern durch den Prozess führen. Vereinbaren Sie noch heute eine Beratung."
        primaryCTA={{ text: "Beratung vereinbaren" }}
        secondaryCTA={{ text: "Immobilien durchsuchen" }}
      />

      {/* Contact */}
      <Contact
        badge="Kontakt aufnehmen"
        title="Kontaktieren Sie uns"
        subtitle="Unser Team hilft Ihnen gerne, die perfekte Immobilie zu finden"
        contactInfo={{
          email: "hallo@luxerealty.de",
          phone: "+49 (30) 123-4567",
          address: "Luxusallee 123, 10719 Berlin",
        }}
        variant="split"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Luxe Realty</span>
          </div>
        }
        description="Ihr vertrauenswürdiger Partner bei der Suche nach außergewöhnlichen Immobilien in den begehrtesten Lagen der Welt."
        columns={[
          {
            title: "Immobilien",
            links: [
              { label: "Kaufen", href: "#" },
              { label: "Verkaufen", href: "#" },
              { label: "Mieten", href: "#" },
              { label: "Neubauprojekte", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Unser Team", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Presse", href: "#" },
            ],
          },
          {
            title: "Ressourcen",
            links: [
              { label: "Marktberichte", href: "#" },
              { label: "Kaufratgeber", href: "#" },
              { label: "Verkaufsratgeber", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
