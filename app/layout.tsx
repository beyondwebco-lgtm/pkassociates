import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const fontHeading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PKA Global | Expert Accounting, Taxation & Advisory",
  description: "PKA Global delivers expert accounting, taxation, business compliance, payroll, advisory, and outsourced finance solutions for businesses across India, the UK, and global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </SmoothScroll>

        {/* AccountingService / Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "PKA Global",
              "description": "PKA Global provides end-to-end accounting, bookkeeping, taxation, payroll, compliance, and outsourced finance solutions.",
              "url": "https://pkaglobal.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit No. 201, 3-84/22, MS Bright Plaza, Plot No. 22",
                "addressLocality": "Puppalguda",
                "addressRegion": "Telangana",
                "postalCode": "500089",
                "addressCountry": "India"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
