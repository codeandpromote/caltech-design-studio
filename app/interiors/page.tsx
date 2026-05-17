import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PreviousProjects from "@/components/PreviousProjects";
import ClientsStrip from "@/components/ClientsStrip";
import CTA from "@/components/CTA";
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
    img: "/portfolio/residential/residential-05.jpg",
  },
  {
    n: "02",
    title: "Café & Bar",
    text: "Cafés, lounges and bars — curated atmospheres that earn the camera and the conversation.",
    img: "/portfolio/cafe/cafe-02.jpg",
  },
  {
    n: "03",
    title: "Office & Workplace",
    text: "Headquarters, studios, co-working — workplaces that balance focus, collaboration and the small comforts that make people stay.",
    img: "/portfolio/office/office-01.jpg",
  },
  {
    n: "04",
    title: "Restaurant",
    text: "Banquet rooms, fine-dining halls, signature interiors — full-room briefs delivered with consistent material language.",
    img: "/portfolio/restaurant/restaurant-04.jpg",
  },
  {
    n: "05",
    title: "Hospitality",
    text: "Boutique hotels, club rooms, foyers — full-floor briefs across hospitality with finishing-grade care.",
    img: "/portfolio/hospitality/hospitality-04.jpg",
  },
  {
    n: "06",
    title: "Kitchen & Pantry",
    text: "Modular and bespoke kitchens — built around how you cook, host and live every day.",
    img: "/portfolio/kitchen/kitchen-05.jpg",
  },
  {
    n: "07",
    title: "Cultural & Civic",
    text: "Puja mandaps, ceremonial pavilions and civic interiors — temporary or permanent — designed with reverence for craft and ritual.",
    img: "/portfolio/puja-mandap/puja-mandap-03.jpg",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16">
            {services.map((s, i) => {
              // Last card (Cultural & Civic) is feature-sized on lg so the row stays balanced.
              const isFeature = i === services.length - 1;
              return (
                <div
                  key={s.title}
                  className={`group ${isFeature ? "lg:col-span-3 md:col-span-2" : ""}`}
                >
                  <Link
                    href="/gallery"
                    className={`block relative overflow-hidden rounded-md border border-bone-50/10 ${
                      isFeature ? "aspect-[16/7] md:aspect-[18/7]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes={isFeature ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={SHIMMER_DARK}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
                    <div className="absolute top-5 left-5 text-gold-300 text-xs tracking-[0.3em]">
                      {s.n}
                    </div>
                    {isFeature && (
                      <div className="absolute right-5 sm:right-8 bottom-5 sm:bottom-8 max-w-md text-right">
                        <div className="text-gold-300 text-[10px] tracking-[0.3em] uppercase mb-2">
                          A unique discipline
                        </div>
                        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-bone-50">
                          {s.title}
                        </h3>
                      </div>
                    )}
                  </Link>
                  {!isFeature && (
                    <div className="mt-5 sm:mt-6">
                      <h3 className="font-serif text-2xl sm:text-3xl text-bone-50">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-bone-50/60 text-[14px] sm:text-[15px] leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  )}
                  {isFeature && (
                    <p className="mt-4 sm:mt-5 max-w-xl text-bone-50/60 text-[14px] sm:text-[15px] leading-relaxed">
                      {s.text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Previous projects — sourced from the studio's earlier portfolio */}
      <PreviousProjects variant="full" />

      {/* Clients */}
      <ClientsStrip />

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
