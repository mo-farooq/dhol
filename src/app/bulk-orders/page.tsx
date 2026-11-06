import React from "react";
import { Metadata } from "next";
import {
  Flame,
  Truck,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";
import MandalCalculator from "@/components/MandalCalculator";
import { COMPANY_INFO } from "@/data/company";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bulk Mandal Orders & Pathak Packages",
  description:
    "Direct workshop packages for Dhol-Tasha Mandals and Wholesalers across India. Puneri Dhols, concert Tashas, cured plates, ropes, and tuning masala.",
};

export default function BulkOrdersPage() {
  const faqs = [
    {
      q: "How far in advance should our Mandal place our festival order?",
      a: "We recommend placing orders at least 30–45 days before Ganeshotsav or Navratri. This allows our artisans to properly sun-cure the natural goat leather plates, season the wooden barrels, and run rigorous acoustic tests prior to dispatch.",
    },
    {
      q: "How are instruments packaged for long-distance transport outside Maharashtra?",
      a: "All dhols and tashas are packed in custom heavy-duty shockproof wooden crates with foam cushioning. We partner with reliable road transport carriers (VRL, Safechem, TCI) to ensure zero rim denting or leather punctures.",
    },
    {
      q: "Can our Pathak request custom drum sizes or specific sound pitches?",
      a: "Yes! As direct manufacturers in Miraj, we can calibrate the dhol barrel diameter (24\", 26\", 28\"), leather plate thickness, and brass tasha depth to match your pathak's signature acoustic pitch.",
    },
    {
      q: "What payment terms apply for bulk mandal orders?",
      a: "Standard wholesale terms: 40% advance to initiate custom wood preparation and leather plate curing, and the remaining 60% upon dispatch confirmation with transport receipt (LR copy).",
    },
  ];

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Page Header (P-TAL Editorial Style) ─────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="seal-stamp-vintage text-[11px] font-bold uppercase tracking-widest bg-[#FFEBD1] text-[#B22B15] border-[#B22B15]/40 shadow-2xs">
          <Flame className="w-3.5 h-3.5 text-[#B22B15]" />
          <span>Specialized Mandal Portal • 2024 GI Tagged Miraj</span>
        </div>
        <h1 className="font-cinzel font-bold text-2xl sm:text-4xl lg:text-5xl text-[#B22B15] tracking-[0.1em] uppercase">
          Dhol-Tasha Pathak & Wholesale Fleet Packages
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-sans">
          Equipping Maharashtrian festival pathaks and community mandals nationwide with
          competition-grade percussion, unbreakable rigging, and bulk savings.
        </p>
      </div>

      {/* ── 3 Big Benefits Strip ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded bg-[#FFEBD1] text-[#B22B15] flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#1C1917]">
            Artisan Factory-Direct Rates
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Eliminate intermediary retail markups. Purchase directly from our Miraj workshop with
            tiered discounts for 5, 10, or 25+ instrument fleets.
          </p>
        </div>

        <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded bg-[#FFEBD1] text-[#25D366] flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#1C1917]">
            Doorstep Road Cargo Across India
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We deliver regularly to Pune, Mumbai, Nashik, Kolhapur, Aurangabad, Nagpur, Goa,
            Karnataka, Gujarat, and Madhya Pradesh with insured wooden crate protection.
          </p>
        </div>

        <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-2.5">
          <div className="w-10 h-10 rounded bg-[#FFEBD1] text-[#C3771E] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#1C1917]">
            Free Emergency Spares Kit
          </h3>
          <p className="text-xs text-[#57534E] leading-relaxed">
            Every bulk order of 10+ drums includes an emergency pathak field kit: extra forged
            S-hooks, replacement tasha nuts, and Miraj acoustic dhol masala.
          </p>
        </div>
      </div>

      {/* ── Interactive Mandal Calculator ───────────────────────────────────── */}
      <div className="space-y-4">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="font-serif font-extrabold text-2xl text-[#1C1917]">
            Calculate Your Fleet Requirement
          </h2>
          <p className="text-xs text-stone-500">
            Select the count of drums, sticks, plates, and accessories to receive an official WhatsApp quote.
          </p>
        </div>
        <MandalCalculator />
      </div>

      {/* ── Frequently Asked Questions ──────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-[#E7E0D6] p-6 sm:p-10 space-y-8 shadow-xs">
        <div className="flex items-center gap-2 border-b border-[#E7E0D6] pb-4">
          <HelpCircle className="w-5 h-5 text-[#C85A17]" />
          <h3 className="font-serif font-bold text-xl text-[#1C1917]">
            Frequently Asked Questions by Mandals & Pathaks
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E0D6]/60 space-y-2">
              <h4 className="font-bold text-sm text-[#1C1917]">{faq.q}</h4>
              <p className="text-xs text-[#57534E] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
