"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProcessSection } from "./process-section";
import { FAQSection } from "./faq-section";
import { serviceHighlights, whyChooseUs } from "@/data/content";

interface ServiceLayoutProps {
  title: string;
  description: string;
  bulletPoints: string[];
  bestFor?: string;
  category: string;
}

export function ServiceLayout({ title, description, bulletPoints, bestFor, category }: ServiceLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Banner */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full font-semibold text-sm mb-6"
          >
            {category}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 break-words"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base font-semibold">
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content (Split Layout) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Bullet Points & Content */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-6 sm:mb-8 break-words">
                Comprehensive Service Inclusions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bulletPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {bestFor && (
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="font-heading font-bold text-primary mb-2">Best For:</h3>
                <p className="text-muted-foreground">{bestFor}</p>
              </div>
            )}
          </div>

          {/* Right Column: Highlights & Why Choose Us Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border shadow-sm sticky top-32">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Service Highlights</h3>
              <ul className="space-y-4 mb-8">
                {serviceHighlights.slice(0, 4).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-heading font-bold text-primary mb-6 pt-6 border-t">Why Choose Us</h3>
              <ul className="space-y-4 mb-8">
                {whyChooseUs.slice(0, 4).map((reason, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block w-full">
                <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/90 focus-visible:ring-2 focus-visible:ring-ring font-semibold transition-all">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable Sections */}
      <ProcessSection />
      <FAQSection />
    </div>
  );
}
