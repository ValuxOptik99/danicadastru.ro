"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, Zap, MapPinned, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { counties } from "@/lib/data/counties";
import { toast } from "@/components/ui/use-toast";

const schema = z.object({
  numeComplet: z.string().min(2, "Numele trebuie să aibă cel puțin 2 caractere"),
  telefon: z.string().min(10, "Număr de telefon invalid"),
  email: z.string().email("Email invalid"),
  tipServiciu: z.string().min(1, "Alege un serviciu"),
  localitate: z.string().min(1, "Alege o localitate"),
  mesaj: z.string().min(10, "Mesajul trebuie să aibă cel puțin 10 caractere"),
  gdpr: z.boolean().refine((v) => v === true, "Trebuie să accepți prelucrarea datelor"),
});

type FormData = z.infer<typeof schema>;

const trustPoints = [
  { icon: ShieldCheck, title: "Certificare ANCPI",    sub: "Ingineri autorizați Clasa A și B" },
  { icon: Zap,         title: "Răspuns Rapid",         sub: "Procesare în maxim 24 de ore" },
  { icon: MapPinned,   title: "Acoperire Națională",   sub: "Toate reședințele de județ" },
];

const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=43.8138924,28.5824559";

export function ContactFormSection() {
  const searchParams = useSearchParams();
  const preselectedCity = searchParams.get("oras");
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (preselectedCity) {
      const match = counties.find((c) => c.slug === preselectedCity);
      if (match) setValue("localitate", match.slug);
    }
  }, [preselectedCity, setValue]);

  const onSubmit = async (data: FormData) => {
    console.log("Contact form submission:", data);
    await new Promise((r) => setTimeout(r, 800));
    reset();
    toast({
      title: "Mesaj trimis cu succes!",
      description: "Un specialist te va contacta în maxim 24 de ore.",
      variant: "success",
    });
  };

  return (
    <section className="section-padding bg-bg-muted" id="contact">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="Consultanță Gratuită"
          subtitle="Trimite-ne detaliile proiectului tău și un specialist te va contacta în maxim 24 de ore."
        />

        {/* MAP BANNER */}
        <div className="relative mt-10 h-[200px] overflow-hidden rounded-2xl border border-[#E5E9F2] shadow-[0_4px_24px_rgba(11,20,55,0.06)] md:h-[240px] mb-6">
          <iframe
            src="https://www.google.com/maps?q=43.8138924,28.5824559&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="DANI Cadastru — Șos. Constanței nr. 19, Mangalia"
            className="h-full w-full"
          />

          {/* Brand badge — top-left */}
          <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-navy-900/95 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
            DANI Cadastru · Mangalia
          </div>

          {/* CTA — bottom-right */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-navy-ink shadow-lg transition hover:bg-bg-muted"
          >
            <ExternalLink className="h-3 w-3" />
            Deschide în Maps
          </a>
        </div>

        {/* FORM + DARK CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.45fr,1fr] gap-6">

          {/* FORM */}
          <div className="bg-white rounded-2xl border border-[#E5E9F2] shadow-[0_4px_24px_rgba(11,20,55,0.06)] p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Nume Complet <span className="text-brand-pink">*</span>
                  </label>
                  <Input placeholder="Ion Popescu" {...register("numeComplet")} />
                  {errors.numeComplet && <p className="mt-1 text-xs text-red-500">{errors.numeComplet.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Telefon <span className="text-brand-pink">*</span>
                  </label>
                  <Input placeholder="07XX XXX XXX" type="tel" {...register("telefon")} />
                  {errors.telefon && <p className="mt-1 text-xs text-red-500">{errors.telefon.message}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                  Email <span className="text-brand-pink">*</span>
                </label>
                <Input placeholder="email@exemplu.ro" type="email" {...register("email")} />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Tip Serviciu <span className="text-brand-pink">*</span>
                  </label>
                  <Controller
                    name="tipServiciu"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger><SelectValue placeholder="Alege serviciul" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cadastru">Cadastru & Intabulare</SelectItem>
                          <SelectItem value="topografie">Topografie Inginerească</SelectItem>
                          <SelectItem value="scanare-3d">Scanare Laser 3D</SelectItem>
                          <SelectItem value="altul">Altul</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.tipServiciu && <p className="mt-1 text-xs text-red-500">{errors.tipServiciu.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Localitate <span className="text-brand-pink">*</span>
                  </label>
                  <Controller
                    name="localitate"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger><SelectValue placeholder="Alege localitatea" /></SelectTrigger>
                        <SelectContent>
                          {counties.map((c) => (
                            <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.localitate && <p className="mt-1 text-xs text-red-500">{errors.localitate.message}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                  Mesaj <span className="text-brand-pink">*</span>
                </label>
                <Textarea
                  placeholder="Descrieți pe scurt proprietatea și serviciul dorit..."
                  rows={4}
                  {...register("mesaj")}
                />
                {errors.mesaj && <p className="mt-1 text-xs text-red-500">{errors.mesaj.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdpr"
                  {...register("gdpr")}
                  className="mt-0.5 h-4 w-4 rounded border-[#E5E9F2] accent-brand-cyan cursor-pointer flex-shrink-0"
                />
                <label htmlFor="gdpr" className="text-sm text-text-muted cursor-pointer">
                  Sunt de acord cu prelucrarea datelor conform{" "}
                  <a href="/politica-confidentialitate" className="text-brand-cyan hover:underline">
                    Politicii de Confidențialitate
                  </a>. <span className="text-brand-pink">*</span>
                </label>
              </div>
              {errors.gdpr && <p className="text-xs text-red-500">{errors.gdpr.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "linear-gradient(to right, #D946EF, #EC4899)" }}
              >
                {isSubmitting ? "Se trimite..." : "Trimite Solicitare"}
              </button>
            </form>
          </div>

          {/* DARK INFO CARD */}
          <div className="bg-navy-900 rounded-2xl p-6 lg:p-7 text-white relative overflow-hidden">
            {/* Decorative radial */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at top right, rgba(34,211,238,0.08), transparent 60%)" }} />

            <h3 className="text-base font-bold mb-5 relative">Date de Contact</h3>

            <div className="space-y-1 relative">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 py-2 transition hover:opacity-90">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/15">
                  <MapPin className="h-4 w-4 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">Adresă</div>
                  <div className="mt-0.5 text-sm font-medium leading-snug text-white">
                    Șos. Constanței nr. 19<br />Mangalia, jud. Constanța
                  </div>
                </div>
              </a>

              <a href="tel:0770556677" className="flex items-start gap-3 py-2 transition hover:opacity-90">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-violet/15">
                  <Phone className="h-4 w-4 text-brand-violet" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">Telefon</div>
                  <div className="mt-0.5 text-sm font-medium text-white">0770 55 66 77</div>
                </div>
              </a>

              <a href="mailto:office@danicadastru.ro" className="flex items-start gap-3 py-2 transition hover:opacity-90">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-pink/15">
                  <Mail className="h-4 w-4 text-brand-pink" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50">Email</div>
                  <div className="mt-0.5 text-sm font-medium text-white">office@danicadastru.ro</div>
                </div>
              </a>
            </div>

            <div className="my-6 h-px bg-white/10 relative" />

            <div className="relative">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-cyan mb-3">
                De Ce Noi
              </div>
              <div className="space-y-3">
                {trustPoints.map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/15">
                      <Icon className="h-4 w-4 text-brand-cyan" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{title}</div>
                      <div className="text-xs text-white/60 leading-snug">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
