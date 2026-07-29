"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-background">
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full font-semibold text-sm mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Let&apos;s Discuss Your Business Needs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/80"
          >
            Ready to streamline your accounting and ensure compliance? Contact our experts today for a free consultation.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Information & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Address</h3>
                      <p className="text-muted-foreground mt-1">123 Financial District, Business Park<br />New Delhi, India 110001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground mt-1">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground mt-1">info@pkassociates.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground mt-1">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps & WhatsApp */}
              <div className="space-y-6">
                <div className="w-full h-64 bg-muted rounded-2xl overflow-hidden border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725779!3d28.52758200617606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Button className="w-full h-14 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg">
                  <MessageCircle className="w-5 h-5 ml-2 mr-2" /> Chat with us on WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Consultation Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 md:p-12 rounded-3xl border shadow-xl relative"
            >
              {/* Quick Response Badge */}
              <div className="absolute -top-5 right-8 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-md">
                <Zap className="w-4 h-4 mr-2" /> Quick Response Promise
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Book a Consultation</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 2 hours.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50" 
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50" 
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50" 
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Required</label>
                  <select className="w-full h-12 px-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 text-muted-foreground">
                    <option>UK Outsourcing</option>
                    <option>India Accounting & Tax</option>
                    <option>Global Services</option>
                    <option>Business Registration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    className="w-full min-h-[120px] p-4 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                <Button className="w-full h-14 bg-primary hover:bg-accent text-white text-lg font-semibold">
                  Submit Request
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
