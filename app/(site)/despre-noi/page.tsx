import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { DespreNoiContent } from "@/components/sections/DespreNoiContent";

export const metadata: Metadata = buildPageMetadata({
  title: "Despre Noi — Experți în Cadastru și Topografie din Dobrogea",
  description:
    "DANI Cadastru — firmă autorizată ANCPI clasa A și B, activă din 2016. Peste 3.000 de documentații aprobate în Constanța, Mangalia și toată România.",
  path: "/despre-noi",
});

export default function DespreNoiPage() {
  return <DespreNoiContent />;
}
