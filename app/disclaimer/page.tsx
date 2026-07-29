import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | PKA Global",
  description: "General disclaimer for website information provided by PKA Global.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | PKA Global",
    description: "General disclaimer for website information provided by PKA Global.",
    url: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl text-foreground">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary mb-6 break-words">
          Disclaimer
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: July 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">1. General Information Only</h2>
            <p>
              The information provided on this website is for general informational and educational purposes only. It does not constitute individualized accounting, tax, financial, or legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">2. Professional Advice Required</h2>
            <p>
              Tax laws, accounting standards, and statutory regulations vary by jurisdiction and change over time. You should consult a qualified professional at PKA Global to obtain advice specific to your business circumstances before making any financial or legal decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">3. Regulatory & Regulatory Changes</h2>
            <p>
              While we endeavor to keep all information current and accurate, PKA Global makes no guarantees regarding the completeness, accuracy, or timeliness of statutory rules or third-party regulatory deadlines mentioned on this site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
