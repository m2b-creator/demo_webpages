"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Heart, Star, Truck, Shield, RefreshCw, ArrowRight, Filter, Search, ChevronRight } from "lucide-react";
import { DemoLayout, DemoNav } from "@/components/layout/DemoLayout";
import { CTA, Footer } from "@/components/sections";
import { Button, Card, DemoImage } from "@/components/ui";
import { ScrollReveal } from "@/components/animations";
import { ecommerceTheme } from "@/lib/themes";

const products = [
  {
    name: "Premium Leather Jacket",
    price: "$299",
    originalPrice: "$399",
    rating: 4.9,
    reviews: 128,
    category: "Outerwear",
    badge: "Best Seller",
  },
  {
    name: "Classic White Sneakers",
    price: "$149",
    rating: 4.8,
    reviews: 256,
    category: "Footwear",
    badge: "New",
  },
  {
    name: "Minimalist Watch",
    price: "$199",
    rating: 4.7,
    reviews: 89,
    category: "Accessories",
  },
  {
    name: "Wool Blend Coat",
    price: "$449",
    originalPrice: "$549",
    rating: 4.9,
    reviews: 67,
    category: "Outerwear",
    badge: "Sale",
  },
  {
    name: "Cashmere Sweater",
    price: "$179",
    rating: 4.6,
    reviews: 145,
    category: "Knitwear",
  },
  {
    name: "Leather Crossbody Bag",
    price: "$249",
    rating: 4.8,
    reviews: 92,
    category: "Bags",
    badge: "Trending",
  },
];

const categories = [
  { name: "New Arrivals", count: 124, icon: "✨" },
  { name: "Best Sellers", count: 89, icon: "🔥" },
  { name: "Outerwear", count: 56, icon: "🧥" },
  { name: "Footwear", count: 78, icon: "👟" },
  { name: "Accessories", count: 145, icon: "⌚" },
  { name: "Sale", count: 34, icon: "🏷️" },
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
];

export default function EcommerceDemo() {
  return (
    <DemoLayout theme={ecommerceTheme}>
      {/* Navigation */}
      <DemoNav
        logo={<span className="text-2xl font-bold tracking-tight">MAISON</span>}
        links={[
          { label: "New", href: "#" },
          { label: "Women", href: "#" },
          { label: "Men", href: "#" },
          { label: "Sale", href: "#" },
        ]}
        ctaText="Cart (3)"
      />

      {/* Hero Banner */}
      <section className="relative min-h-[80vh] flex items-center bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-widest">
                Winter Collection 2024
              </span>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] tracking-tight leading-none">
                Elevate Your
                <br />
                <span className="text-[var(--color-muted-foreground)]">Everyday Style</span>
              </h1>
              <p className="mt-6 text-lg text-[var(--color-muted-foreground)] max-w-md">
                Discover our curated collection of premium essentials designed for modern living.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Shop Collection
                </Button>
                <Button variant="outline" size="lg">
                  View Lookbook
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
                alt="Fashion collection showcase"
                category="ecommerce"
                aspect="portrait"
                className="rounded-2xl shadow-2xl"
                overlay
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 border-y border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <feature.icon className="w-5 h-5 text-[var(--color-foreground)]" />
                <div>
                  <div className="font-medium text-sm text-[var(--color-foreground)]">{feature.title}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
                  Shop by Category
                </h2>
              </div>
              <Button variant="ghost" rightIcon={<ChevronRight className="w-4 h-4" />}>
                View All
              </Button>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card
                  variant="default"
                  hover="lift"
                  padding="md"
                  className="text-center cursor-pointer group"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[var(--color-muted-foreground)] mt-1">
                    {category.count} items
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20 bg-[var(--color-muted)]">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)]">
                  Featured Products
                </h2>
                <p className="text-[var(--color-muted-foreground)] mt-1">
                  Hand-picked pieces for the season
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" leftIcon={<Filter className="w-4 h-4" />}>
                  Filter
                </Button>
                <Button variant="outline" size="sm" leftIcon={<Search className="w-4 h-4" />}>
                  Search
                </Button>
              </div>
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
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card variant="default" hover="lift" padding="none" className="group overflow-hidden">
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] bg-[var(--color-background)]">
                    <DemoImage
                      alt={product.name}
                      category="ecommerce"
                      aspect="portrait"
                      className="w-full h-full"
                    />
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--color-foreground)] text-[var(--color-background)] text-xs font-medium">
                        {product.badge}
                      </div>
                    )}
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        className="w-10 h-10 rounded-full bg-[var(--color-background)] shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                    </div>
                    {/* Add to Cart */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                      <Button variant="secondary" size="sm" className="w-full">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  {/* Product Info */}
                  <div className="p-4">
                    <span className="text-xs text-[var(--color-muted-foreground)] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="mt-1 font-medium text-[var(--color-foreground)]">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-semibold text-[var(--color-foreground)]">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-[var(--color-muted-foreground)] line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-[var(--color-muted-foreground)]">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <CTA
        variant="dark"
        title="Join the MAISON Club"
        subtitle="Subscribe for exclusive access to new arrivals, sales, and members-only offers."
        primaryCTA={{ text: "Subscribe" }}
      />

      {/* Footer */}
      <Footer
        logo={<span className="text-2xl font-bold tracking-tight">MAISON</span>}
        description="Premium fashion and lifestyle essentials for the modern individual."
        columns={[
          {
            title: "Shop",
            links: [
              { label: "New Arrivals", href: "#" },
              { label: "Best Sellers", href: "#" },
              { label: "Sale", href: "#" },
              { label: "Gift Cards", href: "#" },
            ],
          },
          {
            title: "Help",
            links: [
              { label: "Shipping", href: "#" },
              { label: "Returns", href: "#" },
              { label: "Sizing Guide", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Sustainability", href: "#" },
              { label: "Press", href: "#" },
            ],
          },
        ]}
        variant="default"
      />
    </DemoLayout>
  );
}
