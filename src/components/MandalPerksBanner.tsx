import React from "react";
import Link from "next/link";

export default function MandalPerksBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Deep Burgundy Partnership Banner (Screenshot 3 Reference) */}
      <div className="rounded-2xl bg-[#4A0E17] text-white p-6 sm:p-8 lg:p-10 border border-[#7A212D]/40 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Brand Emblem x Miraj Craft Seal (~3.5 cols) */}
          <div className="lg:col-span-4 flex items-center justify-center gap-4 lg:border-r lg:border-dashed lg:border-[#8B2D3A] lg:pr-8 py-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#C68A2C]/60 flex items-center justify-center p-2 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#C68A2C]" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="50" cy="50" r="45" opacity="0.4" />
                <circle cx="50" cy="50" r="32" strokeDasharray="3 2" />
                <path d="M 50 15 A 35 35 0 0 1 85 50 A 35 35 0 0 1 50 85 A 35 35 0 0 1 15 50 A 35 35 0 0 1 50 15 Z" opacity="0.6" />
                <circle cx="50" cy="50" r="8" fill="#C68A2C" />
              </svg>
            </div>

            <span className="text-[#FFEBD1]/60 font-light text-base">✕</span>

            <div className="flex flex-col">
              <span className="font-serif italic text-2xl sm:text-3xl text-[#FFEBD1] leading-none">
                Miraj
              </span>
              <span className="font-aktiv font-bold text-[10px] sm:text-xs text-[#C68A2C] uppercase tracking-[0.2em] pt-0.5">
                Karkhana
              </span>
            </div>
          </div>

          {/* Right Column: Partnership Value & 2 Perk Boxes (~8.5 cols) */}
          <div className="lg:col-span-8 space-y-6 text-center">
            {/* Header Text */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm font-aktiv font-bold uppercase tracking-wider text-[#C68A2C]">
                HARIKRUPA has partnered with REGISTERED MANDALS
              </p>
              <p className="text-xs sm:text-sm text-[#FFEBD1]/80 font-aktiv font-light">
                to add direct workshop value to your festival fleet.
              </p>
            </div>

            {/* Two Reward Cards with Center Sunburst */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Box 1 */}
              <div className="w-full sm:w-60 overflow-hidden rounded shadow-sm border border-[#C68A2C]/40">
                <div className="bg-[#C68A2C] text-[#2A1208] px-3 py-2 text-center">
                  <span className="font-aktiv font-bold text-xs uppercase tracking-wider block">
                    GET FREE ACCESSORY KIT
                  </span>
                </div>
                <div className="bg-[#32080E] px-3 py-2 text-center">
                  <span className="font-aktiv font-medium text-xs text-[#FFEBD1] uppercase tracking-wider">
                    ON ORDERS ABOVE ₹35,000.
                  </span>
                </div>
              </div>

              {/* Sunburst Icon */}
              <div className="hidden sm:flex items-center justify-center text-[#C68A2C] shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#C68A2C]" fill="currentColor">
                  <path d="M12 0L13.5 8.5L22 7L15.5 13L21 19.5L12.5 16L9.5 24L7.5 15.5L0 17L5.5 11.5L1 5L9.5 7.5L12 0Z" opacity="0.85" />
                </svg>
              </div>

              {/* Box 2 */}
              <div className="w-full sm:w-60 overflow-hidden rounded shadow-sm border border-[#C68A2C]/40">
                <div className="bg-[#C68A2C] text-[#2A1208] px-3 py-2 text-center">
                  <span className="font-aktiv font-bold text-xs uppercase tracking-wider block">
                    GET FREE CRATE DELIVERY
                  </span>
                </div>
                <div className="bg-[#32080E] px-3 py-2 text-center">
                  <span className="font-aktiv font-medium text-xs text-[#FFEBD1] uppercase tracking-wider">
                    ON ORDERS ABOVE ₹75,000.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="pt-2">
              <p className="text-[11px] sm:text-xs text-[#FFEBD1]/90 font-aktiv font-light tracking-wide">
                Every order includes pitch tuning &amp;{" "}
                <span className="font-bold text-[#C68A2C] uppercase tracking-wider">
                  1-Year Karkhana Craft Warranty
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
