"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const regions = [
  { name: "India", desc: "Accounting, Tax & Compliance" },
  { name: "United Kingdom", desc: "Accounting Outsourcing" },
  { name: "UAE", desc: "VAT & Corporate Tax" },
  { name: "Australia", desc: "Bookkeeping & BAS" },
  { name: "Europe", desc: "Virtual Finance Support" },
  { name: "North America", desc: "Accounting Advisory" },
];

export function GlobalServices() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <Globe className="w-[800px] h-[800px] text-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Global Reach, Local Expertise
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Supporting businesses across continents with localized compliance and international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group flex items-start gap-4"
            >
              <div className="mt-1 bg-accent/20 p-2 rounded-lg group-hover:bg-accent group-hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 text-accent group-hover:text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-1 text-white">{region.name}</h3>
                <p className="text-sm text-primary-foreground/70">{region.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
