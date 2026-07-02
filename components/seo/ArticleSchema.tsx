interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  coverImage?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export function ArticleSchema(props: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": props.title,
    "description": props.description,
    "image": props.coverImage || "https://danicadastru.ro/og-image.jpg",
    "datePublished": new Date(props.createdAt).toISOString(),
    "dateModified": new Date(props.updatedAt).toISOString(),
    "author": { "@type": "Organization", "name": "DANI Cadastru" },
    "publisher": {
      "@type": "Organization",
      "name": "DANI Cadastru",
      "logo": {
        "@type": "ImageObject",
        "url": "https://danicadastru.ro/logo/logo_dani.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://danicadastru.ro/blog/${props.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
