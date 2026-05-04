import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import HeritageTimeline from "./HeritageTimeline";
import CTA from "@/components/CTA";
import { SHIMMER_DARK } from "@/lib/blur";

export const metadata: Metadata = {
  title: "Heritage Restoration — Caltech Design Studio",
  description:
    "Restoration and rehabilitation of heritage buildings, masonry, lime work and structural conservation across India and Nepal — by Caltech Design Studio.",
};

const disciplines = [
  {
    n: "01",
    img: "/heritage/brick.jpg",
    title: "Brick & Masonry",
    text: "Hand-laid brick repair, lime mortar pointing, and the careful sourcing of period bricks for seamless interventions.",
  },
  {
    n: "02",
    img: "/heritage/surkhi.jpg",
    title: "Surkhi & Lime Floors",
    text: "Traditional surkhi (calcined-brick lime) flooring, lime concrete roofs and dome work — laid by hand the way it was meant to be.",
  },
  {
    n: "03",
    img: "/heritage/lime-work.jpg",
    title: "Lime Plaster & Façade",
    text: "Lime plaster, ornamental cornice repair, ABA mouldings and weather-resistant façade conservation that breathes.",
  },
  {
    n: "04",
    img: "/heritage/structural.jpg",
    title: "Structural Repairs",
    text: "Strengthening of slabs, beams and roofs — including non-destructive testing, grouting and seismic retrofitting.",
  },
  {
    n: "05",
    img: "/heritage/retrofit.jpg",
    title: "Retrofit & Reuse",
    text: "Adaptive reuse of historic buildings — from decking and waterproofing to gentle insertion of contemporary services.",
  },
  {
    n: "06",
    img: "/heritage/connecting.jpg",
    title: "Advisory & Site Direction",
    text: "Working alongside conservation architects, heritage trusts and overseas experts, on sites of national and UNESCO importance.",
  },
];

const works = [
  { yr: "2012–13", val: "₹15 Lakh", n: "Restoration of Heritage Building 243, C.R Avenue, Kolkata" },
  { yr: "2013–14", val: "₹18 Lakh", n: "Restoration of Heritage Building 271, C.R Avenue, Kolkata" },
  { yr: "2014–15", val: "₹18 Lakh", n: "Restoration of Cossipore Kali Bari" },
  { yr: "2014–19", val: "Multi-phase", n: "Scottish Cemetery Kolkata · Phases I–V" },
  { yr: "2015–16", val: "₹12 Lakh", n: "Restoration of Astor Hotel" },
  { yr: "2015–18", val: "Multi-phase", n: "Ram Mohun Museum · Phases I, II & III" },
  { yr: "2015–19", val: "Multi-phase", n: "La Martiniere School for Girls — slabs, halls, dormitories, façade" },
  { yr: "2017", val: "—", n: "Retrofit, The Park Hotel · Park Street terrace" },
  { yr: "2017–18", val: "₹58 Lakh", n: "Restoration of Deflected Damaged Roof, Mez Floor & Cornice" },
  { yr: "2017–18", val: "₹8.5 Lakh", n: "Restoration of Bishop's Residence" },
  { yr: "Ongoing", val: "Advisory", n: "Krishna Temple, Patan, Kathmandu — UNESCO World Heritage Site" },
  { yr: "2018–19", val: "₹1.97 Cr", n: "Restoration of Anglo Persian School — first educational institution of India" },
];

export default function HeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="Restoration & Rehabilitation"
        title="Old buildings, "
        italic="kept breathing."
        description="For 25 years, Caltech's heritage practice has restored masonry, lime façades and structural fabric across India and Nepal — including UNESCO advisory at Krishna Temple, Patan. Conservation here is craft: lime, surkhi, brick — patient, hand-led work that respects the original."
      />

      {/* Headline strip — reuse PDF imagery */}
      <HeritageTimeline />

      {/* Disciplines grid */}
      <section className="relative py-28 md:py-36 bg-ink-800">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">
                <span className="inline-block w-6 h-px bg-terracotta-400 align-middle mr-3" />
                Disciplines
              </div>
              <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Six crafts,<br />
                <span className="italic text-terracotta-400">one practice.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-bone-50/60 text-base leading-relaxed">
              Heritage restoration is a stack of disciplines — masonry, lime,
              surkhi, structural, retrofit, advisory. We hold all of them under
              one roof, because heritage buildings rarely need just one.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {disciplines.map((d) => (
              <article
                key={d.title}
                className="group relative rounded-md overflow-hidden border border-bone-50/10 bg-ink-700"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={d.img}
                    alt={d.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    placeholder="blur"
                    blurDataURL={SHIMMER_DARK}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/30 to-transparent" />
                  <div className="absolute top-5 left-5 text-terracotta-400 text-[11px] tracking-[0.3em]">
                    {d.n}
                  </div>
                  <div className="absolute left-5 right-5 bottom-5">
                    <h3 className="font-serif text-2xl md:text-3xl text-bone-50">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-bone-50/70 text-sm leading-relaxed">
                      {d.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Works register */}
      <section className="relative py-28 md:py-36">
        <div className="container-x">
          <div className="eyebrow mb-5">
            <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
            Register of Works
          </div>
          <h2 className="h-display text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-14">
            Selected heritage <span className="italic gold-gradient-text">commissions.</span>
          </h2>

          <ul className="divide-y divide-bone-50/10 border-y border-bone-50/10">
            {works.map((w, i) => (
              <li
                key={i}
                className="py-5 md:py-7 hover:bg-bone-50/[0.02] transition-colors"
              >
                <div className="grid grid-cols-12 gap-3 items-baseline">
                  <span className="col-span-2 md:col-span-1 text-gold-300/60 text-xs font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 md:col-span-7 font-serif text-lg md:text-xl text-bone-50 leading-snug">
                    {w.n}
                  </span>
                  <span className="hidden md:block md:col-span-2 text-bone-50/55 text-sm">
                    {w.yr}
                  </span>
                  <span className="hidden md:block md:col-span-2 text-bone-50/55 text-sm md:text-right">
                    {w.val}
                  </span>
                </div>
                {/* Mobile meta */}
                <div className="md:hidden mt-2 ml-[16.66%] flex items-center gap-3 text-bone-50/45 text-xs">
                  <span>{w.yr}</span>
                  <span className="text-bone-50/20">·</span>
                  <span>{w.val}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { n: "25+", l: "Years restoring" },
              { n: "30+", l: "Heritage sites" },
              { n: "1", l: "UNESCO site advised" },
              { n: "₹6 Cr+", l: "Conservation delivered" },
            ].map((s) => (
              <div key={s.l} className="border-t border-bone-50/15 pt-5">
                <div className="font-serif text-3xl md:text-4xl gold-gradient-text">
                  {s.n}
                </div>
                <div className="text-[11px] tracking-[0.25em] uppercase text-bone-50/55 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
