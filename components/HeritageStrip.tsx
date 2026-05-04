"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "La Martiniere School for Girls", year: "2015 – 2019", scope: "Multi-phase structural & interior restoration" },
  { name: "Krishna Temple, Patan, Nepal", year: "Ongoing", scope: "UNESCO World Heritage Site · Technical advisory" },
  { name: "Anglo Persian School", year: "2018 – 2019", scope: "First educational institution of India · Restoration" },
  { name: "Scottish Cemetery, Kolkata", year: "2014 – 2019", scope: "Phase I–V · Lime, masonry, stonework" },
  { name: "Ram Mohun Museum", year: "2015 – 2018", scope: "Three-phase museum restoration" },
  { name: "Park Hotel, Park Street", year: "2017", scope: "Terrace retrofit & adaptive reuse" },
];

export default function HeritageStrip() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-ink-800">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-14 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-terracotta-400 align-middle mr-3" />
              Heritage Notebook
            </div>
            <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Buildings we have
              <br />
              <span className="italic text-terracotta-400">held steady.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-bone-50/60 text-sm sm:text-base leading-relaxed">
            A working list of the heritage sites Caltech has restored or
            advised on — across Kolkata, Bengal, and a UNESCO site in Patan.
          </div>
        </div>

        <ul className="divide-y divide-bone-50/10 border-y border-bone-50/10">
          {projects.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group relative"
            >
              <Link
                href="/heritage"
                className="block py-5 md:py-9 transition-colors hover:bg-bone-50/[0.02] px-2"
              >
                <div className="grid grid-cols-12 gap-3 md:gap-4 items-baseline">
                  <span className="col-span-2 md:col-span-1 text-gold-300/70 text-sm font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 md:col-span-6 font-serif text-xl sm:text-2xl md:text-4xl text-bone-50 group-hover:text-gold-300 transition-colors leading-snug">
                    {p.name}
                  </span>
                  <span className="hidden md:block md:col-span-3 text-bone-50/55 text-sm">
                    {p.scope}
                  </span>
                  <span className="hidden md:flex md:col-span-2 items-center justify-end gap-3 text-bone-50/55 text-sm">
                    {p.year}
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 group-hover:text-gold-300 transition-all -translate-x-2 group-hover:translate-x-0"
                    />
                  </span>
                </div>
                <div className="md:hidden mt-1.5 ml-[16.66%] flex items-center gap-2 text-bone-50/45 text-xs">
                  <span>{p.year}</span>
                  <span className="text-bone-50/20">·</span>
                  <span className="truncate">{p.scope}</span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
          <p className="text-bone-50/50 text-sm max-w-md">
            Full register of works available on request — including 1500+ sq m
            of lime restoration and over ₹6 Cr of structural conservation
            delivered.
          </p>
          <Link href="/heritage" className="btn-ghost">
            View heritage practice
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
