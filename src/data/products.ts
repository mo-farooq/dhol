export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  size?: string;
  priceEstimate?: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  marathiName: string;
  category:
    | "dhol"
    | "tasha"
    | "traditional"
    | "plates"
    | "hardware"
    | "sticks-tal"
    | "maintenance";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  seasonal: boolean;
  mandalFavorite: boolean;
  featured: boolean;
  badge?: string;
  priceNote: string;
  specs: ProductSpec[];
  variants: ProductVariant[];
  includedItems: string[];
  imagePlaceholderGradient: string;
  image: string;
}

export const CATEGORIES = [
  { id: "all", label: "All Items", marathi: "सर्व उत्पादने" },
  { id: "dhol", label: "Dhol & Barrels", marathi: "ढोल व खोके" },
  { id: "tasha", label: "Tasha Instruments", marathi: "ताशा वाद्ये" },
  { id: "traditional", label: "Sambal & Classical", marathi: "संबळ व तबला" },
  { id: "plates", label: "Leather & Fiber Plates", marathi: "ढोल व ताशा पाने" },
  { id: "hardware", label: "Rigging Hardware & Ropes", marathi: "हुक, दोरी व नट" },
  { id: "sticks-tal", label: "Tipru, Sticks & Tal", marathi: "टिपरी, काठ्या व झांज" },
  { id: "maintenance", label: "Tuning & Dhol Masala", marathi: "ढोल मसाला" },
] as const;

