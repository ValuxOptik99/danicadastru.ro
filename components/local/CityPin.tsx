"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function CityPin({ city }: { city: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brand-cyan/30"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <div className="flex flex-col items-center gap-1.5">
          <MapPin className="h-11 w-11 text-brand-cyan" />
          <span className="text-base font-semibold text-white">{city}</span>
          <span className="text-[10px] uppercase tracking-wider text-white/50">
            Județul Constanța
          </span>
        </div>
      </div>
    </div>
  );
}
