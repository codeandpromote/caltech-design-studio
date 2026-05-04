"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const PHONE = "+917003753068";
const PHONE_DISPLAY = "+91 7003 753 068";
// 91 country code + number, no spaces, for wa.me
const WHATSAPP = "917003753068";
const EMAIL = "caltechdesignstudio3@gmail.com";

const actions = [
  {
    icon: Phone,
    label: "Call",
    href: `tel:${PHONE}`,
    aria: `Call Caltech Design Studio at ${PHONE_DISPLAY}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP}?text=Hi%20Caltech%20Design%20Studio%2C%20I%27d%20like%20to%20discuss%20a%20project.`,
    target: "_blank",
    aria: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${EMAIL}`,
    aria: "Email the studio",
  },
];

export default function MobileBottomBar() {
  const [shown, setShown] = useState(false);

  // Show only after the user has scrolled a bit so the hero stays clean.
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-label="Quick contact"
      className="lg:hidden fixed left-0 right-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)]"
    >
      <AnimatePresence>
        {shown && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="px-3 pb-3"
          >
            <div className="relative rounded-2xl bg-ink-900/85 backdrop-blur-xl border border-bone-50/10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Subtle gold sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold-400/5 via-transparent to-gold-400/5" />

              <div className="relative grid grid-cols-4 gap-1 p-1.5">
                {actions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    target={a.target}
                    rel={a.target ? "noopener noreferrer" : undefined}
                    aria-label={a.aria}
                    className="group flex flex-col items-center justify-center py-2.5 rounded-xl text-bone-50/85 active:bg-bone-50/5 transition-colors"
                  >
                    <a.icon
                      size={20}
                      className="text-gold-300 group-active:scale-95 transition-transform"
                    />
                    <span className="text-[10px] tracking-[0.18em] uppercase mt-1.5">
                      {a.label}
                    </span>
                  </a>
                ))}

                <Link
                  href="/contact"
                  aria-label="Hire Caltech Design Studio"
                  className={clsx(
                    "flex flex-col items-center justify-center py-2.5 rounded-xl",
                    "bg-gold-400 text-ink-900 active:bg-gold-300 transition-colors"
                  )}
                >
                  <ArrowUpRight size={20} />
                  <span className="text-[10px] tracking-[0.18em] uppercase mt-1.5 font-medium">
                    Hire
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
