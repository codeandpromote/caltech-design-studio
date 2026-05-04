"use client";

import { useEffect, useRef, useState } from "react";

/**
 * DOM-level "gold dust" particle layer.
 *
 * Each particle is a tiny <div> with its own physics state — gravity, mouse
 * repulsion, drag, and edge wrap. Cheap (no canvas redraws) and looks like
 * suspended gilded specks in the air. Sits behind the hero copy.
 */

type P = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  el: HTMLDivElement;
};

export default function GoldDust({
  density = 70,
  className = "",
}: {
  density?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    setReady(true);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? Math.round(density * 0.5) : density;

    const particles: P[] = [];
    const W = () => wrap.clientWidth;
    const H = () => wrap.clientHeight;

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2.4 + 0.6;
      const el = document.createElement("div");
      el.style.cssText = `
        position:absolute;
        width:${r * 2}px;height:${r * 2}px;
        border-radius:9999px;
        background:radial-gradient(circle, rgba(223,190,91,0.95) 0%, rgba(201,161,74,0.4) 50%, rgba(201,161,74,0) 75%);
        pointer-events:none;
        will-change:transform;
        opacity:${0.4 + Math.random() * 0.55};
      `;
      wrap.appendChild(el);
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.25 - 0.05, // mostly drifting up
        r,
        el,
      });
    }

    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    let raf = 0;
    let last = performance.now();

    function tick(t: number) {
      const dt = Math.min(t - last, 32) / 16;
      last = t;
      const w = W();
      const h = H();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Slight buoyancy upward + air drag
        p.vy -= 0.0008 * dt;
        p.vx *= 0.992;
        p.vy *= 0.992;

        // Mouse repulsion (push particles away on hover)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 14000) {
            const force = (14000 - distSq) / 14000;
            const inv = 1 / Math.sqrt(distSq + 0.5);
            p.vx += dx * inv * force * 0.6;
            p.vy += dy * inv * force * 0.6;
          }
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        } else if (p.y > h + 10) p.y = -10;

        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      particles.forEach((p) => p.el.remove());
    };
  }, [density]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 600ms" }}
    />
  );
}
