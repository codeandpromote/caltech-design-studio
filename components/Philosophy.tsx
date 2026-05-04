"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lines = [
  { strong: "We design", soft: "for the way light moves through a room." },
  { strong: "We restore", soft: "with hands that listen to old walls." },
  { strong: "We work slowly,", soft: "because spaces remember." },
  { strong: "And we believe", soft: "every home is a quiet inheritance." },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = ref.current!.querySelectorAll(".phil-line");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 md:py-44">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -left-1/4 top-1/3 w-[55vw] h-[55vw] rounded-full bg-gold-400/8 blur-[140px]" />

      <div className="container-x">
        <div className="eyebrow mb-8 sm:mb-10">
          <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
          Philosophy
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-14 max-w-5xl">
          {lines.map((l, i) => (
            <p
              key={i}
              className="phil-line h-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.15]"
            >
              <span className="text-bone-50">{l.strong}</span>{" "}
              <span className="text-bone-50/60 italic">{l.soft}</span>
            </p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
          className="mt-20 max-w-md text-bone-50/55 text-[15px] leading-relaxed"
        >
          From our studio in Kolkata, we shape interiors that age gracefully —
          and conserve the buildings that already have. Two practices, one
          discipline of patience.
        </motion.div>
      </div>
    </section>
  );
}
