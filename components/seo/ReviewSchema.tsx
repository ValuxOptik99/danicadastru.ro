import { googleReviews, REVIEWS_META } from "@/lib/data/reviews";

export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DANI Cadastru",
    "image": "https://danicadastru.ro/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Șos. Constanței nr. 19",
      "addressLocality": "Mangalia",
      "addressRegion": "Constanța",
      "addressCountry": "RO",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": REVIEWS_META.averageRating.toFixed(1),
      "reviewCount": REVIEWS_META.totalCount,
      "bestRating": "5",
      "worstRating": "1",
    },
    "review": googleReviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5",
      },
      "reviewBody": r.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
