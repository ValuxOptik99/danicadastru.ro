"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const STORAGE_KEY = "dani-loader-shown";
const REVEAL_MS = 1800;
const HOLD_MS = 400;
const FADE_MS = 600;

export function SiteLoader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) return;

    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(true);

    const fadeTimer = setTimeout(() => setFading(true), REVEAL_MS + HOLD_MS);
    return () => clearTimeout(fadeTimer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
      onAnimationComplete={() => { if (fading) setVisible(false); }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0E27]"
      style={{ pointerEvents: fading ? "none" : "auto" }}
      aria-hidden="true"
    >
      {/* Logo container */}
      <div className="relative h-[80px] w-[280px] sm:h-[100px] sm:w-[360px]">
        {/* Colored logo — bottom layer, always visible */}
        <Image
          src="/logo/logo_dani_scris.png"
          alt=""
          fill
          priority
          sizes="360px"
          className="object-contain"
        />
        {/* White silhouette on top — clips away left-to-right */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(0 0 0 0%)" }}
          animate={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: REVEAL_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
          style={{ willChange: "clip-path" }}
        >
          <Image
            src="/logo/logo_dani_scris.png"
            alt=""
            fill
            priority
            sizes="360px"
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="mt-8 h-[2px] w-[200px] rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #2563EB 0%, #22D3EE 50%, #EC4899 100%)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: REVEAL_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>

      <span className="sr-only">Se încarcă pagina…</span>
    </motion.div>
  );
}
