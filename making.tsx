"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Making() {
  return (
    <section className="py-24 md:py-32 bg-[#EDEACB]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">The Making</span>
        </div>

        {/* Main Quote */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01271A] font-light tracking-wide leading-snug text-center text-balance mb-12">
          Made by one pair of hands.
          <br />
          <span className="text-[#AF976A]">Worn by one person at a time.</span>
        </h2>

        {/* Content */}
        <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Copper is hammered. Wire is wound. Stones are set. It takes hours, sometimes days, 
          to complete a single piece. That is what makes it yours.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Link href="#customize">
            <Button 
              variant="outline"
              className="border-[#01271A] text-[#01271A] hover:bg-[#01271A] hover:text-[#EDEACB] px-10 py-6 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none bg-transparent"
            >
              See the Craft
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
