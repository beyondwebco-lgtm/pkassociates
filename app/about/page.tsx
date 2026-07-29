"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 break-words"
            >
              About PKA Global
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-primary-foreground/80"
            >
              A premier accounting, taxation, and business advisory firm empowering global businesses with precision, compliance, and strategic foresight.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary mb-6 break-words">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 leading-relaxed">
              Based in India, PKA Global is a modern accounting and advisory firm dedicated to delivering world-class financial solutions. We combine technical expertise with deep industry knowledge to serve clients across India, the UK, the UAE, and other international markets.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Whether you are a local startup seeking reliable bookkeeping, or a UK accountancy practice looking to outsource complex year-end accounts, our team of dedicated professionals ensures statutory compliance and absolute accuracy.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden bg-secondary/50 border border-border flex items-center justify-center p-6 sm:p-8"
          >
            {/* Abstract Graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
            <div className="relative z-10 w-full h-full border border-white/50 bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col justify-between">
               <div className="h-4 w-32 bg-primary/20 rounded-full" />
               <div className="space-y-4">
                 <div className="h-8 w-full bg-accent/20 rounded-lg" />
                 <div className="h-8 w-3/4 bg-accent/20 rounded-lg" />
                 <div className="h-8 w-1/2 bg-accent/20 rounded-lg" />
               </div>
               <div className="flex gap-4">
                 <div className="h-10 w-10 rounded-full bg-primary/10" />
                 <div className="h-10 w-10 rounded-full bg-primary/10" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-3xl border shadow-sm"
          >
            <Target className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-primary">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To simplify complex financial and regulatory challenges for businesses worldwide, providing accurate, timely, and strategic insights that drive sustainable growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 sm:p-8 rounded-3xl border shadow-sm"
          >
            <Eye className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-primary">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted and preferred global partner for accounting, compliance, and financial advisory, recognized for our uncompromising quality and modern approach.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-8 rounded-3xl border shadow-sm"
          >
            <ShieldCheck className="w-10 h-10 text-accent mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-primary">Our Values</h3>
            <ul className="space-y-3">
              {['Absolute Integrity', 'Client-First Approach', 'Continuous Innovation', 'Global Standards'].map((val, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                  {val}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
