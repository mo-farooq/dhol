import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Sparkles,
  MapPin,
  CheckCircle2,
  Hammer,
  Music,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Miraj Heritage & Our 30-Year Story",
  description:
    "Learn about the legendary musical heritage of Miraj, Maharashtra and how Harikrupa Musical Works has handcrafted traditional percussion for over three decades.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Page Header (P-TAL Editorial Style) ─────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFEBD1] border border-[#E8E8E1] text-xs font-semibold uppercase tracking-wider text-[#B22B15]">
          <Award className="w-3.5 h-3.5 text-[#C3771E]" />
          <span>Estd. 1994 • 2024 GI-Tagged Miraj Craft</span>
        </div>
        <h1 className="font-aktiv font-bold text-3xl sm:text-5xl text-[#B22B15] tracking-tight">
          Three Decades of Miraj Percussion Craft
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-aktiv font-light">
          In the historic lanes of Miraj, where generations of master luthiers shaped India’s
          classical soundscape, Harikrupa Musical Works preserves the living craft of handcrafted percussion.
        </p>
      </div>

      {/* ── The Miraj Legend Section ────────────────────────────────────────── */}
      <div className="bg-white rounded-md border border-[#E8E8E1] p-8 sm:p-12 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C3771E] font-aktiv">
            Geographic Provenance
          </span>
          <h2 className="font-aktiv font-bold text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
            Why Miraj Shapes India’s Acoustic Heritage
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed font-aktiv font-light">
            For over 170 years, Miraj has been recognized as the cradle of Indian musical instrument craft.
            In 2024, the Government of India formally awarded the prestigious <strong>Geographical Indication (GI) Tag</strong> to
            Miraj musical instruments.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed font-aktiv font-light">
            The dry climate along the Krishna river valley provides ideal conditions for natural timber seasoning
            and sun-curing of raw hides. At Harikrupa, our artisans uphold this unbroken lineage of acoustic knowledge.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-700 font-aktiv">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B22B15]" />
              Official 2024 GI Provenance
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B22B15]" />
              Sun-Cured Rawhide
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#B22B15]" />
              Natural Organic Masala
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-md overflow-hidden h-72 sm:h-80 border border-[#C3771E]/30 shadow-xl group">
            <Image
              src="/images/artisan-craftsman.jpg"
              alt="Master craftsman chiseling a Puneri Dhol barrel in Miraj workshop"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center space-y-1">
              <p className="text-xl sm:text-2xl font-marathi font-bold text-[#FFEBD1] tracking-normal">
                “आवाज असा असावा जो छाती ठोकेल”
              </p>
              <p className="text-xs sm:text-sm text-stone-200 font-serif italic leading-relaxed">
                “The sound of a Dhol must not merely be loud; it must resonate within your chest and carry across the festival ground.”
              </p>
              <span className="text-xs uppercase tracking-wider text-[#C3771E] font-aktiv font-semibold block pt-1">
                — Mahesh Kaka, Master Craftsman & Founder
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4 Core Pillars of Harikrupa ─────────────────────────────────────── */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C3771E] font-aktiv">
            Craft Standards
          </span>
          <h2 className="font-aktiv font-bold text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
            The Four Pillars of Harikrupa Craftsmanship
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FFEBD1] text-[#B22B15] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-aktiv font-bold text-base text-[#1C1917]">1. Seasoned Hardwood</h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-aktiv font-light">
              Solid mango and sheesham logs dried naturally for over 12 months to eliminate moisture warp and ensure deep bass.
            </p>
          </div>

          <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FFEBD1] text-[#B22B15] flex items-center justify-center">
              <Hammer className="w-5 h-5" />
            </div>
            <h3 className="font-aktiv font-bold text-base text-[#1C1917]">2. High-Stress Rigging</h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-aktiv font-light">
              Forged heat-treated steel S-hooks and anti-slip cordage engineered to endure hours of intense street vibrations.
            </p>
          </div>

          <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FFEBD1] text-[#B22B15] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-aktiv font-bold text-base text-[#1C1917]">3. Acoustic Calibration</h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-aktiv font-light">
              Every drumhead is tuned and pitch-verified by senior artisans before final crate packing.
            </p>
          </div>

          <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FFEBD1] text-[#B22B15] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-aktiv font-bold text-base text-[#1C1917]">4. Lifelong Support</h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-aktiv font-light">
              We stand behind every instrument with direct workshop maintenance guidance, spare parts, and tuning support.
            </p>
          </div>
        </div>
      </div>

      {/* ── Visit Our Workshop Invitation ────────────────────────────────────── */}
      <div className="rounded-3xl bg-[#F4EFEA] border border-[#E7E0D6] p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D6CCBE] text-xs font-semibold text-[#1C1917]">
          <MapPin className="w-3.5 h-3.5 text-[#C85A17]" />
          <span>Vakhar Bhag, Miraj, Sangli District, Maharashtra</span>
        </div>
        <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#1C1917] max-w-xl mx-auto">
          Visiting Miraj? Come Play the Instruments at Our Karkhana
        </h2>
        <p className="text-sm text-[#57534E] max-w-2xl mx-auto leading-relaxed">
          Nothing compares to testing a Puneri Dhol or high-tension Tasha in person. Mandal representatives
          and wholesale buyers are always welcome for a cup of tea and a live sound demonstration.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-[#1C1917] text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-xs"
          >
            Get Location & Directions
          </Link>
          <a
            href={getGeneralWhatsAppUrl("Namaskar Mahesh Kaka! We are planning to visit the Harikrupa workshop in Miraj. Please share your current timings and address landmarks.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors shadow-xs"
          >
            Notify on WhatsApp Before Visiting
          </a>
        </div>
      </div>
    </div>
  );
}
