"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function Experience() {
  const [vesselChoice, setVesselChoice] = useState<"box" | "pouch">("box")
  const [isGift, setIsGift] = useState(false)

  return (
    <section className="py-24 md:py-32 bg-[#d9d6b8]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4 block">The Dorra Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01271A] font-light tracking-wide">
            How your piece arrives
          </h2>
          <p className="text-lg text-[#01271A]/60 font-light mt-6 max-w-2xl mx-auto">
            We believe the moment of receiving is part of the piece itself. Every Dorra order is prepared 
            with the same care as the jewelry inside it.
          </p>
        </div>

        {/* Three Experience Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* The Vessel */}
          <div className="text-center p-8 bg-[#EDEACB] border border-[#AF976A]/20">
            <span className="text-3xl text-[#AF976A] block mb-4">◈</span>
            <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase block mb-4">The Vessel</span>
            <h3 className="text-xl text-[#01271A] font-light tracking-wide mb-4">
              How would you like it presented?
            </h3>
            <p className="text-sm text-[#01271A]/60 font-light leading-relaxed mb-6">
              When you order, you choose: a rigid gift box or a handstitched fabric pouch. 
              Both are made to keep. Neither gets thrown away.
            </p>
            
            {/* Vessel Options */}
            <div className="space-y-3">
              <button
                onClick={() => setVesselChoice("box")}
                className={`w-full flex items-center gap-3 p-4 border transition-all ${
                  vesselChoice === "box" 
                    ? "border-[#01271A] bg-[#01271A]/5" 
                    : "border-[#AF976A]/30 hover:border-[#AF976A]"
                }`}
              >
                <div className={`w-5 h-5 border flex items-center justify-center ${
                  vesselChoice === "box" ? "border-[#01271A] bg-[#01271A]" : "border-[#AF976A]/50"
                }`}>
                  {vesselChoice === "box" && <Check className="size-3 text-[#EDEACB]" />}
                </div>
                <span className="text-sm text-[#01271A]/80 font-light text-left">
                  A rigid gift box — structured, elegant, reusable
                </span>
              </button>
              
              <button
                onClick={() => setVesselChoice("pouch")}
                className={`w-full flex items-center gap-3 p-4 border transition-all ${
                  vesselChoice === "pouch" 
                    ? "border-[#01271A] bg-[#01271A]/5" 
                    : "border-[#AF976A]/30 hover:border-[#AF976A]"
                }`}
              >
                <div className={`w-5 h-5 border flex items-center justify-center ${
                  vesselChoice === "pouch" ? "border-[#01271A] bg-[#01271A]" : "border-[#AF976A]/50"
                }`}>
                  {vesselChoice === "pouch" && <Check className="size-3 text-[#EDEACB]" />}
                </div>
                <span className="text-sm text-[#01271A]/80 font-light text-left">
                  A fabric pouch — soft, tactile, intimate
                </span>
              </button>
            </div>

            {/* Gift Option */}
            <div className="mt-6 pt-6 border-t border-[#AF976A]/20">
              <button
                onClick={() => setIsGift(!isGift)}
                className="flex items-center gap-3 mx-auto"
              >
                <div className={`w-5 h-5 border flex items-center justify-center ${
                  isGift ? "border-[#01271A] bg-[#01271A]" : "border-[#AF976A]/50"
                }`}>
                  {isGift && <Check className="size-3 text-[#EDEACB]" />}
                </div>
                <span className="text-sm text-[#01271A]/70 font-light">Is this a gift?</span>
              </button>
              {isGift && (
                <p className="text-xs text-[#01271A]/50 font-light mt-3">
                  Include a handwritten note from you to the recipient. Simply mention it when you reach out.
                </p>
              )}
            </div>
          </div>

          {/* The Paper */}
          <div className="text-center p-8 bg-[#EDEACB] border border-[#AF976A]/20">
            <span className="text-3xl text-[#AF976A] block mb-4">◉</span>
            <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase block mb-4">The Paper</span>
            <h3 className="text-xl text-[#01271A] font-light tracking-wide mb-4">
              Your stone&apos;s story, in your hands
            </h3>
            <p className="text-sm text-[#01271A]/60 font-light leading-relaxed mb-6">
              Every order includes a printed card listing every material in your piece — 
              the metal, the stone, its origin — and what each one carries energetically.
            </p>
            
            <div className="text-left space-y-2">
              <p className="text-xs text-[#01271A]/50 font-light uppercase tracking-wider mb-3">
                What your energy card includes
              </p>
              <div className="flex items-start gap-2 text-sm text-[#01271A]/70 font-light">
                <span className="text-[#AF976A]">◇</span>
                <span>The name of every stone and metal used</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#01271A]/70 font-light">
                <span className="text-[#AF976A]">◇</span>
                <span>Geographic origin of each material</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#01271A]/70 font-light">
                <span className="text-[#AF976A]">◇</span>
                <span>Energetic properties and ancient associations</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#01271A]/70 font-light">
                <span className="text-[#AF976A]">◇</span>
                <span>How to cleanse and recharge your stone</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#01271A]/70 font-light">
                <span className="text-[#AF976A]">◇</span>
                <span>Care instructions for the copper or metal</span>
              </div>
            </div>
          </div>

          {/* The Intention */}
          <div className="text-center p-8 bg-[#EDEACB] border border-[#AF976A]/20">
            <span className="text-3xl text-[#AF976A] block mb-4">◇</span>
            <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase block mb-4">The Intention</span>
            <h3 className="text-xl text-[#01271A] font-light tracking-wide mb-4">
              Not a product. A practice.
            </h3>
            <p className="text-sm text-[#01271A]/60 font-light leading-relaxed">
              We encourage you to hold the piece before wearing it. Read the card. Know what you&apos;re putting 
              on your body. Dorra is not jewelry you wear by accident — it&apos;s something you choose deliberately, 
              with knowledge of what the earth put into it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
