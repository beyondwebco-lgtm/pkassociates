<!-- BEGIN:nextjs-agent-rules -->
# Next.js Agent Guidelines & Project Context

This file defines the complete technical and business context for AI agents working on the PK & Associates project.

---

## 1. Project Overview & Business Purpose
* **Project Name:** PK & Associates Accounting & Business Advisory Website
* **Business Purpose:** Professional accounting, taxation, payroll, regulatory compliance, and outsourced finance firm serving clients in India, the UK, the UAE, Europe, Australia, and international markets.
* **Content Philosophy:** Lead with client outcomes (financial visibility, reduced risk, operational efficiency, sustainable growth) rather than simple lists of tasks or services.

---

## 2. Active Brand & Naming Rules
* **Active Brand:** `PK & Associates`
* **Rule:** Never mix "PK & Associates" and "PKA Global". Use `PK & Associates` consistently across headers, footers, copy, page titles, meta descriptions, Open Graph tags, and structured data.
* **Copyright Notice:** `© [Year] PK & Associates. All rights reserved.`

---

## 3. Website Pages & Section Structure
* **Primary Header Navigation:**
  1. Home (`/`)
  2. About (`/about`)
  3. Services (`/services`)
  4. UK Outsourcing (`/uk-outsourcing`)
  5. Global Solutions (`/global-services`)
  6. Industries (`/industries`)
  7. Resources (`/resources`)
  8. Contact button (`/contact`)

* **Landing Pages & Information Routes:**
  * Careers: `/careers`
  * Resources & Insights: `/resources`
  * Contact & Consultation: `/contact`
  * Legal Drafts: `/privacy-policy`, `/terms`, `/disclaimer`

* **Dynamic Category & Detail Routes:**
  * India Services: `/services/[slug]`
  * UK Outsourcing: `/uk-outsourcing/[slug]`
  * Global Solutions: `/global-services/[slug]`
  * Industries: `/industries/[slug]`

* **Homepage Section Order (`app/page.tsx`):**
  1. Hero Section
  2. About Preview (`<AboutPreview />`)
  3. Why Choose Us (`<WhyChooseUs />`)
  4. Services Overview (`<ServicesOverview />`)
  5. UK Outsourcing Preview (`<UKOutsourcingPreview />`)
  6. Industries Section (`<IndustriesSection />`)
  7. Global Reach (`<GlobalServices />`)
  8. Software Expertise (`<SoftwareExpertise />`)
  9. How We Work (`<ProcessSection />`)
  10. FAQ (`<FAQSection />`)
  11. Final CTA (`<FinalCTA />`)
  *(Note: `<TestimonialsSection />` is cleanly hidden until verified client reviews are available).*

---

## 4. Tech Stack & Framework
* **Framework:** Next.js 16 (App Router, Turbopack, TSX)
* **Styling:** Tailwind CSS, Radix UI Primitives (Sheet, Accordion), Lucide React Icons
* **Animations:** Framer Motion
* **Language:** TypeScript
* **Package Manager:** npm

---

## 5. Directory & File Organization
* `app/`: Next.js pages, API/route handlers, and root layout (`layout.tsx`, `page.tsx`).
* `components/`: Modular React components (`navbar.tsx`, `footer.tsx`, `about-preview.tsx`, `faq-section.tsx`, `final-cta.tsx`, `global-services.tsx`, `industries-section.tsx`, `process-section.tsx`, `services-overview.tsx`, `software-expertise.tsx`, `testimonials-section.tsx`, `uk-outsourcing-preview.tsx`, `why-choose-us.tsx`, `ui/`).
* `data/`: Centralized content structure (`data/content.ts`).

---

## 6. Design System & UI Specifications
* **Typography:**
  * Heading Font: `Plus_Jakarta_Sans` (`--font-heading`)
  * Body Font: `Inter` (`--font-sans`)
* **Color Palette:**
  * Primary: Deep Indigo / Navy (`text-primary`, `bg-primary`)
  * Accent: Vibrant Amber / Teal (`text-accent`, `bg-accent`)
  * Secondary: Light Slate / Muted Tint (`bg-secondary`)
  * Muted: Slate (`text-muted-foreground`)
* **Buttons:**
  * Primary CTA: `Button` (`bg-primary text-primary-foreground`)
  * Accent CTA: `Button` (`bg-accent text-accent-foreground`)
  * Secondary/Outline: `Button` (`variant="outline"`)
* **Breakpoints:** Standard Tailwind (`sm`: 640px, `md`: 768px, `lg`: 1024px, `xl`: 1280px, `2xl`: 1536px).

---

## 7. SEO & Accessibility Standards
* **Heading Hierarchy:** One `H1` per page. Homepage uses `"Accounting, Tax & Business Compliance Solutions for Growing Businesses"`.
* **Structured Data (JSON-LD):**
  * Site-wide `AccountingService` schema in `app/layout.tsx`.
  * `FAQPage` schema embedded in `components/faq-section.tsx`.
* **Accessibility:** Full keyboard focus states, Radix UI ARIA accordions, semantic HTML5 elements, and proper tap targets on mobile.

---

## 8. Development & Build Commands
```bash
# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Build for production
npm run build
```

---

## 9. Restrictions & Unsupported Claims
* **Do NOT claim:** "100% compliant", "guaranteed savings", "number one", "error-free", "bank-level security", or "instant onboarding".
* **Do NOT invent:** Client testimonials, star ratings, software partnerships, job vacancies, or physical office locations.
* **Legal Notice:** Draft legal pages (`/privacy-policy`, `/terms`, `/disclaimer`) require client legal counsel verification prior to final deployment.
<!-- END:nextjs-agent-rules -->
