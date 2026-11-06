"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1C1917] border-t border-stone-800 p-2.5 shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY_INFO.primaryWhatsApp}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#292524] text-white font-semibold text-xs border border-stone-700 active:scale-98 transition-all"
        >
          <Phone className="w-4 h-4 text-[#C85A17]" />
          <span>Call Workshop</span>
        </a>

        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#25D366] text-white font-semibold text-xs shadow-md active:scale-98 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
}
