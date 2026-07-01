"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const MAP_VIEWBOX = { width: 500, height: 516 };

const DOBROGEA_PATH =
  "M186.4,42.8 L246.4,30.0 L293.6,104.3 L466.4,124.8 L470.0,204.2 L335.5,227.3 L317.3,263.1 L304.5,329.7 L282.7,375.8 L280.9,401.5 L277.3,422.0 L273.6,465.5 L269.1,483.4 L199.1,486.0 L115.5,486.0 L53.6,429.6 L30.0,386.1 L40.9,334.9 L151.8,332.3 L168.2,245.2 L150.0,183.7 L171.8,119.7 L186.4,42.8 Z";

type LabelAnchor = "right" | "left" | "top" | "bottom";

interface MajorCity {
  name: string;
  x: number;
  y: number;
  anchor: LabelAnchor;
}

interface SecondaryCity {
  name: string;
  x: number;
  y: number;
}

const majorCities: MajorCity[] = [
  { name: "Constanța", x: 278.8, y: 375.0, anchor: "right" },
  { name: "Mangalia",  x: 268.5, y: 466.4, anchor: "right" },
  { name: "Năvodari",  x: 273.5, y: 325.5, anchor: "right" },
  { name: "Medgidia",  x: 213.1, y: 355.6, anchor: "left"  },
  { name: "Cernavodă", x: 168.6, y: 332.0, anchor: "left"  },
  { name: "Hârșova",   x: 153.6, y: 244.3, anchor: "left"  },
];

const secondaryCities: SecondaryCity[] = [
  { name: "Ovidiu",               x: 265.8, y: 351.1 },
  { name: "Valu lui Traian",      x: 256.7, y: 376.7 },
  { name: "Cumpăna",              x: 259.7, y: 389.5 },
  { name: "Lumina",               x: 274.9, y: 346.8 },
  { name: "Agigea",               x: 277.9, y: 398.1 },
  { name: "Techirghiol",          x: 271.5, y: 406.3 },
  { name: "Murfatlar",            x: 238.5, y: 372.4 },
  { name: "Mihail Kogălniceanu",  x: 244.5, y: 325.5 },
  { name: "Tuzla",                x: 277.9, y: 423.7 },
  { name: "Costinești",           x: 277.9, y: 432.2 },
  { name: "Corbu",                x: 283.9, y: 312.6 },
  { name: "Limanu",               x: 259.7, y: 470.6 },
  { name: "2 Mai",                x: 268.8, y: 474.9 },
  { name: "Vama Veche",           x: 267.3, y: 483.4 },
  { name: "Negru Vodă",           x: 199.1, y: 466.4 },
  { name: "Cobadin",              x: 171.8, y: 423.7 },
  { name: "Cogealac",             x: 265.8, y: 278.5 },
  { name: "Adamclisi",            x: 156.7, y: 398.1 },
  { name: "Ostrov",               x: 47.6,  y: 389.5 },
  { name: "Băneasa",              x: 108.2, y: 402.3 },
  { name: "Eforie",               x: 281.4, y: 404.3 },
  { name: "Poarta Albă",          x: 232.4, y: 372.4 },
  { name: "Castelu",              x: 214.2, y: 355.3 },
  { name: "Topraisar",            x: 229.4, y: 436.5 },
];

const LABEL_OFFSETS: Record<LabelAnchor, { dx: number; dy: number; transform: string }> = {
  right:  { dx: 12,  dy: 0,   transform: "translate(0, -50%)"        },
  left:   { dx: -12, dy: 0,   transform: "translate(-100%, -50%)"    },
  top:    { dx: 0,   dy: -12, transform: "translate(-50%, -100%)"    },
  bottom: { dx: 0,   dy: 12,  transform: "translate(-50%, 0)"        },
};

