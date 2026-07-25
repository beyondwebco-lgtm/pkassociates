"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, PieChart, FileText } from "lucide-react";
import Link from "next/link";
import { AboutPreview } from "@/components/about-preview";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServicesOverview } from "@/components/services-overview";
import { UKOutsourcingPreview } from "@/components/uk-outsourcing-preview";
import { IndustriesSection } from "@/components/industries-section";
import { GlobalServices } from "@/components/global-services";
import { SoftwareExpertise } from "@/components/software-expertise";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight tracking-tight text-primary">
              Helping Businesses Stay Compliant, <span className="text-accent">Grow Confidently.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              PK & Associates delivers expert accounting, taxation, business compliance, payroll, advisory, and outsourced finance solutions for businesses across India, the UK, and global markets.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base">
                  Book Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-primary/20 hover:bg-primary/5">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] w-full hidden lg:block"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-80 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-32 bg-primary/20 rounded-full animate-pulse" />
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-accent" />
                </div>
              </div>
              <div className="h-32 w-full rounded-xl bg-gradient-to-tr from-primary/10 to-transparent border border-white/40 flex items-end p-4 gap-2">
                {[40, 70, 45, 90, 65, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-primary/30 rounded-t-sm"
                  />
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <div className="h-12 flex-1 rounded-lg bg-white/50 border border-white/60 flex items-center px-4">
                  <div className="h-2 w-16 bg-muted/40 rounded-full" />
                </div>
                <div className="h-12 flex-1 rounded-lg bg-accent/10 border border-accent/20 flex items-center px-4">
                  <div className="h-2 w-16 bg-accent/40 rounded-full" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 right-10 w-32 h-32 bg-white/80 backdrop-blur-lg border border-white shadow-xl rounded-2xl p-4 flex items-center justify-center"
            >
              <PieChart className="w-16 h-16 text-accent opacity-80" />
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-5 left-5 w-40 h-24 bg-white/80 backdrop-blur-lg border border-white shadow-xl rounded-2xl p-4 flex flex-col justify-center gap-2"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-success" />
                <span className="text-xs font-bold text-success">Compliant</span>
              </div>
              <div className="h-2 w-20 bg-muted/30 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Newly Ordered Sections */}
      <AboutPreview />
      <WhyChooseUs />
      <ServicesOverview />
      <UKOutsourcingPreview />
      <IndustriesSection />
      <GlobalServices />
      <SoftwareExpertise />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
