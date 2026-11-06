"use client";

import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    mandalName: "",
    requirement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Namaskar Harikrupa Musical Works! 🙏

*New Website Contact Inquiry:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*City / Location:* ${formData.city}
*Mandal / Organization:* ${formData.mandalName || "Individual / Not specified"}

*Requirement / Inquiry:*
${formData.requirement}

Please get in touch with me with pricing and details. Thank you!`;

    const url = getGeneralWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Page Header (P-TAL Editorial Style) ─────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFEBD1] border border-[#E8E8E1] text-xs font-semibold uppercase tracking-wider text-[#B22B15] font-aktiv">
          <MapPin className="w-3.5 h-3.5 text-[#C3771E]" />
          <span>Miraj Workshop & Office • 2024 GI Tagged</span>
        </div>
        <h1 className="font-aktiv font-bold text-3xl sm:text-5xl text-[#B22B15] tracking-tight">
          Connect With Our Workshop
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-aktiv font-light">
          Direct communication with our artisan team for custom sizing, mandal fleet quotes, and road freight.
        </p>
      </div>

      {/* ── 3 Direct Phone Lines Cards ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COMPANY_INFO.contacts.map((contact, i) => (
          <div
            key={i}
            className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-4 hover:border-[#B22B15] transition-all flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-aktiv font-semibold uppercase tracking-wider text-[#C3771E]">
                  Line 0{i + 1}
                </span>
                {contact.isWhatsApp && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <MessageCircle className="w-3 h-3 fill-emerald-600 text-white" />
                    WhatsApp Active
                  </span>
                )}
              </div>
              <h3 className="font-aktiv font-bold text-lg text-[#1C1917]">{contact.label}</h3>
              <p className="text-xs text-[#57534E] leading-relaxed font-aktiv font-light">{contact.purpose}</p>
            </div>

            <div className="pt-4 border-t border-[#F4EFEA] space-y-2">
              <a
                href={`tel:${contact.cleanNumber}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#FAF8F5] border border-[#D6CCBE] font-mono font-bold text-sm text-[#1C1917] hover:bg-[#F4EFEA] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C85A17]" />
                <span>{contact.number}</span>
              </a>

              {contact.isWhatsApp && (
                <a
                  href={`https://wa.me/${contact.cleanNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-[#25D366] text-white font-semibold text-xs hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Map & Inquiry Form Grid ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Workshop Details & Google Map (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-4">
            <h2 className="font-cinzel font-bold text-lg text-[#1C1917] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#C3771E]" />
              <span>Workshop Location</span>
            </h2>

            <div className="space-y-2 text-sm text-stone-700">
              <p className="font-semibold text-stone-900 font-sans">
                Harikrupa Musical Works (<span className="font-marathi">हरिकृपा म्युझिकल वर्क्स</span>)
              </p>
              <p className="text-stone-600 leading-relaxed font-sans">
                {COMPANY_INFO.address.street},<br />
                {COMPANY_INFO.address.city}, District: {COMPANY_INFO.address.district},<br />
                {COMPANY_INFO.address.state} — {COMPANY_INFO.address.pincode}, India.
              </p>
              <p className="text-xs text-[#78716C] pt-1 font-sans">
                Landmark: Near Hotel Sayaji Garden, Vakhar Bhag area.
              </p>
            </div>

            <div className="pt-2 border-t border-[#F4EFEA] flex items-center gap-2 text-xs text-stone-600">
              <Clock className="w-4 h-4 text-[#C3771E] shrink-0" />
              <span className="font-sans">{COMPANY_INFO.workingHours}</span>
            </div>

            <div className="pt-3">
              <a
                href={COMPANY_INFO.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-[#B22B15] hover:underline"
              >
                <span>Open in Google Maps App</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Map Preview Box */}
          <div className="rounded-md border border-[#E8E8E1] overflow-hidden shadow-2xs h-72 bg-[#F7F2EA] relative flex items-center justify-center text-center p-6 bg-paper-grain">
            <div className="space-y-3 max-w-sm">
              <div className="w-12 h-12 rounded-full bg-[#FFEBD1] border border-[#C3771E]/30 text-[#B22B15] mx-auto flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#C3771E]" />
              </div>
              <h4 className="font-cinzel font-bold text-base text-[#1C1917]">
                Miraj, Sangli District, Maharashtra
              </h4>
              <p className="text-xs text-stone-600 font-sans">
                Centrally connected by South Central Railways and national highways for easy road cargo dispatch.
              </p>
              <a
                href={COMPANY_INFO.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#1C1917] text-white text-xs font-cinzel tracking-wider font-semibold hover:bg-stone-800 transition-colors"
              >
                <span>Navigate to Karkhana</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Inquiry Form (6 cols) */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-md border border-[#E8E8E1] p-6 sm:p-8 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-cinzel font-bold uppercase tracking-[0.16em] text-[#C3771E]">
                Quick Enquiry
              </span>
              <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#1C1917] mt-1">
                Send a Requirement to the Workshop
              </h3>
              <p className="text-xs text-[#57534E] mt-1 font-sans">
                Fill this quick form and it will prepare a structured WhatsApp message for instant response.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kadam"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-city" className="block text-xs font-semibold text-stone-700 mb-1">
                    Your City / District *
                  </label>
                  <input
                    id="contact-city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune, Mumbai, Nashik"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-mandal" className="block text-xs font-semibold text-stone-700 mb-1">
                  Mandal / Pathak Name (If applicable)
                </label>
                <input
                  id="contact-mandal"
                  name="mandalName"
                  type="text"
                  value={formData.mandalName}
                  onChange={(e) => setFormData({ ...formData, mandalName: e.target.value })}
                  placeholder="e.g. Swarajya Dhol Tasha Pathak"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
                />
              </div>

              <div>
                <label htmlFor="contact-requirement" className="block text-xs font-semibold text-stone-700 mb-1">
                  Instrument Requirement & Questions *
                </label>
                <textarea
                  id="contact-requirement"
                  name="requirement"
                  rows={4}
                  required
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  placeholder="Describe what you are looking for (e.g. 6 Puneri Dhols, 2 Brass Tashas, extra leather plates, shipping to Pune before August 15)..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D6CCBE] text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A17] bg-[#FAF8F5]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#1EBE5D] hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