export const PRODUCTS: Product[] = [
  // ── 1. Dhol & Barrels ──────────────────────────────────────────────────────────
  {
    id: "puneri-dhol",
    slug: "puneri-dhol-wooden-barrel",
    name: "Master Puneri Dhol (Heavy Wood Shell)",
    marathiName: "पुणेरी लाकडी ढोल",
    category: "dhol",
    categoryLabel: "Dhol & Barrels",
    shortDesc:
      "Handcrafted with seasoned mango/neem timber barrel and dual treated goat-skin leather plates. Delivers the signature heavy resonant bass demanded by festival pathaks.",
    fullDesc:
      "The flagship Harikrupa Puneri Dhol is crafted for high-endurance festival processions and competitive Dhol Tasha Pathaks. The barrel is turned from seasoned solid timber to eliminate moisture distortion. Features dual cured goat leather plates tuned with high-strength non-stretch nylon cotton rope and heavy forged S-hooks.",
    seasonal: true,
    mandalFavorite: true,
    featured: true,
    badge: "Pathak Standard",
    priceNote: "Wholesale & Mandal Enquiry / Approx ₹6,500 - ₹9,500 depending on size",
    specs: [
      { label: "Shell Material", value: "Seasoned Mango / Neem Solid Wood" },
      { label: "Diameter / Sizes", value: "24-inch, 26-inch, 28-inch" },
      { label: "Skin / Head", value: "Dual Side Treated Indian Goat Leather" },
      { label: "Tension Mechanism", value: "Double Ring with Forged S-Hooks" },
      { label: "Rope", value: "Heavy-Duty 12mm Cotton-Nylon Core" },
      { label: "Weight", value: "Approx. 12 - 15 kg (Balanced shoulder balance)" },
    ],
    variants: [
      { name: "Standard 24-inch (Youth / Light)", size: "24 inch", inStock: true },
      { name: "Mandal Classic 26-inch (Most Popular)", size: "26 inch", inStock: true },
      { name: "Heavy Bass 28-inch (Lead Sound)", size: "28 inch", inStock: true },
    ],
    includedItems: ["Dhol Barrel", "Dual Leather Plates Fitted", "Full Rigging Rope", "1 Pair Standard Tipru"],
    imagePlaceholderGradient: "from-amber-800 to-amber-950",
    image: "/images/puneri-dhol-studio.jpg",
  },
  {
    id: "metal-barrel-dhol",
    slug: "metal-barrel-dhol-all-weather",
    name: "Metal Barrel All-Weather Dhol",
    marathiName: "मेटल बॅरल ऑल-वेदर ढोल",
    category: "dhol",
    categoryLabel: "Dhol & Barrels",
    shortDesc:
      "Reinforced seamless metal barrel dhol engineered for extreme monsoon humidity and high-impact festival road marches without pitch dropping.",
    fullDesc:
      "Built for pathaks that practice through heavy monsoons and high-intensity processions. The reinforced steel/alloy barrel maintains rigid cylindrical geometry under peak rope tension, ensuring the leather head remains taut and sharp even in humid coastal or rain-soaked weather.",
    seasonal: true,
    mandalFavorite: true,
    featured: false,
    badge: "Monsoon Proof",
    priceNote: "Wholesale Enquiry / Custom Pathak Color Powder Coating Available",
    specs: [
      { label: "Shell Material", value: "Seamless Spun Metal / Steel Alloy" },
      { label: "Diameter / Sizes", value: "24-inch, 26-inch" },
      { label: "Finish", value: "Powder Coated Anticorrosive (Custom colors)" },
      { label: "Skin Compatibility", value: "Natural Leather or Synthetic Fiber" },
      { label: "Weight", value: "11 - 13 kg" },
    ],
    variants: [
      { name: "24-inch Powder Coated", inStock: true },
      { name: "26-inch Heavy Gauge", inStock: true },
    ],
    includedItems: ["Metal Dhol Body", "Pre-installed Ring Hooks", "High-Tension Rope"],
    imagePlaceholderGradient: "from-slate-700 to-slate-900",
    image: "/images/puneri-dhol-studio.jpg",
  },
  {
    id: "metal-dhol-barrel-shell",
    slug: "metal-dhol-barrel-raw-shell",
    name: "Precision Metal Dhol Barrel (Raw Khokha)",
    marathiName: "मेटल ढोल खोका (फ्रेम)",
    category: "hardware",
    categoryLabel: "Rigging Hardware & Ropes",
    shortDesc:
      "Individually sold spun metal dhol barrels with rolled bead edges for mandals assembling or refurbishing their existing pathak fleet.",
    fullDesc:
      "Manufactured with rounded bearing edges that prevent cutting or premature tearing of leather plates. Balanced center-of-gravity allows easy drilling for mounting lugs and ring brackets.",
    seasonal: false,
    mandalFavorite: true,
    featured: false,
    badge: "Spare Shell",
    priceNote: "Bulk wholesale rates for Pathak workshops",
    specs: [
      { label: "Gauge", value: "Heavy 18-gauge cold-rolled metal" },
      { label: "Edges", value: "Double-rolled smooth contact beads" },
      { label: "Available Diameters", value: "24 inch, 26 inch" },
    ],
    variants: [
      { name: "24\" Raw Metal Finish", inStock: true },
      { name: "26\" Raw Metal Finish", inStock: true },
    ],
    includedItems: ["Bare Metal Barrel Only"],
    imagePlaceholderGradient: "from-zinc-700 to-zinc-900",
    image: "/images/puneri-dhol-studio.jpg",
  },

  // ── 2. Tasha Instruments ─────────────────────────────────────────────────────
  {
    id: "heavy-brass-tasha",
    slug: "heavy-brass-tasha-concert-edition",
    name: "High-Tension Brass Tasha (Concert Grade)",
    marathiName: "पितळी हाय-टेन्शन ताशा",
    category: "tasha",
    categoryLabel: "Tasha Instruments",
    shortDesc:
      "Heavy spun brass bowl tasha with reinforced cast counterhoop and precision bolt tensioning for piercing, crystal-clear high-frequency rhythm.",
    fullDesc:
      "Crafted in Miraj by specialized metal spin masters. The bowl geometry creates immediate acoustic projection that cuts through dozens of dhol drums in grand festival processions. Equipped with an unbreakable tension ring and heat-treated bolts that will not strip under maximum pitch tuning.",
    seasonal: false,
    mandalFavorite: true,
    featured: true,
    badge: "Piercing Tone",
    priceNote: "Enquiry Only / Complete Set with Belt & Sticks",
    specs: [
      { label: "Bowl Material", value: "100% Pure Virgin Spun Brass" },
      { label: "Diameter", value: "12 inch, 13 inch, 14 inch" },
      { label: "Bowl Depth", value: "Shallow parabolic acoustic bowl" },
      { label: "Tension Bolts", value: "10 Heavy-Duty Hex-Tuning Lugs" },
      { label: "Head", value: "Clear High-Tension Poly / Goatskin Hybrid" },
    ],
    variants: [
      { name: "12-inch Concert (High Pitch)", size: "12 inch", inStock: true },
      { name: "13-inch Mandal Standard", size: "13 inch", inStock: true },
      { name: "14-inch Master Soloist", size: "14 inch", inStock: true },
    ],
    includedItems: ["Brass Tasha Bowl", "Installed Tasha Plate", "Tuning Key", "1 Pair Cane Tasha Sticks (Chob)", "Adjustable Neck Strap"],
    imagePlaceholderGradient: "from-yellow-700 to-yellow-950",
    image: "/images/brass-tasha-studio.jpg",
  },
  {
    id: "fiber-mandal-tasha",
    slug: "fiber-head-professional-tasha",
    name: "Fiber-Head Professional Tasha (High Velocity)",
    marathiName: "फायबर हेड ताशा",
    category: "tasha",
    categoryLabel: "Tasha Instruments",
    shortDesc:
      "Lightweight ergonomic tasha bowl fitted with weather-proof fiber membrane for lightning-fast triplet rolls and zero weather detuning.",
    fullDesc:
      "Engineered for lead players who play continuous fast bol and rolls for 6+ hours during Ganeshotsav. The fiber surface provides consistent rebound and acoustic sharpness that requires zero fire-heating or sun-drying.",
    seasonal: false,
    mandalFavorite: false,
    featured: false,
    badge: "Quick Rebound",
    priceNote: "Factory Direct Pricing",
    specs: [
      { label: "Head Type", value: "0.25mm High-Tensile Polyester Film" },
      { label: "Bowl", value: "Spun Alloy with Anti-Corrosion Coating" },
      { label: "Diameter", value: "12-inch & 13-inch" },
    ],
    variants: [
      { name: "12-inch All-Weather", inStock: true },
      { name: "13-inch All-Weather", inStock: true },
    ],
    includedItems: ["Tasha", "Pre-stretched Fiber Plate", "1 Pair Chob Sticks"],
    imagePlaceholderGradient: "from-stone-700 to-stone-900",
    image: "/images/brass-tasha-studio.jpg",
  },

  // ── 3. Traditional & Classical Instruments ──────────────────────────────────
  {
    id: "handcrafted-sambal-pair",
    slug: "traditional-sambal-pair-miraj",
    name: "Handcrafted Miraj Sambal Pair (संबळ जोडी)",
    marathiName: "पारंपरिक संबळ जोडी",
    category: "traditional",
    categoryLabel: "Sambal & Classical",
    shortDesc:
      "Traditional dual-drum folk instrument (Male/Female pair) hand-carved in Miraj for Gondhal, devotional jagrans, and Maharashtrian cultural ceremonies.",
    fullDesc:
      "The Sambal is the soul of Maharashtrian folk and spiritual music. Harikrupa’s Sambal pairs are made from solid carved wood shells, one drum tuned to a resonant bass (Male / नर) and the other to a crisp high pitch (Female / मादी). Rigged with treated parchment skin and traditional rawhide cordage.",
    seasonal: false,
    mandalFavorite: false,
    featured: true,
    badge: "Heritage Craft",
    priceNote: "Handcrafted to Order / Enquire for Current Batch Availability",
    specs: [
      { label: "Wood Shell", value: "Seasoned Babool / Sheesham Wood" },
      { label: "Configuration", value: "Paired Drums (Nar & Maadi)" },
      { label: "Membrane", value: "Special Thin Cured Goat Parchment" },
      { label: "Tuning", value: "Traditional Leather Thongs & Wooden Pegs" },
    ],
    variants: [
      { name: "Standard Temple Sambal Pair", inStock: true },
      { name: "Deluxe Stage & Performance Pair", inStock: true },
    ],
    includedItems: ["Sambal Dual Drum Set", "Curved Wooden Beater Sticks", "Cloth Waist Strap"],
    imagePlaceholderGradient: "from-amber-900 to-amber-950",
    image: "/images/folk-sambal-studio.jpg",
  },
  {
    id: "miraj-tabla-pair",
    slug: "professional-miraj-sheesham-tabla-pair",
    name: "Professional Miraj Tabla Pair (Sheesham Wood)",
    marathiName: "मिरज शीशम तबला जोडी",
    category: "traditional",
    categoryLabel: "Sambal & Classical",
    shortDesc:
      "Renowned Miraj concert-grade tabla set. Heavy 3.5kg copper/brass Bayan with fine-grain black Sheesham Dayan and artisan-applied Syahi.",
    fullDesc:
      "Miraj is globally celebrated among classical Ustads and Pandits for its tabla craftsmanship. Harikrupa's tabla pairs are made with aged dense Sheesham wood (Dayan) and heavy, resonant copper/brass Bayan. Master-applied multi-layer Syahi provides exceptional overtone clarity across all octaves.",
    seasonal: false,
    mandalFavorite: false,
    featured: false,
    badge: "Miraj Concert Grade",
    priceNote: "Direct from Miraj Artisans / Custom Pitch Tuning (C, C#, D)",
    specs: [
      { label: "Dayan Shell", value: "Heavy Seasoned Black Sheesham Wood" },
      { label: "Bayan Shell", value: "Heavy 3.5kg Pure Copper / Chrome Brass" },
      { label: "Puri / Head", value: "Multi-ply Hand-braided Rawhide Puri" },
      { label: "Syahi", value: "Pure Miraj Artisan Iron-Dust Formulation" },
    ],
    variants: [
      { name: "Pitch C# (Most versatile for vocal/classical)", inStock: true },
      { name: "Pitch D (High brightness for solo/bhajan)", inStock: true },
    ],
    includedItems: ["Dayan", "Bayan", "High-Density Cushioned Rings (Bira)", "Brass Tuning Hammer", "Padded Carry Bag"],
    imagePlaceholderGradient: "from-orange-900 to-stone-900",
    image: "/images/miraj-tabla-studio.jpg",
  },
  {
    id: "classical-acoustic-guitar",
    slug: "classical-acoustic-guitar-miraj",
    name: "Handmade Classical Acoustic Guitar",
    marathiName: "अकौस्टिक गिटार",
    category: "traditional",
    categoryLabel: "Sambal & Classical",
    shortDesc:
      "Warm, resonant hollow-body acoustic guitar crafted by Miraj string luthiers for students, schools, and cultural music academies.",
    fullDesc:
      "Complementing Harikrupa's percussion mastery is Miraj's century-old string instrument lineage. This 40-inch acoustic guitar features a spruce soundboard, rosewood fretboard, and smooth low action for effortless playing and rich projection.",
    seasonal: false,
    mandalFavorite: false,
    featured: false,
    badge: "Student & Studio",
    priceNote: "Competitive Academy & Wholesale Pricing",
    specs: [
      { label: "Top Wood", value: "Select Sitka Spruce" },
      { label: "Fretboard", value: "Smooth Indian Rosewood" },
      { label: "Size", value: "40 inch Concert Body" },
      { label: "Frets", value: "20 Nickel Silver Frets" },
    ],
    variants: [
      { name: "Natural Wood Matte Finish", inStock: true },
      { name: "Vintage Sunburst Gloss", inStock: true },
    ],
    includedItems: ["Guitar", "Protective Gig Bag", "Guitar Picks Pack", "Spare String Set"],
    imagePlaceholderGradient: "from-amber-700 to-amber-900",
    image: "/images/classical-guitar-studio.jpg",
  },

  // ── 4. Plates & Heads ────────────────────────────────────────────────────────
  {
    id: "cured-dhol-plates",
    slug: "seasoned-cured-dhol-leather-plates",
    name: "Seasoned Dhol Leather Plates (Treated Goat Skin)",
    marathiName: "मिरज स्पेशल ढोल पाने (कातडे)",
    category: "plates",
    categoryLabel: "Leather & Fiber Plates",
    shortDesc:
      "Miraj artisan-treated goat leather dhol heads with braided raw hide border rings. Natural sun-cured for deep, chest-thumping bass without splitting.",
    fullDesc:
      "The soul of a Puneri Dhol is its leather plate (ढोल पान). Harikrupa uses hand-selected goat hides cured in traditional botanical and lime baths to achieve the exact elasticity required for high-tension festival dhol playing. Each plate is stitched onto a rigid bamboo/cane ring with rawhide braids.",
    seasonal: true,
    mandalFavorite: true,
    featured: true,
    badge: "Best Seller",
    priceNote: "Bulk Mandal Packs Available (10, 25, 50 sets)",
    specs: [
      { label: "Material", value: "100% Organic Cured Indian Goat Leather" },
      { label: "Ring Construction", value: "Hardwood / Bamboo Core with Rawhide Braid" },
      { label: "Sizes Available", value: "24\", 25\", 26\", 27\", 28\"" },
      { label: "Treatment", value: "Multi-stage lime, salt, and neem sun-cure" },
    ],
    variants: [
      { name: "24-inch Pair (Treble & Bass Side)", size: "24 inch", inStock: true },
      { name: "26-inch Pair (Pathak Standard)", size: "26 inch", inStock: true },
      { name: "28-inch Pair (Deep Bass)", size: "28 inch", inStock: true },
    ],
    includedItems: ["Matched Pair of Dhol Leather Plates"],
    imagePlaceholderGradient: "from-amber-800 to-stone-900",
    image: "/images/cured-plates-studio.jpg",
  },
  {
    id: "high-tension-tasha-plates",
    slug: "high-tension-tasha-plates-sheets",
    name: "Precision Tasha Plates (Polyester & Leather Variants)",
    marathiName: "हाय-टेन्शन ताशा पाने",
    category: "plates",
    categoryLabel: "Leather & Fiber Plates",
    shortDesc:
      "Ultra-clear 10-mil and natural parchment tasha replacement membranes. Holds extreme tension without sagging under prolonged heavy beating.",
    fullDesc:
      "Tasha plates must withstand thousands of rapid strokes without losing tension or tearing. Available in both modern high-clarity synthetic polyester film (zero weather distortion) and traditional cured parchment skin.",
    seasonal: false,
    mandalFavorite: true,
    featured: false,
    badge: "Mandal Essential",
    priceNote: "Sold in singles or bulk packs of 12",
    specs: [
      { label: "Material", value: "Mylar Polyester or Fine Cured Parchment" },
      { label: "Available Sizes", value: "12 inch, 13 inch, 14 inch" },
      { label: "Collar", value: "Reinforced crimped aluminum edge" },
    ],
    variants: [
      { name: "12\" Clear Synthetic Film", size: "12 inch", inStock: true },
      { name: "13\" Clear Synthetic Film", size: "13 inch", inStock: true },
      { name: "13\" Natural Parchment Skin", size: "13 inch", inStock: true },
    ],
    includedItems: ["Tasha Replacement Plate"],
    imagePlaceholderGradient: "from-slate-600 to-slate-900",
    image: "/images/cured-plates-studio.jpg",
  },

  // ── 5. Hardware & Rigging ───────────────────────────────────────────────────
  {
    id: "unbreakable-tasha-nut-bolts",
    slug: "unbreakable-tasha-nut-bolts-kit",
    name: "Unbreakable Tasha Nut & Bolt Tuning Kit",
    marathiName: "अनब्रेकेबल ताशा नट-बोल्ट किट",
    category: "hardware",
    categoryLabel: "Rigging Hardware & Ropes",
    shortDesc:
      "Heavy-duty hardened steel/brass tuning screws designed specifically not to slip, shear, or strip during aggressive high-pitch tasha tuning.",
    fullDesc:
      "Nothing halts a pathak mid-procession faster than a stripped tasha tuning bolt. Our unbreakable kit is machined from hardened steel with precision metric threads and heavy hexagonal heads that grip tightly into the rim hoop.",
    seasonal: false,
    mandalFavorite: true,
    featured: false,
    badge: "Reinforced Alloy",
    priceNote: "Full Set of 10 Bolts + Nuts / Bulk Pathak Packs",
    specs: [
      { label: "Material", value: "High-Tensile Hardened Chrome Steel" },
      { label: "Quantity", value: "Set of 10 or 12 Pieces with Washers" },
      { label: "Thread", value: "M8 Precision Anti-Vibration Thread" },
    ],
    variants: [
      { name: "Set of 10 Bolts with Washers", inStock: true },
      { name: "Mandal Master Pack (5 Sets / 50 Pcs)", inStock: true },
    ],
    includedItems: ["10 Tuning Bolts", "10 Flange Nuts", "10 Heavy Washers"],
    imagePlaceholderGradient: "from-zinc-600 to-zinc-950",
    image: "/images/hardware-ropes-studio.jpg",
  },
  {
    id: "forged-steel-s-hooks",
    slug: "forged-steel-dhol-s-hooks",
    name: "Heavy-Duty Forged Dhol S-Hooks (एस हुक)",
    marathiName: "मजबूत ढोल एस हुक",
    category: "hardware",
    categoryLabel: "Rigging Hardware & Ropes",
    shortDesc:
      "Reinforced forged steel S-hooks designed to withstand 500+ kg of rope tension without straightening or deforming during dhol bracing.",
    fullDesc:
      "Essential for locking the cotton ropes across the two leather rings of the Puneri Dhol. Forged under high heat for maximum tensile resilience. Features smooth rounded deburred edges so the hooks never slice or wear out the rope fibers.",
    seasonal: false,
    mandalFavorite: true,
    featured: false,
    badge: "Heavy Gauge",
    priceNote: "Sold per kg or by set of 24 hooks",
    specs: [
      { label: "Material", value: "Heat-Treated Forged Carbon Steel" },
      { label: "Finish", value: "Zinc Plated Anti-Rust / Brass Coated" },
      { label: "Tensile Rating", value: "500+ kg per hook" },
    ],
    variants: [
      { name: "Single Dhol Set (24 Hooks)", inStock: true },
      { name: "Bulk Pack for 10 Dhols (240 Hooks)", inStock: true },
    ],
    includedItems: ["S-Hook Pack"],
    imagePlaceholderGradient: "from-stone-600 to-stone-900",
    image: "/images/hardware-ropes-studio.jpg",
  },
  {
    id: "high-tensile-dhol-rope",
    slug: "high-tensile-cotton-dhol-rope",
    name: "High-Tensile Non-Slip Cotton Dhol Rope (ढोल दोरी)",
    marathiName: "हाय-टेन्साइल ढोल दोरी",
    category: "hardware",
    categoryLabel: "Rigging Hardware & Ropes",
    shortDesc:
      "10mm & 12mm braided white cotton rope with high-strength synthetic core. Provides superior hand grip while maintaining rock-solid drum tension.",
    fullDesc:
      "Specially manufactured for Dhol Pathaks. Traditional cotton exterior ensures comfortable, non-blistering hand pull during dhol tightening, while the hidden high-modulus inner core prevents elongation when the drum is subjected to hours of heavy impacts.",
    seasonal: true,
    mandalFavorite: true,
    featured: false,
    badge: "Zero Stretch",
    priceNote: "Sold per bundle (approx. 25-30 meters per dhol) or 100m spools",
    specs: [
      { label: "Diameter", value: "10mm or 12mm" },
      { label: "Composition", value: "Braided Pure Cotton Exterior + High-Tensile Core" },
      { label: "Length per Drum", value: "28 - 32 meters continuous" },
    ],
    variants: [
      { name: "Single Dhol Bundle (30m)", inStock: true },
      { name: "Full Pathak Roll (150m)", inStock: true },
    ],
    includedItems: ["Pre-measured Rope Bundle"],
    imagePlaceholderGradient: "from-amber-100 to-amber-300",
    image: "/images/hardware-ropes-studio.jpg",
  },

  // ── 6. Sticks & Cymbals (Tal) ────────────────────────────────────────────────
  {
    id: "normal-wooden-tipru",
    slug: "normal-wooden-dhol-tipru-pair",
    name: "Standard Hardwood Dhol Tipru Pair (टिपरी)",
    marathiName: "साधी लाकडी टिपरी",
    category: "sticks-tal",
    categoryLabel: "Tipru, Sticks & Tal",
    shortDesc:
      "Hand-lathed solid wood tipru pairs shaped for firm grip, loud slap response, and excellent wrist rebound during prolonged playing.",
    fullDesc:
      "Smoothly finished hardwood tiprus carved according to authentic Puneri dhol dimensions. Balanced weight distribution reduces forearm fatigue during long festival processions.",
    seasonal: false,
    mandalFavorite: false,
    featured: false,
    badge: "Basic Set",
    priceNote: "Bulk Mandal packs available in sets of 20, 50, 100 pairs",
    specs: [
      { label: "Wood", value: "Solid Hardwood" },
      { label: "Length", value: "Approx. 12 inches" },
      { label: "Grip", value: "Contoured ergonomic handle" },
    ],
    variants: [
      { name: "1 Pair (2 Sticks)", inStock: true },
      { name: "10 Pairs Mandal Pack", inStock: true },
    ],
    includedItems: ["2 Matching Tiprus"],
    imagePlaceholderGradient: "from-amber-600 to-amber-800",
    image: "/images/hardware-ropes-studio.jpg",
  },
  {
    id: "seasoned-premium-tipru",
    slug: "seasoned-heavy-dhol-tipru-deluxe",
    name: "Premium Seasoned Timber Tipru Pair",
    marathiName: "सिझन्ड स्पेशल हेवी टिपरी",
    category: "sticks-tal",
    categoryLabel: "Tipru, Sticks & Tal",
    shortDesc:
      "Aged, dense wood tiprus treated for crack-resistance and superior acoustic crack on the leather dhol face. Used by lead pathak drummers.",
    fullDesc:
      "Each stick is weighed and paired with high precision. Made from select high-density timber that will not fracture, splinter, or bend even under forceful striking on steel or wood dhol edges.",
    seasonal: false,
    mandalFavorite: true,
    featured: true,
    badge: "Pro Choice",
    priceNote: "Premium Grade / Wholesale Rates for Pathaks",
    specs: [
      { label: "Wood Type", value: "Seasoned Red / Sheesham Timber" },
      { label: "Weight Match", value: "±5 grams precision pairing" },
      { label: "Finish", value: "Natural Beeswax Polish" },
    ],
    variants: [
      { name: "1 Pair Seasoned Deluxe", inStock: true },
      { name: "Pack of 5 Pairs for Soloists", inStock: true },
    ],
    includedItems: ["1 Matched Pair Deluxe Tiprus"],
    imagePlaceholderGradient: "from-amber-700 to-amber-950",
    image: "/images/hardware-ropes-studio.jpg",
  },
  {
    id: "flexible-tasha-sticks-chob",
    slug: "flexible-cane-tasha-sticks-chob",
    name: "Flexible Cane Tasha Sticks / Chob (ताशा काठ्या)",
    marathiName: "लवचिक ताशा काठ्या (चोब)",
    category: "sticks-tal",
    categoryLabel: "Tipru, Sticks & Tal",
    shortDesc:
      "Selected flexible cane / horn tasha sticks engineered for maximum whipping velocity, crisp high-pitch attack, and zero wrist strain.",
    fullDesc:
      "The fast, blistering speed of the tasha player relies completely on stick flexibility. Our chobs are crafted from natural aged cane selected for natural curvature and rapid snapback rebound.",
    seasonal: false,
    mandalFavorite: true,
    featured: false,
    badge: "High Velocity",
    priceNote: "Sold in packs of 2 pairs (4 sticks)",
    specs: [
      { label: "Material", value: "Natural Flexible River Cane" },
      { label: "Length", value: "11 - 12 inches" },
      { label: "Tip", value: "Smooth tapered striking bead" },
    ],
    variants: [
      { name: "2 Pairs (4 Sticks) Pack", inStock: true },
      { name: "10 Pairs Mandal Stock Pack", inStock: true },
    ],
    includedItems: ["Tasha Sticks Pack"],
    imagePlaceholderGradient: "from-yellow-600 to-yellow-800",
    image: "/images/brass-tasha-studio.jpg",
  },
  {
    id: "heavy-brass-tal-cymbals",
    slug: "heavy-brass-tal-zanj-cymbals",
    name: "Heavy Brass Tal / Zanj (पितळी झांज)",
    marathiName: "वजनदार पितळी झांज (ताल)",
    category: "sticks-tal",
    categoryLabel: "Tipru, Sticks & Tal",
    shortDesc:
      "Cast bell-brass hand cymbals tuned for sustained shimmering overtone that synchronizes the pathak beat across vast procession grounds.",
    fullDesc:
      "Cymbals (झांज / ताल) are the metronome of any Dhol Tasha Pathak. Cast from high-copper bell brass with an ergonomic center dome and heavy multi-layer cotton finger straps.",
    seasonal: false,
    mandalFavorite: true,
    featured: true,
    badge: "Bell Metal",
    priceNote: "Enquire for Wholesale Pair Pricing by Weight (Gram/Kg)",
    specs: [
      { label: "Alloy", value: "High-Copper Bell Brass (कासे / पितळ)" },
      { label: "Diameter", value: "7 inch, 8 inch, 9 inch" },
      { label: "Weight per Pair", value: "Approx. 1.2 kg - 1.8 kg" },
      { label: "Strap", value: "Thick Handwoven Red Cotton Straps" },
    ],
    variants: [
      { name: "7-inch (Lightweight / Long Processions)", inStock: true },
      { name: "8-inch (Mandal Standard)", inStock: true },
      { name: "9-inch (Heavy Resonant Concert)", inStock: true },
    ],
    includedItems: ["1 Pair Heavy Brass Cymbals", "Installed Hand Straps"],
    imagePlaceholderGradient: "from-yellow-500 to-amber-700",
    image: "/images/brass-tal-studio.jpg",
  },
  {
    id: "heavy-steel-tal",
    slug: "heavy-steel-tal-zanj-cymbals",
    name: "Heavy Steel Tal / Zanj (स्टील झांज)",
    marathiName: "स्टील झांज",
    category: "sticks-tal",
    categoryLabel: "Tipru, Sticks & Tal",
    shortDesc:
      "High-pitch steel cymbals offering sharp, cutting transient attack with high durability at budget-friendly wholesale rates for large mandals.",
    fullDesc:
      "A high-volume favorite for community schools, youth pathaks, and festival groups needing 50+ cymbal pairs with maximum acoustic loudness and rust resistance.",
    seasonal: false,
    mandalFavorite: false,
    featured: false,
    badge: "Value Favorite",
    priceNote: "Special bulk rate for 10+ pairs",
    specs: [
      { label: "Material", value: "Hardened Stainless Steel Sheet" },
      { label: "Sizes", value: "7 inch & 8 inch" },
      { label: "Finish", value: "High-Polish Mirror Finish" },
    ],
    variants: [
      { name: "7-inch Steel Pair", inStock: true },
      { name: "8-inch Steel Pair", inStock: true },
    ],
    includedItems: ["1 Pair Steel Cymbals with Straps"],
    imagePlaceholderGradient: "from-slate-400 to-slate-700",
    image: "/images/brass-tal-studio.jpg",
  },

  // ── 7. Maintenance & Acoustic Care ──────────────────────────────────────────
  {
    id: "dhol-masala-acoustic-paste",
    slug: "dhol-masala-acoustic-tuning-paste",
    name: "Authentic Dhol Masala (Acoustic Tuning Paste)",
    marathiName: "मिरज स्पेशल ढोल मसाला",
    category: "maintenance",
    categoryLabel: "Tuning & Dhol Masala",
    shortDesc:
      "Traditional mineral and resin tuning compound applied to the inner leather plate of the dhol to produce deep, booming low-end bass.",
    fullDesc:
      "Formulated according to secret Miraj acoustic recipes. Applying this mineral compound dampens unwanted high-frequency flutter and drops the pitch of the bass plate into a booming, resonant rumble that can be felt in the chest hundreds of meters away.",
    seasonal: true,
    mandalFavorite: true,
    featured: true,
    badge: "Acoustic Secret",
    priceNote: "Sold in 250g, 500g, and 1kg Sealed Containers",
    specs: [
      { label: "Composition", value: "Natural mineral resin, iron oxide, plant binder" },
      { label: "Application", value: "Inner surface center of bass leather plate" },
      { label: "Shelf Life", value: "Indefinite when sealed airtight" },
    ],
    variants: [
      { name: "250g Jar (Treats 2-3 Dhols)", inStock: true },
      { name: "500g Jar (Treats 5-6 Dhols)", inStock: true },
      { name: "1kg Mandal Master Tub (Full Pathak fleet)", inStock: true },
    ],
    includedItems: ["Sealed Dhol Masala Tub", "Application Guide Instructions"],
    imagePlaceholderGradient: "from-stone-900 to-black",
    image: "/images/cured-plates-studio.jpg",
  },
];
