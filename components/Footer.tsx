import Link from "next/link";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 border-t border-bone-50/5 mt-24 sm:mt-32 pb-20 lg:pb-0">
      <div className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-4 group">
              <Image
                src="/brand/logo-symbol-sm.png"
                alt="Caltech"
                width={84}
                height={84}
                className="object-contain drop-shadow-[0_0_22px_rgba(201,161,74,0.35)] transition-transform duration-500 group-hover:rotate-[-8deg]"
              />
              <div className="leading-tight">
                <div className="font-serif text-2xl tracking-[0.22em]">
                  CALTECH
                </div>
                <div className="text-[11px] tracking-[0.34em] text-gold-300 uppercase mt-1">
                  Design Studio
                </div>
              </div>
            </Link>
            <p className="mt-8 max-w-md text-bone-50/55 leading-relaxed text-[15px]">
              A Kolkata atelier shaping spaces with craft and conservation —
              from intimate residences and hospitality interiors to the
              restoration of India&apos;s heritage architecture.
            </p>

            <div className="mt-8">
              <MagneticButton href="/contact" variant="gold" className="text-sm py-3 px-6">
                Begin a conversation
              </MagneticButton>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Studio</div>
            <ul className="space-y-2 text-bone-50/70 text-[15px]">
              <li>
                <Link href="/interiors" className="hover:text-gold-300 transition-colors">
                  Interiors
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-gold-300 transition-colors">
                  Heritage Restoration
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Visit</div>
            <address className="not-italic text-bone-50/70 text-[15px] leading-relaxed">
              <p className="text-bone-50/50 text-xs uppercase tracking-[0.25em] mb-1">
                Registered
              </p>
              <p>9/3 Radhanath Mullick Lane</p>
              <p>Kolkata 700012</p>
              <p className="text-bone-50/50 text-xs uppercase tracking-[0.25em] mb-1 mt-5">
                Working
              </p>
              <p>BE 37 Shantipally, Kasba</p>
              <p>Kolkata 700107</p>
              <p className="mt-5">
                <a
                  href="tel:+917003753068"
                  className="hover:text-gold-300 transition-colors"
                >
                  +91 7003 753 068
                </a>
                {" · "}
                <a
                  href="tel:+918240434154"
                  className="hover:text-gold-300 transition-colors"
                >
                  8240 434 154
                </a>
              </p>
              <p>
                <a
                  href="mailto:caltechdesignstudio3@gmail.com"
                  className="hover:text-gold-300 transition-colors"
                >
                  caltechdesignstudio3@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone-50/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-bone-50/40">
          <p>© {new Date().getFullYear()} Caltech Design Studio. All rights reserved.</p>
          <p className="font-serif italic">
            Crafted with <span className="text-gold-300">care</span> in Kolkata.
          </p>
        </div>
      </div>
    </footer>
  );
}
