import React from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES_VISUAL = [
  {
    id: "dhol",
    title: "Puneri Dhols",
    href: "/catalogue?category=dhol",
    image: "/images/puneri-dhol-studio.jpg",
  },
  {
    id: "tasha",
    title: "Brass Tashas",
    href: "/catalogue?category=tasha",
    image: "/images/brass-tasha-studio.jpg",
  },
  {
    id: "traditional",
    title: "Folk Percussion",
    href: "/catalogue?category=traditional",
    image: "/images/folk-sambal-studio.jpg",
  },
  {
    id: "plates",
    title: "Cured Plates & Parts",
    href: "/catalogue?category=plates",
    image: "/images/cured-plates-studio.jpg",
  },
];

export default function CategoryVisualGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* 4 Square Photo-Style Category Cards in a Row (Screenshot 3 Reference) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {CATEGORIES_VISUAL.map((cat) => (
          <Link
            key={cat.id}
            href={cat.href}
            className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
          >
            {/* Square Frame with Rich Photography matching Screen 3 */}
            <div className="relative w-full aspect-square overflow-hidden bg-[#200508] shadow-sm group-hover:shadow-lg transition-all duration-300">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>

            {/* Title Underneath (P-TAL Terracotta Style: Title Case, Clean, Uncluttered) */}
            <div>
              <h3 className="font-aktiv font-normal sm:font-medium text-base sm:text-lg lg:text-xl text-[#96281B] group-hover:text-[#7A1E13] transition-colors">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
