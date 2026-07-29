"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "UK Outsourcing", href: "/uk-outsourcing" },
  { name: "Global Solutions", href: "/global-services" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold font-heading text-xl group-hover:bg-accent transition-colors flex-shrink-0">
            PK
          </div>
          <span className={`font-heading font-bold text-lg sm:text-xl tracking-tight ${isScrolled || pathname !== '/' ? 'text-foreground' : 'text-primary'}`}>
            & Associates
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-accent ${
                  isActive ? "text-accent font-semibold" : isScrolled || pathname !== '/' ? "text-foreground/80" : "text-primary/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 px-6">
              Contact <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          {/* Mobile Drawer */}
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="xl:hidden h-11 w-11 min-h-[44px] min-w-[44px] flex items-center justify-center" />}>
              <Menu className="w-6 h-6" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[360px] sm:w-[400px] bg-white border-l p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-12">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`text-lg font-heading transition-colors hover:text-accent ${
                          isActive ? "text-accent font-bold" : "text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-primary hover:bg-accent text-white h-12 text-base font-semibold">
                    Contact
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
