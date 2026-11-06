import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/products";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = getProductWhatsAppUrl(product);

  return (
    <div className="group flex flex-col bg-white rounded-md border border-[#E8E8E1] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden hover:border-[#B22B15]/50">
      {/* ── Card Header / Authentic Studio Photography (P-TAL Velvet Style) ── */}
      <div className="relative h-60 w-full bg-[#200508] border-b border-[#E8E8E1] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges on Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 font-cinzel">
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#B22B15] text-white shadow-xs">
              <Sparkles className="w-3 h-3 text-[#FFEBD1]" />
              {product.badge}
            </span>
          )}
          {product.seasonal && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#C3771E] text-white shadow-xs">
              Festival Core
            </span>
          )}
        </div>

        {/* Mandal Choice Pill on Top Right */}
        {product.mandalFavorite && (
          <div className="absolute top-3 right-3 z-10 font-cinzel">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1C1917] text-[#FFEBD1] border border-[#C3771E]/40 shadow-xs">
              ★ Mandal Choice
            </span>
          </div>
        )}
      </div>

      {/* ── Content Body ────────────────────────────────────────────────────── */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-aktiv font-semibold uppercase tracking-wider text-[#C3771E]">
              {product.categoryLabel}
            </span>
            <span className="text-xs sm:text-sm font-marathi text-[#8F2110] font-semibold">
              {product.marathiName}
            </span>
          </div>

          <h3 className="font-aktiv font-bold text-lg sm:text-xl text-[#171513] group-hover:text-[#B22B15] transition-colors line-clamp-1 leading-snug tracking-tight">
            <Link href={`/catalogue/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed font-aktiv font-light">
            {product.shortDesc}
          </p>

          {/* Quick Specs List */}
          <div className="mt-3.5 pt-3 border-t border-[#FFEBD1] space-y-1.5">
            {product.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#1C1917] font-aktiv">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B22B15] shrink-0" />
                <span className="font-semibold text-stone-800">{spec.label}:</span>
                <span className="truncate text-stone-600">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Action Buttons (P-TAL Architectural Style) ────────────────────── */}
        <div className="pt-3 border-t border-[#E8E8E1] space-y-2.5 font-aktiv">
          <div className="text-[11px] font-medium text-stone-500 font-aktiv">
            <span className="text-[#B22B15] font-bold">{product.priceNote}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <Link
              href={`/catalogue/${product.slug}`}
              className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded text-xs font-semibold uppercase tracking-wide text-[#1C1917] bg-[#FFEBD1]/70 hover:bg-[#FFEBD1] transition-colors"
            >
              <span>Specs</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded text-xs font-semibold uppercase tracking-wide bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
