import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import RevealMask from "@/components/RevealMask";
import { stock } from "@/lib/stock";
import { SHIMMER_DARK } from "@/lib/blur";

export const metadata: Metadata = {
  title: "About — Caltech Design Studio",
  description:
    "About Caltech Design Studio — a Kolkata-based interiors and heritage restoration practice. Meet the partners and the team.",
};

const team = [
  {
    name: "Md Sohrab",
    title: "Partner · Interior Design",
    creds: "B.Com, B.Des (Interior Design)",
    bio: "Organised interior designer with 18+ years of experience creating aesthetically pleasing residential and commercial spaces. Strengths in project management, client relations and space planning.",
  },
  {
    name: "Pinaki Ghosh",
    title: "Partner · Heritage Restoration",
    creds: "B.Sc · DCE · AMIE · MICI",
    bio: "25 years of experience restoring and rehabilitating heritage buildings — masonry and stone, lime work, waterproofing, non-destructive testing and structural conservation. Has advised on UNESCO World Heritage projects.",
  },
  {
    name: "Rana Bhattacharya",
    title: "Senior Architect",
    creds: "Architect · 30+ years",
    bio: "Three decades of architectural practice across residential, commercial and conservation work in Eastern India. Brings a quiet, drawing-led discipline to every brief — guiding design intent from first sketch through finished build.",
  },
  {
    name: "Mrs. Sudipta Roy",
    title: "Architect",
    creds: "Master of Architecture",
    bio: "4 years of experience in restoration and rehabilitation of heritage buildings, masonry and stone structures, non-destructive testing and civil works.",
  },
  {
    name: "Surajit Bhat",
    title: "Technical Lead",
    creds: "DCE",
    bio: "5 years monitoring, supervising and guiding heritage building works — schools, residences, commercial and conservation projects. Leads BoQs, cost estimation and on-site coordination.",
  },
  {
    name: "Mr. Sukumar Mukherjee",
    title: "Consulting Civil Engineer",
    creds: "MIE · Chartered Engineer",
    bio: "25 years of civil construction, restoration of building structures, masonry and stonework, and allied civil works.",
  },
  {
    name: "Mr. Goutam Roy",
    title: "Electrical Lead",
    creds: "W.B. Govt. Electrical Contractor",
    bio: "8 years executing and supervising electrical work across heritage and contemporary projects.",
  },
];

