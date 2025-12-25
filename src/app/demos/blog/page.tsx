"use client";

import { motion } from "framer-motion";
import { Clock, User, ArrowRight, BookOpen, TrendingUp, MessageCircle, Heart, Bookmark, Search } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { CTA, Footer } from "@/components/sections";
import { Button, Card } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { blogTheme } from "@/lib/themes";

const featuredPost = {
  title: "The Future of Remote Work: Trends Shaping 2024 and Beyond",
  excerpt: "As we navigate the evolving landscape of work, remote and hybrid models continue to reshape how companies operate and employees thrive.",
  author: "Sarah Mitchell",
  date: "Dec 20, 2024",
  readTime: "8 min read",
  category: "Technology",
};

const posts = [
  {
    title: "10 Design Principles Every Developer Should Know",
    excerpt: "Understanding design fundamentals can elevate your development work and improve collaboration with designers.",
    author: "Alex Chen",
    date: "Dec 18, 2024",
    readTime: "5 min read",
    category: "Design",
  },
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating APIs that can handle millions of requests while maintaining performance.",
    author: "James Wilson",
    date: "Dec 15, 2024",
    readTime: "12 min read",
    category: "Development",
  },
  {
    title: "The Psychology of User Experience",
    excerpt: "How cognitive biases and mental models influence the way users interact with digital products.",
    author: "Emily Rodriguez",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    category: "UX",
  },
  {
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt: "Take your TypeScript skills to the next level with these advanced typing techniques and patterns.",
    author: "Michael Park",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "Development",
  },
  {
    title: "Sustainable Tech: Green Computing Practices",
    excerpt: "How the tech industry is adapting to create more environmentally friendly products and processes.",
    author: "Lisa Green",
    date: "Dec 8, 2024",
    readTime: "6 min read",
    category: "Technology",
  },
];

const categories = [
  { name: "Technology", count: 24 },
  { name: "Design", count: 18 },
  { name: "Development", count: 32 },
  { name: "UX", count: 15 },
  { name: "Business", count: 21 },
  { name: "Culture", count: 12 },
];

const trending = [
  { title: "Why AI Won't Replace Designers", views: "12.5K" },
  { title: "React vs Vue in 2024", views: "9.8K" },
  { title: "The Rise of Edge Computing", views: "8.2K" },
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
          { label: "Latest", href: "#latest" },
          { label: "Technology", href: "#" },
          { label: "Design", href: "#" },
          { label: "Culture", href: "#" },
        ]}
        ctaText="Subscribe"
      />

      {/* Hero - Featured Post */}
      <section className="pt-24 pb-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-xs font-medium uppercase tracking-wider">
                Featured
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-foreground)] leading-tight">
                {featuredPost.title}
              </h1>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 mt-8">
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
              <Button className="mt-8" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Read Article
              </Button>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-[var(--color-primary)]/30" />
              </div>
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
                    Latest Articles
                  </h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-muted-foreground)]" />
                    <input
                      type="text"
                      placeholder="Search..."
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
                        <div className="md:w-1/3 aspect-video md:aspect-square bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-[var(--color-border)]" />
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
                                By {post.author}
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
                  Load More Articles
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
                      Trending Now
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
                            {item.views} views
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
                    Categories
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
                    Stay Updated
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                    Get the latest articles delivered straight to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] text-sm mb-3"
                  />
                  <Button className="w-full">Subscribe</Button>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTA
        variant="centered"
        title="Never Miss a Story"
        subtitle="Join 50,000+ readers who get our weekly digest of the best articles on technology, design, and culture."
        primaryCTA={{ text: "Subscribe Now" }}
      />

      {/* Footer */}
      <Footer
        logo={
          <span className="text-2xl font-serif font-bold">
            The<span className="text-[var(--color-accent)]">Digest</span>
          </span>
        }
        description="Thoughtful perspectives on technology, design, and culture for the modern reader."
        columns={[
          {
            title: "Topics",
            links: [
              { label: "Technology", href: "#" },
              { label: "Design", href: "#" },
              { label: "Development", href: "#" },
              { label: "Culture", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Authors", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            title: "More",
            links: [
              { label: "Newsletter", href: "#" },
              { label: "Podcast", href: "#" },
              { label: "Events", href: "#" },
              { label: "RSS", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
