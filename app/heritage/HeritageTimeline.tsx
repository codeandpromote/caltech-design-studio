"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SHIMMER_DARK } from "@/lib/blur";

const cards = [
  { img: "/heritage/brick.jpg",      label: "Brick Masonry",     month: "Jan · Feb" },
  { img: "/heritage/surkhi.jpg",     label: "Surkhi Work",       month: "Mar · Apr" },
  { img: "/heritage/lime-work.jpg",  label: "Lime Work",         month: "May · Jun" },
  { img: "/heritage/structural.jpg", label: "Structural Repair", month: "Jul · Aug" },
  { img: "/heritage/retrofit.jpg",   label: "Retrofit Works",    month: "Sep · Oct" },
  { img: "/heritage/connecting.jpg", label: "Heritage & People", month: "Nov · Dec" },
];

export default function HeritageTimeline() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;

    // Pinned scroll-driven slider only on desktop. On smaller screens we let
    // the user free-scroll horizontally with their thumb.
    const mql = window.matchMedia("(min-width: 1024px)");
    if (!mql.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const totalScroll = () =>
        track.current!.scrollWidth - window.innerWidth + 60;

      gsap.to(track.current, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${totalScroll()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative">
      <div className="container-x py-12 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="eyebrow mb-4">
              <span className="inline-block w-6 h-px bg-terracotta-400 align-middle mr-3" />
              The Year in Conservation
            </div>
            <h2 className="h-display text-3xl md:text-5xl">
              A calendar of <span className="italic text-terracotta-400">crafts.</span>
            </h2>
          </div>
          <p className="max-w-md text-bone-50/55 text-base">
            From the studio&apos;s heritage notebook — the work that keeps
            ancient buildings standing, page by page.
          </p>
        </div>
      </div>

      <div
        ref={wrap}
        className="relative lg:h-[88vh] lg:overflow-hidden overflow-x-auto no-scrollbar snap-x snap-mandatory lg:snap-none"
      >
        <div
          ref={track}
          className="flex h-[70vh] sm:h-[80vh] lg:h-full items-center pl-6 sm:pl-[6vw] gap-5 md:gap-8"
          style={{ willChange: "transform" }}
        >
          {cards.map((c, i) => (
            <div
              key={c.img}
              className="relative shrink-0 snap-center group w-[78vw] sm:w-[60vw] lg:w-[min(64vw,540px)] h-[68vh] sm:h-[76vh] lg:h-[76vh]"
            >
              <div className="absolute inset-0 rounded-md overflow-hidden border border-bone-50/10 bg-ink-700">
                <Image
                  src={c.img}
                  alt={c.label}
                  fill
                  sizes="(max-width: 768px) 80vw, 60vw"
                  className="object-cover object-top"
                  placeholder="blur"
                  blurDataURL={SHIMMER_DARK}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute left-5 top-5 right-5 flex items-start justify-between text-bone-50">
                <div className="text-[11px] tracking-[0.3em] uppercase bg-ink-900/55 backdrop-blur px-3 py-1.5 rounded-full">
                  {String(i + 1).padStart(2, "0")} / 06
                </div>
                <div className="text-[11px] tracking-[0.3em] uppercase bg-ink-900/55 backdrop-blur px-3 py-1.5 rounded-full">
                  {c.month}
                </div>
              </div>
              <div className="absolute left-5 right-5 bottom-5">
                <div className="bg-ink-900/55 backdrop-blur px-4 py-3 rounded-md inline-block">
                  <div className="font-serif text-xl text-bone-50">
                    {c.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-[8vw]" />
        </div>
      </div>
    </section>
  );
}
