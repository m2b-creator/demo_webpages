"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Users, Award, Phone, Clock, ArrowRight, Briefcase, FileText, Building2, ChevronRight } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { lawFirmTheme } from "@/lib/themes";

const practiceAreas = [
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes, from startups to Fortune 500 companies.",
  },
  {
    icon: FileText,
    title: "Litigation",
    description: "Skilled trial attorneys with a proven track record in complex commercial disputes.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Expert guidance on property transactions, development, and land use matters.",
  },
  {
    icon: Scale,
    title: "Employment Law",
    description: "Protecting the rights of employers and employees in workplace matters.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "Safeguarding your innovations, brands, and creative works.",
  },
  {
    icon: Users,
    title: "Family Law",
    description: "Compassionate representation in divorce, custody, and family matters.",
  },
];

const attorneys = [
  {
    name: "Robert J. Harrison",
    title: "Managing Partner",
    specialty: "Corporate Law",
    experience: "30+ years",
  },
  {
    name: "Elizabeth Chen",
    title: "Senior Partner",
    specialty: "Litigation",
    experience: "25 years",
  },
  {
    name: "Michael Thompson",
    title: "Partner",
    specialty: "Real Estate",
    experience: "20 years",
  },
  {
    name: "Sarah Williams",
    title: "Associate Partner",
    specialty: "Employment Law",
    experience: "15 years",
  },
];

const testimonials = [
  {
    quote: "Their expertise in corporate law helped us navigate a complex merger seamlessly. Truly exceptional legal counsel.",
    author: "James Mitchell",
    role: "CEO",
    company: "TechCorp Industries",
    rating: 5,
  },
  {
    quote: "Professional, thorough, and always available when we needed them. They protected our interests at every turn.",
    author: "Patricia Anderson",
    role: "CFO",
    company: "Anderson Holdings",
    rating: 5,
  },
  {
    quote: "Won a difficult employment case for our company. Their litigation team is simply the best in the region.",
    author: "David Roberts",
    role: "General Counsel",
    company: "Global Manufacturing Inc.",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Years Combined Experience" },
  { value: "2000+", label: "Cases Won" },
  { value: "98%", label: "Success Rate" },
  { value: "500+", label: "Corporate Clients" },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Recognized by leading legal publications for excellence in practice.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description: "We understand urgency and respond to client needs promptly.",
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "A track record of successful outcomes for our clients.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your goals and interests are always our top priority.",
  },
];

export default function LawFirmDemo() {
  return (
    <DemoLayout theme={lawFirmTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-[var(--color-primary)]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">HARRISON</span>
              <span className="text-xs tracking-widest text-[var(--color-muted-foreground)]">& ASSOCIATES</span>
            </div>
          </div>
        }
        links={[
          { label: "Practice Areas", href: "#practice-areas" },
          { label: "Attorneys", href: "#attorneys" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Free Consultation"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                Established 1975
              </span>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
                Legal Excellence,
                <br />
                <span className="text-[var(--color-primary)]">Trusted Results</span>
              </h1>
              <p className="mt-6 text-xl text-[var(--color-muted-foreground)] max-w-lg leading-relaxed">
                For nearly 50 years, we&apos;ve provided exceptional legal representation to businesses and individuals across the nation.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-4 h-4" />}>
                  (555) 123-4567
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[var(--color-border)]">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">{stat.label}</div>
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
                alt="Law firm office"
                category="law-firm"
                aspect="portrait"
                className="rounded-2xl shadow-2xl"
                overlay
              />
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-foreground)]">Top Rated</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Chambers & Partners 2024</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Practice Areas
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Comprehensive Legal Services
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Our experienced attorneys provide counsel across a broad range of legal disciplines
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
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="elevated" hover="lift" padding="lg" className="h-full group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                    <area.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-[var(--color-muted-foreground)]">
                    {area.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-sm font-medium text-[var(--color-primary)]">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Our Team
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Meet Our Attorneys
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Experienced legal professionals dedicated to achieving the best outcomes
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
            {attorneys.map((attorney, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="overflow-hidden group">
                  <div className="aspect-[3/4]">
                    <DemoImage
                      alt={attorney.name}
                      category="law-firm"
                      aspect="portrait"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                      {attorney.name}
                    </h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium">
                      {attorney.title}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
                      <span className="text-sm text-[var(--color-muted-foreground)]">
                        {attorney.specialty}
                      </span>
                      <span className="text-xs text-[var(--color-muted-foreground)]">
                        {attorney.experience}
                      </span>
                    </div>
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
        title="The Harrison Difference"
        subtitle="What sets us apart from other firms"
        features={whyChooseUs}
        columns={4}
        variant="cards"
      />

      {/* Testimonials */}
      <Testimonials
        badge="Client Testimonials"
        title="What Our Clients Say"
        subtitle="Hear from those we've had the privilege to represent"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="dark"
        title="Need Legal Assistance?"
        subtitle="Schedule a free initial consultation with one of our experienced attorneys."
        primaryCTA={{ text: "Schedule Consultation" }}
        secondaryCTA={{ text: "Call (555) 123-4567" }}
      />

      {/* Contact */}
      <Contact
        badge="Contact Us"
        title="Get in Touch"
        subtitle="We're here to help with your legal needs"
        contactInfo={{
          email: "contact@harrisonlaw.com",
          phone: "+1 (555) 123-4567",
          address: "One Liberty Plaza, Suite 4200, New York, NY 10006",
          hours: "Mon-Fri: 8:30 AM - 6:00 PM",
        }}
        variant="split"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-[var(--color-primary)]" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">HARRISON</span>
              <span className="text-xs tracking-widest text-[var(--color-muted-foreground)]">& ASSOCIATES</span>
            </div>
          </div>
        }
        description="Providing exceptional legal representation since 1975. Trusted by businesses and individuals across the nation."
        columns={[
          {
            title: "Practice Areas",
            links: [
              { label: "Corporate Law", href: "#" },
              { label: "Litigation", href: "#" },
              { label: "Real Estate", href: "#" },
              { label: "Employment", href: "#" },
            ],
          },
          {
            title: "Firm",
            links: [
              { label: "About Us", href: "#" },
              { label: "Our Team", href: "#" },
              { label: "Careers", href: "#" },
              { label: "News", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Blog", href: "#" },
              { label: "Publications", href: "#" },
              { label: "FAQ", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
