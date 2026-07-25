import { ukOutsourcing } from "@/data/content";
import { ServiceLayout } from "@/components/service-layout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ukOutsourcing.services.map((service) => ({
    slug: service.id,
  }));
}

export default async function UKServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = ukOutsourcing.services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceLayout
      title={service.title}
      description={service.description}
      bulletPoints={service.bulletPoints}
      category="UK Outsourcing"
      bestFor={service.bestFor}
    />
  );
}
