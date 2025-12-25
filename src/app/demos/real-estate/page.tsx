"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, Heart, Search, SlidersHorizontal, Home, Building, Key, Phone, ArrowRight, Star } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { realEstateTheme } from "@/lib/themes";

const properties = [
  {
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$4,250,000",
    beds: 5,
    baths: 4,
    sqft: "5,200",
    type: "Villa",
    featured: true,
  },
  {
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$3,850,000",
    beds: 3,
    baths: 3,
    sqft: "3,100",
    type: "Penthouse",
  },
  {
    title: "Waterfront Estate",
    location: "Miami Beach, FL",
    price: "$6,500,000",
    beds: 6,
    baths: 5,
    sqft: "7,800",
    type: "Estate",
    featured: true,
  },
  {
    title: "Contemporary Townhouse",
    location: "San Francisco, CA",
    price: "$2,150,000",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    type: "Townhouse",
  },
  {
    title: "Mountain Retreat",
    location: "Aspen, CO",
    price: "$5,900,000",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "Chalet",
  },
  {
    title: "Urban Loft",
    location: "Chicago, IL",
    price: "$1,250,000",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    type: "Loft",
  },
];

const services = [
  {
    icon: Home,
    title: "Buy a Home",
    description: "Find your dream home from our extensive collection of luxury properties.",
  },
  {
    icon: Key,
    title: "Sell Property",
    description: "Get the best value for your property with our expert marketing strategies.",
  },
  {
    icon: Building,
    title: "Rent",
    description: "Discover premium rental properties in prime locations worldwide.",
  },
];

const testimonials = [
  {
    quote: "They found us our dream home in just two weeks. The process was seamless and stress-free.",
    author: "Michael & Sarah Thompson",
    role: "Homeowners",
    company: "Beverly Hills",
    rating: 5,
  },
  {
    quote: "Sold our property 20% above asking price. Their market knowledge is unmatched.",
    author: "Robert Chen",
    role: "Property Investor",
    company: "New York",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and truly dedicated to finding the perfect match for clients.",
    author: "Jennifer Martinez",
    role: "First-time Buyer",
    company: "Miami",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "$2B+", label: "In Sales Volume" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
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
          { label: "Buy", href: "#properties" },
          { label: "Sell", href: "#" },
          { label: "Rent", href: "#" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="List Property"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
              Welcome to Luxe Realty
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
              Find Your Perfect
              <span className="text-[var(--color-primary)]"> Home</span>
            </h1>
            <p className="mt-6 text-xl text-[var(--color-muted-foreground)] max-w-xl">
              Discover exceptional properties in the world&apos;s most desirable locations with our personalized real estate services.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div
            className="mt-12 max-w-4xl"
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
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-background)]">
                    <option>Property Type</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Townhouse</option>
                    <option>Estate</option>
                  </select>
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-background)]">
                    <option>Price Range</option>
                    <option>$1M - $2M</option>
                    <option>$2M - $5M</option>
                    <option>$5M - $10M</option>
                    <option>$10M+</option>
                  </select>
                </div>
                <Button size="lg" leftIcon={<Search className="w-4 h-4" />}>
                  Search
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
              <div key={index} className="text-center md:text-left">
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
                  Featured Listings
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  Exceptional Properties
                </h2>
              </div>
              <Button variant="outline" leftIcon={<SlidersHorizontal className="w-4 h-4" />}>
                More Filters
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
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Home className="w-16 h-16 text-[var(--color-border)]" />
                    </div>
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {property.featured && (
                        <span className="px-3 py-1 rounded-full bg-[var(--color-primary)] text-white text-xs font-medium">
                          Featured
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
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {property.baths} Baths
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {property.sqft} sqft
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-2xl font-bold text-[var(--color-primary)]">
                        {property.price}
                      </span>
                      <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <Features
        badge="Our Services"
        title="How We Can Help"
        subtitle="Comprehensive real estate services tailored to your needs"
        features={services}
        columns={3}
        variant="cards"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Client Stories"
        title="What Our Clients Say"
        subtitle="Hear from homeowners who found their perfect property with us"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Ready to Find Your Dream Home?"
        subtitle="Let our expert agents guide you through the process. Schedule a consultation today."
        primaryCTA={{ text: "Schedule Consultation" }}
        secondaryCTA={{ text: "Browse Properties" }}
      />

      {/* Contact */}
      <Contact
        badge="Get in Touch"
        title="Contact Us"
        subtitle="Our team is ready to help you find the perfect property"
        contactInfo={{
          email: "hello@luxerealty.com",
          phone: "+1 (555) 123-4567",
          address: "123 Luxury Lane, Beverly Hills, CA 90210",
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
        description="Your trusted partner in finding exceptional properties in the world's most desirable locations."
        columns={[
          {
            title: "Properties",
            links: [
              { label: "Buy", href: "#" },
              { label: "Sell", href: "#" },
              { label: "Rent", href: "#" },
              { label: "New Developments", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "#" },
              { label: "Our Team", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Market Reports", href: "#" },
              { label: "Buying Guide", href: "#" },
              { label: "Selling Guide", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
