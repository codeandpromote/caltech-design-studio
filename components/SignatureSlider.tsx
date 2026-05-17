"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SHIMMER_DARK } from "@/lib/blur";
import { PORTFOLIO } from "@/lib/portfolio";

const slides = PORTFOLIO.signature;

export default function SignatureSlider() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;

    // Only run the pinned scroll-driven slider on desktop. On mobile / tablet
    // we let the user free-scroll horizontally with their thumb.
    const mql = window.matchMedia("(min-width: 1024px)");
    if (!mql.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const t = track.current!;
      const w = wrap.current!;
      const totalScroll = () => t.scrollWidth - window.innerWidth + 80;

      const tween = gsap.to(t, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: w,
          start: "top top",
          end: () => `+=${totalScroll()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-ink-900">
      {/* Header */}
      <div className="container-x pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
              Signature Work
            </div>
            <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              A decade of <span className="italic gold-gradient-text">quiet</span>
              <br />
              and considered work.
            </h2>
          </div>
          <div className="md:col-span-4 text-bone-50/55 text-sm sm:text-base">
            Swipe to explore. From private homes in Kolkata to UNESCO
            heritage sites — a continuous conversation between modernity and
            memory.
          </div>
        </div>
      </div>

      <div
        ref={wrap}
        className="relative lg:h-screen lg:overflow-hidden overflow-x-auto no-scrollbar snap-x snap-mandatory lg:snap-none"
      >
        <div
          ref={track}
          className="flex h-[60vh] sm:h-[70vh] lg:h-full items-center pl-6 sm:pl-[8vw] pr-6 sm:pr-[8vw] gap-5 md:gap-10"
          style={{ willChange: "transform" }}
        >
          {slides.map((s, i) => {
            const lgWidth = i % 3 === 0 ? "lg:w-[62vw]" : i % 3 === 1 ? "lg:w-[44vw]" : "lg:w-[52vw]";
            const lgHeight = i % 2 === 0 ? "lg:h-[78vh]" : "lg:h-[66vh]";
            return (
            <div
              key={s.img}
              data-cursor="view"
              className={`relative shrink-0 snap-center group w-[78vw] sm:w-[55vw] h-[55vh] sm:h-[62vh] lg:max-w-[780px] ${lgWidth} ${lgHeight}`}
            >
              <div className="absolute inset-0 rounded-md overflow-hidden border border-bone-50/10 bg-ink-700">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width:768px) 80vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={SHIMMER_DARK}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent" />
              </div>
              <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-300 mb-2">
                    {s.eyebrow}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-bone-50">
                    {s.title}
                  </h3>
                  <div className="text-bone-50/55 text-sm mt-1">{s.place}</div>
                </div>
                <div className="text-bone-50/40 font-serif text-2xl">
                  {String(i + 1).padStart(2, "0")}/
                  {String(slides.length).padStart(2, "0")}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
