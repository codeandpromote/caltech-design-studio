import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import InteriorsSlider from "./InteriorsSlider";
import CTA from "@/components/CTA";
import { stock } from "@/lib/stock";
import { SHIMMER_DARK } from "@/lib/blur";

export const metadata: Metadata = {
  title: "Interiors — Caltech Design Studio",
  description:
    "Residential, commercial, office, café and restaurant interior design — by Caltech Design Studio, Kolkata.",
};

const services = [
  {
    n: "01",
    title: "Residential",
    text: "Apartments, villas, duplexes — homes designed around your rituals, with thoughtful storage, light and material continuity.",
    img: stock.bedroom.tufted,
  },
  {
    n: "02",
    title: "Commercial",
    text: "Showrooms, retail and mixed-use spaces — branded environments that move with footfall and tell a story in three dimensions.",
    img: stock.living.editorial,
  },
  {
    n: "03",
    title: "Office & Workplace",
    text: "Headquarters, studios, co-working — workplaces that balance focus, collaboration and the small comforts that make people stay.",
    img: stock.office.loft,
  },
  {
    n: "04",
    title: "Café & Restaurant",
    text: "Cafés, lounges, bars and fine-dining rooms — curated atmospheres that earn the camera and the conversation.",
    img: stock.cafe.plants,
  },
  {
    n: "05",
    title: "Hospitality",
    text: "Boutique hotels, banquet halls, club rooms — full-floor briefs delivered with consistent material language and finishing care.",
    img: stock.restaurant.moody,
  },
  {
    n: "06",
    title: "Kitchen & Pantry",
    text: "Considered kitchens — modular and bespoke — built around how you cook, host and live every day.",
    img: stock.kitchen.brass,
  },
];

const process = [
  { n: "01", t: "Listen", d: "We start by understanding how you live, work and host — before drawing anything." },
  { n: "02", t: "Sketch", d: "Concept sketches, mood, materials, light. Iteration is part of the craft." },
  { n: "03", t: "Detail", d: "Working drawings, joinery details, finish samples — fully resolved before site." },
  { n: "04", t: "Build", d: "Our supervisors and trades execute on site. We are involved through commissioning." },
  { n: "05", t: "Live in", d: "We hand over a space ready for you, then return — to see it season into a home." },
];

export default function InteriorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Interior Practice"
        title="Refined rooms,"
        italic="quietly considered."
        description="From a single living room to a flagship workspace, Caltech designs interiors with restraint, proportion and an obsession for the small details that make a room age well."
      />

      {/* Service grid */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {services.map((s) => (
              <div key={s.title} className="group">
                <Link
                  href="/gallery"
                  className="block relative aspect-[4/5] overflow-hidden rounded-md border border-bone-50/10"
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={SHIMMER_DARK}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
                  <div className="absolute top-5 left-5 text-gold-300 text-xs tracking-[0.3em]">
                    {s.n}
                  </div>
                </Link>
                <div className="mt-6">
                  <h3 className="font-serif text-3xl text-bone-50">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-bone-50/60 text-[15px] leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal slider of work */}
      <InteriorsSlider />

      {/* Process */}
      <section className="relative py-28 md:py-36 bg-ink-800">
        <div className="container-x">
          <div className="eyebrow mb-5">
            <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
            Process
          </div>
          <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-12 sm:mb-16">
            Five quiet
            <br />
            <span className="italic gold-gradient-text">movements.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-6">
            {process.map((p) => (
              <div
                key={p.n}
                className="border-t border-bone-50/15 pt-6"
              >
                <div className="text-gold-300 text-xs tracking-[0.3em] mb-3">
                  {p.n}
                </div>
                <h4 className="font-serif text-2xl mb-2">{p.t}</h4>
                <p className="text-bone-50/55 text-sm leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
