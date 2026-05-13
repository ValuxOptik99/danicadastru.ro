"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";

// Coordinates projected onto viewBox 800x554 (equirectangular projection with
// cos(lat) correction for Romania, preserving the real geographic aspect ratio).
// City coordinates are derived from their real geographic lon/lat values.
const MAP_VIEWBOX = { width: 800, height: 554 };

const ROMANIA_PATH =
  "M225.9,66.8 L259.9,43.4 L308.5,55.6 L359.0,55.9 L395.6,82.5 L422.3,65.9 L480.5,55.4 L499.9,30.0 L533.5,30.0 L557.4,40.6 L582.0,72.6 L606.8,118.8 L652.2,183.7 L654.7,231.5 L646.3,278.1 L660.4,327.8 L695.5,347.9 L732.5,335.2 L768.3,349.1 L770.0,377.2 L731.8,400.6 L708.0,390.4 L686.0,521.9 L639.8,510.5 L582.4,470.8 L489.8,496.2 L450.8,524.0 L335.3,518.2 L222.0,464.4 L207.3,445.4 L225.6,426.7 L206.1,413.4 L181.4,437.8 L135.6,406.2 L129.4,361.3 L81.5,335.6 L72.6,301.0 L30.0,258.1 L93.1,237.4 L140.6,163.6 L177.8,89.7 L225.9,66.8 Z";

type LabelAnchor = "right" | "left" | "top" | "bottom";

interface City {
  name: string;
  x: number;
  y: number;
  anchor: LabelAnchor;
}

const majorCities: City[] = [
  { name: "Cluj-Napoca", x: 297.8, y: 187.9, anchor: "top" },
  { name: "Iași",        x: 609.7, y: 145.7, anchor: "right" },
  { name: "Timișoara",   x: 107.8, y: 299.4, anchor: "left" },
  { name: "București",   x: 492.8, y: 443.5, anchor: "bottom" },
  { name: "Constanța",   x: 692.0, y: 471.1, anchor: "right" },
];

const LABEL_OFFSETS: Record<LabelAnchor, { dx: number; dy: number; transform: string }> = {
  right:  { dx: 14,  dy: 0,   transform: "translate(0, -50%)" },
  left:   { dx: -14, dy: 0,   transform: "translate(-100%, -50%)" },
  top:    { dx: 0,   dy: -14, transform: "translate(-50%, -100%)" },
  bottom: { dx: 0,   dy: 14,  transform: "translate(-50%, 0)" },
};

export function LocationsTeaserSection() {
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
            aria-label="Harta României cu orașele principale unde oferim servicii"
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

            {majorCities.map((city, i) => (
              <g key={city.name}>
                <motion.circle
                  cx={city.x}
                  cy={city.y}
                  r="14"
                  fill="#22D3EE"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 0, 0.4] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
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
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                  style={{ transformOrigin: `${city.x}px ${city.y}px` }}
                />
                <circle cx={city.x} cy={city.y} r="6" fill="#22D3EE" />
                <circle cx={city.x} cy={city.y} r="3" fill="#FFFFFF" />
              </g>
            ))}
          </svg>

          <div className="pointer-events-none absolute inset-0">
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
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: offset.transform,
                  }}
                >
                  <div className="flex items-center gap-1 whitespace-nowrap rounded-full bg-navy-900/95 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur-sm sm:text-xs sm:px-3 sm:py-1.5">
                    <MapPin className="h-2.5 w-2.5 text-brand-cyan sm:h-3 sm:w-3" />
                    {city.name}
                  </div>
                </motion.div>
              );
            })}
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
