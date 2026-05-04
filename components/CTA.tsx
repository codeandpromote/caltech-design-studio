"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 md:py-40">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-md border border-gold-400/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-800 px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24"
        >
          <div className="pointer-events-none absolute -top-1/2 -right-1/3 w-[600px] h-[600px] rounded-full bg-gold-400/12 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-1/2 -left-1/3 w-[500px] h-[500px] rounded-full bg-terracotta-500/10 blur-[120px]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-5">
                <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
                Begin a project
              </div>
              <h2 className="h-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-bone-50">
                Tell us about
                <br />
                the <span className="italic gold-gradient-text">space</span> you imagine.
              </h2>
              <p className="mt-5 sm:mt-6 max-w-xl text-bone-50/60 text-base sm:text-lg leading-relaxed">
                Whether it&apos;s a private residence, a café you&apos;re
                opening, or a heritage façade you&apos;d like to bring back —
                we&apos;d love to hear about it.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <MagneticButton href="/contact" variant="gold">
                Start a project
                <ArrowUpRight size={18} />
              </MagneticButton>
              <div className="mt-6 text-bone-50/45 text-sm">
                <a
                  href="mailto:caltechdesignstudio3@gmail.com"
                  className="hover:text-gold-300"
                >
                  caltechdesignstudio3@gmail.com
                </a>
                <br />
                <a
                  href="tel:+917003753068"
                  className="hover:text-gold-300"
                >
                  +91 7003 753 068
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
