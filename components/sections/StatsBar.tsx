"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  decimals?: number;
}

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "ANI EXPERIENȚĂ" },
  { value: 2.5, suffix: "k", label: "PROIECTE FINALIZATE", decimals: 1 },
  { value: 100, suffix: "%", label: "ACURATEȚE CERTIFICATĂ" },
  { value: 15, suffix: "", label: "SPECIALIȘTI AUTORIZAȚI" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy-900 py-10 lg:py-14">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
