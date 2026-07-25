import Link from "next/link";
import { indiaServices, ukOutsourcing, industries, globalServices } from "@/data/content";

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-border/50 pb-16">
        
        {/* Brand & Socials */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <span className="font-heading text-2xl font-bold text-primary tracking-tight">PK & Associates</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Delivering expert accounting, taxation, and advisory solutions for businesses across India, the UK, and global markets.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
          </div>
        </div>

        {/* Quick Links & Industries */}
        <div>
          <h3 className="font-heading font-bold text-primary mb-6">Quick Links</h3>
          <ul className="space-y-3 mb-8">
            <li><Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
          </ul>

          <h3 className="font-heading font-bold text-primary mb-6">Industries</h3>
          <ul className="space-y-3">
            {industries.slice(0, 6).map(industry => (
              <li key={industry.id}>
                <Link href={`/industries/${industry.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {industry.name}
                </Link>
              </li>
            ))}
            <li><Link href="/industries" className="text-sm text-accent font-semibold hover:underline">View All Industries &rarr;</Link></li>
          </ul>
        </div>

        {/* India Services */}
        <div>
          <h3 className="font-heading font-bold text-primary mb-6">India Services</h3>
          <ul className="space-y-3">
            {indiaServices.services.slice(0, 8).map(service => (
              <li key={service.id}>
                <Link href={`/services/${service.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
            <li><Link href="/services" className="text-sm text-accent font-semibold hover:underline">View All India Services &rarr;</Link></li>
          </ul>
        </div>

        {/* UK Outsourcing */}
        <div>
          <h3 className="font-heading font-bold text-primary mb-6">UK Outsourcing</h3>
          <ul className="space-y-3">
            {ukOutsourcing.services.slice(0, 8).map(service => (
              <li key={service.id}>
                <Link href={`/uk-outsourcing/${service.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
            <li><Link href="/uk-outsourcing" className="text-sm text-accent font-semibold hover:underline">View All UK Services &rarr;</Link></li>
          </ul>
        </div>

        {/* Global Regions */}
        <div>
          <h3 className="font-heading font-bold text-primary mb-6">Global Services</h3>
          <ul className="space-y-3">
            {globalServices.services.slice(0, 8).map(region => (
              <li key={region.id}>
                <Link href={`/global-services/${region.id}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  {region.title}
                </Link>
              </li>
            ))}
            <li><Link href="/global-services" className="text-sm text-accent font-semibold hover:underline">View All Regions &rarr;</Link></li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} PK & Associates. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
