"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { stock } from "@/lib/stock";
import { SHIMMER_DARK } from "@/lib/blur";

const slides = [
  { img: stock.bedroom.moody,       t: "Bedroom" },
  { img: stock.dining.chandelier,   t: "Dining" },
  { img: stock.cafe.arched,         t: "Café" },
  { img: stock.living.neutral,      t: "Living" },
  { img: stock.kitchen.marble,      t: "Kitchen" },
  { img: stock.office.loft,         t: "Office" },
  { img: stock.restaurant.gold,     t: "Restaurant" },
  { img: stock.bedroom.chandelier,  t: "Bedroom" },
  { img: stock.living.olive,        t: "Living" },
  { img: stock.dining.walnut,       t: "Dining" },
  { img: stock.cafe.edison,         t: "Café" },
  { img: stock.restaurant.moody,    t: "Restaurant" },
  { img: stock.kitchen.brass,       t: "Kitchen" },
  { img: stock.office.creative,     t: "Office" },
  { img: stock.bedroom.tufted,      t: "Bedroom" },
  { img: stock.living.editorial,    t: "Living" },
  { img: stock.dining.brick,        t: "Dining" },
  { img: stock.cafe.plants,         t: "Café" },
  { img: stock.restaurant.industrial, t: "Restaurant" },
  { img: stock.kitchen.industrial,  t: "Kitchen" },
  { img: stock.office.corridor,     t: "Office" },
];

export default function InteriorsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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
      const cards = t.querySelectorAll<HTMLDivElement>("[data-slide]");
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

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
              Recent Work
            </div>
            <h2 className="h-display text-3xl sm:text-4xl md:text-6xl">
              Selected <span className="italic gold-gradient-text">interiors.</span>
            </h2>
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
        {slides.map((s, i) => (
          <motion.div
            key={s.img + i}
            data-slide
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.05 }}
            className="relative shrink-0 snap-center w-[78vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] xl:w-[28vw] aspect-[4/5] rounded-md overflow-hidden border border-bone-50/10 bg-ink-700 group"
          >
            <Image
              src={s.img}
              alt={s.t}
              fill
              sizes="(max-width:640px) 78vw, (max-width:1024px) 42vw, 30vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={SHIMMER_DARK}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
            <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-300 mb-1.5">
                  {s.t}
                </div>
                <div className="font-serif text-xl text-bone-50">
                  Project {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div
                className={
                  "w-2 h-2 rounded-full transition-all " +
                  (i === active ? "bg-gold-400 scale-150" : "bg-bone-50/30")
                }
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
