import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers | PKA Global",
  description: "Join PKA Global - Build your career with experienced accounting, taxation, and business advisory professionals.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers | PKA Global",
    description: "Join PKA Global - Build your career with experienced accounting, taxation, and business advisory professionals.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-primary mb-6 break-words">
            Build Your Career with Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            We welcome accounting, taxation, payroll, compliance and finance professionals who value accuracy, collaboration and continuous learning.
          </p>

          <div className="bg-secondary/20 p-6 sm:p-8 rounded-3xl border border-border/50 mb-12">
            <h2 className="text-2xl font-heading font-bold text-primary mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At PKA Global, we provide an environment that fosters growth, technical excellence, and client-first commitment across our global services.
            </p>
            <Link href="/contact" className="inline-block w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95 focus-visible:ring-2 focus-visible:ring-ring font-semibold h-12 px-8">
                Submit Your Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
