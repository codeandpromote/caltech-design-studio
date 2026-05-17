"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { SHIMMER_DARK } from "@/lib/blur";

type Item = { src: string; category: string; w: number; h: number };

const labels: Record<string, string> = {
  all: "All work",
  residential: "Residential",
  bedroom: "Bedroom",
  living: "Living",
  dining: "Dining",
  kitchen: "Kitchen",
  cafe: "Café",
  restaurant: "Restaurant",
  hospitality: "Hospitality",
  office: "Office & Workplace",
  "puja-mandap": "Puja Mandap",
  furniture: "Furniture",
  shop: "Retail",
  previous: "Archive",
  pool: "Outdoor",
};

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState<string>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["all", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [filter, items]
  );

  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, next, prev]);

  return (
    <section className="relative pb-32">
      {/* Filters */}
      <div className="container-x mb-12">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={clsx(
                "px-5 py-2 rounded-full text-sm tracking-wide transition-all border",
                filter === c
                  ? "bg-gold-400 text-ink-900 border-gold-400"
                  : "border-bone-50/15 text-bone-50/75 hover:border-gold-300 hover:text-gold-300"
              )}
            >
              {labels[c] ?? c}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry — CSS columns */}
      <div className="container-x">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5"
        >
          <AnimatePresence>
            {filtered.map((it, i) => (
              <motion.button
                key={it.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: (i % 12) * 0.03 }}
                onClick={() => setOpenIdx(i)}
                data-cursor="view"
                className="group relative w-full mb-5 break-inside-avoid rounded-md overflow-hidden border border-bone-50/10 bg-ink-700 block"
                style={{ breakInside: "avoid" }}
              >
                <Image
                  src={it.src}
                  alt={it.category}
                  width={it.w}
                  height={it.h}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.04]"
                  placeholder="blur"
                  blurDataURL={SHIMMER_DARK}
                  loading={i < 8 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute left-4 bottom-4 text-[10px] tracking-[0.3em] uppercase text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {labels[it.category]}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[80] bg-ink-900/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenIdx(null);
              }}
              className="absolute top-5 right-5 w-12 h-12 rounded-full border border-bone-50/20 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-bone-50/20 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-bone-50/20 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={filtered[openIdx].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[1400px] aspect-[4/3] md:aspect-[3/2]"
            >
              <Image
                src={filtered[openIdx].src}
                alt=""
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center text-bone-50/55 text-xs tracking-[0.3em] uppercase">
                {labels[filtered[openIdx].category]} · {openIdx + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
