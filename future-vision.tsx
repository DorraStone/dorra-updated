"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FutureVision() {
  return (
    <section className="py-24 md:py-32 bg-[#01271A]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">The Road Ahead</span>
        </div>

        {/* Main Quote */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#EDEACB] font-light tracking-wide leading-snug text-center text-balance mb-12">
          We are just beginning
        </h2>

        {/* Content */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-[#EDEACB]/70 font-light leading-relaxed">
            Today, Dorra works in copper. Tomorrow, we will work in silver. One day, in gold. 
            Each metal will bring new possibilities — new settings, new stones, new customers 
            who have been waiting for jewelry that means something.
          </p>

          <p className="text-lg md:text-xl text-[#EDEACB]/70 font-light leading-relaxed">
            But the promise will never change: every piece will be handmade, 
            every stone will be real, every design will begin with the earth.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="#contact">
            <Button 
              className="bg-[#AF976A] text-[#01271A] hover:bg-[#EDEACB] px-10 py-6 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
