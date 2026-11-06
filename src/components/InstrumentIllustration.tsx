import React from "react";

interface InstrumentIllustrationProps {
  type: string;
  className?: string;
}

export default function InstrumentIllustration({
  type,
  className = "w-full h-full",
}: InstrumentIllustrationProps) {
  // Normalize type
  const normalized = type.toLowerCase();

  // 1. PUNERI DHOL (Wooden / Metal Barrel Drum)
  if (
    normalized.includes("dhol") &&
    !normalized.includes("plate") &&
    !normalized.includes("masala") &&
    !normalized.includes("rope") &&
    !normalized.includes("hook")
  ) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="woodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8A3C14" />
            <stop offset="25%" stopColor="#A84C1C" />
            <stop offset="50%" stopColor="#C85A17" />
            <stop offset="75%" stopColor="#8A3C14" />
            <stop offset="100%" stopColor="#4A1E08" />
          </linearGradient>
          <linearGradient id="rimMetal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF3B0" />
            <stop offset="100%" stopColor="#926C15" />
          </linearGradient>
          <linearGradient id="leatherHead" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAD8BE" />
            <stop offset="70%" stopColor="#D5BF9F" />
            <stop offset="100%" stopColor="#B39B7A" />
          </linearGradient>
          <radialGradient id="dholMasalaSpot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1C1917" />
            <stop offset="70%" stopColor="#292524" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Barrel Outer Shadow */}
        <ellipse cx="160" cy="195" rx="100" ry="12" fill="#000000" fillOpacity="0.25" />

        {/* Drum Barrel Body */}
        <path
          d="M70,45 C110,35 210,35 250,45 C275,80 275,140 250,175 C210,185 110,185 70,175 C45,140 45,80 70,45 Z"
          fill="url(#woodGradient)"
          stroke="#4A1E08"
          strokeWidth="3"
        />

        {/* Timber Stave Lines (Woodgrain depth) */}
        <path d="M72,75 Q160,82 248,75" stroke="#4A1E08" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M65,110 Q160,118 255,110" stroke="#4A1E08" strokeWidth="2" strokeOpacity="0.5" />
        <path d="M72,145 Q160,152 248,145" stroke="#4A1E08" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Left Leather Plate Rim */}
        <ellipse cx="70" cy="110" rx="20" ry="65" fill="url(#leatherHead)" stroke="#4A1E08" strokeWidth="3" />
        <ellipse cx="70" cy="110" rx="14" ry="50" fill="url(#leatherHead)" stroke="#78350F" strokeWidth="1" strokeDasharray="3 3" />
        {/* Masala acoustic spot on bass head */}
        <ellipse cx="68" cy="110" rx="7" ry="22" fill="url(#dholMasalaSpot)" />

        {/* Right Leather Plate Rim */}
        <ellipse cx="250" cy="110" rx="20" ry="65" fill="url(#leatherHead)" stroke="#4A1E08" strokeWidth="3" />
        <ellipse cx="250" cy="110" rx="14" ry="50" fill="url(#leatherHead)" stroke="#78350F" strokeWidth="1" strokeDasharray="3 3" />

        {/* Outer Counterhoop Rings */}
        <path d="M68,45 C60,75 60,145 68,175" stroke="url(#rimMetal)" strokeWidth="6" strokeLinecap="round" />
        <path d="M252,45 C260,75 260,145 252,175" stroke="url(#rimMetal)" strokeWidth="6" strokeLinecap="round" />

        {/* Zig-Zag High Tensile White Cotton Ropes */}
        <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
          <line x1="72" y1="52" x2="248" y2="70" />
          <line x1="248" y1="70" x2="72" y2="88" />
          <line x1="72" y1="88" x2="248" y2="106" />
          <line x1="248" y1="106" x2="72" y2="124" />
          <line x1="72" y1="124" x2="248" y2="142" />
          <line x1="248" y1="142" x2="72" y2="160" />
          <line x1="72" y1="160" x2="248" y2="170" />
        </g>

        {/* Metallic Forged S-Hooks at rope nodes */}
        <g fill="#D4AF37" stroke="#78350F" strokeWidth="1">
          <circle cx="72" cy="70" r="4.5" />
          <circle cx="248" cy="88" r="4.5" />
          <circle cx="72" cy="106" r="4.5" />
          <circle cx="248" cy="124" r="4.5" />
          <circle cx="72" cy="142" r="4.5" />
          <circle cx="248" cy="160" r="4.5" />
        </g>

        {/* Pair of crossed Tipru sticks in foreground */}
        <g transform="translate(130, 160) rotate(-15)">
          <rect x="-35" y="-3" width="70" height="6" rx="3" fill="#FAF7F2" stroke="#4A1E08" strokeWidth="1.5" />
          <rect x="25" y="-4" width="10" height="8" rx="2" fill="#C85A17" />
        </g>
        <g transform="translate(170, 165) rotate(20)">
          <rect x="-35" y="-3" width="70" height="6" rx="3" fill="#D4AF37" stroke="#4A1E08" strokeWidth="1.5" />
          <rect x="25" y="-4" width="10" height="8" rx="2" fill="#78350F" />
        </g>

        {/* Miraj Artisan Seal Badge */}
        <g transform="translate(160, 110)">
          <circle cx="0" cy="0" r="18" fill="#171513" stroke="#D4AF37" strokeWidth="1.5" />
          <text x="0" y="4" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="bold" fontFamily="serif">
            मिरज
          </text>
        </g>
      </svg>
    );
  }

  // 2. HIGH-TENSION BRASS TASHA
  if (normalized.includes("tasha") && !normalized.includes("chob") && !normalized.includes("nut")) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="brassBowl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D061" />
            <stop offset="35%" stopColor="#E6B325" />
            <stop offset="70%" stopColor="#C4880B" />
            <stop offset="100%" stopColor="#784E03" />
          </linearGradient>
          <linearGradient id="counterHoop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <radialGradient id="tashaMembrane" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#F1F5F9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="160" cy="190" rx="90" ry="12" fill="#000000" fillOpacity="0.2" />

        {/* Tasha Parabolic Spun Brass Bowl */}
        <path
          d="M60,80 C60,165 110,185 160,185 C210,185 260,165 260,80 Z"
          fill="url(#brassBowl)"
          stroke="#784E03"
          strokeWidth="3"
        />

        {/* Acoustic Flare Accent */}
        <path
          d="M75,100 C85,150 120,172 160,172 C200,172 235,150 245,100"
          stroke="#FFF3B0"
          strokeWidth="2.5"
          strokeOpacity="0.5"
        />

        {/* Hexagonal Tuning Lugs and Tension Bolts */}
        <g stroke="#334155" strokeWidth="2.5" strokeLinecap="round">
          {[75, 100, 130, 160, 190, 220, 245].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="80" x2={x + (x < 160 ? 8 : x > 160 ? -8 : 0)} y2="125" />
              <circle
                cx={x + (x < 160 ? 8 : x > 160 ? -8 : 0)}
                cy="125"
                r="3.5"
                fill="#D4AF37"
                stroke="#171513"
                strokeWidth="1.5"
              />
            </g>
          ))}
        </g>

        {/* Synthetic Membrane Head */}
        <ellipse cx="160" cy="80" rx="100" ry="32" fill="url(#tashaMembrane)" stroke="#784E03" strokeWidth="2" />
        <ellipse cx="160" cy="80" rx="88" ry="26" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" />

        {/* Chrome Counterhoop Rim */}
        <ellipse cx="160" cy="78" rx="102" ry="32" fill="none" stroke="url(#counterHoop)" strokeWidth="6" />

        {/* Pair of curved flexible cane Chob sticks */}
        <path
          d="M95,30 C125,55 150,70 158,78"
          stroke="#FAF7F2"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M225,30 C195,55 170,70 162,78"
          stroke="#D4AF37"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Striking Beads */}
        <circle cx="158" cy="78" r="4.5" fill="#C85A17" />
        <circle cx="162" cy="78" r="4.5" fill="#C85A17" />

        {/* Sound Frequency Sparkles */}
        <circle cx="160" cy="80" r="1.5" fill="#C85A17" />
      </svg>
    );
  }

  // 3. TRADITIONAL FOLK SAMBAL PAIR
  if (normalized.includes("sambal")) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="sambalWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#78350F" />
            <stop offset="50%" stopColor="#9A3412" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
        </defs>

        <ellipse cx="160" cy="190" rx="95" ry="12" fill="#000000" fillOpacity="0.2" />

        {/* Left Drum (Bass / Nar) */}
        <path d="M70,90 C70,165 95,175 125,175 C155,175 160,165 160,90 Z" fill="url(#sambalWood)" stroke="#451A03" strokeWidth="2.5" />
        <ellipse cx="115" cy="90" rx="45" ry="20" fill="#EAD8BE" stroke="#451A03" strokeWidth="2.5" />
        <ellipse cx="115" cy="90" rx="14" ry="7" fill="#292524" />

        {/* Right Drum (Treble / Maadi) */}
        <path d="M165,95 C165,165 190,175 215,175 C240,175 255,165 255,95 Z" fill="url(#sambalWood)" stroke="#451A03" strokeWidth="2.5" />
        <ellipse cx="210" cy="95" rx="42" ry="18" fill="#F5E6D3" stroke="#451A03" strokeWidth="2.5" />

        {/* Traditional Rawhide Lacing */}
        <g stroke="#FAF7F2" strokeWidth="1.8" opacity="0.9">
          <line x1="75" y1="95" x2="125" y2="170" />
          <line x1="125" y1="170" x2="155" y2="95" />
          <line x1="170" y1="100" x2="215" y2="170" />
          <line x1="215" y1="170" x2="250" y2="100" />
        </g>

        {/* Curved Horn / Wooden Striking Beater Sticks */}
        <path d="M85,50 C95,65 110,80 115,88" stroke="#D4AF37" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M235,50 C225,65 215,85 210,93" stroke="#C85A17" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. MIRAJ CLASSICAL TABLA PAIR
  if (normalized.includes("tabla")) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="sheeshamDayan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="50%" stopColor="#3B0764" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <linearGradient id="copperBayan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#C2410C" />
            <stop offset="100%" stopColor="#7C2D12" />
          </linearGradient>
        </defs>

        {/* Cushion Rings (Bira) */}
        <ellipse cx="115" cy="165" rx="50" ry="16" fill="#991B1B" stroke="#7F1D1D" strokeWidth="2" />
        <ellipse cx="215" cy="165" rx="42" ry="14" fill="#991B1B" stroke="#7F1D1D" strokeWidth="2" />

        {/* Bayan (Left Copper Bass Bowl) */}
        <path d="M70,95 C70,160 110,165 115,165 C160,165 165,130 160,95 Z" fill="url(#copperBayan)" stroke="#431407" strokeWidth="2.5" />
        <ellipse cx="115" cy="95" rx="45" ry="18" fill="#F5EBE1" stroke="#431407" strokeWidth="2" />
        {/* Off-center Syahi */}
        <ellipse cx="108" cy="94" rx="20" ry="9" fill="#171513" />

        {/* Dayan (Right Wooden Sheesham Treble Drum) */}
        <path d="M180,105 C180,160 195,165 215,165 C235,165 250,160 250,105 Z" fill="url(#sheeshamDayan)" stroke="#171513" strokeWidth="2.5" />
        <ellipse cx="215" cy="105" rx="35" ry="15" fill="#F5EBE1" stroke="#171513" strokeWidth="2" />
        {/* Centered Syahi */}
        <ellipse cx="215" cy="105" rx="14" ry="7" fill="#171513" />

        {/* Wooden Gatta Tuning Pegs on Dayan */}
        <rect x="180" y="125" width="8" height="16" rx="2" fill="#D4AF37" stroke="#78350F" />
        <rect x="242" y="125" width="8" height="16" rx="2" fill="#D4AF37" stroke="#78350F" />
      </svg>
    );
  }

  // 5. CURED LEATHER PLATES / HEADS
  if (normalized.includes("plate") || normalized.includes("skin") || normalized.includes("head")) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <radialGradient id="leatherCircle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="60%" stopColor="#EAD8BE" />
            <stop offset="85%" stopColor="#D5BF9F" />
            <stop offset="100%" stopColor="#A88B68" />
          </radialGradient>
        </defs>

        <ellipse cx="160" cy="190" rx="80" ry="10" fill="#000000" fillOpacity="0.2" />

        {/* Outer Braided Bamboo & Rawhide Hoop */}
        <circle cx="160" cy="105" r="75" fill="none" stroke="#78350F" strokeWidth="12" />
        <circle cx="160" cy="105" r="75" fill="none" stroke="#D4AF37" strokeWidth="3" strokeDasharray="6 4" />

        {/* Main Cured Leather Face */}
        <circle cx="160" cy="105" r="69" fill="url(#leatherCircle)" stroke="#451A03" strokeWidth="2" />

        {/* Concentric Sun Curing Rings */}
        <circle cx="160" cy="105" r="54" fill="none" stroke="#C85A17" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="160" cy="105" r="38" fill="none" stroke="#78350F" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

        {/* Acoustic Center Tuning Spot */}
        <circle cx="160" cy="105" r="16" fill="#171513" opacity="0.85" />
        <circle cx="160" cy="105" r="18" fill="none" stroke="#C85A17" strokeWidth="1.5" />

        {/* Stamped Authentic Miraj Hallmark */}
        <text x="160" y="80" textAnchor="middle" fill="#78350F" fontSize="7" fontWeight="bold" fontFamily="serif" letterSpacing="1">
          MIRAJ TREATED LEATHER
        </text>
      </svg>
    );
  }

  // 6. FORGED S-HOOKS & HARDWARE & ROPES
  if (normalized.includes("hook") || normalized.includes("hardware") || normalized.includes("nut") || normalized.includes("rope") || normalized.includes("barrel")) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="forgedSteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="40%" stopColor="#94A3B8" />
            <stop offset="80%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
        </defs>

        <ellipse cx="160" cy="190" rx="75" ry="10" fill="#000000" fillOpacity="0.2" />

        {/* Coiled White Cotton-Nylon Rope */}
        <ellipse cx="160" cy="140" rx="70" ry="25" fill="#FAF7F2" stroke="#D6CCBE" strokeWidth="12" />
        <ellipse cx="160" cy="138" rx="60" ry="20" fill="none" stroke="#A8A29E" strokeWidth="4" strokeDasharray="4 4" />

        {/* Prominent Forged Heavy Steel S-Hook */}
        <path
          d="M140,55 C120,40 120,80 155,95 C190,110 190,150 165,160 C145,170 135,150 140,140"
          stroke="url(#forgedSteel)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M140,55 C120,40 120,80 155,95 C190,110 190,150 165,160 C145,170 135,150 140,140"
          stroke="#D4AF37"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="10 5"
          opacity="0.8"
        />

        {/* High-Tensile Hex Bolt */}
        <polygon points="185,55 195,50 205,55 205,70 195,75 185,70" fill="#D4AF37" stroke="#171513" strokeWidth="2" />
        <rect x="192" y="75" width="6" height="25" fill="#E2E8F0" stroke="#171513" strokeWidth="1.5" />
      </svg>
    );
  }

  // 7. BRASS TAL / CYMBALS (झांज) & TIPRU
  if (normalized.includes("tal") || normalized.includes("tipru") || normalized.includes("stick") || normalized.includes("chob")) {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="cymbalsGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="40%" stopColor="#E6B325" />
            <stop offset="80%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        <ellipse cx="160" cy="190" rx="80" ry="10" fill="#000000" fillOpacity="0.2" />

        {/* Back Cymbal (Left) */}
        <g transform="translate(115, 110) rotate(-15)">
          <circle cx="0" cy="0" r="50" fill="url(#cymbalsGold)" stroke="#78350F" strokeWidth="2" />
          <circle cx="0" cy="0" r="16" fill="#F59E0B" stroke="#451A03" strokeWidth="2" />
          {/* Red Cotton Hand Strap */}
          <path d="M0,0 Q-15,-35 -30,-45" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Front Cymbal (Right) */}
        <g transform="translate(195, 120) rotate(15)">
          <circle cx="0" cy="0" r="50" fill="url(#cymbalsGold)" stroke="#78350F" strokeWidth="2" />
          <circle cx="0" cy="0" r="16" fill="#F59E0B" stroke="#451A03" strokeWidth="2" />
          {/* Red Cotton Hand Strap */}
          <path d="M0,0 Q15,-35 30,-45" stroke="#DC2626" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Acoustic Sparkles between cymbals */}
        <g transform="translate(155, 105)">
          <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#D4AF37" />
        </g>
      </svg>
    );
  }

  // 8. DHOL MASALA (Acoustic Tuning Paste)
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="potClay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3F3F46" />
          <stop offset="50%" stopColor="#27272A" />
          <stop offset="100%" stopColor="#18181B" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="190" rx="60" ry="10" fill="#000000" fillOpacity="0.25" />

      {/* Traditional Apothecary / Clay Pot Body */}
      <path
        d="M110,90 C100,120 100,170 120,180 C140,185 180,185 200,180 C220,170 220,120 210,90 Z"
        fill="url(#potClay)"
        stroke="#18181B"
        strokeWidth="3"
      />

      {/* Jar Neck and Rim */}
      <ellipse cx="160" cy="90" rx="50" ry="14" fill="#C85A17" stroke="#7C2D12" strokeWidth="3" />
      <ellipse cx="160" cy="88" rx="42" ry="10" fill="#D4AF37" />

      {/* Gold Foil Emblem Label */}
      <rect x="125" y="115" width="70" height="42" rx="4" fill="#FAF7F2" stroke="#D4AF37" strokeWidth="1.5" />
      <text x="160" y="132" textAnchor="middle" fill="#C85A17" fontSize="8" fontWeight="bold" fontFamily="serif">
        मिरज स्पेशल
      </text>
      <text x="160" y="145" textAnchor="middle" fill="#171513" fontSize="9" fontWeight="bold" fontFamily="serif">
        ढोल मसाला
      </text>
      <text x="160" y="153" textAnchor="middle" fill="#78716C" fontSize="5" fontWeight="semibold">
        ACOUSTIC TUNING PASTE
      </text>

      {/* Natural Paste Swirl Accent */}
      <path d="M125,75 Q160,65 195,75" stroke="#171513" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
