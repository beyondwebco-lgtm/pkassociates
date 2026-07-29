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
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A seamless, transparent process designed to integrate expertly with your operations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-accent to-primary/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 md:gap-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-primary/10 shadow-md flex items-center justify-center text-primary group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  {step.icon}
                </div>
                <span className="font-heading font-semibold text-sm px-2 text-foreground/80 group-hover:text-primary transition-colors">
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
