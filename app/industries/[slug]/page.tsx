import { industries, pubAndBarContent } from "@/data/content";
import { ServiceLayout } from "@/components/service-layout";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.id,
  }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);

  if (!industry) {
    notFound();
  }

  // Special Premium Page for Pubs & Bars
  if (slug === "pubs-bars") {
    return (
      <div className="flex flex-col min-h-screen pt-16 bg-background">
        <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {pubAndBarContent.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {pubAndBarContent.description}
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white p-8 md:p-12 rounded-3xl border shadow-sm mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
                Specialist Services for Pubs & Restaurants
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {pubAndBarContent.services.map((service, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12 mb-16">
              <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
                Current Issues in the Hospitality Sector
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pubAndBarContent.issues.map((issue, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border shadow-sm">
                    <h3 className="text-xl font-heading font-bold text-primary mb-4">{issue.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                Free Initial Meeting
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                To find out more about how our specialists can help your pub or restaurant, contact us today. We offer a free initial meeting to discuss your business issues.
              </p>
              <Link href="/contact">
                <Button className="h-12 px-8 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Generic fallback for other industries
  return (
    <ServiceLayout
      title={`${industry.name} Accounting Specialists`}
      description={`Expert financial and tax compliance services tailored for the ${industry.name.toLowerCase()} sector.`}
      bulletPoints={[
        "Annual Accounts Preparation",
        "Tax Returns & Compliance",
        "Payroll Management",
        "Bookkeeping & VAT",
        "Cash Flow Forecasting",
        "Strategic Business Advisory"
      ]}
      category="Industry"
    />
  );
}
