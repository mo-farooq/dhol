import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { PRODUCTS } from "@/data/products";

export default function FeatureSplitBanner() {
  const dholProduct = PRODUCTS.find((p) => p.id === "puneri-dhol") || PRODUCTS[0];
  const tashaProduct = PRODUCTS.find((p) => p.id === "brass-tasha") || PRODUCTS[2];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Section Header (Screenshot 4 Reference) */}
      <div className="text-center">
        <h2 className="font-aktiv font-bold text-3xl sm:text-4xl text-[#96281B] tracking-tight uppercase">
          Grab Our Favourites
        </h2>
      </div>

      {/* Split Feature 1: Master Puneri Dhol */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#E8E8E1] shadow-md bg-white">
        {/* Left Column: Solid Ochre Canvas Content Block (Screenshot 4 Left) */}
        <div className="lg:col-span-6 bg-[#C68A2C] text-white p-8 sm:p-14 lg:p-16 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h3 className="font-aktiv font-medium text-3xl sm:text-4xl text-white tracking-normal leading-tight">
              Core Collection
            </h3>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed font-aktiv font-light">
              Festival-Ready, Master-Tuned. Handcrafted percussion trusted by leading pathaks and rooted in Miraj acoustic tradition.
            </p>
          </div>

          <div>
            <Link
              href={`/catalogue/${dholProduct.slug}`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-[#FAF6F0] text-[#96281B] hover:bg-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
            >
              <span>SHOP NOW</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Real Studio Photograph (Screenshot 4 Right) */}
        <div className="lg:col-span-6 min-h-[320px] sm:min-h-[420px] relative overflow-hidden bg-[#1C1917]">
          <Image
            src="/images/puneri-dhol-studio.jpg"
            alt="Master Puneri Dhol Shell on Crimson Velvet"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Split Feature 2: Spun Brass Tasha (Inverted Order) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#E8E8E1] shadow-md bg-white">
        {/* Left Column: Real Studio Photograph */}
        <div className="lg:col-span-6 min-h-[320px] sm:min-h-[420px] relative overflow-hidden bg-[#1C1917] order-2 lg:order-1">
          <Image
            src="/images/brass-tasha-studio.jpg"
            alt="Acoustic Spun Brass Tasha on Crimson Velvet"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Column: Solid Ochre Canvas Block */}
        <div className="lg:col-span-6 bg-[#C68A2C] text-white p-8 sm:p-14 lg:p-16 flex flex-col justify-between space-y-8 order-1 lg:order-2">
          <div className="space-y-4">
            <h3 className="font-aktiv font-medium text-3xl sm:text-4xl text-white tracking-normal leading-tight">
              Concert Lead
            </h3>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed font-aktiv font-light">
              Spun from heavy musical brass alloy with high-tensile steel rigging. Engineered to cut clean through festival processions with sharp, commanding attack.
            </p>
          </div>

          <div>
            <Link
              href={`/catalogue/${tashaProduct.slug}`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-[#FAF6F0] text-[#96281B] hover:bg-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
            >
              <span>SHOP NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
