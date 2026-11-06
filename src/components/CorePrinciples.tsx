import React from "react";

export default function CorePrinciples() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-12">
      {/* Section Title (Screenshot 1 Reference) */}
      <div className="text-center">
        <h2 className="font-aktiv font-bold text-3xl sm:text-4xl lg:text-5xl text-[#96281B] tracking-tight uppercase">
          Our Core Principles
        </h2>
      </div>

      {/* Radial Medallion & Satellites Layout */}
      <div className="relative max-w-4xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Satellites (3 cols) */}
          <div className="md:col-span-3 space-y-16 md:space-y-28 text-center order-2 md:order-1">
            {/* Top-Left: Seasoned Timber */}
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="w-3.5 h-3.5 rounded-full bg-[#96281B] shrink-0" />
              <span className="font-aktiv font-bold text-base sm:text-lg text-[#96281B] tracking-tight uppercase underline underline-offset-4 decoration-[#96281B]/40 group-hover:decoration-[#96281B] transition-colors">
                Seasoned Timber
              </span>
            </div>

            {/* Bottom-Left: Sun-Cured Leather */}
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="w-3.5 h-3.5 rounded-full bg-[#96281B] shrink-0" />
              <span className="font-aktiv font-bold text-base sm:text-lg text-[#96281B] tracking-tight uppercase group-hover:text-[#7A1E13] transition-colors">
                Sun-Cured Leather
              </span>
            </div>
          </div>

          {/* Center Medallion (6 cols) */}
          <div className="md:col-span-6 flex flex-col items-center justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#C68A2C] flex items-center justify-center p-8 shadow-xl">
              {/* Intricate Engraved 4-Quadrant Spiral Motif (Screenshot 1 Reference) */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-white/95"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* 4 Interconnected Acoustic Spirals */}
                <circle cx="100" cy="100" r="88" strokeWidth="1.5" opacity="0.3" />
                <circle cx="100" cy="100" r="76" strokeWidth="1.5" opacity="0.4" />
                <circle cx="100" cy="100" r="64" strokeWidth="1.5" opacity="0.5" />
                
                {/* Quadrant 1 Spiral */}
                <path d="M 100 100 C 100 80, 80 60, 60 60 C 40 60, 20 80, 20 100 C 20 144, 56 180, 100 180" strokeWidth="2.2" opacity="0.9" />
                <path d="M 100 100 C 100 86, 86 72, 72 72 C 58 72, 44 86, 44 100 C 44 130, 70 156, 100 156" strokeWidth="1.8" opacity="0.75" />
                
                {/* Quadrant 2 Spiral */}
                <path d="M 100 100 C 120 100, 140 80, 140 60 C 140 40, 120 20, 100 20 C 56 20, 20 56, 20 100" strokeWidth="2.2" opacity="0.9" />
                <path d="M 100 100 C 114 100, 128 86, 128 72 C 128 58, 114 44, 100 44 C 70 44, 44 70, 44 100" strokeWidth="1.8" opacity="0.75" />

                {/* Quadrant 3 Spiral */}
                <path d="M 100 100 C 100 120, 120 140, 140 140 C 160 140, 180 120, 180 100 C 180 56, 144 20, 100 20" strokeWidth="2.2" opacity="0.9" />
                <path d="M 100 100 C 100 114, 114 128, 128 128 C 142 128, 156 114, 156 100 C 156 70, 130 44, 100 44" strokeWidth="1.8" opacity="0.75" />

                {/* Quadrant 4 Spiral */}
                <path d="M 100 100 C 80 100, 60 120, 60 140 C 60 160, 80 180, 100 180 C 144 180, 180 144, 180 100" strokeWidth="2.2" opacity="0.9" />
                <path d="M 100 100 C 86 100, 72 114, 72 128 C 72 142, 86 156, 100 156 C 130 156, 156 130, 156 100" strokeWidth="1.8" opacity="0.75" />

                {/* Center Core Dot */}
                <circle cx="100" cy="100" r="5" fill="#96281B" />
              </svg>
            </div>
          </div>

          {/* Right Satellites (3 cols) */}
          <div className="md:col-span-3 space-y-16 md:space-y-28 text-center order-3">
            {/* Top-Right: GI Provenance */}
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="w-3.5 h-3.5 rounded-full bg-[#96281B] shrink-0" />
              <span className="font-aktiv font-bold text-base sm:text-lg text-[#96281B] tracking-tight uppercase group-hover:text-[#7A1E13] transition-colors">
                GI Provenance
              </span>
            </div>

            {/* Bottom-Right: Precision Tuning */}
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <span className="w-3.5 h-3.5 rounded-full bg-[#96281B] shrink-0" />
              <span className="font-aktiv font-bold text-base sm:text-lg text-[#96281B] tracking-tight uppercase group-hover:text-[#7A1E13] transition-colors">
                Precision Tuning
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Satellite Node: Craftsmanship (Screenshot 1 Reference) */}
        <div className="text-center pt-10 space-y-3">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#96281B]" />
            <span className="font-aktiv font-bold text-base sm:text-lg text-[#96281B] tracking-wide uppercase">
              CRAFTSMANSHIP
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#96281B]/90 max-w-2xl mx-auto leading-relaxed pt-1 font-aktiv font-light">
            Rooted in Miraj’s 170-year acoustic heritage, our instruments are handcrafted from seasoned
            timber, virgin brass, and natural sun-cured hides. Designed to withstand hours of vigorous
            festival performance while preserving pure acoustic resonance.
          </p>
        </div>
      </div>
    </section>
  );
}
