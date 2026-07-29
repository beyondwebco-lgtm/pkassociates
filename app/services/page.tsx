"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { indiaServices } from "@/data/content";

export default function ServicesOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-background">
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 break-words"
          >
            {indiaServices.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-primary-foreground/80"
          >
            Comprehensive accounting, taxation, and business compliance solutions tailored for businesses operating in India.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {indiaServices.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/services/${service.id}`} className="block h-full group">
                  <div className="h-full p-6 sm:p-8 rounded-3xl bg-white border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Briefcase className="w-6 h-6 text-primary group-hover:text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent font-semibold mt-auto">
                      Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
