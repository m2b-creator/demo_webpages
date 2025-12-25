"use client";

import { motion } from "framer-motion";
import { Clock, User, ArrowRight, BookOpen, TrendingUp, MessageCircle, Heart, Bookmark, Search } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { CTA, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { blogTheme } from "@/lib/themes";

const featuredPost = {
  title: "Die Zukunft der Remote-Arbeit: Trends, die 2025 und darüber hinaus prägen",
  excerpt: "Während wir durch die sich entwickelnde Arbeitswelt navigieren, gestalten Remote- und Hybrid-Modelle weiterhin um, wie Unternehmen arbeiten und Mitarbeiter erfolgreich sind.",
  author: "Sarah Mitchell",
  date: "20. Dez. 2025",
  readTime: "8 Min. Lesezeit",
  category: "Technologie",
};

const posts = [
  {
    title: "10 Design-Prinzipien, die jeder Entwickler kennen sollte",
    excerpt: "Das Verständnis von Design-Grundlagen kann Ihre Entwicklungsarbeit aufwerten und die Zusammenarbeit mit Designern verbessern.",
    author: "Alex Chen",
    date: "18. Dez. 2025",
    readTime: "5 Min. Lesezeit",
    category: "Design",
  },
  {
    title: "Skalierbare APIs mit Node.js erstellen",
    excerpt: "Best Practices für die Erstellung von APIs, die Millionen von Anfragen verarbeiten können und dabei die Performance beibehalten.",
    author: "James Wilson",
    date: "15. Dez. 2025",
    readTime: "12 Min. Lesezeit",
    category: "Entwicklung",
  },
  {
    title: "Die Psychologie der User Experience",
    excerpt: "Wie kognitive Verzerrungen und mentale Modelle die Art beeinflussen, wie Nutzer mit digitalen Produkten interagieren.",
    author: "Emily Rodriguez",
    date: "12. Dez. 2025",
    readTime: "7 Min. Lesezeit",
    category: "UX",
  },
  {
    title: "TypeScript meistern: Fortgeschrittene Muster",
    excerpt: "Bringen Sie Ihre TypeScript-Fähigkeiten mit diesen fortgeschrittenen Typing-Techniken und Mustern auf das nächste Level.",
    author: "Michael Park",
    date: "10. Dez. 2025",
    readTime: "10 Min. Lesezeit",
    category: "Entwicklung",
  },
  {
    title: "Nachhaltige Technologie: Green Computing Praktiken",
    excerpt: "Wie sich die Tech-Branche anpasst, um umweltfreundlichere Produkte und Prozesse zu schaffen.",
    author: "Lisa Green",
    date: "8. Dez. 2025",
    readTime: "6 Min. Lesezeit",
    category: "Technologie",
  },
];

const categories = [
  { name: "Technologie", count: 24 },
  { name: "Design", count: 18 },
  { name: "Entwicklung", count: 32 },
  { name: "UX", count: 15 },
  { name: "Business", count: 21 },
  { name: "Kultur", count: 12 },
];

const trending = [
  { title: "Warum KI Designer nicht ersetzen wird", views: "12,5K" },
  { title: "React vs Vue in 2025", views: "9,8K" },
  { title: "Der Aufstieg des Edge Computing", views: "8,2K" },
];

export default function BlogDemo() {
  return (
    <DemoLayout theme={blogTheme}>
      {/* Navigation */}
      <DemoNav
        logo={
          <span className="text-2xl font-serif font-bold">
            The<span className="text-[var(--color-accent)]">Digest</span>
          </span>
        }
        links={[
          { label: "Aktuell", href: "#latest" },
          { label: "Technologie", href: "#" },
          { label: "Design", href: "#" },
          { label: "Kultur", href: "#" },
        ]}
        ctaText="Abonnieren"
      />

      {/* Hero - Featured Post */}
      <section className="pt-24 pb-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-xs font-medium uppercase tracking-wider">
                Empfohlen
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-foreground)] leading-tight">
                {featuredPost.title}
              </h1>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed max-w-lg mx-auto lg:mx-0">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-muted)] flex items-center justify-center">
                    <User className="w-5 h-5 text-[var(--color-muted-foreground)]" />
                  </div>
                  <span className="font-medium text-[var(--color-foreground)]">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button className="mt-8" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Artikel lesen
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DemoImage
                alt="Featured article"
                category="blog"
                aspect="video"
                className="rounded-2xl shadow-2xl"
                overlay
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="latest" className="py-16 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Articles */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-serif font-bold text-[var(--color-foreground)]">
                    Neueste Artikel
                  </h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
                    <input
                      type="text"
                      placeholder="Suchen..."
                      className="pl-9 pr-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {posts.map((post, index) => (
                  <motion.article
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Card variant="default" hover="lift" padding="none" className="overflow-hidden group cursor-pointer">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 aspect-video md:aspect-square">
                          <DemoImage
                            alt={post.title}
                            category="blog"
                            aspect="square"
                            className="w-full h-full"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider">
                              {post.category}
                            </span>
                            <span className="text-xs text-[var(--color-muted-foreground)]">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-serif font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-[var(--color-muted-foreground)] line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-[var(--color-muted-foreground)]">
                                Von {post.author}
                              </span>
                              <span className="text-sm text-[var(--color-muted-foreground)]">
                                {post.readTime}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-[var(--color-muted)] rounded-full transition-colors">
                                <Heart className="w-4 h-4 text-[var(--color-muted-foreground)]" />
                              </button>
                              <button className="p-2 hover:bg-[var(--color-muted)] rounded-full transition-colors">
                                <Bookmark className="w-4 h-4 text-[var(--color-muted-foreground)]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.article>
                ))}
              </motion.div>

              <div className="text-center mt-10">
                <Button variant="outline" size="lg">
                  Mehr Artikel laden
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending */}
              <ScrollReveal delay={0.2}>
                <Card variant="elevated" padding="lg">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="font-serif font-bold text-[var(--color-foreground)]">
                      Im Trend
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {trending.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <span className="text-2xl font-bold text-[var(--color-muted-foreground)]/30">
                          0{index + 1}
                        </span>
                        <div>
                          <h4 className="font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-sm text-[var(--color-muted-foreground)]">
                            {item.views} Aufrufe
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              {/* Categories */}
              <ScrollReveal delay={0.3}>
                <Card variant="elevated" padding="lg">
                  <h3 className="font-serif font-bold text-[var(--color-foreground)] mb-6">
                    Kategorien
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between group cursor-pointer"
                      >
                        <span className="text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                          {category.name}
                        </span>
                        <span className="px-2 py-1 rounded-full bg-[var(--color-muted)] text-xs text-[var(--color-muted-foreground)]">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>

              {/* Newsletter */}
              <ScrollReveal delay={0.4}>
                <Card variant="gradient" padding="lg">
                  <h3 className="font-serif font-bold text-[var(--color-foreground)] mb-2">
                    Bleiben Sie informiert
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                    Erhalten Sie die neuesten Artikel direkt in Ihr Postfach.
                  </p>
                  <input
                    type="email"
                    placeholder="ihre@email.de"
                    className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm mb-3"
                  />
                  <Button className="w-full">Abonnieren</Button>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTA
        variant="centered"
        title="Verpassen Sie keine Geschichte"
        subtitle="Schließen Sie sich über 50.000 Lesern an, die unseren wöchentlichen Überblick der besten Artikel zu Technologie, Design und Kultur erhalten."
        primaryCTA={{ text: "Jetzt abonnieren" }}
      />

      {/* Footer */}
      <Footer
        logo={
          <span className="text-2xl font-serif font-bold">
            The<span className="text-[var(--color-accent)]">Digest</span>
          </span>
        }
        description="Durchdachte Perspektiven zu Technologie, Design und Kultur für den modernen Leser."
        columns={[
          {
            title: "Themen",
            links: [
              { label: "Technologie", href: "#" },
              { label: "Design", href: "#" },
              { label: "Entwicklung", href: "#" },
              { label: "Kultur", href: "#" },
            ],
          },
          {
            title: "Unternehmen",
            links: [
              { label: "Über uns", href: "#" },
              { label: "Autoren", href: "#" },
              { label: "Karriere", href: "#" },
              { label: "Kontakt", href: "#" },
            ],
          },
          {
            title: "Mehr",
            links: [
              { label: "Newsletter", href: "#" },
              { label: "Podcast", href: "#" },
              { label: "Veranstaltungen", href: "#" },
              { label: "RSS", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
