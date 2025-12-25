"use client";

import { motion } from "framer-motion";
import { Dumbbell, Clock, Users, Flame, Heart, Trophy, ArrowRight, Calendar, Play, Star, Zap } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Features, Testimonials, CTA, Contact, Footer, Stats } from "@/components/sections";
import { Button, Card, DemoImage, AvatarImage } from "@/components/ui";
import { ScrollReveal, Floating } from "@/components/animations";
import { gymTheme } from "@/lib/themes";

const classes = [
  {
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn",
    duration: "45 min",
    level: "Advanced",
    trainer: "Mike Johnson",
    icon: Flame,
  },
  {
    name: "Strength & Power",
    description: "Build muscle and increase strength with compound movements",
    duration: "60 min",
    level: "Intermediate",
    trainer: "Sarah Chen",
    icon: Dumbbell,
  },
  {
    name: "Yoga Flow",
    description: "Improve flexibility and mindfulness through flowing poses",
    duration: "60 min",
    level: "All Levels",
    trainer: "Emma Wilson",
    icon: Heart,
  },
  {
    name: "Spin Class",
    description: "High-energy cycling workout with motivating music",
    duration: "45 min",
    level: "All Levels",
    trainer: "James Miller",
    icon: Zap,
  },
];

const trainers = [
  { name: "Mike Johnson", specialty: "Strength & Conditioning", experience: "10+ years" },
  { name: "Sarah Chen", specialty: "Olympic Lifting", experience: "8 years" },
  { name: "Emma Wilson", specialty: "Yoga & Wellness", experience: "12 years" },
  { name: "James Miller", specialty: "Cardio & HIIT", experience: "6 years" },
];

const memberships = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: ["Gym access", "Locker room", "Basic equipment", "Mobile app"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    features: ["All Basic features", "Group classes", "Personal training (1x/mo)", "Sauna & steam", "Nutrition plan"],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    features: ["All Premium features", "Unlimited PT sessions", "Priority booking", "Guest passes", "Recovery zone"],
    popular: false,
  },
];

const testimonials = [
  {
    quote: "I've lost 30 pounds in 3 months! The trainers here are incredible and keep me motivated every day.",
    author: "David Martinez",
    role: "Member",
    company: "6 months",
    rating: 5,
  },
  {
    quote: "Best gym I've ever been to. The facilities are top-notch and the community is so supportive.",
    author: "Lisa Thompson",
    role: "Member",
    company: "2 years",
    rating: 5,
  },
  {
    quote: "The group classes are amazing! I've made so many friends while getting in the best shape of my life.",
    author: "Kevin Park",
    role: "Member",
    company: "1 year",
    rating: 5,
  },
];

const stats = [
  { value: "5000+", label: "Active Members" },
  { value: "50+", label: "Weekly Classes" },
  { value: "20+", label: "Expert Trainers" },
  { value: "24/7", label: "Always Open" },
];

export default function GymDemo() {
  return (
    <DemoLayout theme={gymTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">IRONFORGE</span>
          </div>
        }
        links={[
          { label: "Classes", href: "#classes" },
          { label: "Membership", href: "#membership" },
          { label: "Trainers", href: "#trainers" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Join Now"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[var(--color-background)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                🔥 Transform Your Body
              </motion.span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[var(--color-foreground)] leading-none tracking-tight">
                PUSH YOUR
                <br />
                <span className="text-[var(--color-primary)]">LIMITS</span>
              </h1>
              <p className="mt-6 text-xl text-[var(--color-muted-foreground)] max-w-lg">
                Join the most advanced fitness facility in the city. State-of-the-art equipment, expert trainers, and a community that pushes you to be your best.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Play className="w-4 h-4" />}>
                  Virtual Tour
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { value: "4.9", label: "Rating", icon: Star },
                  { value: "5K+", label: "Members", icon: Users },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--color-foreground)]">{stat.value}</div>
                      <div className="text-sm text-[var(--color-muted-foreground)]">{stat.label}</div>
                    </div>
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
                alt="Fitness training"
                category="gym"
                aspect="portrait"
                className="rounded-3xl shadow-2xl"
                overlay
              />
              {/* Floating decorative elements */}
              <Floating duration={4} distance={12}>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[var(--color-primary)]/20 blur-2xl" />
              </Floating>
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[var(--color-card)]/95 backdrop-blur-xl shadow-xl border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-foreground)]">500+ Cal</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">Avg. per session</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats stats={stats} />

      {/* Classes */}
      <section id="classes" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Our Classes
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Train Like a Champion
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                From high-intensity workouts to mindful movement, find the perfect class for your goals
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
            {classes.map((classItem, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="elevated" hover="lift" padding="lg" className="h-full group">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                    <classItem.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-2">
                    {classItem.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                    {classItem.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-muted-foreground)]">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {classItem.duration}
                    </div>
                    <span className="px-2 py-1 rounded-full bg-[var(--color-muted)] text-xs">
                      {classItem.level}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" leftIcon={<Calendar className="w-4 h-4" />}>
              View Full Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Membership Plans
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Choose Your Path
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Flexible plans designed to fit your fitness journey
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {memberships.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  variant={plan.popular ? "gradient" : "elevated"}
                  padding="lg"
                  className={`h-full relative ${plan.popular ? "ring-2 ring-[var(--color-primary)]" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-primary)] text-white text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[var(--color-foreground)]">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-5xl font-black text-[var(--color-foreground)]">{plan.price}</span>
                      <span className="text-[var(--color-muted-foreground)]">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                          <svg className="w-3 h-3 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-[var(--color-foreground)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        badge="Success Stories"
        title="Real Results, Real People"
        subtitle="See what our members have achieved"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Ready to Transform?"
        subtitle="Start your 7-day free trial today. No commitment, no credit card required."
        primaryCTA={{ text: "Start Free Trial" }}
        secondaryCTA={{ text: "Contact Us" }}
      />

      {/* Contact */}
      <Contact
        badge="Visit Us"
        title="Get in Touch"
        subtitle="Ready to start your fitness journey?"
        contactInfo={{
          email: "hello@ironforge.fit",
          phone: "+1 (555) 123-4567",
          address: "456 Fitness Blvd, Los Angeles, CA 90001",
          hours: "Open 24/7",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">IRONFORGE</span>
          </div>
        }
        description="The most advanced fitness facility in the city. Transform your body, transform your life."
        columns={[
          {
            title: "Programs",
            links: [
              { label: "Classes", href: "#" },
              { label: "Personal Training", href: "#" },
              { label: "Nutrition", href: "#" },
              { label: "Recovery", href: "#" },
            ],
          },
          {
            title: "Membership",
            links: [
              { label: "Pricing", href: "#" },
              { label: "Corporate", href: "#" },
              { label: "Student", href: "#" },
              { label: "FAQ", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
