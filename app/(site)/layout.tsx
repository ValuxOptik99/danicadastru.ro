import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { SiteLoader } from "@/components/loading/SiteLoader";
import { CookieBanner } from "@/components/cookies/CookieBanner";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteLoader />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
