"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart, Star, Truck, Shield, RefreshCw, ArrowRight, Filter, Search, ChevronRight } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { CTA, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { ecommerceTheme } from "@/lib/themes";

const products = [
  {
    name: "Premium Lederjacke",
    price: "€299",
    originalPrice: "€399",
    rating: 4.9,
    reviews: 128,
    category: "Oberbekleidung",
    badge: "Bestseller",
  },
  {
    name: "Klassische weiße Sneaker",
    price: "€149",
    rating: 4.8,
    reviews: 256,
    category: "Schuhe",
    badge: "Neu",
  },
  {
    name: "Minimalistische Uhr",
    price: "€199",
    rating: 4.7,
    reviews: 89,
    category: "Accessoires",
  },
  {
    name: "Wollmantel",
    price: "€449",
    originalPrice: "€549",
    rating: 4.9,
    reviews: 67,
    category: "Oberbekleidung",
    badge: "Sale",
  },
  {
    name: "Kaschmir-Pullover",
    price: "€179",
    rating: 4.6,
    reviews: 145,
    category: "Strickwaren",
  },
  {
    name: "Leder-Umhängetasche",
    price: "€249",
    rating: 4.8,
    reviews: 92,
    category: "Taschen",
    badge: "Trending",
  },
];

const categories = [
  { name: "Neuheiten", count: 124, icon: "✨" },
  { name: "Bestseller", count: 89, icon: "🔥" },
  { name: "Oberbekleidung", count: 56, icon: "🧥" },
  { name: "Schuhe", count: 78, icon: "👟" },
  { name: "Accessoires", count: 145, icon: "⌚" },
  { name: "Sale", count: 34, icon: "🏷️" },
];

const features = [
  {
    icon: Truck,
    title: "Kostenloser Versand",
    description: "Ab €100 Bestellwert",
  },
  {
    icon: RefreshCw,
    title: "Einfache Rückgabe",
    description: "30 Tage Rückgaberecht",
  },
  {
    icon: Shield,
    title: "Sichere Zahlung",
    description: "100% sicherer Checkout",
  },
];

export default function EcommerceDemo() {
  return (
    <DemoLayout theme={ecommerceTheme}>
      {/* Navigation */}
      <DemoNav
        logo={<span className="text-2xl font-bold tracking-tight">MAISON</span>}
        links={[
          { label: "Neu", href: "#" },
          { label: "Damen", href: "#" },
          { label: "Herren", href: "#" },
          { label: "Sale", href: "#" },
        ]}
        ctaText="Warenkorb (3)"
      />

      {/* Hero Banner */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                Winterkollektion 2025
              </span>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] tracking-tight leading-none">
                Heben Sie Ihren
                <br />
                <span className="text-[var(--color-muted-foreground)]">Alltags-Stil hervor</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] max-w-md">
                Entdecken Sie unsere kuratierte Kollektion hochwertiger Essentials für modernes Leben.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Kollektion shoppen
                </Button>
                <Button variant="outline" size="lg">
                  Lookbook ansehen
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DemoImage
                alt="Fashion collection showcase"
                category="ecommerce"
                aspect="portrait"
                className="rounded-2xl shadow-2xl"
                overlay
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 border-y border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="w-5 h-5 text-[var(--color-foreground)]" />
                <div>
                  <div className="font-medium text-sm text-[var(--color-foreground)]">{feature.title}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
                  Nach Kategorie shoppen
                </h2>
              </div>
              <Button variant="ghost" rightIcon={<ChevronRight className="w-4 h-4" />}>
                Alle ansehen
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  variant="default"
                  hover="lift"
                  padding="md"
                  className="text-center cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[var(--color-muted-foreground)] mt-1">
                    {category.count} Artikel
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
                  Ausgewählte Produkte
                </h2>
                <p className="text-[var(--color-muted-foreground)] mt-1">
                  Handverlesene Stücke für die Saison
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" leftIcon={<Filter className="w-4 h-4" />}>
                  Filtern
                </Button>
                <Button variant="outline" size="sm" leftIcon={<Search className="w-4 h-4" />}>
                  Suchen
                </Button>
              </div>
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
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="group overflow-hidden">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] bg-[var(--color-background)] overflow-hidden">
                    <DemoImage
                      alt={product.name}
                      category="ecommerce"
                      aspect="portrait"
                      className="w-full h-full object-cover"
                    />
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] text-xs font-medium">
                        {product.badge}
                      </div>
                    )}
                    {/* Quick Actions */}
                    <motion.button
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[var(--color-background)]/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                  </div>
                  {/* Product Info */}
                  <div className="p-4">
                    <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="mt-1 font-medium text-[var(--color-foreground)]">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-semibold text-[var(--color-foreground)]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-[var(--color-muted-foreground)] line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[var(--color-muted-foreground)]">
                        ({product.reviews})
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      In den Warenkorb
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Alle Produkte ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTA
        variant="dark"
        title="Werden Sie Teil des MAISON Clubs"
        subtitle="Abonnieren Sie für exklusiven Zugang zu Neuheiten, Sale-Aktionen und Mitglieder-Angeboten."
        primaryCTA={{ text: "Jetzt abonnieren" }}
      />

      {/* Footer */}
      <Footer
        logo={<span className="text-2xl font-bold tracking-tight">MAISON</span>}
        description="Premium Mode und Lifestyle-Essentials für den modernen Menschen."
        columns={[
          {
            title: "Shop",
            links: [
              { label: "Neuheiten", href: "#" },
              { label: "Bestseller", href: "#" },
              { label: "Sale", href: "#" },
              { label: "Geschenkkarten", href: "#" },
            ],
          },
          {
            title: "Hilfe",
            links: [
              { label: "Versand", href: "#" },
              { label: "Rückgabe", href: "#" },
              { label: "Größenratgeber", href: "#" },
              { label: "Kontakt", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Nachhaltigkeit", href: "#" },
              { label: "Presse", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
