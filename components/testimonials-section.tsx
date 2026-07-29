"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "PK & Associates completely transformed our UK accounting outsourcing. Their attention to detail and knowledge of HMRC regulations is unmatched.",
    author: "David M.",
    company: "UK Accountancy Firm",
  },
  {
    text: "Setting up our business in India was seamless thanks to their expert guidance on ROC and GST compliance.",
    author: "Sarah J.",
    company: "Tech Startup",
  },
  {
    text: "Their virtual finance office services saved us countless hours and reduced our overhead costs significantly. Highly recommended.",
    author: "Ahmed K.",
    company: "UAE Logistics Co.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary text-center mb-16">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-border/50 shadow-sm flex flex-col gap-6 relative"
            >
              <div className="flex gap-1 text-accent">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground text-lg italic leading-relaxed flex-grow">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h4 className="font-bold text-foreground font-heading">{testimonial.author}</h4>
                <span className="text-sm text-muted-foreground">{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
