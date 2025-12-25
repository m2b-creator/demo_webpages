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
    category: "Starters",
    items: [
      { name: "Bruschetta al Pomodoro", price: "$12", description: "Fresh tomatoes, basil, garlic on toasted bread" },
      { name: "Carpaccio di Manzo", price: "$18", description: "Thinly sliced beef with arugula and parmesan" },
      { name: "Burrata e Prosciutto", price: "$16", description: "Creamy burrata with aged prosciutto" },
    ],
  },
  {
    category: "Main Courses",
    items: [
      { name: "Ossobuco alla Milanese", price: "$42", description: "Braised veal shanks with saffron risotto" },
      { name: "Branzino al Forno", price: "$38", description: "Oven-roasted sea bass with herbs" },
      { name: "Filetto di Manzo", price: "$48", description: "Prime beef tenderloin with truffle sauce" },
    ],
  },
];

const testimonials = [
  {
    quote: "An absolutely unforgettable dining experience. The attention to detail in every dish is remarkable.",
    author: "Maria Rossi",
    role: "Food Critic",
    company: "The Culinary Times",
    rating: 5,
  },
  {
    quote: "The perfect blend of tradition and innovation. Every visit feels special.",
    author: "James Chen",
    role: "Regular Guest",
    rating: 5,
  },
  {
    quote: "From the ambiance to the service to the food - everything is world-class.",
    author: "Sophie Laurent",
    role: "Travel Blogger",
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
          { label: "Menu", href: "#menu" },
          { label: "About", href: "#about" },
          { label: "Reservations", href: "#contact" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Reserve a Table"
      />

      {/* Hero */}
      <Hero
        variant="split"
        badge="Est. 1985"
        title="Experience the Art of Italian Dining"
        titleHighlight="Art"
        subtitle="Where timeless traditions meet modern culinary excellence. Join us for an unforgettable gastronomic journey in the heart of the city."
        primaryCTA={{ text: "Reserve a Table" }}
        secondaryCTA={{ text: "View Menu" }}
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
                <span className="text-sm text-[var(--color-muted-foreground)]">(200+ reviews)</span>
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
              <span className="text-sm">123 Culinary Avenue, NYC</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm">Tue-Sun: 5PM - 11PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm">+1 (555) 123-4567</span>
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
                Our Menu
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[var(--color-foreground)]">
                Curated for Excellence
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Each dish tells a story of passion, tradition, and the finest ingredients
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
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features
        badge="Why Choose Us"
        title="A Tradition of Excellence"
        subtitle="Every detail matters in creating the perfect dining experience"
        features={[
          {
            title: "Farm to Table",
            description: "We source the freshest ingredients from local farms and trusted suppliers.",
          },
          {
            title: "Master Chefs",
            description: "Our culinary team brings decades of experience from the finest kitchens.",
          },
          {
            title: "Private Dining",
            description: "Elegant private rooms for intimate gatherings and special celebrations.",
          },
          {
            title: "Wine Cellar",
            description: "An extensive collection of fine wines curated by our sommelier.",
          },
        ]}
        columns={4}
        variant="icons"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Guest Reviews"
        title="What Our Guests Say"
        testimonials={testimonials}
        variant="carousel"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Ready for an Unforgettable Evening?"
        subtitle="Reserve your table today and experience the magic of La Cucina"
        primaryCTA={{ text: "Make a Reservation" }}
        secondaryCTA={{ text: "Call Us" }}
      />

      {/* Contact */}
      <Contact
        badge="Reservations"
        title="Book Your Table"
        subtitle="We look forward to welcoming you"
        contactInfo={{
          email: "reservations@lacucina.com",
          phone: "+1 (555) 123-4567",
          address: "123 Culinary Avenue, New York, NY 10001",
          hours: "Tuesday - Sunday: 5PM - 11PM",
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
        description="Experience the art of Italian dining in the heart of the city. Fine cuisine, impeccable service, unforgettable memories."
        columns={[
          {
            title: "Visit",
            links: [
              { label: "Menu", href: "#menu" },
              { label: "Reservations", href: "#contact" },
              { label: "Private Events", href: "#" },
              { label: "Gift Cards", href: "#" },
            ],
          },
          {
            title: "About",
            links: [
              { label: "Our Story", href: "#" },
              { label: "The Team", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
