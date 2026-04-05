"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stones = [
  {
    name: "Pearl",
    nameAr: "لؤلؤ",
    image: "/stones/pearl.jpg",
    meaning: "Purity & wisdom",
  },
  {
    name: "Turquoise",
    nameAr: "فيروز",
    image: "/stones/fairouz.jpg",
    meaning: "Protection & peace",
  },
  {
    name: "Tiger's Eye",
    nameAr: "عين النمر",
    image: "/stones/tiger-eye.jpg",
    meaning: "Courage & clarity",
  },
  {
    name: "Amethyst",
    nameAr: "جمشت",
    image: "/stones/amethyst.jpg",
    meaning: "Calm & intuition",
  },
  {
    name: "Black Onyx",
    nameAr: "عقيق أسود",
    image: "/stones/onyx.jpg",
    meaning: "Strength & focus",
  },
  {
    name: "Agate",
    nameAr: "عقيق",
    image: "/stones/ruby.jpg",
    meaning: "Balance & endurance",
  },
]

export function Stones() {
  return (
    <section id="stones" className="py-24 md:py-32 bg-[#01271A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4 block">The Language of Stones</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#EDEACB] font-light tracking-wide leading-snug text-balance">
            Every stone carries
            <br />
            <span className="text-[#AF976A]">a living story</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-[#EDEACB]/60 font-light text-center max-w-2xl mx-auto mb-16">
          We don&apos;t choose stones for their beauty alone. We choose them for their meaning — 
          the ancient knowledge held within each crystal, each mineral formed across millions of years.
        </p>

        {/* CTA */}
        <div className="text-center mb-16">
          <Link href="#customize">
            <Button 
              variant="outline"
              className="border-[#AF976A] text-[#EDEACB] hover:bg-[#AF976A]/10 px-8 py-5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none bg-transparent"
            >
              Discover the Stones
            </Button>
          </Link>
        </div>

        {/* Stones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stones.map((stone) => (
            <div
              key={stone.name}
              className="group text-center"
            >
              {/* Stone Image */}
              <div className="relative aspect-square overflow-hidden mb-4 mx-auto w-full border border-[#AF976A]/20 group-hover:border-[#AF976A] transition-all duration-500">
                <Image
                  src={stone.image}
                  alt={stone.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Info */}
              <h4 className="text-sm text-[#EDEACB] font-light tracking-wide mb-1">
                {stone.name}
              </h4>
              <span className="text-xs text-[#AF976A] block mb-2">{stone.nameAr}</span>
              <p className="text-xs text-[#EDEACB]/50 font-light">
                {stone.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
