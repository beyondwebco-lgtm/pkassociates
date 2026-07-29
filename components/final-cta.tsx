"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white leading-tight break-words"
          >
          Ready to Simplify Your Accounting & Compliance?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Speak with our experts to discover how PKA Global can streamline your accounting, taxation, payroll and compliance requirements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 sm:px-10 text-base sm:text-lg w-full sm:w-auto font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]">
              Book Free Consultation
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold bg-black text-white border border-black hover:bg-slate-800 hover:text-white active:bg-slate-950 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-all duration-200 shadow-sm">
              Request Proposal
            </Button>
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
