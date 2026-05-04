"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
  /** how strongly the button is "pulled" toward the cursor */
  strength?: number;
};

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "gold",
  className,
  strength = 22,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics — slightly under-damped, snappy return
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  // Gentle tilt that follows the magnetic offset
  const rx = useTransform(sy, (v) => v * -0.08);
  const ry = useTransform(sx, (v) => v * 0.08);

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = e.clientX - (r.left + r.width / 2);
    const cy = e.clientY - (r.top + r.height / 2);
    x.set((cx / r.width) * strength);
    y.set((cy / r.height) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const baseCls = clsx(
    variant === "gold" ? "btn-gold" : "btn-ghost",
    "inline-flex items-center gap-2 will-change-transform",
    className
  );

  const inner = (
    <motion.span
      className="inline-flex items-center gap-2"
      style={{ x: sx, y: sy, rotateX: rx, rotateY: ry }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        ref={ref as never}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={baseCls}
        style={{ perspective: 600 }}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={baseCls}
      style={{ perspective: 600 }}
    >
      {inner}
    </button>
  );
}
