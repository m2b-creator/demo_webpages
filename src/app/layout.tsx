import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Demo Showcase | Web Development Portfolio",
    template: "%s | Demo Showcase",
  },
  description:
    "Explore stunning demo websites showcasing modern web development capabilities. Restaurant, portfolio, SaaS, e-commerce, and more.",
  keywords: [
    "web development",
    "demo websites",
    "portfolio",
    "Next.js",
    "React",
    "modern web design",
  ],
  authors: [{ name: "Demo Showcase" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Demo Showcase",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
