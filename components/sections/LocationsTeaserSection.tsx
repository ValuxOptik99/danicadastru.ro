"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

const MAP_VIEWBOX = { width: 800, height: 554 };

const ROMANIA_PATH =
  "M225.9,66.8 L259.9,43.4 L308.5,55.6 L359.0,55.9 L395.6,82.5 L422.3,65.9 L480.5,55.4 L499.9,30.0 L533.5,30.0 L557.4,40.6 L582.0,72.6 L606.8,118.8 L652.2,183.7 L654.7,231.5 L646.3,278.1 L660.4,327.8 L695.5,347.9 L732.5,335.2 L768.3,349.1 L770.0,377.2 L731.8,400.6 L708.0,390.4 L686.0,521.9 L639.8,510.5 L582.4,470.8 L489.8,496.2 L450.8,524.0 L335.3,518.2 L222.0,464.4 L207.3,445.4 L225.6,426.7 L206.1,413.4 L181.4,437.8 L135.6,406.2 L129.4,361.3 L81.5,335.6 L72.6,301.0 L30.0,258.1 L93.1,237.4 L140.6,163.6 L177.8,89.7 L225.9,66.8 Z";

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
  { name: "Cluj-Napoca", x: 297.8, y: 187.9, anchor: "top"    },
  { name: "Iași",        x: 609.7, y: 145.7, anchor: "right"  },
  { name: "Timișoara",   x: 107.8, y: 299.4, anchor: "left"   },
  { name: "București",   x: 492.8, y: 443.5, anchor: "bottom" },
  { name: "Constanța",   x: 692.0, y: 471.1, anchor: "right"  },
  { name: "Brașov",      x: 453.4, y: 309.3, anchor: "right"  },
  { name: "Craiova",     x: 311.2, y: 454.0, anchor: "left"   },
  { name: "Galați",      x: 646.0, y: 333.5, anchor: "right"  },
  { name: "Oradea",      x: 163.7, y: 155.1, anchor: "left"   },
  { name: "Sibiu",       x: 339.4, y: 294.0, anchor: "left"   },
  { name: "Baia Mare",   x: 294.3, y: 91.1,  anchor: "top"    },
  { name: "Suceava",     x: 504.8, y: 92.0,  anchor: "top"    },
];

const secondaryCities: SecondaryCity[] = [
  { name: "Arad",                  x: 116.3, y: 251.6 },
  { name: "Târgu Mureș",           x: 371.6, y: 212.5 },
  { name: "Bacău",                 x: 556.3, y: 210.2 },
  { name: "Ploiești",              x: 486.0, y: 388.3 },
  { name: "Pitești",               x: 395.8, y: 396.6 },
  { name: "Drobeta-Turnu Severin", x: 221.9, y: 421.8 },
  { name: "Tulcea",                x: 705.0, y: 362.8 },
  { name: "Zalău",                 x: 236.0, y: 145.0 },
  { name: "Bistrița",              x: 367.0, y: 152.0 },
  { name: "Piatra Neamț",          x: 513.0, y: 175.0 },
  { name: "Vaslui",                x: 619.0, y: 206.0 },
  { name: "Focșani",               x: 577.0, y: 310.0 },
  { name: "Buzău",                 x: 548.0, y: 371.0 },
  { name: "Alba Iulia",            x: 294.0, y: 269.0 },
  { name: "Deva",                  x: 242.0, y: 291.0 },
  { name: "Miercurea Ciuc",        x: 468.0, y: 237.0 },
  { name: "Râmnicu Vâlcea",        x: 357.0, y: 377.0 },
  { name: "Reșița",                x: 163.0, y: 355.0 },
  { name: "Alexandria",            x: 432.0, y: 501.0 },
  { name: "Giurgiu",               x: 482.0, y: 510.0 },
];

const LABEL_OFFSETS: Record<LabelAnchor, { dx: number; dy: number; transform: string }> = {
  right:  { dx: 14,  dy: 0,   transform: "translate(0, -50%)" },
  left:   { dx: -14, dy: 0,   transform: "translate(-100%, -50%)" },
  top:    { dx: 0,   dy: -14, transform: "translate(-50%, -100%)" },
  bottom: { dx: 0,   dy: 14,  transform: "translate(-50%, 0)" },
};

export function LocationsTeaserSection() {
  const [hoveredCity, setHoveredCity] = useState<SecondaryCity | null>(null);

  return (
    <section className="section-padding bg-bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="ACOPERIRE NAȚIONALĂ"
          title="Operăm în Toată România"
          subtitle="Echipa noastră deservește toate reședințele de județ, cu accent pe zonele metropolitane majore."
        />

        <div className="relative mx-auto mb-10 w-full max-w-3xl">
          <svg
            viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
            className="h-auto w-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Harta României cu orașele unde oferim servicii"
            role="img"
          >
            <defs>
              <linearGradient id="ro-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="ro-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            <path
              d={ROMANIA_PATH}
              fill="url(#ro-fill)"
              stroke="url(#ro-stroke)"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Secondary city pins — behind major cities */}
            {secondaryCities.map((city) => (
              <g
                key={city.name}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredCity(city)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <circle cx={city.x} cy={city.y} r="14" fill="transparent" />
                <circle cx={city.x} cy={city.y} r="8" fill="#22D3EE" fillOpacity="0.2" />
                <circle cx={city.x} cy={city.y} r="4" fill="#22D3EE" />
                <circle cx={city.x} cy={city.y} r="2" fill="#FFFFFF" />
              </g>
            ))}

            {/* Major city pins — on top */}
            {majorCities.map((city, i) => (
              <g key={city.name}>
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r="14"
                  fill="#22D3EE"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                  style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                />
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r="14"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0.6, 0], scale: [1, 2.2] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }}
                  style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                />
                <circle cx={city.x} cy={city.y} r="6" fill="#22D3EE" />
                <circle cx={city.x} cy={city.y} r="3" fill="#FFFFFF" />
              </g>
            ))}
          </svg>

          {/* Labels overlay */}
          <div className="pointer-events-none absolute inset-0">
            {/* Major city labels — always visible */}
            {majorCities.map((city, i) => {
              const offset = LABEL_OFFSETS[city.anchor];
              const leftPct = ((city.x + offset.dx) / MAP_VIEWBOX.width) * 100;
              const topPct = ((city.y + offset.dy) / MAP_VIEWBOX.height) * 100;
              return (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="absolute"
                  style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: offset.transform }}
                >
                  <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-navy-900/95 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-xs">
                    <MapPin className="h-2.5 w-2.5 text-brand-cyan sm:h-3 sm:w-3" />
                    {city.name}
                  </div>
                </motion.div>
              );
            })}

            {/* Secondary city hover tooltip */}
            {hoveredCity && (
              <motion.div
                key={hoveredCity.name}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
                style={{
                  left: `${(hoveredCity.x / MAP_VIEWBOX.width) * 100}%`,
                  top: `${((hoveredCity.y - 14) / MAP_VIEWBOX.height) * 100}%`,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-navy-900 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
                  <MapPin className="h-2.5 w-2.5 text-brand-cyan" />
                  {hoveredCity.name}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild variant="brand" size="lg" className="rounded-full">
            <Link href="/localitati">
              <MapPin className="mr-2 h-5 w-5" />
              Vezi toate localitățile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
