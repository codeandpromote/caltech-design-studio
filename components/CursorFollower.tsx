"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A small "View" cursor that follows the mouse on desktop, expanding when
 * hovered over elements that carry data-cursor="view".
 *
 * Mount once globally — sits at a high z-index, pointer-events: none.
 */
export default function CursorFollower() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });

  useEffect(() => {
    // Don't run on touch devices — feature-detect, not UA-sniff
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      const carrier = target?.closest('[data-cursor="view"]');
      setActive(!!carrier);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="fixed top-0 left-0 z-[80] pointer-events-none mix-blend-difference"
    >
      <motion.div
        initial={false}
        animate={{
          scale: active ? 1 : 0.45,
          opacity: active ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <div className="w-20 h-20 rounded-full bg-bone-50 flex items-center justify-center">
          <motion.span
            initial={false}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-ink-900 text-[10px] tracking-[0.3em] uppercase font-medium"
          >
            View
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
