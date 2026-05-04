"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { stock } from "@/lib/stock";
import { SHIMMER_DARK } from "@/lib/blur";

const services = [
  {
    tag: "01",
    eyebrow: "Studio",
    title: "Interiors",
    italic: "& Spaces",
    desc: "Residential, commercial, office, café and hospitality interiors — designed with proportion, light and craft. From a private apartment in Kolkata to a flagship workspace, we shape every detail.",
    img: stock.dining.walnut,
    href: "/interiors",
    list: ["Residential", "Office & Workplace", "Café · Restaurant", "Retail & Showroom"],
    accent: "bg-gold-400",
    accentText: "text-gold-300",
  },
  {
    tag: "02",
    eyebrow: "Atelier",
    title: "Heritage",
    italic: "Restoration",
    desc: "25 years of conservation experience across heritage buildings, masonry, lime work and structural repairs — including UNESCO advisory at Krishna Temple, Patan.",
    img: "/heritage/lime-work.jpg",
    href: "/heritage",
    list: ["Brick & Masonry", "Lime / Surkhi Work", "Structural Repair", "Adaptive Reuse"],
    accent: "bg-terracotta-500",
    accentText: "text-terracotta-400",
  },
];

export default function ServicesDuo() {
  return (
    <section className="relative py-20 sm:py-28 md:py-40">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-end mb-12 sm:mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
              Two Practices · One Studio
            </div>
            <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bone-50">
              Designing the new.
              <br />
              <span className="italic gold-gradient-text">Restoring the past.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-bone-50/65 text-base sm:text-lg leading-relaxed">
            Caltech operates as two atelier practices under one roof —
            interiors led by Md Sohrab, and heritage restoration led by
            Pinaki Ghosh. The same hands shape a private suite as conserve a
            century-old façade.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={s.href}
                className="group relative block rounded-md overflow-hidden border border-bone-50/10 bg-ink-800"
              >
                <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    placeholder="blur"
                    blurDataURL={SHIMMER_DARK}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/35 to-transparent" />

                  {/* Top tag */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-bone-50/70">
                      <span className={s.accentText}>{s.tag}</span> · {s.eyebrow}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-bone-50/30 flex items-center justify-center text-bone-50 group-hover:bg-gold-400 group-hover:text-ink-900 group-hover:border-gold-400 transition-all">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute left-0 right-0 bottom-0 p-5 sm:p-7 md:p-10">
                    <h3 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bone-50">
                      {s.title}
                      <br />
                      <span className={`italic ${s.accentText}`}>
                        {s.italic}
                      </span>
                    </h3>
                    <p className="mt-4 sm:mt-5 max-w-md text-bone-50/75 text-sm sm:text-[15px] leading-relaxed">
                      {s.desc}
                    </p>
                    <ul className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                      {s.list.map((l) => (
                        <li
                          key={l}
                          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-bone-50/20 text-bone-50/75"
                        >
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
