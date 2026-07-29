"use client";

import { motion } from "framer-motion";
import { softwareExpertise } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export function SoftwareExpertise() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 break-words">
            Software Expertise
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Experienced Professionals using industry-leading accounting software.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {softwareExpertise.map((software, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group hover:border-accent/30"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">{software.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {software.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
