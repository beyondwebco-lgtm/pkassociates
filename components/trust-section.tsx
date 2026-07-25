"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "UK Accounting Experience", value: "6+" },
  { label: "Businesses Supported", value: "500+" },
  { label: "Compliance Focus", value: "100%" },
  { label: "Global Clients", value: "24/7" },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="text-4xl md:text-5xl font-heading font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-primary-foreground/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Logos Carousel */}
        <div className="w-full overflow-hidden flex flex-col items-center opacity-70">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-6">Trusted by businesses globally</p>
          <div className="flex overflow-hidden w-full relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-16 w-max pr-16 items-center"
            >
              {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i, idx) => (
                <div key={idx} className="text-2xl font-bold font-heading text-primary-foreground/40">
                  PARTNER {i}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
