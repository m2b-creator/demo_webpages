"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star, ArrowRight, Utensils } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Hero, Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal, Floating, Magnetic } from "@/components/animations";
import { restaurantTheme } from "@/lib/themes";

const menuItems = [
  {
    category: "Vorspeisen",
    items: [
      { name: "Bruschetta al Pomodoro", price: "€12", description: "Frische Tomaten, Basilikum, Knoblauch auf geröstetem Brot" },
      { name: "Carpaccio di Manzo", price: "€18", description: "Hauchdünn geschnittenes Rindfleisch mit Rucola und Parmesan" },
      { name: "Burrata e Prosciutto", price: "€16", description: "Cremige Burrata mit gereiftem Parmaschinken" },
    ],
  },
  {
    category: "Hauptgerichte",
    items: [
      { name: "Ossobuco alla Milanese", price: "€42", description: "Geschmorte Kalbshaxe mit Safranrisotto" },
      { name: "Branzino al Forno", price: "€38", description: "Im Ofen gerösteter Wolfsbarsch mit Kräutern" },
      { name: "Filetto di Manzo", price: "€48", description: "Rinderfilet vom Feinsten mit Trüffelsauce" },
    ],
  },
];

const testimonials = [
  {
    quote: "Ein absolut unvergessliches kulinarisches Erlebnis. Die Liebe zum Detail in jedem Gericht ist bemerkenswert.",
    author: "Maria Rossi",
    role: "Restaurantkritikerin",
    company: "The Culinary Times",
    rating: 5,
  },
  {
    quote: "Die perfekte Mischung aus Tradition und Innovation. Jeder Besuch fühlt sich besonders an.",
    author: "James Chen",
    role: "Stammgast",
    rating: 5,
  },
  {
    quote: "Vom Ambiente über den Service bis zum Essen – alles ist erstklassig.",
    author: "Sophie Laurent",
    role: "Reisebloggerin",
    rating: 5,
  },
];

export default function RestaurantDemo() {
  return (
    <DemoLayout theme={restaurantTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="text-xl font-serif font-bold">La Cucina</span>
          </div>
        }
        links={[
          { label: "Speisekarte", href: "#menu" },
          { label: "Über uns", href: "#about" },
          { label: "Reservierung", href: "#contact" },
          { label: "Kontakt", href: "#contact" },
        ]}
        ctaText="Tisch reservieren"
      />

      {/* Hero */}
      <Hero
        variant="split"
        badge="Seit 1985"
        title="Erleben Sie die Kunst der italienischen Küche"
        titleHighlight="Kunst"
        subtitle="Wo zeitlose Traditionen auf moderne kulinarische Exzellenz treffen. Begleiten Sie uns auf eine unvergessliche gastronomische Reise im Herzen der Stadt."
        primaryCTA={{ text: "Tisch reservieren" }}
        secondaryCTA={{ text: "Speisekarte ansehen" }}
        image={
          <div className="relative">
            <DemoImage
              alt="Elegant restaurant interior"
              category="restaurant"
              aspect="portrait"
              className="rounded-2xl shadow-2xl"
              overlay
            />
            {/* Floating decorative elements */}
            <Floating duration={4} distance={12}>
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[var(--color-primary)]/20 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </Floating>
            <Floating duration={5} distance={8}>
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[var(--color-accent)]/15 blur-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />
            </Floating>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[var(--color-card)]/95 backdrop-blur-xl shadow-xl border border-[var(--color-border)]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <span className="font-semibold">4.9</span>
                <span className="text-sm text-[var(--color-muted-foreground)]">(200+ Bewertungen)</span>
              </div>
            </motion.div>
            {/* Secondary floating image */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white/20 hidden lg:block"
              initial={{ opacity: 0, x: 20, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 1.2 }}
            >
              <DemoImage alt="Signature dish" category="restaurant" aspect="square" />
            </motion.div>
          </div>
        }
      />

      {/* Info Bar */}
      <section className="py-8 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm">Gourmetstraße 123, Berlin</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm">Di-So: 17:00 - 23:00 Uhr</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm">+49 (30) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Unsere Speisekarte
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)]">
                Kuratiert für Exzellenz
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Jedes Gericht erzählt eine Geschichte von Leidenschaft, Tradition und feinsten Zutaten
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {menuItems.map((section, sectionIndex) => (
              <ScrollReveal key={sectionIndex} delay={sectionIndex * 0.1}>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[var(--color-foreground)] mb-6 pb-2 border-b border-[var(--color-border)]">
                    {section.category}
                  </h3>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex justify-between items-start group p-3 -mx-3 rounded-lg hover:bg-[var(--color-muted)]/50 transition-colors cursor-pointer"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                            {item.description}
                          </p>
                        </div>
                        <motion.span
                          className="text-lg font-semibold text-[var(--color-primary)] ml-4"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.price}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Vollständige Speisekarte ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features
        badge="Warum wir"
        title="Eine Tradition der Exzellenz"
        subtitle="Jedes Detail zählt bei der Schaffung des perfekten kulinarischen Erlebnisses"
        features={[
          {
            title: "Vom Bauernhof auf den Tisch",
            description: "Wir beziehen die frischesten Zutaten von lokalen Bauernhöfen und vertrauenswürdigen Lieferanten.",
          },
          {
            title: "Meisterköche",
            description: "Unser Küchenteam bringt jahrzehntelange Erfahrung aus den besten Küchen mit.",
          },
          {
            title: "Private Dining",
            description: "Elegante Privaträume für intime Zusammenkünfte und besondere Feierlichkeiten.",
          },
          {
            title: "Weinkeller",
            description: "Eine umfangreiche Sammlung erlesener Weine, kuratiert von unserem Sommelier.",
          },
        ]}
        columns={4}
        variant="icons"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Gästebewertungen"
        title="Was unsere Gäste sagen"
        testimonials={testimonials}
        variant="carousel"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Bereit für einen unvergesslichen Abend?"
        subtitle="Reservieren Sie noch heute Ihren Tisch und erleben Sie die Magie von La Cucina"
        primaryCTA={{ text: "Reservierung vornehmen" }}
        secondaryCTA={{ text: "Rufen Sie uns an" }}
      />

      {/* Contact */}
      <Contact
        badge="Reservierungen"
        title="Reservieren Sie Ihren Tisch"
        subtitle="Wir freuen uns darauf, Sie zu begrüßen"
        contactInfo={{
          email: "reservierungen@lacucina.de",
          phone: "+49 (30) 123-4567",
          address: "Gourmetstraße 123, 10115 Berlin",
          hours: "Dienstag - Sonntag: 17:00 - 23:00 Uhr",
        }}
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="text-xl font-serif font-bold">La Cucina</span>
          </div>
        }
        description="Erleben Sie die Kunst der italienischen Küche im Herzen der Stadt. Feine Küche, tadelloser Service, unvergessliche Erinnerungen."
        columns={[
          {
            title: "Besuchen",
            links: [
              { label: "Speisekarte", href: "#menu" },
              { label: "Reservierungen", href: "#contact" },
              { label: "Private Veranstaltungen", href: "#" },
              { label: "Geschenkkarten", href: "#" },
            ],
          },
          {
            title: "Über uns",
            links: [
              { label: "Unsere Geschichte", href: "#" },
              { label: "Das Team", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Presse", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
