"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  italic,
  description,
  align = "left",
}: Props) {
  return (
    <section className="relative pt-32 sm:pt-40 md:pt-52 pb-12 sm:pb-16 md:pb-20 grain-overlay overflow-hidden">
      <div className="pointer-events-none absolute -top-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full bg-gold-400/8 blur-[140px]" />

      <div className="container-x relative">
        <div
          className={clsx(
            "max-w-5xl",
            align === "center" && "mx-auto text-center"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6"
          >
            <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
            {eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-display text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[6.6vw] xl:text-[6vw] leading-[0.95]"
          >
            {title}
            {italic && (
              <>
                {" "}
                <span className="italic gold-gradient-text">{italic}</span>
              </>
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-bone-50/65"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
