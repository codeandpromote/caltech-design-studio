"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/interiors", label: "Interiors" },
  { href: "/heritage", label: "Heritage" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink-900/80 backdrop-blur-xl border-b border-bone-50/5"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between py-4 md:py-5">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-[1.06] shrink-0">
              <Image
                src="/brand/logo-symbol-sm.png"
                alt="Caltech Design Studio"
                fill
                sizes="64px"
                className="object-contain drop-shadow-[0_0_18px_rgba(201,161,74,0.35)]"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-[15px] sm:text-[19px] md:text-[21px] tracking-[0.18em] sm:tracking-[0.22em] text-bone-50">
                CALTECH
              </div>
              <div className="text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.3em] sm:tracking-[0.34em] text-gold-300 uppercase mt-0.5">
                Design&nbsp;·&nbsp;Studio
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm tracking-wide text-bone-50/80 hover:text-bone-50 transition-colors group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href="/contact" className="btn-gold text-sm py-2.5 px-5">
              Start a project
            </Link>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden text-bone-50 p-2"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="container-x flex items-center justify-between py-4 md:py-5">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <Image
                  src="/brand/logo-symbol-sm.png"
                  alt="Caltech"
                  width={56}
                  height={56}
                  className="object-contain"
                />
                <span className="font-serif text-lg tracking-[0.22em]">CALTECH</span>
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2"
              >
                <X size={28} />
              </button>
            </div>

            <motion.ul
              className="container-x mt-12 space-y-2"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight border-b border-bone-50/10 hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="container-x mt-12 text-sm text-bone-50/60 leading-relaxed">
              <p className="text-gold-300 uppercase tracking-[0.3em] text-xs mb-3">
                Studio
              </p>
              <p>9/3 Radhanath Mullick Lane</p>
              <p>Kolkata 700012, India</p>
              <p className="mt-3">+91 7003 753 068</p>
              <p>caltechdesignstudio3@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
