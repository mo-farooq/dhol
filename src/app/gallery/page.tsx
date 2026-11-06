"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Camera, MessageCircle, Eye, Tag } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface GalleryItem {
  id: string;
  title: string;
  marathiTitle: string;
  category: "workshop" | "pathak" | "finished";
  categoryLabel: string;
  description: string;
  image: string;
  iconTag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Artisan Leather Curing & Sun Treatment",
    marathiTitle: "नैसर्गिक कातडे प्रक्रिया व वाळवणी",
    category: "workshop",
    categoryLabel: "Workshop Craft",
    description: "Raw Indian goat hides undergoing multi-stage lime, neem, and sun drying in the Miraj workshop courtyard.",
    image: "/images/cured-plates-studio.jpg",
    iconTag: "Leather Curing",
  },
  {
    id: "g2",
    title: "Dual-Ring 24-Point Puneri Dhol Rigging",
    marathiTitle: "पुणेरी ढोल दोरी व एस हुक फिटिंग",
    category: "workshop",
    categoryLabel: "Workshop Craft",
    description: "Veteran craftsmen applying high-strength cotton cordage tension across forged steel S-hooks on solid wood barrels.",
    image: "/images/hardware-ropes-studio.jpg",
    iconTag: "Dhol Rigging",
  },
  {
    id: "g3",
    title: "100-Member Dhol-Tasha Pathak in Pune",
    marathiTitle: "गणेशोत्सव मिरवणूक वादन",
    category: "pathak",
    categoryLabel: "Pathaks in Action",
    description: "Full Harikrupa fleet in synchronization during the grand Ganeshotsav procession in Pune.",
    image: "/images/pathak-performance.jpg",
    iconTag: "Festival Procession",
  },
  {
    id: "g4",
    title: "Concert-Grade Spun Brass Tasha Fleet",
    marathiTitle: "तयार पितळी ताशा संच",
    category: "finished",
    categoryLabel: "Finished Sets",
    description: "Inspection of high-tension brass tashas equipped with unbreakable bolt kits and transparent polyester plates.",
    image: "/images/brass-tasha-studio.jpg",
    iconTag: "Brass Tasha",
  },
  {
    id: "g5",
    title: "Heritage Wood Carving & Chiseling",
    marathiTitle: "लाकडी खोके कोरीव काम",
    category: "workshop",
    categoryLabel: "Workshop Craft",
    description: "Senior Miraj craftsman hand-chiseling seasoned solid mango wood barrels with traditional gauges and mallets.",
    image: "/images/artisan-craftsman.jpg",
    iconTag: "Wood Craft",
  },
  {
    id: "g6",
    title: "Handcrafted Miraj Tabla & Sambal Sets",
    marathiTitle: "पारंपरिक संबळ व तबला जोडी",
    category: "finished",
    categoryLabel: "Finished Sets",
    description: "Deluxe Miraj classical percussion with hand-hammered brass Bayan ready for shipment to cultural academies.",
    image: "/images/miraj-tabla-studio.jpg",
    iconTag: "Classical Percussion",
  },
  {
    id: "g7",
    title: "Shivmudra Mandal Street Procession, Kolhapur",
    marathiTitle: "मिरवणूक वादन, कोल्हापूर",
    category: "pathak",
    categoryLabel: "Pathaks in Action",
    description: "Vadaaks beating in fierce unison with saffron pagadis during the festival procession.",
    image: "/images/pathak-performance.jpg",
    iconTag: "Live Performance",
  },
  {
    id: "g8",
    title: "Master Puneri Dhol Heavy Bass Shell",
    marathiTitle: "मास्टर पुणेरी ढोल",
    category: "finished",
    categoryLabel: "Finished Sets",
    description: "Flagship 26-inch solid timber Puneri Dhol ready with dual cured leather plates and 24-point cordage.",
    image: "/images/puneri-dhol-studio.jpg",
    iconTag: "Dhol Showcase",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Page Header ────────────────────────────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="seal-stamp-vintage text-[11px] font-bold uppercase tracking-widest bg-[#FFEBD1] text-[#B22B15] border-[#B22B15]/40 shadow-2xs">
          <Camera className="w-3.5 h-3.5 text-[#C3771E]" />
          <span>Visual Showcase</span>
        </div>
        <h1 className="font-cinzel font-bold text-2xl sm:text-4xl lg:text-5xl text-[#B22B15] tracking-[0.1em] uppercase">
          Workshop Craft & Festival Performance Gallery
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-sans">
          Explore authentic photographs of our craftsmen at work in Miraj and witness our
          instruments powering grand festival processions across India.
        </p>
      </div>

      {/* ── Filter Pills ────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 font-cinzel">
        {[
          { id: "all", label: "All Photos" },
          { id: "workshop", label: "Workshop & Artisan Craft" },
          { id: "pathak", label: "Pathaks in Action" },
          { id: "finished", label: "Finished Instruments" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
              filter === btn.id
                ? "bg-[#B22B15] text-white shadow-xs"
                : "bg-white text-stone-700 border border-[#E8E8E1] hover:bg-[#FFEBD1]"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* ── Gallery Cards Grid ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group cursor-pointer rounded-2xl bg-white border border-[#E7E0D6] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:border-[#C85A17]/60 flex flex-col"
          >
            {/* Visual Photo Header Box */}
            <div className="relative h-56 bg-[#200508] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-black/60 text-[#FFEBD1] backdrop-blur-xs border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <span className="p-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <span className="text-xs font-marathi font-semibold text-[#8F2110] block">
                  {item.marathiTitle}
                </span>
                <h3 className="font-cormorant font-bold text-lg text-[#171513] group-hover:text-[#B22B15] transition-colors mt-0.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal Dialog ───────────────────────────────────────────── */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-stone-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-64 sm:h-72 rounded-xl relative overflow-hidden bg-[#200508] border border-stone-200">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="font-serif font-bold text-lg text-[#FFEBD1] block">
                  {selectedItem.iconTag}
                </span>
                <p className="text-[11px] text-white/80">Harikrupa Musical Works — Miraj Karkhana</p>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A17]">
                {selectedItem.categoryLabel}
              </span>
              <h3 className="font-serif font-bold text-xl text-[#1C1917]">
                {selectedItem.title}
              </h3>
              <p className="text-sm font-serif font-semibold text-stone-500">
                {selectedItem.marathiTitle}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {selectedItem.description}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-400">Miraj Karkhana Photo Archive</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 rounded-lg bg-stone-900 text-white text-xs font-bold hover:bg-stone-800"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Community Submission Banner ─────────────────────────────────────── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFEA] border border-[#E7E0D6] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif font-bold text-lg text-[#1C1917]">
            Is your Dhol-Tasha Pathak using Harikrupa Instruments?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E]">
            Send us your high-resolution performance photos and videos on WhatsApp to get featured on our official website and Instagram page!
          </p>
        </div>
        <a
          href={getGeneralWhatsAppUrl("Namaskar Harikrupa Musical! We want to share our pathak performance photos and video clips to be featured on your gallery.")}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1EBE5D] transition-all shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Send Photos on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
