import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Caltech Design Studio",
  description:
    "Begin a project with Caltech Design Studio. Interiors and heritage restoration enquiries, Kolkata.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin a Conversation"
        title="Tell us about"
        italic="your space."
        description="Whether it's a residence, a café, a workplace or a heritage façade — share a few details and we'll be in touch."
      />

      <section className="relative pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info */}
            <aside className="lg:col-span-5 space-y-10">
              <div>
                <div className="eyebrow mb-4">Studio</div>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <span className="w-10 h-10 rounded-full border border-bone-50/15 flex items-center justify-center shrink-0 text-gold-300">
                      <MapPin size={16} />
                    </span>
                    <div className="text-[15px] leading-relaxed text-bone-50/80">
                      <div className="text-bone-50/45 text-xs uppercase tracking-[0.25em] mb-1">
                        Registered Office
                      </div>
                      9/3 Radhanath Mullick Lane
                      <br />
                      Kolkata 700012
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-10 h-10 rounded-full border border-bone-50/15 flex items-center justify-center shrink-0 text-gold-300">
                      <MapPin size={16} />
                    </span>
                    <div className="text-[15px] leading-relaxed text-bone-50/80">
                      <div className="text-bone-50/45 text-xs uppercase tracking-[0.25em] mb-1">
                        Working Office
                      </div>
                      BE 37 Shantipally, Kasba
                      <br />
                      Kolkata 700107
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-10 h-10 rounded-full border border-bone-50/15 flex items-center justify-center shrink-0 text-gold-300">
                      <Phone size={16} />
                    </span>
                    <div className="text-[15px] leading-relaxed">
                      <a
                        href="tel:+917003753068"
                        className="text-bone-50/80 hover:text-gold-300 transition-colors block"
                      >
                        +91 7003 753 068
                      </a>
                      <a
                        href="tel:+918240434154"
                        className="text-bone-50/80 hover:text-gold-300 transition-colors block"
                      >
                        +91 8240 434 154
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-10 h-10 rounded-full border border-bone-50/15 flex items-center justify-center shrink-0 text-gold-300">
                      <Mail size={16} />
                    </span>
                    <div className="text-[15px] leading-relaxed">
                      <a
                        href="mailto:caltechdesignstudio3@gmail.com"
                        className="text-bone-50/80 hover:text-gold-300 transition-colors break-all"
                      >
                        caltechdesignstudio3@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-md border border-bone-50/10 bg-ink-800/60 p-6">
                <div className="eyebrow mb-3 text-gold-300">Studio hours</div>
                <p className="text-bone-50/70 text-[15px]">
                  Monday – Saturday · 10:00 – 19:00 IST
                </p>
                <p className="text-bone-50/55 text-sm mt-2">
                  Site visits by appointment.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
