import React from "react";

export default function GlobalReachBanner() {
  return (
    <section className="w-full bg-[#C68A2C] text-white py-14 sm:py-20 relative overflow-hidden shadow-xs">
      {/* Background Decorative Line-Art Sketch of Dhol (Screenshot 2 Right Side) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 sm:w-[420px] h-[420px] opacity-25 pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 240" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1.75">
          {/* Stylized Classical Dhol Barrel Outline */}
          <ellipse cx="100" cy="40" rx="65" ry="22" strokeDasharray="3 2" />
          <path d="M 35 40 C 30 100, 30 140, 35 200" strokeWidth="2" />
          <path d="M 165 40 C 170 100, 170 140, 165 200" strokeWidth="2" />
          <ellipse cx="100" cy="200" rx="65" ry="22" strokeWidth="2" />
          
          {/* Tension Ropes & Rings */}
          <path d="M 35 40 L 68 200 L 100 40 L 132 200 L 165 40" strokeWidth="1.5" />
          <path d="M 35 200 L 68 40 L 100 200 L 132 40 L 165 200" strokeWidth="1.5" />
          
          {/* Horizontal Acoustic Etch Lines */}
          <line x1="40" y1="80" x2="160" y2="80" strokeDasharray="2 3" opacity="0.6" />
          <line x1="38" y1="120" x2="162" y2="120" strokeDasharray="4 2" opacity="0.8" />
          <line x1="40" y1="160" x2="160" y2="160" strokeDasharray="2 3" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Story & Key Stats (Screenshot 2 Reference) */}
          <div className="lg:col-span-8 space-y-8 text-center sm:text-left">
            <div className="space-y-4">
              <h2 className="font-aktiv font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
                Our Global Presence
              </h2>
              <p className="text-base sm:text-lg text-white/95 leading-relaxed font-aktiv font-light max-w-2xl">
                What started as a humble Miraj workshop in 1994 is now heard in festival processions and
                mandals across India and abroad. From historic pathaks in Pune and Mumbai to overseas
                community celebrations, the story of our craft continues to travel far and wide.
              </p>
            </div>

            {/* Metrics (Screenshot 2 Layout: Primary Stat + Secondary Stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 pt-2">
              {/* Primary Stat */}
              <div className="sm:col-span-6 space-y-1">
                <span className="font-aktiv font-bold text-5xl sm:text-6xl text-white block leading-none tracking-tight">
                  1,200+
                </span>
                <p className="text-sm sm:text-base text-white/90 font-medium leading-snug font-aktiv">
                  Pathaks &amp; Mandals Equipped Across India
                </p>
              </div>

              {/* Secondary Stats */}
              <div className="sm:col-span-6 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="font-aktiv font-bold text-4xl sm:text-5xl text-white block leading-none tracking-tight">
                    30+
                  </span>
                  <p className="text-xs sm:text-sm text-white/85 font-normal leading-snug font-aktiv">
                    Years of Miraj Heritage
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-aktiv font-bold text-4xl sm:text-5xl text-white block leading-none tracking-tight">
                    45,000+
                  </span>
                  <p className="text-xs sm:text-sm text-white/85 font-normal leading-snug font-aktiv">
                    Instruments Handcrafted
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Spacer for Line-Art Illustration */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>
    </section>
  );
}
