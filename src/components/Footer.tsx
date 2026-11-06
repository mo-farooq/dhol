import React from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Award,
  Sparkles,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { COMPANY_INFO } from "@/data/company";
import { CATEGORIES } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FFF6EB] border-t-4 border-[#B22B15]">
      {/* ── Top Trust & Assurance Badges (P-TAL Inspired) ──────────────────── */}
      <div className="border-b border-[#292524] bg-[#141211]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-aktiv">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded bg-[#292524] text-[#C3771E] border border-[#C3771E]/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-aktiv font-bold text-xs uppercase tracking-wide text-white">2024 GI-Tagged</h4>
                <p className="text-xs text-stone-400 mt-0.5 font-light">
                  Certified Miraj musical instrument cluster heritage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded bg-[#292524] text-[#B22B15] border border-[#B22B15]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-aktiv font-bold text-xs uppercase tracking-wide text-white">Sun-Cured Leather</h4>
                <p className="text-xs text-stone-400 mt-0.5 font-light">
                  Natural courtyard lime treatment for strike resilience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded bg-[#292524] text-[#25D366] border border-[#25D366]/30">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-aktiv font-bold text-xs uppercase tracking-wide text-white">Pan-India Transit</h4>
                <p className="text-xs text-stone-400 mt-0.5 font-light">
                  Insured wooden crates with zero-dent road guarantees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded bg-[#292524] text-[#C3771E] border border-[#C3771E]/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-aktiv font-bold text-xs uppercase tracking-wide text-white">1,200+ Pathaks</h4>
                <p className="text-xs text-stone-400 mt-0.5 font-light">
                  Equipping premier procession teams across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Links & Info ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded bg-[#B22B15] border border-[#FFEBD1]/40 flex items-center justify-center text-[#FFF6EB] shadow-md shrink-0">
                <span className="font-marathi font-bold text-2xl">हरि</span>
              </div>
              <div>
                <h3 className="font-aktiv font-bold text-lg text-white tracking-wide uppercase">
                  Harikrupa Musicals
                </h3>
                <p className="text-xs text-[#C3771E] font-marathi font-semibold">
                  हरिकृपा म्युझिकल वर्क्स • मिरज (Estd. 1994)
                </p>
              </div>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed font-aktiv font-light">
              Carrying forward Miraj's 170-year acoustic craft. We handcraft competition-grade Puneri Dhols,
              concert-pitch Brass Tashas, Sambal, sun-cured drumheads, and rigging hardware for mandals across India.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#292524] text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>{COMPANY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Instrument Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-xs text-[#C3771E]">
              Shop By Craft & Sound
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/catalogue?category=${cat.id}`}
                    className="hover:text-[#FFEBD1] transition-colors flex items-center justify-between"
                  >
                    <span>{cat.label}</span>
                    <span className="text-[11px] text-stone-500">{cat.marathi}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-xs text-[#C3771E]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link href="/" className="hover:text-[#FFEBD1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-[#FFEBD1] transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/bulk-orders" className="hover:text-[#FFEBD1] transition-colors font-medium text-[#C3771E]">
                  Bulk Mandal Orders
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFEBD1] transition-colors">
                  Miraj Heritage & GI Tag
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FFEBD1] transition-colors">
                  Workshop Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFEBD1] transition-colors">
                  Contact & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-bold uppercase tracking-wider text-xs text-[#C3771E]">
              Workshop Location
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B22B15] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} — {COMPANY_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C3771E] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
              <div className="pt-2 border-t border-stone-800 space-y-2">
                {COMPANY_INFO.contacts.map((c) => (
                  <div key={c.number} className="flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">{c.label}:</span>
                    <a
                      href={`tel:${c.cleanNumber}`}
                      className="font-mono text-xs font-semibold text-stone-200 hover:text-[#C3771E]"
                    >
                      {c.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────────────────────────── */}
      <div className="bg-[#0D0B0A] border-t border-stone-900 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>
            © 2026 Harikrupa Musical Works, Miraj. Handcrafted with traditional pride.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/bulk-orders" className="hover:text-stone-200">
              Mandal Booking Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-stone-200">
              Transport Terms
            </Link>
            <span>•</span>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline"
            >
              Direct WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
