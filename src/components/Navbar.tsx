"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", marathi: "मुख्यपृष्ठ" },
    { href: "/catalogue", label: "Catalogue", marathi: "उत्पादने" },
    { href: "/bulk-orders", label: "Mandal Orders", marathi: "मंडळ ऑर्डर्स", highlight: true },
    { href: "/about", label: "Our Story", marathi: "वारसा" },
    { href: "/gallery", label: "Gallery", marathi: "गॅलरी" },
    { href: "/contact", label: "Contact", marathi: "संपर्क" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full shadow-xs backdrop-blur-md bg-[#FFF6EB]/95 border-b border-[#E8E8E1]">
      {/* ── Top Announcement Strip (Clean P-TAL Editorial Style) ────────────── */}
      <div className="bg-[#96281B] text-white py-2 px-4 text-center border-b border-[#7A1E13]">
        <p className="text-[11px] sm:text-xs font-aktiv tracking-wider uppercase text-white/95">
          <span className="font-bold">PLEASE NOTE:</span> DIRECT DISPATCH FROM MIRAJ KARKHANA • INSURED CRATE DELIVERY PAN-INDIA
        </p>
      </div>

      {/* ── Main Nav Bar ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded bg-[#96281B] border border-[#FFEBD1]/40 flex items-center justify-center text-[#FFF6EB] shadow-xs group-hover:bg-[#7A1E13] transition-colors">
              <span className="font-marathi font-bold text-xl tracking-normal text-[#FFF6EB]">हरि</span>
            </div>
            <div className="flex flex-col">
              <span className="font-aktiv font-bold text-base sm:text-lg text-[#96281B] tracking-[0.08em] uppercase group-hover:text-[#7A1E13] transition-colors leading-tight">
                Harikrupa Musicals
              </span>
              <span className="text-[11px] font-aktiv font-medium text-stone-500 tracking-wider">
                Miraj • Estd. 1994
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-aktiv">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded text-xs uppercase tracking-wide font-medium transition-all ${
                    isActive
                      ? "text-[#96281B] bg-[#FFEBD1] font-semibold shadow-2xs"
                      : link.highlight
                      ? "text-[#96281B] font-semibold hover:bg-[#FFEBD1]"
                      : "text-[#1C1917]/80 hover:text-[#96281B] hover:bg-[#FFEBD1]/50"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#C68A2C]" />}
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 font-aktiv">
            <a
              href={`tel:${COMPANY_INFO.contacts[0].cleanNumber}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded border border-[#E8E8E1] text-[#1C1917] hover:border-[#96281B] hover:text-[#96281B] text-xs font-medium uppercase tracking-wide transition-all bg-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#96281B]" />
              <span>Workshop Line</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-[#96281B] text-white hover:bg-[#7A1E13] text-xs font-semibold uppercase tracking-wide shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Enquire</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white sm:hidden"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1917] hover:bg-[#F4EFEA] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Dropdown Drawer ──────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E7E0D6] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium ${
                    isActive
                      ? "bg-[#C85A17] text-white font-semibold"
                      : "text-[#1C1917] hover:bg-[#F4EFEA]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {link.highlight && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
                    <span>{link.label}</span>
                  </div>
                  <span className={`text-xs ${isActive ? "text-white/80" : "text-[#78716C]"}`}>
                    {link.marathi}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E7E0D6] space-y-2.5">
            <a
              href={`tel:${COMPANY_INFO.primaryWhatsApp}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FAF8F5] border border-[#D6CCBE] font-semibold text-sm text-[#1C1917]"
            >
              <Phone className="w-4 h-4 text-[#C85A17]" />
              Call Workshop (+91 99226 30366)
            </a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp for Prices
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
