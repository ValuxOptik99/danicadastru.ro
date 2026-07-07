"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const MAP_VIEWBOX = { width: 540, height: 432 };

// Județul Constanța outline — Black Sea coast (E), Danube (W), Tulcea border (N), Bulgaria (S).
const CONSTANTA_PATH =
  "M195.9,41.8 L222.5,25.0 L261.8,28.9 L315.1,32.8 L347.3,44.5 L374.0,68.0 L395.0,91.4 L379.6,153.9 L368.4,220.3 L367.0,271.1 L362.7,314.0 L357.1,360.9 L348.7,407.0 L309.5,405.8 L253.4,403.1 L197.3,400.0 L135.6,395.3 L90.7,388.3 L68.3,341.4 L15.0,278.9 L48.7,239.8 L110.4,212.5 L172.0,179.3 L194.5,146.1 L177.7,107.0 L186.1,71.9 L195.9,41.8 Z";

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
  { name: "Constanța", x: 362.3, y: 242.4, anchor: "right" },
  { name: "Mangalia",  x: 346.4, y: 381.7, anchor: "right" },
  { name: "Năvodari",  x: 354.2, y: 186.4, anchor: "right" },
  { name: "Medgidia",  x: 260.9, y: 212.8, anchor: "left"  },
  { name: "Cernavodă", x: 192.4, y: 176.9, anchor: "left"  },
  { name: "Hârșova",   x: 169.2, y: 43.2,  anchor: "left"  },
];

const secondaryCities: SecondaryCity[] = [
  { name: "Eforie",          x: 366.3, y: 287.1 },
  { name: "Techirghiol",     x: 351.1, y: 290.2 },
  { name: "Costinești",      x: 360.9, y: 329.7 },
  { name: "Vama Veche",      x: 344.5, y: 407.8 },
  { name: "Ovidiu",          x: 342.2, y: 206.0 },
  { name: "Murfatlar",       x: 300.1, y: 238.5 },
  { name: "Valu lui Traian", x: 328.2, y: 245.0 },
  { name: "Cobadin",         x: 197.3, y: 316.7 },
  { name: "Negru Vodă",      x: 239.4, y: 381.7 },
  { name: "Adamclisi",       x: 173.9, y: 277.6 },
  { name: "Ostrov",          x: 23.4,  y: 278.9 },
  { name: "Băneasa",         x: 99.1,  y: 284.1 },
  { name: "Cogealac",        x: 342.2, y: 95.3  },
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
          title="Prezenți în Tot Județul Constanța"
          subtitle="Acoperim întreg județul Constanța, cu activitate constantă pe litoral și în interiorul județului. Pentru proiecte mari, lucrăm și în afara județului, la cerere."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* MAP */}
          <div className="relative mx-auto w-full max-w-[440px]">
            <svg
              viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
              className="h-auto w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Harta județului Constanța cu localitățile deservite"
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
                d={CONSTANTA_PATH}
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
              Cadastru și topografie în tot județul
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
                Proiecte în afara județului, la cerere
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
