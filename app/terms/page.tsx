import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | PK & Associates",
  description: "Terms and Conditions governing the use of PK & Associates website and services.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms and Conditions | PK & Associates",
    description: "Terms and Conditions governing the use of PK & Associates website and services.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl text-foreground">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-6 break-words">
          Terms and Conditions
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: July 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">2. Service Scope & Engagements</h2>
            <p>
              Information presented on this website is for general informational purposes. Formal engagement for accounting, taxation, payroll, or business compliance services requires a signed service agreement or engagement letter defining specific terms, scope, and deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">3. Intellectual Property</h2>
            <p>
              All content, brand names, logos, text, graphics, and layout structures on this website are the property of PK & Associates and protected by applicable copyright and intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">4. Limitation of Liability</h2>
            <p>
              PK & Associates strives to maintain accurate and up-to-date website information, but makes no representations or warranties regarding completeness or timeliness. We shall not be liable for any indirect or consequential damages arising from site access or reliance on website content.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
