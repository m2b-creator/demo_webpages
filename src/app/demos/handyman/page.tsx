"use client";

import { motion } from "framer-motion";
import { Wrench, Phone, Clock, Shield, CheckCircle, Star, ArrowRight, Hammer, Paintbrush, Zap, Droplets, Home } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Hero, Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { handymanTheme } from "@/lib/themes";

const services = [
  {
    icon: Hammer,
    title: "General Repairs",
    description: "From fixing doors to patching walls, we handle all your general home repairs.",
    price: "From $75",
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Licensed electricians for safe installations, repairs, and upgrades.",
    price: "From $95",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Expert plumbing services for leaks, clogs, and new installations.",
    price: "From $85",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting with professional-grade materials.",
    price: "From $250",
  },
  {
    icon: Home,
    title: "Home Renovation",
    description: "Complete renovation services from design to final walkthrough.",
    price: "Custom Quote",
  },
  {
    icon: Wrench,
    title: "Appliance Repair",
    description: "Repair and maintenance for all major household appliances.",
    price: "From $65",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance coverage.",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Available for emergency repairs with fast response times.",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee on all our work and materials.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Consistently rated 5 stars by our satisfied customers.",
  },
];

const testimonials = [
  {
    quote: "Fixed our plumbing issue in under an hour. Professional, clean, and affordable. Highly recommend!",
    author: "Robert Martinez",
    role: "Homeowner",
    company: "Austin, TX",
    rating: 5,
  },
  {
    quote: "They renovated our entire kitchen and the result is amazing. Great communication throughout the project.",
    author: "Jennifer Lee",
    role: "Homeowner",
    company: "Denver, CO",
    rating: 5,
  },
  {
    quote: "Called for an emergency electrical repair on a Sunday. They came within the hour. Lifesavers!",
    author: "David Thompson",
    role: "Business Owner",
    company: "Seattle, WA",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Jobs Completed" },
  { value: "4.9", label: "Average Rating" },
  { value: "24/7", label: "Emergency Service" },
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
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Get Free Quote"
      />

      {/* Hero */}
      <Hero
        variant="split"
        badge="Trusted Home Services"
        title="Your Home Deserves the Best Care"
        titleHighlight="Best"
        subtitle="Professional handyman services for all your home repair and improvement needs. Licensed, insured, and committed to excellence."
        primaryCTA={{ text: "Get Free Quote" }}
        secondaryCTA={{ text: "Call Now" }}
        image={
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Wrench className="w-32 h-32 text-[var(--color-primary)]/40" />
              </div>
            </div>
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
                  <div className="text-sm font-medium text-[var(--color-muted-foreground)]">24/7 Support</div>
                  <div className="text-lg font-bold text-[var(--color-foreground)]">(555) 123-4567</div>
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
                Our Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Expert Solutions for Every Need
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                From minor repairs to major renovations, our skilled professionals deliver quality workmanship
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
                      Learn More
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
        badge="Why Choose Us"
        title="The FixIt Pro Difference"
        subtitle="We go above and beyond to ensure your complete satisfaction"
        features={whyChooseUs}
        columns={4}
        variant="cards"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Testimonials"
        title="What Our Customers Say"
        subtitle="Join thousands of satisfied homeowners who trust FixIt Pro"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Ready to Get Started?"
        subtitle="Get a free quote today and see why we're the #1 choice for home services."
        primaryCTA={{ text: "Get Free Quote" }}
        secondaryCTA={{ text: "Call (555) 123-4567" }}
      />

      {/* Contact */}
      <Contact
        badge="Contact"
        title="Get in Touch"
        subtitle="We're here to help with all your home repair needs"
        contactInfo={{
          email: "info@fixitpro.com",
          phone: "+1 (555) 123-4567",
          address: "123 Main Street, Austin, TX 78701",
          hours: "Mon-Sat: 7AM - 8PM, Sun: 9AM - 5PM",
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
        description="Professional handyman services for all your home repair and improvement needs. Licensed, insured, and committed to excellence."
        columns={[
          {
            title: "Services",
            links: [
              { label: "General Repairs", href: "#" },
              { label: "Electrical", href: "#" },
              { label: "Plumbing", href: "#" },
              { label: "Painting", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Reviews", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Contact", href: "#contact" },
              { label: "FAQ", href: "#" },
              { label: "Service Areas", href: "#" },
              { label: "Emergency", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
