"use client";

import { motion } from "framer-motion";
import { Stethoscope, Heart, Clock, Shield, Users, Phone, ArrowRight, Calendar, Star, MapPin, Award, Activity } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer, Stats } from "@/components/sections";
import { Button, Card } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { medicalTheme } from "@/lib/themes";

const services = [
  {
    icon: Heart,
    title: "Primary Care",
    description: "Comprehensive health management for your entire family with personalized attention.",
  },
  {
    icon: Activity,
    title: "Cardiology",
    description: "Advanced heart care with state-of-the-art diagnostic and treatment options.",
  },
  {
    icon: Stethoscope,
    title: "Pediatrics",
    description: "Specialized care for infants, children, and adolescents in a friendly environment.",
  },
  {
    icon: Users,
    title: "Women's Health",
    description: "Complete OB/GYN services with compassionate, expert care.",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Health screenings, vaccinations, and wellness programs to keep you healthy.",
  },
  {
    icon: Award,
    title: "Specialty Care",
    description: "Access to specialists across multiple disciplines under one roof.",
  },
];

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Family Medicine",
    experience: "15 years",
    education: "Johns Hopkins",
  },
  {
    name: "Dr. James Chen",
    specialty: "Cardiology",
    experience: "20 years",
    education: "Harvard Medical",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "12 years",
    education: "Stanford",
  },
  {
    name: "Dr. Michael Thompson",
    specialty: "Internal Medicine",
    experience: "18 years",
    education: "Yale",
  },
];

const testimonials = [
  {
    quote: "The entire staff made me feel comfortable from day one. Dr. Mitchell takes the time to really listen and explain everything clearly.",
    author: "Jennifer Adams",
    role: "Patient",
    company: "3 years",
    rating: 5,
  },
  {
    quote: "Best pediatric care in the city. My kids actually look forward to their check-ups. The doctors are wonderful with children.",
    author: "David & Maria Santos",
    role: "Parents",
    company: "5 years",
    rating: 5,
  },
  {
    quote: "After my heart scare, Dr. Chen and his team saved my life. The follow-up care has been exceptional.",
    author: "Robert Williams",
    role: "Patient",
    company: "2 years",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Expert Physicians" },
  { value: "100K+", label: "Patients Served" },
  { value: "25+", label: "Years of Care" },
  { value: "4.9", label: "Patient Rating" },
];

const insuranceLogos = ["BlueCross", "Aetna", "United", "Cigna", "Medicare", "Humana"];

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
              <span className="text-xs text-[var(--color-muted-foreground)]">Medical Center</span>
            </div>
          </div>
        }
        links={[
          { label: "Services", href: "#services" },
          { label: "Doctors", href: "#doctors" },
          { label: "Patients", href: "#" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Book Appointment"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-secondary)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Star className="w-4 h-4 fill-current" />
                Rated #1 in Patient Satisfaction
              </motion.span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight">
                Your Health,
                <br />
                <span className="text-[var(--color-primary)]">Our Priority</span>
              </h1>
              <p className="mt-6 text-xl text-[var(--color-muted-foreground)] max-w-lg">
                Comprehensive healthcare services with compassionate, personalized attention. Experience the difference of patient-centered care.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-4 h-4" />}>
                  (555) 123-4567
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                  Open 7 Days a Week
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  3 Convenient Locations
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 flex items-center justify-center">
                <Stethoscope className="w-32 h-32 text-[var(--color-primary)]/30" />
              </div>
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
                    <div className="font-bold text-[var(--color-foreground)]">Same Day</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Appointments Available</div>
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
                    <div className="font-bold text-[var(--color-foreground)]">Accepting</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Most Insurance Plans</div>
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
                Our Services
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Comprehensive Care
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                From routine check-ups to specialized treatment, we&apos;re here for your health journey
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
                    Learn More
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
                Our Team
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Meet Our Doctors
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Board-certified physicians committed to your well-being
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
                  <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center">
                    <Users className="w-16 h-16 text-[var(--color-border)]" />
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
                      View Profile
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
            We accept most major insurance plans
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
        badge="Patient Stories"
        title="What Our Patients Say"
        subtitle="Real experiences from real patients"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Ready to Schedule Your Visit?"
        subtitle="New patients welcome. Same-day appointments available."
        primaryCTA={{ text: "Book Appointment" }}
        secondaryCTA={{ text: "Call (555) 123-4567" }}
      />

      {/* Contact */}
      <Contact
        badge="Visit Us"
        title="Contact Us"
        subtitle="We're here to answer your questions"
        contactInfo={{
          email: "info@carefirst.com",
          phone: "+1 (555) 123-4567",
          address: "456 Health Center Drive, San Diego, CA 92101",
          hours: "Mon-Sat: 8AM - 6PM, Sun: 9AM - 3PM",
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
              <span className="text-xs text-[var(--color-muted-foreground)]">Medical Center</span>
            </div>
          </div>
        }
        description="Comprehensive healthcare with compassion. Your trusted partner in health and wellness."
        columns={[
          {
            title: "Services",
            links: [
              { label: "Primary Care", href: "#" },
              { label: "Specialty Care", href: "#" },
              { label: "Urgent Care", href: "#" },
              { label: "Telehealth", href: "#" },
            ],
          },
          {
            title: "Patients",
            links: [
              { label: "New Patients", href: "#" },
              { label: "Patient Portal", href: "#" },
              { label: "Insurance", href: "#" },
              { label: "Billing", href: "#" },
            ],
          },
          {
            title: "About",
            links: [
              { label: "Our Team", href: "#" },
              { label: "Locations", href: "#" },
              { label: "Careers", href: "#" },
              { label: "News", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
