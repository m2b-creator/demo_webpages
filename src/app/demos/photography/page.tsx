"use client";

import { motion } from "framer-motion";
import { Camera, Instagram, Mail, ArrowRight, ArrowUpRight, Heart, Award, Users, Calendar, Play } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { photographyTheme } from "@/lib/themes";

const portfolioItems = [
  { title: "Mountain Dawn", category: "Landscape", featured: true },
  { title: "Urban Geometry", category: "Architecture", featured: true },
  { title: "Sarah & James", category: "Wedding" },
  { title: "Fashion Forward", category: "Editorial" },
  { title: "Corporate Vision", category: "Commercial" },
  { title: "Wild Spirit", category: "Wildlife" },
  { title: "City Lights", category: "Night" },
  { title: "Golden Hour", category: "Portrait", featured: true },
];

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing your special day with artistry and emotion.",
    startingAt: "$3,500",
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits for individuals and families.",
    startingAt: "$450",
  },
  {
    title: "Commercial Work",
    description: "Brand photography and product shots for businesses.",
    startingAt: "$1,200",
  },
  {
    title: "Event Coverage",
    description: "Corporate events, parties, and special occasions.",
    startingAt: "$800",
  },
];

const awards = [
  { title: "Best Landscape Photographer", org: "National Geographic", year: "2024" },
  { title: "Wedding Photographer of the Year", org: "WPPI", year: "2023" },
  { title: "Featured Artist", org: "Adobe Creative", year: "2023" },
];

const stats = [
  { value: "500+", label: "Projects" },
  { value: "12", label: "Years" },
  { value: "50+", label: "Awards" },
  { value: "100%", label: "Satisfaction" },
];

export default function PhotographyDemo() {
  return (
    <DemoLayout theme={photographyTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <span className="text-2xl font-light tracking-widest">
            LENS<span className="font-bold">CRAFT</span>
          </span>
        }
        links={[
          { label: "Portfolio", href: "#portfolio" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Book Session"
        variant="transparent"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] via-transparent to-[var(--color-background)]" />
        <div className="container mx-auto px-6 lg:px-8 relative pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-muted-foreground)] mb-8">
                Award-Winning Photography
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[var(--color-foreground)] leading-none tracking-tight">
                Capturing
                <br />
                <span className="font-bold italic">Moments</span>
                <br />
                That Last
              </h1>
              <p className="mt-8 text-xl text-[var(--color-muted-foreground)] max-w-lg mx-auto">
                Professional photography that tells your story through stunning visuals and authentic emotion.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View Portfolio
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Play className="w-4 h-4" />}>
                  Watch Reel
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center gap-12 md:gap-16 mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                  Selected Work
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-light text-[var(--color-foreground)]">
                  Portfolio
                </h2>
              </div>
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.featured ? "md:col-span-2 md:row-span-2" : ""}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <div className="group relative aspect-square overflow-hidden bg-[var(--color-muted)] cursor-pointer">
                  <DemoImage
                    alt={item.title}
                    category="photography"
                    aspect="square"
                    className="w-full h-full"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-foreground)]/0 group-hover:bg-[var(--color-foreground)]/80 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center text-[var(--color-background)] p-4">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="text-sm opacity-70 mt-1">{item.category}</p>
                      <motion.button
                        className="mt-4 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <DemoImage
                alt="Photographer portrait"
                category="photography"
                aspect="portrait"
                className="rounded-2xl shadow-2xl"
                overlay
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                  About Me
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-light text-[var(--color-foreground)]">
                  Alex Rivera
                </h2>
                <p className="mt-6 text-[var(--color-muted-foreground)] leading-relaxed">
                  With over 12 years behind the lens, I&apos;ve dedicated my craft to capturing life&apos;s most precious moments. My work has been featured in National Geographic, Vogue, and numerous international publications.
                </p>
                <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">
                  I believe every image should tell a story—one that evokes emotion and stands the test of time. Whether it&apos;s a wedding, corporate event, or personal portrait, I bring the same passion and attention to detail to every project.
                </p>

                {/* Awards */}
                <div className="mt-8 space-y-4">
                  <h3 className="font-medium text-[var(--color-foreground)]">Recognition</h3>
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Award className="w-5 h-5 text-[var(--color-accent)]" />
                      <div>
                        <span className="font-medium text-[var(--color-foreground)]">{award.title}</span>
                        <span className="text-sm text-[var(--color-muted-foreground)]"> — {award.org}, {award.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  {[Instagram, Mail].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-light text-[var(--color-foreground)]">
                What I Offer
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Professional photography services tailored to your needs
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
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
                <Card variant="default" hover="lift" padding="lg" className="group cursor-pointer border-l-4 border-l-transparent hover:border-l-[var(--color-accent)] transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[var(--color-muted-foreground)]">
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <span className="text-sm text-[var(--color-muted-foreground)]">Starting at</span>
                    <span className="ml-2 text-lg font-medium text-[var(--color-foreground)]">{service.startingAt}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 text-[var(--color-foreground)]">
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@lenscraft.studio</span>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="aspect-square group cursor-pointer overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
              >
                <DemoImage
                  alt={`Instagram photo ${index + 1}`}
                  category="photography"
                  aspect="square"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-[var(--color-foreground)]/0 group-hover:bg-[var(--color-foreground)]/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="dark"
        title="Let's Create Something Beautiful"
        subtitle="Ready to capture your story? Let's discuss your vision and bring it to life."
        primaryCTA={{ text: "Get in Touch" }}
        secondaryCTA={{ text: "View Pricing" }}
      />

      {/* Contact */}
      <Contact
        badge="Get in Touch"
        title="Book a Session"
        subtitle="Let's discuss your photography needs"
        contactInfo={{
          email: "hello@lenscraft.studio",
          phone: "+1 (555) 123-4567",
          address: "Los Angeles, CA",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <span className="text-2xl font-light tracking-widest">
            LENS<span className="font-bold">CRAFT</span>
          </span>
        }
        description="Capturing moments that last a lifetime. Professional photography services for all occasions."
        socialLinks={[
          { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
          { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
        ]}
        variant="centered"
      />
    </DemoLayout>
  );
}
