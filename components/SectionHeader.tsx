"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  light = false,
}: Props) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="eyebrow mb-4"
      >
        <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
        {eyebrow}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "h-display text-4xl md:text-5xl lg:text-6xl",
          light ? "text-ink-900" : "text-bone-50"
        )}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="italic gold-gradient-text">{highlight}</span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className={clsx(
            "mt-6 text-lg leading-relaxed",
            light ? "text-ink-600" : "text-bone-50/65"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
