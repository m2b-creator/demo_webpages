"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Code, Palette, Megaphone, TrendingUp, Users } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { agencyTheme } from "@/lib/themes";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Strategic brand development that captures your essence and resonates with your audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom digital experiences built with cutting-edge technology and pixel-perfect design.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that amplify your message and drive measurable results.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Comprehensive growth plans that transform startups into market leaders.",
  },
];

const caseStudies = [
  {
    client: "TechVision",
    category: "Web Design & Development",
    title: "Redefining the future of AI interfaces",
    stats: { metric: "+340%", label: "User Engagement" },
  },
  {
    client: "Bloom Beauty",
    category: "Brand Identity",
    title: "A fresh take on sustainable beauty",
    stats: { metric: "2.5M", label: "Social Reach" },
  },
  {
    client: "FinFlow",
    category: "Digital Product",
    title: "Banking reimagined for Gen Z",
    stats: { metric: "$12M", label: "Series A Raised" },
  },
  {
    client: "Atlas Travel",
    category: "Marketing Campaign",
    title: "Wanderlust: A global adventure",
    stats: { metric: "+180%", label: "Conversions" },
  },
];

const testimonials = [
  {
    quote: "Working with them was transformative. They didn't just build a website—they built a brand experience that our customers love.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechVision",
    rating: 5,
  },
  {
    quote: "The most creative team we've ever worked with. They pushed boundaries while staying true to our vision.",
    author: "Marcus Johnson",
    role: "CMO",
    company: "Bloom Beauty",
    rating: 5,
  },
  {
    quote: "Our conversion rates doubled within the first month of launch. The ROI speaks for itself.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "FinFlow",
    rating: 5,
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50M+", label: "Users Reached" },
  { value: "98%", label: "Client Retention" },
  { value: "12", label: "Industry Awards" },
];

export default function AgencyDemo() {
  return (
    <DemoLayout theme={agencyTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <span className="text-2xl font-bold">
            PIXEL<span className="text-[var(--color-primary)]">.</span>
          </span>
        }
        links={[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Start Project"
      />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-muted-foreground)]">
                Award-Winning Digital Agency
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-foreground)] leading-none tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We craft
              <br />
              <span className="text-[var(--color-primary)]">digital</span>
              <br />
              experiences
            </motion.h1>

            <motion.p
              className="mt-8 text-xl text-[var(--color-muted-foreground)] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We&apos;re a creative studio that transforms bold ideas into memorable digital products and brand experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Our Work
              </Button>
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-[var(--color-border)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index}>
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
      </section>

      {/* Case Studies */}
      <section id="work" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  Selected Work
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                  Case Studies
                </h2>
              </div>
              <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="group cursor-pointer overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-20">
                        {index === 0 ? "🚀" : index === 1 ? "🌸" : index === 2 ? "💳" : "✈️"}
                      </span>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--color-foreground)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-background)]" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {study.category}
                      </span>
                      <span className="text-xs font-medium text-[var(--color-primary)]">
                        {study.client}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-2xl font-bold text-[var(--color-foreground)]">
                        {study.stats.metric}
                      </span>
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {study.stats.label}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Features
        badge="What We Do"
        title="Services"
        subtitle="Full-service digital solutions for ambitious brands"
        features={services}
        columns={4}
        variant="cards"
      />

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  About Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  We believe great design is good business
                </h2>
                <p className="mt-6 text-[var(--color-muted-foreground)] leading-relaxed">
                  Founded in 2015, we&apos;ve grown from a small design studio to a full-service digital agency. Our team of 25+ creatives, strategists, and technologists work together to deliver exceptional results for brands worldwide.
                </p>
                <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">
                  We don&apos;t just create—we collaborate. Every project is a partnership, and we measure our success by yours.
                </p>
                <div className="flex items-center gap-6 mt-8">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] border-2 border-[var(--color-background)] flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-[var(--color-muted-foreground)]">
                    25+ talented creatives
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-[var(--color-primary)]/40" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        badge="Client Love"
        title="What They Say"
        subtitle="Don't just take our word for it"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Have a Project in Mind?"
        subtitle="Let's create something amazing together. Get in touch to start the conversation."
        primaryCTA={{ text: "Start a Project" }}
        secondaryCTA={{ text: "View Process" }}
      />

      {/* Contact */}
      <Contact
        badge="Get in Touch"
        title="Let's Talk"
        subtitle="Ready to bring your vision to life?"
        contactInfo={{
          email: "hello@pixelagency.com",
          phone: "+1 (555) 123-4567",
          address: "123 Creative Blvd, NYC 10001",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <span className="text-2xl font-bold">
            PIXEL<span className="text-[var(--color-primary)]">.</span>
          </span>
        }
        description="Award-winning digital agency crafting memorable brand experiences."
        columns={[
          {
            title: "Work",
            links: [
              { label: "Case Studies", href: "#" },
              { label: "Industries", href: "#" },
              { label: "Capabilities", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            title: "Follow",
            links: [
              { label: "Instagram", href: "#" },
              { label: "Dribbble", href: "#" },
              { label: "LinkedIn", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
