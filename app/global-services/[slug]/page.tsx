import { globalServices } from "@/data/content";
import { ServiceLayout } from "@/components/service-layout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return globalServices.services.map((country) => ({
    slug: country.id,
  }));
}

export default async function GlobalServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = globalServices.services.find((c) => c.id === slug);

  if (!country) {
    notFound();
  }

  return (
    <ServiceLayout
      title={country.title}
      description={country.description}
      bulletPoints={country.bulletPoints}
      category="Global Services"
      bestFor={`Businesses operating in ${country.title}`}
    />
  );
}
