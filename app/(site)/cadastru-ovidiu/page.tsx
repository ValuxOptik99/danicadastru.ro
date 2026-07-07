import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocalPage } from "@/lib/data/local-pages";
import { buildPageMetadata } from "@/lib/seo";
import { LocalSeoPage } from "@/components/local/LocalSeoPage";

const data = getLocalPage("cadastru-ovidiu");

export const metadata: Metadata = data
  ? buildPageMetadata({ title: data.metaTitle, description: data.metaDescription, path: "/" + data.slug })
  : {};

export default function Page() {
  if (!data) notFound();
  return <LocalSeoPage data={data} />;
}
