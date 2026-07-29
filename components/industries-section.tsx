"use client";

import { motion } from "framer-motion";
import { Utensils, Hotel, ShoppingBag, HeartPulse, HardHat, Factory, Building, ShoppingCart, Landmark } from "lucide-react";

const industries = [
  { name: "Restaurants", icon: <Utensils className="w-5 h-5" />, desc: "Restaurant accounting, payroll and GST/VAT support." },
  { name: "Pubs & Bars", icon: <Utensils className="w-5 h-5" /> },
  { name: "Hotels", icon: <Hotel className="w-5 h-5" /> },
  { name: "Retail", icon: <ShoppingBag className="w-5 h-5" />, desc: "Inventory, sales reconciliation and tax compliance." },
  { name: "Healthcare", icon: <HeartPulse className="w-5 h-5" />, desc: "Financial reporting and compliance solutions for healthcare providers." },
  { name: "Construction", icon: <HardHat className="w-5 h-5" />, desc: "Payroll, CIS/GST compliance and project accounting." },
  { name: "Manufacturing", icon: <Factory className="w-5 h-5" /> },
  { name: "Real Estate", icon: <Building className="w-5 h-5" /> },
  { name: "E-commerce", icon: <ShoppingCart className="w-5 h-5" />, desc: "Marketplace reconciliation and financial reporting." },
  { name: "Professional Services", icon: <Landmark className="w-5 h-5" />, desc: "Accounting, payroll and advisory solutions." },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
              Specialized Industry Knowledge
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand that every sector has unique financial challenges. Our tailored solutions help you navigate complexities with ease.
            </p>
          </div>
          <button className="text-accent font-medium hover:underline whitespace-nowrap">
            View All Industries &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-secondary/50 rounded-2xl hover:bg-primary hover:text-primary-foreground hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                {industry.icon}
              </div>
              <span className="font-medium text-center text-sm">{industry.name}</span>
              {industry.desc && (
                <p className="text-xs text-center mt-2 opacity-80">{industry.desc}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
