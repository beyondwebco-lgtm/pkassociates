"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "UK Outsourcing",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${formData.firstName} ${formData.lastName}`.trim() || "Not provided";
    const textMessage = `Hello PK and Associates! I would like to book a consultation.\n\n*Name:* ${fullName}\n*Email:* ${formData.email || "Not provided"}\n*Phone:* ${formData.phone || "Not provided"}\n*Service Required:* ${formData.service}\n*Message:* ${formData.message || "Not provided"}`;
    const whatsappUrl = `https://wa.me/919392870209?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-background">
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
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
              className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold mb-6 break-words"
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
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      <p className="text-muted-foreground mt-1">
                        PKA Global, Unit No. 201, 3-84/22, MS Bright Plaza, Plot No. 22, Puppalguda, Hyderabad, Telangana 500089, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-muted-foreground mt-1">+91 93928 70209</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <p className="text-muted-foreground mt-1">info@pkaglobal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground mt-1">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Card */}
              <div className="bg-secondary/40 p-6 sm:p-8 rounded-3xl border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-success/10 text-success flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Need Instant Assistance?</h3>
                    <p className="text-sm text-muted-foreground">Chat directly with our advisory team on WhatsApp.</p>
                  </div>
                </div>
                <a href="https://wa.me/919392870209" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-success hover:bg-success/90 text-white font-semibold whitespace-nowrap">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Map Embed */}
              <div className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden border border-border shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2536836968037!2d78.36873527589578!3d17.40008390176848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97479ed3aedb%3A0xb35a711ff606bb80!2sMS%20BRIGHT%20PLAZA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PKA Global Headquarters Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Consultation Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card text-card-foreground p-5 sm:p-8 md:p-12 rounded-3xl border border-border shadow-xl relative w-full"
            >
              {/* Quick Response Badge */}
              <div className="absolute -top-5 right-4 sm:right-8 bg-accent text-accent-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center shadow-md">
                <Zap className="w-4 h-4 mr-1.5 sm:mr-2 flex-shrink-0" /> Quick Response Promise
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-2">Book a Consultation</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8">Fill out the form below and our team will get back to you within 2 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" 
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" 
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" 
                    placeholder="+91 93928 70209"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Required</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="UK Outsourcing">UK Outsourcing</option>
                    <option value="India Accounting & Tax">India Accounting & Tax</option>
                    <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE)</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Oman">Oman</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Europe">Europe</option>
                    <option value="Australia">Australia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Canada">Canada</option>
                    <option value="Business Registration">Business Registration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px] p-4 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground text-base sm:text-lg font-semibold transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-success" /> Submit Request via WhatsApp
                </Button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
