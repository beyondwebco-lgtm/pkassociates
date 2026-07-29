"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ukOutsourcing } from "@/data/content";

export function UKOutsourcingPreview() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white"
            >
              UK Outsourcing Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg text-primary-foreground/80 mb-4">
                Reliable outsourced accounting support for UK accountancy practices, delivered by experienced professionals using secure cloud-based workflows.
              </p>
              <p className="text-lg text-primary-foreground/80">
                Our flexible outsourcing model helps accountancy practices increase capacity, manage recurring workloads and maintain consistent service quality without expanding internal overheads.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/uk-outsourcing">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-6">
                View All UK Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ukOutsourcing.services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/uk-outsourcing/${service.id}`} className="block h-full group">
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/70 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent font-semibold mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
