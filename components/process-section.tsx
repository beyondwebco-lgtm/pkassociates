"use client";

import { motion } from "framer-motion";
import { PhoneCall, Search, FileSignature, PlayCircle, ClipboardCheck, Users, CheckCircle2 } from "lucide-react";

const steps = [
  { title: "1. Discovery Call", icon: <PhoneCall className="w-5 h-5" /> },
  { title: "2. Business Assessment", icon: <Search className="w-5 h-5" /> },
  { title: "3. Tailored Proposal", icon: <FileSignature className="w-5 h-5" /> },
  { title: "4. Smooth Onboarding", icon: <Users className="w-5 h-5" /> },
  { title: "5. Service Delivery", icon: <PlayCircle className="w-5 h-5" /> },
  { title: "6. Quality Review", icon: <ClipboardCheck className="w-5 h-5" /> },
  { title: "7. Continuous Support", icon: <CheckCircle2 className="w-5 h-5 text-success" /> },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 break-words">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A seamless, transparent process designed to integrate expertly with your operations.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col items-center text-center p-6 bg-white rounded-2xl border shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/10 shadow-sm flex items-center justify-center text-primary group-hover:bg-accent/20 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  {step.icon}
                </div>
                <span className="font-heading font-semibold text-base px-2 text-foreground/90 group-hover:text-primary transition-colors">
                  {step.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
