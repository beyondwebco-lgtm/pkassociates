import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights | PK & Associates",
  description: "Explore practical insights on accounting, taxation, payroll, compliance, outsourcing and financial management.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources & Insights | PK & Associates",
    description: "Explore practical insights on accounting, taxation, payroll, compliance, outsourcing and financial management.",
    url: "/resources",
  },
};

const categories = [
  "Accounting",
  "Taxation",
  "Payroll",
  "Compliance",
  "UK Outsourcing",
  "Business Advisory",
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary mb-6 break-words">
          Accounting, Tax and Business Insights
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl">
          Explore practical insights on accounting, taxation, payroll, compliance, outsourcing and financial management.
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">Topic Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-2xl bg-secondary/30 border border-border/50 text-center font-semibold text-primary text-xs sm:text-sm"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-border/50 text-center max-w-2xl mx-auto shadow-sm">
          <h3 className="text-xl font-heading font-bold text-primary mb-3">Knowledge Base Coming Soon</h3>
          <p className="text-muted-foreground">
            Our team is preparing high-value articles, compliance updates, and financial management guides. Check back soon for regular updates.
          </p>
        </div>
      </div>
    </div>
  );
}
