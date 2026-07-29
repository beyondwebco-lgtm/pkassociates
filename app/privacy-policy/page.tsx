import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PK & Associates",
  description: "Privacy Policy for PK & Associates accounting and business advisory services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PK & Associates",
    description: "Privacy Policy for PK & Associates accounting and business advisory services.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-4xl text-foreground">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last Updated: July 2026
        </p>

        <div className="space-y-8 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">1. Information We Collect</h2>
            <p>
              We collect information provided directly by users through contact and consultation forms, including name, email address, phone number, company name, and details regarding your accounting or compliance requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">2. How Information is Used</h2>
            <p>
              The information gathered is strictly used to respond to service inquiries, evaluate business requirements, prepare service proposals, and deliver professional accounting, tax, or advisory services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">3. Communication & Inquiries</h2>
            <p>
              By submitting your details via our website, you consent to our team contacting you regarding your request. We do not sell or rent personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">4. Data Retention & Security</h2>
            <p>
              We maintain administrative, technical, and physical safeguards designed to protect personal and financial data against unauthorized access, loss, or alteration. Data is retained only for as long as necessary to fulfill the operational and statutory purposes for which it was collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">5. Third-Party Services</h2>
            <p>
              Our website may contain links or integrations to trusted third-party providers (such as cloud hosting or communication infrastructure). These third parties operate under their own privacy standards and protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-primary mb-3">6. Your Rights & Contact</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data held by us. For any privacy-related questions or requests, please contact PK & Associates through our official contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
