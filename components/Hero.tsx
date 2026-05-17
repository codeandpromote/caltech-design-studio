"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { SHIMMER_DARK } from "@/lib/blur";
import GoldDust from "@/components/GoldDust";
import MagneticButton from "@/components/MagneticButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import { PORTFOLIO } from "@/lib/portfolio";

const heroImages = PORTFOLIO.hero;

// Each card has its own spring profile — heavier cards lag more, lighter cards
// snap. This gives the stack a layered "depth" feel as the cursor moves.
const cardSprings = [
  { stiffness: 90,  damping: 16, mass: 0.9 },
  { stiffness: 140, damping: 14, mass: 0.5 },
  { stiffness: 200, damping: 14, mass: 0.35 },
  { stiffness: 260, damping: 13, mass: 0.25 },
];

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardWrapRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Raw normalized mouse offsets (-0.5..0.5) — driven by mousemove.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        rotation: 1.5,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.25,
      });
    }, wrapRef);

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set((e.clientX - w / 2) / w);
      my.set((e.clientY - h / 2) / h);
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMove);
    };
  }, [mx, my]);

  return (
    <section
      ref={wrapRef}
      className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden grain-overlay lg:min-h-[100svh]"
    >
      {/* DOM-level gold dust particles — physics, mouse-repulsive (desktop only) */}
      <div className="hidden lg:block">
        <GoldDust density={80} />
      </div>

      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute -top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-gold-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-1/3 -left-1/4 w-[55vw] h-[55vw] rounded-full bg-terracotta-500/10 blur-[140px]" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="eyebrow mb-7"
            >
              <span className="inline-block w-8 h-px bg-gold-300 align-middle mr-3" />
              Kolkata · Est. 2012
            </motion.div>

            <h1 className="h-display text-[13vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[7vw] xl:text-[6.4vw] leading-[0.92] text-bone-50">
              <span className="block overflow-hidden">
                <span ref={(el) => { lineRefs.current[0] = el; }} className="block">
                  Spaces with
                </span>
              </span>
              <span className="block overflow-hidden">
                <span ref={(el) => { lineRefs.current[1] = el; }} className="block italic">
                  <span className="gold-gradient-text">memory.</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span ref={(el) => { lineRefs.current[2] = el; }} className="block">
                  Stories worth
                </span>
              </span>
              <span className="block overflow-hidden">
                <span ref={(el) => { lineRefs.current[3] = el; }} className="block italic font-serif">
                  inheriting.
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 max-w-xl text-bone-50/70 text-lg leading-relaxed"
            >
              Caltech Design Studio is an interiors atelier and heritage
              restoration practice based in Kolkata — designing residences,
              cafés and offices, while conserving India&apos;s architectural
              past with patience and craft.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.05 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/interiors" variant="gold" strength={20}>
                Explore interiors
                <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="/heritage" variant="ghost" strength={16}>
                Heritage restoration
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { to: 25, suffix: "+", l: "Years restoring" },
                { to: 60, suffix: "+", l: "Projects delivered" },
                { to: 1,  suffix: "",  l: "UNESCO heritage advisory" },
              ].map((s) => (
                <div key={s.l}>
                  <AnimatedCounter
                    to={s.to}
                    suffix={s.suffix}
                    className="font-serif text-3xl md:text-4xl text-gold-300 inline-block"
                  />
                  <div className="text-[11px] tracking-[0.25em] uppercase text-bone-50/50 mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image stack with per-card spring physics (desktop only) */}
          <div ref={cardWrapRef} className="hidden lg:block lg:col-span-5 relative lg:h-[80vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 1400 }}
              className="absolute inset-0"
            >
              <div className="hero-card relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                {heroImages.map((src, i) => (
                  <SpringCard
                    key={src}
                    index={i}
                    mx={mx}
                    my={my}
                    src={src}
                  />
                ))}

                {/* Rotating gold ring */}
                <motion.div
                  className="absolute w-44 h-44 rounded-full border border-gold-400/40 -right-6 -bottom-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ zIndex: 5 }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      />
                    </defs>
                    <text className="fill-gold-300 text-[10px] tracking-[0.3em] uppercase font-sans">
                      <textPath href="#circlePath">
                        Kolkata · since 2012 · Caltech · Design · Studio ·
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile / tablet — horizontal touch-scroller of hero images */}
        <div className="lg:hidden mt-12 -mx-6 md:-mx-10">
          <div className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory no-scrollbar">
            {heroImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative shrink-0 w-[78vw] sm:w-[55vw] aspect-[4/5] snap-center rounded-md overflow-hidden border border-bone-50/10 bg-ink-700"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 80vw, 55vw"
                  className="object-cover"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL={SHIMMER_DARK}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900/55 to-transparent" />
                <div className="absolute left-4 bottom-4 text-[10px] tracking-[0.3em] uppercase text-gold-300">
                  {String(i + 1).padStart(2, "0")} · Caltech
                </div>
              </motion.div>
            ))}
            <div className="shrink-0 w-2" />
          </div>
          <div className="px-6 md:px-10 mt-3 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-bone-50/40">
            <span className="inline-block w-6 h-px bg-gold-300" />
            Swipe to explore
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-bone-50/50">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-gold-300 to-transparent"
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}

function SpringCard({
  index,
  mx,
  my,
  src,
}: {
  index: number;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
  src: string;
}) {
  const cfg = cardSprings[index];

  // Each card has its own spring → different lag profile
  const sx = useSpring(mx, cfg);
  const sy = useSpring(my, cfg);

  // Map spring values to translate / rotate amounts.
  // Cards higher in the stack (later index) move further & rotate more.
  const offset = 22 + index * 12;
  const tilt = 4 + index * 2;
  const tx = useTransform(sx, (v) => v * offset);
  const ty = useTransform(sy, (v) => v * offset);
  const ry = useTransform(sx, (v) => v * tilt);
  const rx = useTransform(sy, (v) => -v * tilt);

  return (
    <motion.div
      data-cursor="view"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 + index * 0.15 }}
      className="absolute rounded-md overflow-hidden border border-bone-50/10 shadow-2xl will-change-transform"
      style={{
        width:  index === 0 ? "82%" : index === 1 ? "60%" : index === 2 ? "55%" : "48%",
        height: index === 0 ? "70%" : index === 1 ? "45%" : "40%",
        top:    index === 0 ? "0%"  : index === 1 ? "35%" : index === 2 ? "55%" : "12%",
        left:   index === 0 ? "10%" : index === 1 ? "45%" : index === 2 ? "0%"  : "55%",
        zIndex: 10 + index,
        x: tx,
        y: ty,
        rotateX: rx,
        rotateY: ry,
        translateZ: index * 20,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 1024px) 70vw, 35vw"
        className="object-cover"
        priority={index === 0}
        loading={index === 0 ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL={SHIMMER_DARK}
      />
    </motion.div>
  );
}
