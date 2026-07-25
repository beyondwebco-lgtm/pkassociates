import { indiaServices } from "@/data/content";
import { ServiceLayout } from "@/components/service-layout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return indiaServices.services.map((service) => ({
    slug: service.id,
  }));
}

// Next.js page components need to be async or take params properly
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = indiaServices.services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceLayout
      title={service.title}
      description={service.description}
      bulletPoints={service.bulletPoints}
      category="India Services"
      bestFor={service.bestFor}
    />
  );
}
