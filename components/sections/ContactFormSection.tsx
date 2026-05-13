"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, MapPin, Phone, Mail } from "lucide-react";
import { ContactMap } from "@/components/shared/ContactMap";
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
  {
    icon: ShieldCheck,
    title: "Certificare ANCPI",
    description: "Toți inginerii noștri sunt autorizați de Agenția Națională de Cadastru și Publicitate Imobiliară (Clasa A și B).",
  },
  {
    icon: Zap,
    title: "Timp de Răspuns Rapid",
    description: "Înțelegem urgența proiectelor imobiliare. Documentația este procesată și depusă în cel mai scurt timp legal posibil.",
  },
  {
    icon: Globe,
    title: "Acoperire Regională",
    description: "Operăm în toată țara, cu accent pe zonele metropolitane mari, oferind expertiză locală și logistică eficientă.",
  },
];

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
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
    <section className="section-padding bg-white" id="contact">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="Consultanță Gratuită"
          subtitle="Trimite-ne detaliile proiectului tău și un specialist te va contacta în maxim 24 de ore."
        />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-ink">
                    Nume Complet <span className="text-brand-pink">*</span>
                  </label>
                  <Input placeholder="Ion Popescu" {...register("numeComplet")} />
                  {errors.numeComplet && (
                    <p className="mt-1 text-xs text-red-500">{errors.numeComplet.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-ink">
                    Telefon <span className="text-brand-pink">*</span>
                  </label>
                  <Input placeholder="07XX XXX XXX" type="tel" {...register("telefon")} />
                  {errors.telefon && (
                    <p className="mt-1 text-xs text-red-500">{errors.telefon.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy-ink">
                  Email <span className="text-brand-pink">*</span>
                </label>
                <Input placeholder="email@exemplu.ro" type="email" {...register("email")} />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-ink">
                    Tip Serviciu <span className="text-brand-pink">*</span>
                  </label>
                  <Controller
                    name="tipServiciu"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Alege serviciul" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cadastru">Cadastru & Intabulare</SelectItem>
                          <SelectItem value="topografie">Topografie Inginerească</SelectItem>
                          <SelectItem value="scanare-3d">Scanare Laser 3D</SelectItem>
                          <SelectItem value="altul">Altul</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.tipServiciu && (
                    <p className="mt-1 text-xs text-red-500">{errors.tipServiciu.message}</p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy-ink">
                    Localitate <span className="text-brand-pink">*</span>
                  </label>
                  <Controller
                    name="localitate"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Alege localitatea" />
                        </SelectTrigger>
                        <SelectContent>
                          {counties.map((c) => (
                            <SelectItem key={c.slug} value={c.slug}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.localitate && (
                    <p className="mt-1 text-xs text-red-500">{errors.localitate.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy-ink">
                  Mesaj <span className="text-brand-pink">*</span>
                </label>
                <Textarea
                  placeholder="Descrieți pe scurt proprietatea și serviciul dorit..."
                  {...register("mesaj")}
                />
                {errors.mesaj && (
                  <p className="mt-1 text-xs text-red-500">{errors.mesaj.message}</p>
                )}
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdpr"
                  {...register("gdpr")}
                  className="mt-0.5 h-4 w-4 rounded border-[#E5E9F2] text-brand-cyan accent-brand-cyan cursor-pointer flex-shrink-0"
                />
                <label htmlFor="gdpr" className="text-sm text-text-muted cursor-pointer">
                  Sunt de acord cu prelucrarea datelor conform{" "}
                  <a href="/politica-confidentialitate" className="text-brand-cyan hover:underline">
                    Politicii de Confidențialitate
                  </a>
                  . <span className="text-brand-pink">*</span>
                </label>
              </div>
              {errors.gdpr && (
                <p className="text-xs text-red-500">{errors.gdpr.message}</p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Se trimite..." : "Trimite Solicitare"}
              </Button>
            </form>
          </motion.div>

          {/* Right column: Map + Contact Info + Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Map */}
            <ContactMap />

            {/* Contact Info Card */}
            <div className="rounded-2xl border border-[#E5E9F2] bg-white p-5 card-shadow">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-navy-ink">
                Date de Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10">
                    <MapPin className="h-4 w-4 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-navy-ink mb-0.5">Adresă</div>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=43.8275,28.5821"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-brand-cyan transition-colors leading-relaxed"
                    >
                      Șos. Constanței nr. 19, Mangalia, jud. Constanța
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-violet/10">
                    <Phone className="h-4 w-4 text-brand-violet" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-navy-ink mb-0.5">Telefon</div>
                    <a
                      href="tel:+40770556677"
                      className="text-xs text-text-muted hover:text-brand-violet transition-colors"
                    >
                      0770 55 66 77
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-pink/10">
                    <Mail className="h-4 w-4 text-brand-pink" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-navy-ink mb-0.5">Email</div>
                    <a
                      href="mailto:office@vibe-design.ro"
                      className="text-xs text-text-muted hover:text-brand-pink transition-colors"
                    >
                      office@vibe-design.ro
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Compact Trust Points */}
            <div className="rounded-2xl border border-[#E5E9F2] bg-white p-5 card-shadow space-y-3">
              {trustPoints.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg gradient-brand">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-ink mb-0.5">{title}</p>
                    <p className="text-xs text-text-muted leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
