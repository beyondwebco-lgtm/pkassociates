"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white"
        >
          Ready to Simplify Your Accounting & Compliance?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
        >
          Speak with our experts to discover how PK & Associates can streamline your accounting, taxation, payroll and compliance requirements.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg w-full sm:w-auto font-semibold">
              Book Free Consultation
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white h-14 px-10 text-lg w-full sm:w-auto font-semibold">
              Request Proposal
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
