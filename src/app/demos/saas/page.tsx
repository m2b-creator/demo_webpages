"use client";

import { motion } from "framer-motion";
import { Check, Zap, Shield, BarChart3, Users, Clock, ArrowRight, Play, Star } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Hero, Features, Testimonials, CTA, Contact, Footer, Stats } from "@/components/sections";
import { Button, Card } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { saasTheme } from "@/lib/themes";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times and 99.99% uptime guarantee.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced threat protection.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and customizable dashboards to track your metrics.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with real-time editing and commenting.",
  },
  {
    icon: Clock,
    title: "Automation",
    description: "Save hours with intelligent workflows and automated task management.",
  },
  {
    icon: Star,
    title: "Priority Support",
    description: "24/7 dedicated support team with average response time under 2 hours.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing teams that need more power",
    features: [
      "Up to 20 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Audit logs",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "Custom SLA",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const testimonials = [
  {
    quote: "This platform has transformed how our team works. We've seen a 40% increase in productivity since adopting it.",
    author: "Sarah Johnson",
    role: "VP of Operations",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote: "The best investment we've made for our business. The analytics alone have paid for the subscription many times over.",
    author: "Michael Chen",
    role: "CEO",
    company: "GrowthLabs",
    rating: 5,
  },
  {
    quote: "Incredible customer support and a product that just works. We've tried many solutions and this is by far the best.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "Innovate Co.",
    rating: 5,
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "99.99%", label: "Uptime" },
  { value: "500M+", label: "Tasks Completed" },
  { value: "150+", label: "Countries" },
];

const logos = ["Acme Inc", "TechCorp", "Innovate", "StartupXYZ", "Enterprise Co", "Growth Labs"];

export default function SaaSDemo() {
  return (
    <DemoLayout theme={saasTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowSync</span>
          </div>
        }
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Get Started"
      />

      {/* Hero */}
      <Hero
        variant="centered"
        badge="Introducing FlowSync 2.0"
        title="The Modern Way to Manage Your Team's Work"
        titleHighlight="Modern"
        subtitle="Streamline your workflow, boost productivity, and collaborate seamlessly with the all-in-one platform trusted by 10,000+ teams worldwide."
        primaryCTA={{ text: "Start Free Trial" }}
        secondaryCTA={{ text: "Watch Demo" }}
        image={
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 border border-[var(--color-border)] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>
            </div>
            {/* Floating UI elements */}
            <motion.div
              className="absolute -left-8 top-1/4 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Task Completed</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">Just now</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -right-8 bottom-1/4 p-4 rounded-xl bg-[var(--color-card)] shadow-xl border border-[var(--color-border)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">+24% Growth</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">This month</div>
                </div>
              </div>
            </motion.div>
          </div>
        }
      />

      {/* Logos */}
      <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-[var(--color-muted-foreground)] mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="text-xl font-bold text-[var(--color-muted-foreground)]/50"
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

      {/* Stats */}
      <Stats stats={stats} />

      {/* Features */}
      <Features
        badge="Features"
        title="Everything You Need to Succeed"
        subtitle="Powerful features designed to help your team work smarter, not harder"
        features={features}
        columns={3}
        variant="cards"
      />

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Pricing
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                Start free, upgrade when you need to. No hidden fees.
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
            {pricingPlans.map((plan, index) => (
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
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                      {plan.name}
                    </h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[var(--color-foreground)]">
                        {plan.price}
                      </span>
                      <span className="text-[var(--color-muted-foreground)]">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[var(--color-primary)]" />
                        <span className="text-sm text-[var(--color-foreground)]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        badge="Testimonials"
        title="Loved by Teams Everywhere"
        subtitle="See what our customers have to say about their experience"
        testimonials={testimonials}
        variant="cards"
      />

      {/* CTA */}
      <CTA
        variant="gradient"
        title="Ready to Transform Your Workflow?"
        subtitle="Join 10,000+ teams already using FlowSync. Start your free 14-day trial today."
        primaryCTA={{ text: "Start Free Trial" }}
        secondaryCTA={{ text: "Schedule a Demo" }}
      />

      {/* Contact */}
      <Contact
        badge="Contact"
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you."
        contactInfo={{
          email: "hello@flowsync.com",
          phone: "+1 (555) 123-4567",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">FlowSync</span>
          </div>
        }
        description="The modern way to manage your team's work. Trusted by 10,000+ teams worldwide."
        columns={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Integrations", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Documentation", href: "#" },
              { label: "Help Center", href: "#" },
              { label: "Community", href: "#" },
              { label: "Status", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
