"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building } from "lucide-react";
import { industries } from "@/data/content";

export default function IndustriesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-background">
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Industries We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80"
          >
            Deep domain expertise across various sectors, delivering specialized accounting and tax solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/industries/${industry.id}`} className="block h-full group">
                  <div className={`h-full p-8 rounded-3xl bg-white border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${industry.isPremium ? 'border-accent/50 bg-accent/5 ring-1 ring-accent/20' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Building className="w-6 h-6 text-primary group-hover:text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      Specialized accounting, tax, and compliance services tailored specifically for the {industry.name.toLowerCase()} sector.
                    </p>
                    <div className="flex items-center text-accent font-semibold mt-auto">
                      Explore Sector <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