export function LocationsTeaserSection() {
  const [hovered, setHovered] = useState<SecondaryCity | null>(null);

  return (
    <section className="section-padding bg-bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="ZONE DESERVITE"
          title="Prezenți în Toată Dobrogea"
          subtitle="Acoperim județul Constanța și întreaga regiune Dobrogea, cu activitate constantă pe litoral și în interiorul județului. Pentru proiecte mari, lucrăm și în afara regiunii, la cerere."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* MAP — portrait, max ~440px wide */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <svg
              viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
              className="h-auto w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Harta Dobrogei cu localitățile deservite din județul Constanța"
              role="img"
            >
              <defs>
                <linearGradient id="dob-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.06" />
                </linearGradient>
                <linearGradient id="dob-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#2563EB" />
                  <stop offset="50%"  stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              <path
                d={DOBROGEA_PATH}
                fill="url(#dob-fill)"
                stroke="url(#dob-stroke)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Secondary pins — hover tooltip */}
              {secondaryCities.map((city) => (
                <g
                  key={city.name}
                  className="cursor-pointer"
                  onMouseEnter={() => setHovered(city)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle cx={city.x} cy={city.y} r="10" fill="transparent" />
                  <circle cx={city.x} cy={city.y} r="6"  fill="#22D3EE" fillOpacity="0.18" />
                  <circle cx={city.x} cy={city.y} r="3.5" fill="#22D3EE" />
                  <circle cx={city.x} cy={city.y} r="1.5" fill="#FFFFFF" />
                </g>
              ))}

              {/* Major pins — pulsing */}
              {majorCities.map((city, i) => (
                <g key={city.name}>
                  <motion.circle
                    cx={city.x} cy={city.y} r="11" fill="#22D3EE"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                  />
                  <circle cx={city.x} cy={city.y} r="5"   fill="#22D3EE" />
                  <circle cx={city.x} cy={city.y} r="2.5" fill="#FFFFFF" />
                </g>
              ))}
            </svg>

            {/* Labels overlay — positioned absolutely over the SVG */}
            <div className="pointer-events-none absolute inset-0">
              {majorCities.map((city) => {
                const o = LABEL_OFFSETS[city.anchor];
                const left = ((city.x + o.dx) / MAP_VIEWBOX.width) * 100;
                const top  = ((city.y + o.dy) / MAP_VIEWBOX.height) * 100;
                return (
                  <div
                    key={city.name}
                    className="absolute"
                    style={{ left: `${left}%`, top: `${top}%`, transform: o.transform }}
                  >
                    <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-navy-900/95 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur-sm">
                      <MapPin className="h-2.5 w-2.5 text-brand-cyan" />
                      {city.name}
                    </div>
                  </div>
                );
              })}

              {/* Hover tooltip */}
              {hovered && (
                <div
                  className="absolute"
                  style={{
                    left: `${(hovered.x / MAP_VIEWBOX.width) * 100}%`,
                    top: `${((hovered.y - 10) / MAP_VIEWBOX.height) * 100}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-navy-900 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
                    <MapPin className="h-2.5 w-2.5 text-brand-cyan" />
                    {hovered.name}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text + CTA beside the map */}
          <div>
            <h3 className="text-2xl font-bold text-navy-ink lg:text-3xl" style={{ letterSpacing: "-0.01em" }}>
              Cadastru și topografie în toată Dobrogea
            </h3>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              De la stațiunile litoralului până în interiorul județului, echipa DANI
              Cadastru este la dispoziția ta. Lucrăm constant în Constanța, Mangalia,
              Năvodari, Medgidia, Cernavodă, Hârșova și zecile de localități din jur.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-navy-ink">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                Activitate constantă pe întreg litoralul
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-violet" />
                Acoperire completă în interiorul județului
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                Proiecte în afara Dobrogei, la cerere
              </li>
            </ul>

            <div className="mt-8">
              <Button asChild variant="brand" size="lg" className="rounded-full">
                <Link href="/localitati">
                  <MapPin className="mr-2 h-5 w-5" />
                  Vezi toate localitățile deservite
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
