"use client";

import React, { useState } from "react";
import {
  Calculator,
  Plus,
  Minus,
  MessageCircle,
  Sparkles,
  ShieldAlert,
  CheckCircle,
  Truck,
} from "lucide-react";
import { getMandalQuoteWhatsAppUrl, MandalQuoteItem } from "@/lib/whatsapp";

interface EstimatorItem {
  id: string;
  name: string;
  marathi: string;
  defaultQty: number;
  unit: string;
  category: string;
}

const ITEMS: EstimatorItem[] = [
  { id: "dhol", name: "Puneri Wood Dhol (26\" Standard)", marathi: "पुणेरी लाकडी ढोल", defaultQty: 8, unit: "Drums", category: "Core Percussion" },
  { id: "tasha", name: "High-Tension Brass Tasha (13\")", marathi: "पितळी हाय-टेन्शन ताशा", defaultQty: 4, unit: "Tashas", category: "Core Percussion" },
  { id: "tal", name: "Heavy Brass Tal / Zanj Pair", marathi: "पितळी झांज जोडी", defaultQty: 12, unit: "Pairs", category: "Accompaniment" },
  { id: "tipru", name: "Seasoned Wood Tipru Pairs", marathi: "सिझन्ड टिपरी जोडी", defaultQty: 10, unit: "Pairs", category: "Sticks & Spares" },
  { id: "chob", name: "Flexible Tasha Sticks (Chob)", marathi: "ताशा काठ्या (चोब)", defaultQty: 6, unit: "Pairs", category: "Sticks & Spares" },
  { id: "plates", name: "Spare Cured Leather Plates", marathi: "अतिरिक्त ढोल पाने", defaultQty: 4, unit: "Plates", category: "Spares & Care" },
  { id: "masala", name: "Dhol Masala Acoustic Paste", marathi: "ढोल मसाला (500g)", defaultQty: 2, unit: "Jars", category: "Spares & Care" },
  { id: "ropes", name: "Cotton-Nylon Dhol Ropes (30m)", marathi: "हाय-टेन्साइल ढोल दोरी", defaultQty: 8, unit: "Bundles", category: "Hardware" },
];

