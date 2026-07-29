"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  ShieldCheck, 
  MonitorSmartphone, 
  Lock, 
  Briefcase, 
  PiggyBank, 
  Zap, 
  MessageSquare, 
  Handshake 
} from "lucide-react";
import { whyChooseUs } from "@/data/content";

const icons = [
  Award,
  Users,
  ShieldCheck,
  MonitorSmartphone,
  Lock,
  Briefcase,
  PiggyBank,
  Zap,
  MessageSquare,
  Handshake
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full font-semibold text-sm mb-4"
          >
            The PK Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 break-words"
          >
            Why Choose PKA Global
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Partnering with us means you gain a dedicated extension of your team, focused on accuracy, compliance, and growth.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {whyChooseUs.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <span className="font-semibold text-sm leading-snug text-primary">
                  {reason}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
