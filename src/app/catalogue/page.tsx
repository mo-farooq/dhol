"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Sparkles,
  Flame,
  MessageCircle,
  HelpCircle,
  RotateCcw,
} from "lucide-react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [seasonalOnly, setSeasonalOnly] = useState<boolean>(false);
  const [mandalOnly, setMandalOnly] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      // Seasonal toggle
      if (seasonalOnly && !product.seasonal) {
        return false;
      }
      // Mandal favorites toggle
      if (mandalOnly && !product.mandalFavorite) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesMarathi = product.marathiName.toLowerCase().includes(query);
        const matchesDesc = product.shortDesc.toLowerCase().includes(query);
        const matchesCategory = product.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesMarathi && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, seasonalOnly, mandalOnly]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSeasonalOnly(false);
    setMandalOnly(false);
  };

  return (
    <div className="py-10 sm:py-16 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Page Header (P-TAL Editorial Style) ─────────────────────────────── */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#FFEBD1] border border-[#E8E8E1] text-xs font-aktiv font-semibold uppercase tracking-wider text-[#B22B15]">
          <Sparkles className="w-3.5 h-3.5 text-[#C3771E]" />
          Complete Workshop Inventory
        </span>
        <h1 className="font-aktiv font-bold text-3xl sm:text-5xl text-[#B22B15] tracking-tight uppercase">
          Master Craft Catalogue
        </h1>
        <p className="text-sm sm:text-base text-stone-600 font-aktiv font-light">
          Authentic percussion instruments, sun-cured drumheads, and road-tested rigging accessories handcrafted in Miraj.
        </p>
      </div>

      {/* ── Search & Filter Controls ────────────────────────────────────────── */}
      <div className="bg-white p-5 sm:p-6 rounded-md border border-[#E8E8E1] shadow-2xs space-y-5">
        {/* Semantic Search Box */}
        <search>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-full"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              id="catalogue-search"
              name="search"
              type="search"
              aria-label="Search instruments"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search instruments, plates, masala, tipru, hardware..."
              className="w-full pl-12 pr-4 py-3 rounded-md border border-[#E8E8E1] bg-[#FFF6EB]/40 text-sm text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#B22B15] focus:bg-white transition-all"
            />
          </form>
        </search>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-cinzel">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider shrink-0 transition-all ${
                  isSelected
                    ? "bg-[#B22B15] text-white shadow-2xs"
                    : "bg-[#FFF6EB]/60 text-[#1C1917] hover:bg-[#FFEBD1] border border-[#E8E8E1]"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-1.5 text-xs font-marathi font-normal ${isSelected ? "text-white/80" : "text-stone-500"}`}>
                  ({cat.marathi})
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Filter Toggles & Counter */}
        <div className="pt-3 border-t border-[#E8E8E1] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setMandalOnly(!mandalOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border font-semibold uppercase tracking-wider text-[11px] transition-all ${
                mandalOnly
                  ? "bg-[#1C1917] text-[#FFEBD1] border-[#1C1917]"
                  : "bg-white text-stone-700 border-[#E8E8E1] hover:bg-[#FFF6EB]"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#C3771E]" />
              <span>Mandal Favorites Only</span>
            </button>

            <button
              onClick={() => setSeasonalOnly(!seasonalOnly)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded border font-semibold uppercase tracking-wider text-[11px] transition-all ${
                seasonalOnly
                  ? "bg-[#B22B15] text-white border-[#B22B15]"
                  : "bg-white text-stone-700 border-[#E8E8E1] hover:bg-[#FFF6EB]"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Seasonal / Festival Core</span>
            </button>

            {(selectedCategory !== "all" || searchQuery || seasonalOnly || mandalOnly) && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-[#B22B15] font-semibold uppercase tracking-wider text-[11px] hover:underline ml-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          <div className="font-semibold text-stone-500 text-xs">
            Showing <span className="text-[#B22B15] font-bold">{filteredProducts.length}</span> of {PRODUCTS.length} products
          </div>
        </div>
      </div>

      {/* ── Product Grid ────────────────────────────────────────────────────── */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-[#D6CCBE] space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-stone-400 mx-auto flex items-center justify-center">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-bold text-lg text-[#1C1917]">
            No instruments match your filter
          </h3>
          <p className="text-xs text-stone-500">
            We might still have it in our Miraj workshop or can custom craft it for you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-lg bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200"
            >
              Clear Filters
            </button>
            <a
              href={getGeneralWhatsAppUrl(`Hi Harikrupa Musical, I am searching for "${searchQuery}" which wasn't in the catalog. Do you have it available?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* ── Wholesale Notice ────────────────────────────────────────────────── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F4EFEA] border border-[#E7E0D6] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-serif font-bold text-lg text-[#1C1917]">
            Need Custom Sizing, Engraving, or Mandal Fleet Booking?
          </h3>
          <p className="text-xs sm:text-sm text-[#57534E]">
            We provide custom pathak logo stenciling, specific drum diameters, and matched frequency tuning.
          </p>
        </div>
        <a
          href="/bulk-orders"
          className="shrink-0 px-6 py-3 rounded-xl bg-[#1C1917] text-[#FAF8F5] font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-xs"
        >
          Open Mandal Calculator
        </a>
      </div>
    </div>
  );
}
