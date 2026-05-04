"use client";

const tags = [
  "Residential",
  "Commercial",
  "Office",
  "Café & Bar",
  "Restaurant",
  "Hospitality",
  "Retail",
  "Heritage Restoration",
  "Conservation",
  "Lime Work",
  "Surkhi",
  "Brick Masonry",
  "Structural Repairs",
  "Retrofit Works",
];

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative py-8 sm:py-12 border-y border-bone-50/5 overflow-hidden bg-ink-800"
    >
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center pr-6 sm:pr-8 shrink-0">
            {tags.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className="flex items-center gap-5 sm:gap-8 pr-5 sm:pr-8"
              >
                <span className="font-serif text-2xl sm:text-3xl md:text-5xl tracking-tight text-bone-50/85">
                  {t}
                </span>
                <span className="text-gold-400 text-2xl sm:text-3xl md:text-5xl">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
