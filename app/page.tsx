"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { AboutPreview } from "@/components/about-preview";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServicesOverview } from "@/components/services-overview";
import { UKOutsourcingPreview } from "@/components/uk-outsourcing-preview";
import { IndustriesSection } from "@/components/industries-section";
import { GlobalServices } from "@/components/global-services";
import { SoftwareExpertise } from "@/components/software-expertise";
import { ProcessSection } from "@/components/process-section";
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

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full"
          >
            <div className="inline-block bg-accent/20 text-accent px-3.5 sm:px-4 py-1.5 rounded-2xl sm:rounded-full font-semibold text-xs sm:text-sm max-w-full text-balance mb-6">
              Simplifying Accounting. Strengthening Businesses. Driving Growth.
            </div>
            <h1 className="mx-auto max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight tracking-tight text-primary mb-6 break-words">
              Accounting, Tax & Business Compliance Solutions for <span className="text-accent">Growing Businesses</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              PKA Global provides end-to-end accounting, bookkeeping, taxation, payroll, compliance, and outsourced finance solutions that help businesses stay compliant, improve financial visibility, and focus on sustainable growth.
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95 h-14 px-8 text-base font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-black text-white border border-black hover:bg-slate-800 hover:text-white active:bg-slate-950 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 transition-all duration-200 shadow-sm">
                  Request Proposal
                </Button>
              </Link>
            </div>
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
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