const support = [
  { n: "Tinku Ghosh", r: "Administrative Officer" },
  { n: "Bhashkar Debnath", r: "Structural Planner" },
  { n: "Raj Kumar Mondal", r: "Supervisor" },
  { n: "Chandeshwar Kumar Yadav", r: "Supervisor" },
  { n: "Bibhas Sardar", r: "Supervisor" },
  { n: "Raju Mondal", r: "Technician" },
  { n: "Amal Naskar", r: "Technician" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="A small atelier"
        italic="with long memory."
        description="Caltech is a Kolkata-based studio — interiors led by Md Sohrab, heritage restoration led by Pinaki Ghosh, supported by a small team of architects, engineers, supervisors and crafts-people. We work slowly, in person, on a handful of projects at a time."
      />

      {/* Story */}
      <section className="relative py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">
                <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
                Our story
              </div>
              <div className="space-y-6 text-bone-50/75 text-lg leading-relaxed font-serif">
                <p>
                  Caltech Design Studio was founded in Kolkata as a practice
                  that holds two often-separated disciplines under one roof —
                  the design of new interiors, and the conservation of heritage
                  buildings.
                </p>
                <p>
                  We&apos;ve come to believe that the same eye is needed for
                  both. Whether a young couple&apos;s first apartment or a
                  19th-century cemetery wall, the work is about listening,
                  proportion, materials that age honestly, and trades who still
                  know how to lay them.
                </p>
                <p>
                  Today the studio works across Kolkata, West Bengal and
                  occasional projects abroad — including UNESCO advisory at the
                  Krishna Temple in Patan, Nepal.
                </p>
              </div>
            </div>
            <RevealMask className="lg:col-span-5 relative aspect-[4/5] rounded-md border border-bone-50/10 bg-ink-700">
              <Image
                src={stock.heritage.colonial}
                alt="Heritage façade"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={SHIMMER_DARK}
              />
            </RevealMask>
          </div>
        </div>
      </section>

      {/* Interior practice */}
      <section className="relative py-20 md:py-28 bg-ink-800/60 border-y border-bone-50/5">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <RevealMask className="lg:col-span-6 relative aspect-[4/3] rounded-md border border-bone-50/10 bg-ink-700 order-2 lg:order-1">
              <Image
                src="/portfolio/previous/souk-tajbengal.jpg"
                alt="Souk Luxury Restaurant, Taj Bengal — interior by Caltech Design Studio"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={SHIMMER_DARK}
              />
              <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-300 mb-1.5">
                    Restaurant
                  </div>
                  <div className="font-serif text-xl text-bone-50">
                    Souk Luxury Restaurant
                  </div>
                  <div className="text-bone-50/55 text-xs mt-1">
                    Taj Bengal, Kolkata
                  </div>
                </div>
              </div>
            </RevealMask>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="eyebrow mb-6">
                <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
                Interior Practice
              </div>
              <h2 className="h-display text-4xl sm:text-5xl md:text-6xl mb-6">
                Rooms shaped by{" "}
                <span className="italic gold-gradient-text">restraint.</span>
              </h2>
              <div className="space-y-5 text-bone-50/75 text-lg leading-relaxed font-serif">
                <p>
                  Our interior practice covers residences, corporate offices,
                  restaurants and bars, banquet halls, retail flagships and
                  hospitality — from a single living room to a flagship
                  workspace.
                </p>
                <p>
                  Every brief begins by understanding how a space will be lived
                  in or worked from. We sketch by hand, sample materials in
                  person and stay involved through site, supervision and
                  commissioning — so the proportions, light and details we drew
                  early on actually arrive in the finished room.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-bone-50/75">
                {[
                  "Residential",
                  "Corporate Office",
                  "Restaurant & Bar",
                  "Banquet Hall",
                  "Retail Showroom",
                  "Hospitality",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 border-t border-bone-50/10 pt-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 md:py-32 bg-ink-800">
        <div className="container-x">
          <div className="eyebrow mb-5">
            <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
            People
          </div>
          <h2 className="h-display text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-14">
            The hands behind{" "}
            <span className="italic gold-gradient-text">the work.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {team.map((m) => (
              <article key={m.name} className="border-t border-bone-50/15 pt-6">
                <h3 className="font-serif text-2xl text-bone-50">{m.name}</h3>
                <div className="text-gold-300 text-xs tracking-[0.25em] uppercase mt-2">
                  {m.title}
                </div>
                <div className="text-bone-50/45 text-xs mt-1">{m.creds}</div>
                <p className="mt-4 text-bone-50/65 text-[15px] leading-relaxed">
                  {m.bio}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <div className="eyebrow mb-4">Support team</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 max-w-4xl">
              {support.map((p) => (
                <li
                  key={p.n}
                  className="flex items-baseline justify-between border-b border-bone-50/10 py-3"
                >
                  <span className="text-bone-50">{p.n}</span>
                  <span className="text-bone-50/45 text-sm">{p.r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Equipment / capability */}
      <section className="relative py-24 md:py-32">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">
                <span className="inline-block w-6 h-px bg-terracotta-400 align-middle mr-3" />
                Studio Capability
              </div>
              <h2 className="h-display text-4xl sm:text-5xl md:text-6xl">
                Hand-led, properly{" "}
                <span className="italic text-terracotta-400">equipped.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 text-bone-50/60 text-base leading-relaxed">
              On heritage sites, the right tool matters. The studio maintains an
              in-house inventory of restoration equipment and a roster of
              long-trusted trades.
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["MS Pipes", "300"],
              ["Props", "100"],
              ["Grout Pumps (Small)", "2"],
              ["Grout Pumps (Big)", "2"],
              ["Drill Machines", "4"],
              ["Core Cutter", "1"],
              ["Rebound Hammer", "1"],
              ["Angle Grinders", "4"],
            ].map(([n, c]) => (
              <li
                key={n}
                className="border border-bone-50/10 rounded-md p-5 bg-ink-800/60"
              >
                <div className="font-serif text-3xl text-gold-300">{c}</div>
                <div className="text-bone-50/55 text-xs uppercase tracking-[0.2em] mt-2">
                  {n}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
