"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer outsourced accounting for UK firms?",
    answer: "Yes, we specialize in providing outsourced bookkeeping, VAT, payroll, and year-end accounts support for UK accountancy practices using software like Xero, QuickBooks, and FreeAgent.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We support a wide range of industries including Restaurants, Pubs & Bars, Hotels, Retail, Healthcare, Construction, E-commerce, and more.",
  },
  {
    question: "Can you help with business registration in India?",
    answer: "Absolutely. We assist with Private Limited, LLP, Partnership, and Proprietorship registrations, along with required licenses like PAN, TAN, GST, and MSME.",
  },
  {
    question: "How secure is our financial data?",
    answer: "Data security is our top priority. We use secure, cloud-based systems and enforce strict confidentiality protocols to ensure your financial information is always protected.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 mb-4 rounded-xl border">
              <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent font-heading text-lg py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
