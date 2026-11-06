import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function HeroPtal() {
  return (
    <section className="relative overflow-hidden bg-velvet-crush text-white py-12 sm:py-20 border-b border-[#6B1824]">
      {/* Subtle Warm Amber Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C68A2C]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#96281B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase (Screenshot 5 Inspiration) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/puneri-dhol-studio.jpg"
                alt="Master Puneri Dhol handcrafted in Miraj with seasoned timber and sun-cured goat skin"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Editorial Typography (Screenshot 5 Reference) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-center lg:text-left">
            {/* Top Subtitle */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-aktiv font-semibold uppercase tracking-[0.16em] text-[#C68A2C] block">
                SET THE RHYTHM FOR
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFEBD1] via-[#E8A553] to-[#FFEBD1] tracking-wide leading-[1.08]">
                MANY <br />
                FESTIVALS <br />
                TO COME.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#FFEBD1]/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-aktiv font-light">
              Handcrafted in Miraj with seasoned timber, spun brass, and sun-cured leather for celebrations that echo through generations.
            </p>

            {/* CTAs matching Screen 5 ochre styling */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-aktiv">
              <Link
                href="/catalogue"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded bg-[#C68A2C] text-[#2A1208] hover:bg-[#B57A22] font-semibold text-sm uppercase tracking-wider shadow-md transition-all"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/bulk-orders"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-transparent border border-[#FFEBD1]/40 text-[#FFEBD1] hover:bg-white/10 font-semibold text-sm uppercase tracking-wider transition-all"
              >
                <Flame className="w-4 h-4 text-[#C68A2C]" />
                <span>MANDAL ORDERS</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-xs text-white/75 font-aktiv">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C68A2C]" />
                Monsoon Sag-Proof
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C68A2C]" />
                2024 GI-Tagged
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1.5">
                <span>Pan-India Transit</span>
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Dots Indicator (Screen 5 Reference) */}
        <div className="flex items-center justify-center gap-2 pt-10 sm:pt-14">
          <span className="w-2.5 h-2.5 rounded-full bg-white transition-all" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
