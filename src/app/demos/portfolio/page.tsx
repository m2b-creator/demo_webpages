"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { Hero, CTA, Contact, Footer } from "@/components/sections";
import { Button, Card, DemoImage, AvatarImage } from "@/components/ui";
import { ScrollReveal, FadeInStagger, Magnetic, Floating } from "@/components/animations";
import { portfolioTheme } from "@/lib/themes";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce solution with real-time inventory and payment processing.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    featured: true,
  },
  {
    title: "AI Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for machine learning model performance monitoring.",
    tags: ["React", "D3.js", "Python"],
    featured: true,
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication.",
    tags: ["React Native", "Node.js", "AWS"],
  },
  {
    title: "SaaS Landing Page",
    category: "Web Design",
    description: "High-converting landing page for a B2B software product.",
    tags: ["Figma", "Webflow", "GSAP"],
  },
  {
    title: "Healthcare Portal",
    category: "Full Stack",
    description: "Patient management system with HIPAA-compliant data handling.",
    tags: ["Vue.js", "Django", "Docker"],
  },
  {
    title: "NFT Marketplace",
    category: "Web3",
    description: "Decentralized marketplace for digital collectibles and art.",
    tags: ["Solidity", "React", "IPFS"],
  },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "PostgreSQL / MongoDB", level: 82 },
  { name: "AWS / Cloud", level: 78 },
];

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Leading frontend architecture for enterprise SaaS products.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built and scaled core product features from 0 to 100k users.",
  },
  {
    role: "Junior Developer",
    company: "Agency Creative",
    period: "2018 - 2020",
    description: "Developed custom web solutions for diverse client portfolio.",
  },
];

export default function PortfolioDemo() {
  return (
    <DemoLayout theme={portfolioTheme}>
      {/* Navigation */}
      <DemoNav
        logo={<span className="text-2xl font-bold">JD.</span>}
        links={[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaText="Hire Me"
        variant="transparent"
      />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[var(--color-primary)] font-medium">Hello, I&apos;m</span>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] tracking-tight">
                John Doe
              </h1>
              <p className="mt-2 text-2xl md:text-3xl text-[var(--color-muted-foreground)]">
                Full Stack Developer & Designer
              </p>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] max-w-lg leading-relaxed">
                I craft exceptional digital experiences that combine beautiful design with robust engineering. Specializing in React, Node.js, and modern web technologies.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg">View My Work</Button>
                <Button variant="outline" size="lg">Download CV</Button>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-10">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Mail, href: "#contact" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DemoImage
                alt="Developer portrait"
                category="portfolio"
                aspect="square"
                className="rounded-3xl shadow-2xl"
              />
              {/* Floating decorative elements */}
              <Floating duration={4} distance={15}>
                <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[var(--color-primary)]/20 blur-2xl" />
              </Floating>
              <Floating duration={5} distance={10}>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[var(--color-accent)]/15 blur-2xl" />
              </Floating>
              {/* Floating stats */}
              <Magnetic strength={0.2}>
                <motion.div
                  className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[var(--color-card)]/95 backdrop-blur-xl shadow-xl border border-[var(--color-border)]"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="text-3xl font-bold text-[var(--color-primary)]">5+</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">Years Experience</div>
                </motion.div>
              </Magnetic>
              <Magnetic strength={0.2}>
                <motion.div
                  className="absolute -top-6 -right-6 p-4 rounded-xl bg-[var(--color-card)]/95 backdrop-blur-xl shadow-xl border border-[var(--color-border)]"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                >
                  <div className="text-3xl font-bold text-[var(--color-primary)]">50+</div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">Projects Completed</div>
                </motion.div>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 md:py-28 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                Portfolio
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
                Featured Projects
              </h2>
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                A selection of my recent work across various industries and technologies
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
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card variant="default" hover="lift" padding="none" className="h-full group overflow-hidden">
                  {/* Project image */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <DemoImage
                        alt={project.title}
                        category="portfolio"
                        aspect="video"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-[var(--color-foreground)]/0 group-hover:bg-[var(--color-foreground)]/80 transition-all duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-white text-zinc-900 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-[var(--color-primary)] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--color-foreground)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-md bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  Skills
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  Technical Expertise
                </h2>
                <p className="mt-4 text-[var(--color-muted-foreground)]">
                  I&apos;m constantly learning and expanding my skill set. Here are the technologies I work with most frequently.
                </p>

                <div className="mt-10 space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-[var(--color-foreground)]">
                          {skill.name}
                        </span>
                        <span className="text-[var(--color-muted-foreground)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-muted)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[var(--color-primary)] rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest">
                  Experience
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
                  Work History
                </h2>

                <div className="mt-10 space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-[var(--color-border)]">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--color-primary)]" />
                      <span className="text-sm text-[var(--color-primary)]">{exp.period}</span>
                      <h3 className="mt-1 text-xl font-semibold text-[var(--color-foreground)]">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--color-muted-foreground)]">{exp.company}</p>
                      <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        variant="dark"
        title="Let's Work Together"
        subtitle="I'm always interested in hearing about new projects and opportunities."
        primaryCTA={{ text: "Get in Touch" }}
        secondaryCTA={{ text: "Download Resume" }}
      />

      {/* Contact */}
      <Contact
        badge="Contact"
        title="Say Hello"
        subtitle="Have a project in mind? Let's talk about it."
        contactInfo={{
          email: "hello@johndoe.dev",
          phone: "+1 (555) 123-4567",
          address: "San Francisco, CA",
        }}
        variant="centered"
      />

      {/* Footer */}
      <Footer
        logo={<span className="text-2xl font-bold">JD.</span>}
        description="Full Stack Developer & Designer based in San Francisco."
        socialLinks={[
          { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
          { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
          { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
        ]}
        variant="centered"
      />
    </DemoLayout>
  );
}