export default function MandalCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.defaultQty }), {})
  );

  const [mandalName, setMandalName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [city, setCity] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const totalDrums = (quantities["dhol"] || 0) + (quantities["tasha"] || 0);
  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  // Pathak sizing heuristic
  const getPathakSizeEstimate = () => {
    const d = quantities["dhol"] || 0;
    const t = quantities["tasha"] || 0;
    if (d === 0 && t === 0) return "Select drums to estimate squad size";
    if (d <= 5) return "Mini Squad (15-25 Vadaak Members)";
    if (d <= 15) return "Medium Pathak (30-55 Vadaak Members)";
    if (d <= 30) return "Major Mandal Pathak (60-120 Members)";
    return "Grand Procession Fleet (150+ Members)";
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const quoteItems: MandalQuoteItem[] = ITEMS.map((item) => ({
      name: item.name,
      quantity: quantities[item.id] || 0,
      note: item.marathi,
    })).filter((item) => item.quantity > 0);

    const url = getMandalQuoteWhatsAppUrl({
      mandalName,
      contactPerson,
      city,
      eventDate,
      items: quoteItems,
    });

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-md border border-[#E8E8E1] shadow-md overflow-hidden">
      {/* Header Banner (P-TAL Terracotta Style) */}
      <div className="bg-[#B22B15] text-white p-6 sm:p-8 border-b border-[#8F2110]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded bg-[#8F2110] text-[10px] font-bold uppercase tracking-wider text-[#FFEBD1] mb-2 border border-white/20">
              <Calculator className="w-3.5 h-3.5 text-[#FFEBD1]" />
              <span>Interactive Mandal Package Builder</span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-white">
              Dhol Tasha Pathak Quotation Estimator
            </h3>
            <p className="text-white/85 text-xs sm:text-sm mt-1 max-w-2xl">
              Configure your mandal fleet below. We calculate recommended squad size and dispatch
              directly from our Miraj workshop with bulk package pricing.
            </p>
          </div>
          <div className="text-right sm:border-l sm:border-white/20 sm:pl-6 shrink-0">
            <span className="block text-xs uppercase tracking-wider text-[#FFEBD1]">Estimated Fleet</span>
            <span className="font-serif font-bold text-3xl text-white">
              {totalDrums} Drums
            </span>
            <span className="block text-[11px] text-white/90">
              {getPathakSizeEstimate()}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-8">
        {/* Mandal Contact Details */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#B22B15] mb-3 flex items-center gap-2">
            <span>1. Mandal & Event Details</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="calc-mandal-name" className="block text-xs font-semibold text-stone-700 mb-1">
                Mandal / Pathak Name *
              </label>
              <input
                id="calc-mandal-name"
                name="mandalName"
                type="text"
                autoComplete="organization"
                required
                value={mandalName}
                onChange={(e) => setMandalName(e.target.value)}
                placeholder="e.g. Shivtej Dhol Tasha Pathak"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
              />
            </div>

            <div>
              <label htmlFor="calc-contact-person" className="block text-xs font-semibold text-stone-700 mb-1">
                Contact Person Name *
              </label>
              <input
                id="calc-contact-person"
                name="contactPerson"
                type="text"
                autoComplete="name"
                required
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                placeholder="e.g. Amit Patil (Adhyaksha)"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
              />
            </div>

            <div>
              <label htmlFor="calc-city" className="block text-xs font-semibold text-stone-700 mb-1">
                City / Destination *
              </label>
              <input
                id="calc-city"
                name="city"
                type="text"
                autoComplete="address-level2"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Pune / Mumbai / Kolhapur"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
              />
            </div>

            <div>
              <label htmlFor="calc-event-date" className="block text-xs font-semibold text-stone-700 mb-1">
                Required By (Festival Date)
              </label>
              <input
                id="calc-event-date"
                name="eventDate"
                type="text"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                placeholder="e.g. 15 Aug / Before Ganeshotsav"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
              />
            </div>
          </div>
        </div>

        {/* Quantities Selection Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C85A17]">
              2. Select Quantities Needed
            </h4>
            <span className="text-xs text-stone-500 font-medium">
              Adjust counters to match your requirement
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-xl border border-[#E7E0D6] bg-[#FAF8F5] hover:border-[#C85A17]/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B45309]">
                    {item.category}
                  </span>
                  <h5 className="font-semibold text-sm text-[#1C1917] mt-0.5">
                    {item.name}
                  </h5>
                  <p className="text-xs text-stone-500 font-serif">{item.marathi}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center rounded-lg border border-[#D6CCBE] bg-white overflow-hidden shadow-xs">
                    <button
                      type="button"
                      onClick={() => handleQtyChange(item.id, -1)}
                      className="p-2 text-stone-600 hover:text-black hover:bg-[#F4EFEA] transition-colors"
                      aria-label={`Decrease ${item.name}`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center font-mono font-bold text-sm text-[#1C1917]">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQtyChange(item.id, 1)}
                      className="p-2 text-stone-600 hover:text-black hover:bg-[#F4EFEA] transition-colors"
                      aria-label={`Increase ${item.name}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[11px] font-medium text-stone-500 w-12 text-right">
                    {item.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Submission (P-TAL Architectural Box) */}
        <div className="p-5 rounded-md bg-[#FFEBD1]/50 border border-[#E8E8E1] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-xs text-stone-700">
            <div className="flex items-center gap-2 font-semibold text-[#1C1917]">
              <Sparkles className="w-4 h-4 text-[#C3771E]" />
              <span className="font-bold">What Harikrupa Delivers with Bulk Mandal Packages:</span>
            </div>
            <p className="text-stone-600 pl-6 text-xs leading-relaxed">
              ✓ Heavy-duty shockproof wooden crate transport to your city.
              <br />
              ✓ Master-tuned leather plates pre-conditioned with authentic Miraj dhol masala.
              <br />
              ✓ Free emergency spare parts kit (extra S-hooks & tuning bolts) on orders over 10 drums.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#1EBE5D] active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Request Quote for {totalItems} Items</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
