import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Volume2, ShieldCheck, Flame, Sparkles } from "lucide-react";

interface CraftCategory {
  id: string;
  name: string;
  marathi: string;
  image: string;
  acousticNote: string;
  frequency: string;
  description: string;
  badge: string;
}

const CRAFT_CATEGORIES: CraftCategory[] = [
  {
    id: "dhol",
    name: "Solid Timber Dhol Barrels",
    marathi: "पुणेरी लाकडी ढोल",
    image: "/images/puneri-dhol-studio.jpg",
    acousticNote: "Deep Chest-Thumping Bass",
    frequency: "38 Hz — 110 Hz",
    description: "Solid seasoned mango & sheesham wood barrels, hand-turned in Miraj with dual rings for 24-point rope tension.",
    badge: "Pathak Standard",
  },
  {
    id: "tasha",
    name: "Spun Brass Tashas",
    marathi: "पितळी ताशा",
    image: "/images/brass-tasha-studio.jpg",
    acousticNote: "High-Tension Treble Attack",
    frequency: "1.2 kHz — 4.5 kHz",
    description: "Heavy spun brass bowls with reinforced rim collars engineered to cut through 100-member marching processions.",
    badge: "Concert Pitch",
  },
  {
    id: "traditional",
    name: "Folk Sambal & Classical",
    marathi: "पारंपरिक संबळ व तबला",
    image: "/images/folk-sambal-studio.jpg",
    acousticNote: "Devotional & Ritual Rhythm",
    frequency: "Acoustic Folk Harmonic",
    description: "Authentic double-drum Sambal and classical Tabla sets built for cultural mandals, temple rituals, and academies.",
    badge: "Heritage Craft",
  },
  {
    id: "plates",
    name: "Sun-Cured Leather Plates",
    marathi: "नैसर्गिक कातडी पाने",
    image: "/images/cured-plates-studio.jpg",
    acousticNote: "Monsoon Sag-Proof Tension",
    frequency: "Natural Skin Resonance",
    description: "Indigenous goat hides treated with traditional lime, neem, and courtyard sun-curing for unshakeable festival pitch.",
    badge: "Miraj Specialty",
  },
  {
    id: "hardware",
    name: "Forged Rigging Hardware",
    marathi: "लोखंडी एस-हुक व दोरी",
    image: "/images/hardware-ropes-studio.jpg",
    acousticNote: "Unbreakable 1,500 kg Tensile",
    frequency: "Zero Slippage Clamp",
    description: "High-tensile forged steel S-hooks, nylon-core cotton ropes, and brass tension rings that eliminate march breakdowns.",
    badge: "Heavy Duty",
  },
  {
    id: "maintenance",
    name: "Acoustic Dhol Masala",
    marathi: "पारंपरिक ढोल मसाला",
    image: "/images/cured-plates-studio.jpg",
    acousticNote: "Mineral Bass Tuning Paste",
    frequency: "Low Frequency Tuning",
    description: "Proprietary natural mineral and organic resin formula applied inside the dhol bass plate for sustained rumble.",
    badge: "Miraj Secret",
  },
];

export default function ShopByCraft() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* ── Section Header (P-TAL Style) ────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E8E1] pb-5">
        <div>
          <span className="text-xs font-aktiv font-semibold uppercase tracking-wider text-[#C3771E] block mb-1">
            Miraj Artisanal Taxonomy
          </span>
          <h2 className="font-aktiv font-bold text-2xl sm:text-3xl text-[#B22B15] tracking-tight uppercase">
            Shop By Sound & Craft
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-xl leading-relaxed font-aktiv font-light">
            Every percussion category is engineered with a specific acoustic purpose: from chest-thumping
            sub-bass dhol shells to high-tension spun brass tashas.
          </p>
        </div>
        <Link
          href="/catalogue"
          className="inline-flex items-center gap-1.5 text-xs font-aktiv font-semibold uppercase tracking-wide text-[#B22B15] hover:text-[#8F2110] transition-colors"
        >
          <span>Explore All Categories</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* ── Grid of 6 Craft Categories ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CRAFT_CATEGORIES.map((craft) => (
          <Link
            key={craft.id}
            href={`/catalogue?category=${craft.id}`}
            className="group flex flex-col bg-white rounded-md border border-[#E8E8E1] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:border-[#B22B15]/50"
          >
            {/* Visual Box with Authentic Real Photograph */}
            <div className="relative h-52 w-full bg-[#200508] border-b border-[#E8E8E1] overflow-hidden">
              <Image
                src={craft.image}
                alt={craft.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-aktiv font-semibold uppercase tracking-wide bg-[#B22B15] text-white shadow-xs">
                  {craft.badge}
                </span>
              </div>

              <div className="absolute bottom-2.5 right-3 z-10">
                <span className="text-[10px] font-aktiv font-bold text-[#C3771E] bg-white/95 px-2 py-0.5 rounded border border-[#E8E8E1] shadow-xs">
                  {craft.frequency}
                </span>
              </div>
            </div>

            {/* Content Box */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
              <div>
                <div className="flex items-center justify-between text-xs text-[#8F2110] font-marathi font-semibold mb-1">
                  <span className="text-sm">{craft.marathi}</span>
                  <span className="text-[10px] uppercase font-aktiv font-semibold tracking-wider text-[#C3771E]">
                    {craft.acousticNote}
                  </span>
                </div>
                <h3 className="font-aktiv font-bold text-lg sm:text-xl text-[#171513] group-hover:text-[#B22B15] transition-colors leading-snug tracking-tight">
                  {craft.name}
                </h3>
                <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed font-aktiv font-light">
                  {craft.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#FFEBD1] flex items-center justify-between text-xs font-aktiv font-semibold uppercase tracking-wide text-[#B22B15] group-hover:text-[#8F2110]">
                <span>View Products</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
