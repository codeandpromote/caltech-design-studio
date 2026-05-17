"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { SHIMMER_DARK } from "@/lib/blur";
import { PREVIOUS_PROJECTS } from "@/lib/previous-projects";

type Props = {
  variant?: "full" | "compact";
};

const HOMEPAGE_PICKS = [
  "souk-tajbengal",
  "glook-bar",
  "basera-banquets",
  "mahabharat-motors",
  "hi-living-aquarium",
  "hi-bedroom-artdresser",
  "khadims-showroom",
  "axis-foodcourt",
];

export default function PreviousProjects({ variant = "full" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const projects =
    variant === "compact"
      ? HOMEPAGE_PICKS.map((id) =>
          PREVIOUS_PROJECTS.find((p) => p.id === id)!
        ).filter(Boolean)
      : PREVIOUS_PROJECTS;

  const scrollBy = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const w = t.clientWidth * 0.7;
    gsap.to(t, {
      scrollLeft: t.scrollLeft + dir * w,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const onScroll = () => {
      const cards = t.querySelectorAll<HTMLDivElement>("[data-prev-card]");
      let nearest = 0;
      let min = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const center = r.left + r.width / 2 - window.innerWidth / 2;
        if (Math.abs(center) < min) {
          min = Math.abs(center);
          nearest = i;
        }
      });
      setActive(nearest);
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => t.removeEventListener("scroll", onScroll);
  }, []);

  const eyebrow = variant === "compact" ? "From the Archive" : "Previous Projects";
  const heading =
    variant === "compact" ? (
      <>
        Past work, <span className="italic gold-gradient-text">quietly delivered.</span>
      </>
    ) : (
      <>
        A record of <span className="italic gold-gradient-text">previous interiors.</span>
      </>
    );

  const lede =
    variant === "compact"
      ? "Selected interiors from the studio's earlier portfolio — corporate offices, restaurants, residences and retail."
      : "Two decades of executed interiors across Kolkata, Delhi NCR and beyond — corporate offices, fine-dine restaurants, banquet halls, residential apartments and retail flagships.";

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-ink-900">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
              {eyebrow}
            </div>
            <h2 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="mt-5 text-bone-50/55 text-sm sm:text-base leading-relaxed">
              {lede}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-bone-50/20 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-bone-50/20 flex items-center justify-center hover:bg-gold-400 hover:text-ink-900 hover:border-gold-400 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-5 md:gap-7 overflow-x-auto px-6 md:px-14 pb-6 snap-x snap-mandatory scroll-smooth"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            data-prev-card
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.05 }}
            data-cursor="view"
            className="relative shrink-0 snap-center w-[82vw] sm:w-[55vw] md:w-[44vw] lg:w-[34vw] xl:w-[28vw] rounded-md overflow-hidden border border-bone-50/10 bg-ink-800 group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.img}
                alt={`${p.name}, ${p.location}`}
                fill
                sizes="(max-width:640px) 82vw, (max-width:1024px) 44vw, 30vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={SHIMMER_DARK}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold-300 bg-ink-900/60 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                {p.category}
              </div>
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <h3 className="font-serif text-xl sm:text-2xl text-bone-50 leading-tight">
                {p.name}
              </h3>
              <div className="text-bone-50/55 text-xs sm:text-sm mt-1.5 tracking-wide">
                {p.location}
              </div>
              <p className="text-bone-50/55 text-[13px] sm:text-sm leading-relaxed mt-3">
                {p.note}
              </p>
            </div>
            <div className="absolute bottom-4 right-5">
              <div
                className={
                  "w-2 h-2 rounded-full transition-all " +
                  (i === active ? "bg-gold-400 scale-150" : "bg-bone-50/30")
                }
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
