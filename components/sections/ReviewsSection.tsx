"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { googleReviews, REVIEWS_META } from "@/lib/data/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} din 5 stele`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < count ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-slate-300"}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section-padding bg-bg-muted">
      <div className="container mx-auto px-4 lg:px-6">
        <SectionHeading
          eyebrow="RECENZII GOOGLE"
          title="Ce Spun Clienții Noștri"
          subtitle="Zeci de clienți mulțumiți ne-au acordat încrederea lor. Iată câteva dintre recenziile lăsate pe Google."
        />

        {/* Rating summary bar */}
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-[#E5E9F2] bg-white p-6 shadow-[0_4px_24px_rgba(11,20,55,0.06)] sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-3">
            <GoogleLogo className="h-8 w-8" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-navy-ink">{REVIEWS_META.averageRating.toFixed(1)}</span>
                <Stars count={5} />
              </div>
              <div className="text-xs text-text-muted">
                Bazat pe recenzii Google verificate
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="flex flex-col rounded-2xl border border-[#E5E9F2] bg-white p-5 shadow-[0_2px_12px_rgba(11,20,55,0.05)] transition hover:shadow-[0_6px_24px_rgba(11,20,55,0.09)]"
            >
              {/* Header: avatar + name + Google badge */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${review.avatarColor} text-sm font-semibold text-white`}>
                    {review.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy-ink">{review.name}</div>
                    <div className="flex items-center gap-1 text-xs text-text-muted">
                      <GoogleLogo className="h-3 w-3" />
                      <span>Recenzie Google</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stars + time */}
              <div className="mt-3 flex items-center gap-2">
                <Stars count={review.rating} />
                <span className="text-xs text-text-muted">· {review.timeAgo}</span>
              </div>

              {/* Text */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google profile */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={REVIEWS_META.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-[#E5E9F2] bg-white px-6 py-3.5 text-sm font-semibold text-navy-ink shadow-sm transition hover:border-brand-cyan hover:shadow-md"
          >
            <GoogleLogo className="h-5 w-5" />
            Vezi toate recenziile pe Google
            <ExternalLink className="h-4 w-4 text-text-muted" />
          </a>
          <a
            href={REVIEWS_META.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-violet underline hover:text-brand-pink"
          >
            Lasă-ne și tu o recenzie →
          </a>
        </div>
      </div>
    </section>
  );
}
