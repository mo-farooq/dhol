"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-end flex-col gap-2">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#1C1917] text-[#FAF8F5] text-xs font-medium px-3 py-2 rounded-xl shadow-xl border border-stone-700 animate-in fade-in slide-in-from-bottom-2">
          <span>Need Instant Mandal Prices? 🥁</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat with Harikrupa Musical Works on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
