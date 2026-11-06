import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
  MessageCircle,
  Phone,
  Flame,
  Music,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import MandalCalculator from "@/components/MandalCalculator";
import HeritageMarquee from "@/components/HeritageMarquee";
import HeroPtal from "@/components/HeroPtal";
import CategoryVisualGrid from "@/components/CategoryVisualGrid";
import MandalPerksBanner from "@/components/MandalPerksBanner";
import FeatureSplitBanner from "@/components/FeatureSplitBanner";
import CorePrinciples from "@/components/CorePrinciples";
import GlobalReachBanner from "@/components/GlobalReachBanner";
import ShopByCraft from "@/components/ShopByCraft";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24 bg-[#FFF6EB]">
      {/* ── 1. Hero Slideshow / Crimson Festival Presentation (Screen 5) ──────── */}
      <HeroPtal />

      {/* ── 2. Running Heritage Marquee (Screen 5 Bottom) ────────────────────── */}
      <HeritageMarquee />

      {/* ── 3. 4 Category Cards in a Row (Screen 3 Top) ──────────────────────── */}
      <CategoryVisualGrid />

      {/* ── 4. Deep Wine Mandal Perks Banner (Screen 3 Bottom) ────────────────── */}
      <MandalPerksBanner />

      {/* ── 5. "Grab Our Favourites" Split Feature Blocks (Screen 4) ──────────── */}
      <FeatureSplitBanner />

      {/* ── 6. "Our Core Principles" Radial Medallion Layout (Screen 1) ───────── */}
      <CorePrinciples />

      {/* ── 7. "Our Pan-India Reach" Solid Mustard/Ochre Block (Screen 2) ─────── */}
      <GlobalReachBanner />

      {/* ── 8. "Shop By Sound & Craft" Acoustic Taxonomy ─────────────────────── */}
      <ShopByCraft />

      {/* ── 9. Featured Signature Instruments (P-TAL Product Cards) ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E8E1] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-aktiv font-semibold uppercase tracking-wider text-[#C3771E] mb-1">
              <Music className="w-3.5 h-3.5" />
              <span>Direct From The Miraj Karkhana</span>
            </div>
            <h2 className="font-aktiv font-bold text-2xl sm:text-3xl text-[#B22B15] tracking-tight uppercase">
              Signature Handcrafted Instruments
            </h2>
            <p className="text-sm text-stone-600 mt-1 font-aktiv font-light">
              Engineered for acoustic projection, deep bass resonance, and heavy road durability.
            </p>
          </div>
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-1.5 text-xs font-aktiv font-semibold uppercase tracking-wide text-[#B22B15] hover:text-[#8F2110]"
          >
            <span>View Full 19-Item Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── 10. Mandal & Pathak Interactive Quotation Portal ──────────────────── */}
      <section className="bg-[#1C1917] text-white py-16 sm:py-24 border-y border-[#C3771E]/30 relative overflow-hidden">
        {/* Authentic Pune Ganeshotsav Pathak Atmosphere Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <Image
            src="/images/pathak-performance.jpg"
            alt="Authentic Dhol Tasha Pathak in Pune Ganeshotsav"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/80 to-[#1C1917]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#B22B15] text-[#FFEBD1] border border-[#FFEBD1]/30 text-xs font-aktiv font-semibold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5" />
              Mandal Fleet Portal
            </span>
            <h2 className="font-aktiv font-bold text-2xl sm:text-4xl lg:text-5xl text-[#FFEBD1] tracking-tight uppercase">
              Equipping India’s Premier Dhol-Tasha Pathaks
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-aktiv font-light max-w-2xl mx-auto">
              For over three decades, Harikrupa has built dependable percussion fleets for major festival pathaks across India.
              Crafted to sustain long procession hours while preserving deep acoustic power.
            </p>
          </div>

          {/* Interactive Calculator Section */}
          <MandalCalculator />
        </div>
      </section>

      {/* ── 11. The Miraj Craftsmanship Process ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-aktiv font-semibold uppercase tracking-wider text-[#C3771E]">
            Acoustic Precision
          </span>
          <h2 className="font-aktiv font-bold text-2xl sm:text-3xl text-[#B22B15] tracking-tight uppercase">
            The Miraj Crafting Process
          </h2>
          <p className="text-sm text-stone-600 font-aktiv font-light">
            Every instrument is shaped and tuned by our master Miraj artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3 relative overflow-hidden">
            <span className="text-3xl font-aktiv font-bold text-[#C3771E]/40">01</span>
            <h3 className="font-aktiv font-bold text-lg text-[#171513]">Timber Selection</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-aktiv font-light">
              Mature Mango and Sheesham logs dried naturally for 12+ months to prevent warping and preserve tone.
            </p>
          </div>

          <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3 relative overflow-hidden">
            <span className="text-3xl font-aktiv font-bold text-[#C3771E]/40">02</span>
            <h3 className="font-aktiv font-bold text-lg text-[#171513]">Leather Curing</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-aktiv font-light">
              Courtyard sun-cured goat hides treated with traditional salt and neem for high elasticity and strike resilience.
            </p>
          </div>

          <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3 relative overflow-hidden">
            <span className="text-3xl font-aktiv font-bold text-lg text-[#171513]">03</span>
            <h3 className="font-aktiv font-bold text-lg text-[#171513]">Tension Rigging</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-aktiv font-light">
              High-tensile braided cordage laced across forged steel S-hooks with 24-point uniform tension.
            </p>
          </div>

          <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-3 relative overflow-hidden">
            <span className="text-3xl font-aktiv font-bold text-[#C3771E]/40">04</span>
            <h3 className="font-aktiv font-bold text-lg text-[#171513]">Acoustic Tuning</h3>
            <p className="text-xs text-stone-600 leading-relaxed font-aktiv font-light">
              Proprietary mineral masala applied to suppress unwanted flutter and produce deep, punchy resonance.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. Pathak Testimonials & Community Reviews ──────────────────────── */}
      <section className="bg-[#FFEBD1]/50 py-16 sm:py-24 border-y border-[#E8E8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C3771E]">
              Customer Experiences
            </span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#B22B15] tracking-tight">
              Trusted by Leading Dhol-Tasha Pathaks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-4">
              <div className="flex text-[#C3771E] text-sm">★★★★★</div>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                “Our pathak bought 12 Puneri Dhols and 4 Tashas from Harikrupa. Even after 8 hours of
                continuous playing on Ganpati Visarjan day, the leather heads maintained their deep
                pitch without loosening. Outstanding Miraj quality!”
              </p>
              <div className="pt-3 border-t border-stone-100">
                <p className="font-serif font-bold text-sm text-[#1C1917]">Rohan Deshmukh</p>
                <p className="text-xs text-[#B22B15] font-semibold">Vadaak Pramukh, Pune Pathak</p>
              </div>
            </div>

            <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-4">
              <div className="flex text-[#C3771E] text-sm">★★★★★</div>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                “The tasha brass bowls and unbreakable tuning bolts are in a league of their own.
                High frequency attack cuts through the entire street. Safely shipped to Kolhapur in
                sturdy wooden boxes.”
              </p>
              <div className="pt-3 border-t border-stone-100">
                <p className="font-serif font-bold text-sm text-[#1C1917]">Siddhesh Patil</p>
                <p className="text-xs text-[#B22B15] font-semibold">Shivmudra Mandal, Kolhapur</p>
              </div>
            </div>

            <div className="p-7 rounded-md bg-white border border-[#E8E8E1] shadow-2xs space-y-4">
              <div className="flex text-[#C3771E] text-sm">★★★★★</div>
              <p className="text-sm text-stone-700 italic leading-relaxed">
                “We run a musical instrument shop in Indore and order bulk spare plates, masala, and
                S-hooks every season. Reliable wholesale supply, direct artisan pricing, and honest
                dealings for 6+ years.”
              </p>
              <div className="pt-3 border-t border-stone-100">
                <p className="font-serif font-bold text-sm text-[#1C1917]">Mahendra Sharma</p>
                <p className="text-xs text-[#B22B15] font-semibold">Wholesale Retailer, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. Direct Workshop WhatsApp Banner ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-md bg-[#B22B15] text-white p-8 sm:p-12 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#8F2110]">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#8F2110] text-xs font-semibold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#FFEBD1]" />
              Direct Workshop Communication
            </span>
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Need Custom Tuning, Sizing, or Pan-India Dispatch?
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              Speak directly with our craftsmen in Miraj. We will help you select the right leather
              plates, drum sizes, and package savings for your requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.primaryWhatsApp}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-white text-[#1C1917] font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#FFEBD1] transition-all"
            >
              <Phone className="w-4 h-4 text-[#B22B15]" />
              <span>Call +91 99226 30366</span>
            </a>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#1EBE5D] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
