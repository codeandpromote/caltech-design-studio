"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { SHIMMER_DARK } from "@/lib/blur";
import { PORTFOLIO } from "@/lib/portfolio";

/**
 * Scroll-velocity-reactive image marquee.
 *
 * - Two tracks scrolling in opposite directions.
 * - Idle speed via constant motion.
 * - When the user scrolls fast, the marquee speeds up dramatically and bends
 *   direction toward the scroll, then settles back via spring physics.
 * - Each row tilts very slightly on scroll for a 3D sense of depth.
 */

const ROW_A = PORTFOLIO.marquee.slice(0, 6);
const ROW_B = PORTFOLIO.marquee.slice(6);

function MarqueeRow({
  imgs,
  direction = 1,
  baseVelocity = 30,
}: {
  imgs: readonly string[];
  direction?: 1 | -1;
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // Multiplier from scroll velocity — clamped softly
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef<number>(direction);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = Math.min(now - last, 64);
      last = now;
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      // While the user scrolls fast, follow the scroll's sign for a moment
      if (velocityFactor.get() < 0) directionFactor.current = -direction;
      else if (velocityFactor.get() > 0) directionFactor.current = direction;

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [baseX, baseVelocity, direction, velocityFactor]);

  return (
    <div className="relative overflow-hidden -mx-6 sm:-mx-10">
      <motion.div
        style={{ x }}
        className="flex gap-4 sm:gap-6 will-change-transform"
      >
        {/* Two copies for infinite loop */}
        {[0, 1, 2, 3].map((dup) => (
          <div key={dup} className="flex gap-4 sm:gap-6 shrink-0">
            {imgs.map((src, i) => (
              <div
                key={`${dup}-${i}`}
                className="relative shrink-0 w-[58vw] sm:w-[34vw] md:w-[26vw] lg:w-[22vw] aspect-[4/3] rounded-md overflow-hidden border border-bone-50/10 bg-ink-700"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={SHIMMER_DARK}
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Wrap a number into [min, max)
function wrap(min: number, max: number, v: number) {
  const range = max - min;
  const offset = ((v - min) % range + range) % range;
  return offset + min;
}

export default function ImageMarquee() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 bg-ink-800 overflow-hidden">
      <div className="container-x mb-10 sm:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
              A wider view
            </div>
            <h2 className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Many hands, many{" "}
              <span className="italic gold-gradient-text">rooms.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 text-bone-50/55 text-sm sm:text-base leading-relaxed">
            A continuous strip of recent work — homes, hospitality, workplaces
            and ceremonial spaces. The faster you scroll, the faster it moves.
          </p>
        </div>
      </div>

      <div className="space-y-5 sm:space-y-7">
        <MarqueeRow imgs={ROW_A} direction={1} baseVelocity={26} />
        <MarqueeRow imgs={ROW_B} direction={-1} baseVelocity={22} />
      </div>
    </section>
  );
}
