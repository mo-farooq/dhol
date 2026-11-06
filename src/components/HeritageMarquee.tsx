import React from "react";

export default function HeritageMarquee() {
  const items = [
    "2024 GI-TAGGED HERITAGE",
    "HANDCRAFTED IN MIRAJ",
    "SEASONED HARDWOOD",
    "NATURAL SUN-CURED LEATHER",
    "1,200+ PATHAKS EQUIPPED",
    "ESTD. 1994 • 30 YEARS OF CRAFT",
    "DIRECT WORKSHOP PRICING",
    "PAN-INDIA INSURED DISPATCH",
  ];

  return (
    <div className="w-full bg-[#C68A2C] text-white py-3 overflow-hidden border-y border-[#A86415] relative select-none shadow-xs">
      <div className="flex w-max items-center gap-8 animate-[marquee_35s_linear_infinite]">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-xs sm:text-[13px] font-aktiv font-semibold tracking-[0.12em] uppercase text-white">
              {text}
            </span>
            <span className="text-white/80 text-sm">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
