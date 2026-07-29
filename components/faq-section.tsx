"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can you onboard new clients?",
    answer: "Onboarding timelines depend on the service scope, systems involved and availability of the required records. After the initial consultation, our team provides a clear onboarding plan and expected timeline.",
  },
  {
    question: "Which accounting software do you support?",
    answer: "Our professionals work with widely used cloud accounting and finance platforms. The exact software supported depends on the service requirement and client workflow.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements?",
    answer: "NDA requirements can be discussed during the consultation and included in the engagement terms where mutually agreed.",
  },
  {
    question: "How is our financial information protected?",
    answer: "We use controlled access, secure communication channels, documented workflows and confidentiality practices designed to protect client information.",
  },
  {
    question: "Can services be customized?",
    answer: "Yes. Service scope, reporting frequency, resource requirements and engagement models can be tailored based on the client’s operational needs.",
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

        {/* FAQPage Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
