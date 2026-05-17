"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

/**
 * Reveals its children with a vertical "shutter" wipe — clip-path animation
 * driven by inView detection. The inner content also subtly scales down to
 * settle into place, giving an editorial feel.
 */
export default function RevealMask({
  children,
  className,
  delay = 0,
  duration = 1.2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className={clsx("relative overflow-hidden", className)}>
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)" } : {}}
        transition={{ duration, delay, ease: [0.83, 0, 0.17, 1] }}
        className="w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: duration + 0.2, delay, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
