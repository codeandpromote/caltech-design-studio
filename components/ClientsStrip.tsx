import Image from "next/image";
import { CLIENTS } from "@/lib/previous-projects";

export default function ClientsStrip() {
  return (
    <section className="relative bg-ink-800 border-y border-bone-50/5 py-16 sm:py-20">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="md:col-span-4">
            <div className="eyebrow mb-5">
              <span className="inline-block w-6 h-px bg-gold-300 align-middle mr-3" />
              Clients
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-bone-50 leading-tight">
              Trusted by{" "}
              <span className="italic gold-gradient-text">
                brands and institutions.
              </span>
            </h2>
            <p className="mt-5 text-bone-50/55 text-sm sm:text-base leading-relaxed">
              From hospitality flagships to public-sector enterprises and
              high-street retail — a quiet roster of long-running
              relationships.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="relative rounded-md overflow-hidden bg-bone-50 p-4 sm:p-6 border border-bone-50/10">
              <Image
                src="/brand/clients.jpeg"
                alt={`Clients we have worked with: ${CLIENTS.join(", ")} and more.`}
                width={1280}
                height={690}
                sizes="(max-width:768px) 100vw, 60vw"
                className="w-full h-auto"
                priority={false}
              />
            </div>
            <p className="mt-4 text-bone-50/45 text-xs tracking-wide">
              {CLIENTS.join(" · ")} · and many more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
