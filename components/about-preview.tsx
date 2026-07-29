"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Users, ShieldCheck, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10" />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full font-semibold text-sm mb-2">
            About PK & Associates
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-primary leading-tight break-words">
            Your Trusted Accounting & Business Advisory Partner
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              PK & Associates is a professional accounting, taxation and business advisory firm delivering reliable financial solutions for businesses across India and international markets.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our experienced professionals help businesses manage accounting, taxation, payroll, regulatory compliance and financial reporting with accuracy, efficiency and a client-first approach.
            </p>
          </div>
          <div className="pt-4">
            <Link href="/about" className="inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-accent text-white text-base font-semibold transition-all">
                Learn More About Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {[
            {
              icon: Target,
              title: "Client-Focused Solutions",
              desc: "Services tailored around each client’s operational and financial requirements."
            },
            {
              icon: Cpu,
              title: "Technology Driven",
              desc: "Efficient cloud-based workflows supported by modern accounting tools."
            },
            {
              icon: Users,
              title: "Dedicated Professionals",
              desc: "Experienced professionals providing reliable and responsive accounting support."
            },
            {
              icon: ShieldCheck,
              title: "Quality Assured",
              desc: "Structured review processes designed to maintain accuracy and consistency."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-white border shadow-sm flex flex-col gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
