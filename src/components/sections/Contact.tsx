"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button, Input, Textarea } from "@/components/ui";
import { Card } from "@/components/ui";

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
}

interface ContactLabels {
  name?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  phoneOptional?: string;
  message?: string;
  howCanWeHelp?: string;
  sendMessage?: string;
  messageSent?: string;
  messageSentDescription?: string;
}

const defaultLabels: ContactLabels = {
  name: "Name",
  fullName: "Vollständiger Name",
  email: "E-Mail",
  phone: "Telefon",
  phoneOptional: "Telefon (optional)",
  message: "Nachricht",
  howCanWeHelp: "Wie können wir Ihnen helfen?",
  sendMessage: "Nachricht senden",
  messageSent: "Nachricht gesendet!",
  messageSentDescription: "Wir melden uns schnellstmöglich bei Ihnen.",
};

interface ContactProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
  variant?: "split" | "centered" | "minimal";
  className?: string;
  labels?: ContactLabels;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function Contact({
  badge,
  title = "Kontaktieren Sie uns",
  subtitle,
  contactInfo,
  variant = "split",
  className,
  labels: customLabels,
  onSubmit,
}: ContactProps) {
  const labels = { ...defaultLabels, ...customLabels };
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onSubmit) {
      onSubmit(formData);
    }

    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (variant === "centered") {
    return (
      <section
        className={cn(
          "py-20 md:py-28 bg-[var(--color-background)]",
          className
        )}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {badge && (
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                {badge}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-[var(--color-muted-foreground)]">
                {subtitle}
              </p>
            )}

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 p-8 rounded-2xl bg-emerald-500/10 text-center"
              >
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                  {labels.messageSent}
                </h3>
                <p className="mt-2 text-[var(--color-muted-foreground)]">
                  {labels.messageSentDescription}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
                <Input
                  name="name"
                  label={labels.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  label={labels.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  label={labels.message}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  {labels.sendMessage}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: split layout
  return (
    <section
      className={cn(
        "py-20 md:py-28 bg-[var(--color-muted)]",
        className
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {badge && (
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                {badge}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                {subtitle}
              </p>
            )}

            {contactInfo && (
              <div className="mt-10 space-y-6">
                {contactInfo.email && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--color-muted-foreground)]">
                        E-Mail
                      </div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--color-muted-foreground)]">
                        Telefon
                      </div>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contactInfo.address && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-sm text-[var(--color-muted-foreground)]">
                        Adresse
                      </div>
                      <div className="font-medium text-[var(--color-foreground)]">
                        {contactInfo.address}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="elevated" padding="lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-[var(--color-muted-foreground)]">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    name="name"
                    label={labels.fullName}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="email"
                      type="email"
                      label={labels.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      label={labels.phoneOptional}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <Textarea
                    name="message"
                    label={labels.howCanWeHelp}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isLoading}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    {labels.sendMessage}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
