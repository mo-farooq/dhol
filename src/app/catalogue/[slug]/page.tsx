import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
  Package,
  Layers,
  Award,
} from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} (${product.marathiName})`,
    description: product.shortDesc,
    openGraph: {
      title: `${product.name} | Harikrupa Musical Works (Miraj)`,
      description: product.shortDesc,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const defaultWhatsappUrl = getProductWhatsAppUrl(product);

  return (
    <div className="py-8 sm:py-14 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* ── Breadcrumb & Back ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
        <Link href="/" className="hover:text-[#C85A17] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/catalogue" className="hover:text-[#C85A17] transition-colors">
          Catalogue
        </Link>
        <span>/</span>
        <span className="text-[#1C1917] font-semibold truncate max-w-xs sm:max-w-md">
          {product.name}
        </span>
      </div>

      {/* ── Main Product Overview Grid ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Image & Acoustic Art Presentation (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl h-80 sm:h-96 w-full bg-[#200508] overflow-hidden shadow-lg border border-[#D6CCBE]/40">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {product.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#C85A17] text-white shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {product.badge}
                </span>
              )}
              {product.seasonal && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#D4AF37] text-stone-950 shadow-sm">
                  Festival Season Priority
                </span>
              )}
            </div>

            {/* Subtle Origin Ribbon */}
            <div className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-[#FAF8F5]/80 font-serif">
              Miraj Heritage Craft
            </div>
          </div>

          {/* Quick Assurance Badges */}
          <div className="p-4 rounded-xl bg-white border border-[#E7E0D6] grid grid-cols-2 gap-3 text-xs text-[#57534E]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C85A17] shrink-0" />
              <span>Workshop Tested Pitch</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Pan-India Transport</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Miraj 30-Yr Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-[#78350F] shrink-0" />
              <span>Wooden Crate Packing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Specs, Variants & WhatsApp Action (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-aktiv font-semibold uppercase tracking-wider text-[#B22B15]">
                {product.categoryLabel}
              </span>
              <span className="text-sm sm:text-base font-marathi font-semibold text-[#8F2110]">
                {product.marathiName}
              </span>
            </div>

            <h1 className="font-aktiv font-bold text-2xl sm:text-4xl text-[#171513] tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed font-aktiv font-light">
              {product.fullDesc}
            </p>
          </div>

          {/* Price & Bulk Guidance */}
          <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#E7E0D6] space-y-1">
            <span className="text-[11px] font-cinzel font-bold uppercase tracking-wider text-[#C3771E]">
              Pricing & Procurement
            </span>
            <p className="font-cormorant font-bold text-2xl text-[#171513]">
              {product.priceNote}
            </p>
            <p className="text-xs text-stone-600 font-sans">
              * Special tiered discounts applicable on orders of 5+ units for Mandals, Pathaks, and Music Stores.
            </p>
          </div>

          {/* Available Sizes / Variants */}
          {product.variants.length > 0 && (
            <div className="space-y-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Available Sizes & Models:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <div
                    key={i}
                    className="px-3.5 py-2 rounded-lg border border-[#D6CCBE] bg-white text-xs font-semibold text-[#1C1917] shadow-2xs flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C85A17]" />
                    <span>{v.name}</span>
                    {v.size && <span className="text-stone-400 font-mono">({v.size})</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What's Included */}
          {product.includedItems.length > 0 && (
            <div className="space-y-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                Included in Package:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-600">
                {product.includedItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C85A17] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conversion Actions */}
          <div className="pt-4 border-t border-[#E7E0D6] flex flex-col sm:flex-row items-center gap-3">
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#1EBE5D] hover:shadow-lg active:scale-98 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Inquire & Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.primaryWhatsApp}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-[#1C1917] font-semibold text-sm border border-[#D6CCBE] hover:bg-[#F4EFEA] transition-all"
            >
              <Phone className="w-4 h-4 text-[#C85A17]" />
              <span>Call +91 99226 30366</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Technical Specifications Table ─────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-[#E7E0D6] p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-2 border-b border-[#E7E0D6] pb-3">
          <Layers className="w-5 h-5 text-[#C85A17]" />
          <h2 className="font-serif font-bold text-xl text-[#1C1917]">
            Technical Specifications & Craft Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-start justify-between p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E0D6]/60 text-xs sm:text-sm"
            >
              <span className="font-semibold text-stone-600">{spec.label}</span>
              <span className="font-bold text-[#1C1917] text-right ml-4">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Related / Complementary Instruments ──────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-[#E7E0D6] pb-3">
            <h3 className="font-serif font-bold text-xl text-[#1C1917]">
              Related {product.categoryLabel}
            </h3>
            <Link
              href="/catalogue"
              className="text-xs font-bold text-[#C85A17] hover:underline"
            >
              View Full Inventory →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
