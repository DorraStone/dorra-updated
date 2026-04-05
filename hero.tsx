"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#01271A]"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #AF976A 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        {/* Location Tag */}
        <div className="mb-8">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">Cairo, Egypt</span>
        </div>

        {/* Logo */}
        <div className="mb-10">
          <div className="relative w-80 h-40 md:w-[420px] md:h-52 lg:w-[540px] lg:h-72 mx-auto">
            <Image
              src="/logo.png"
              alt="Dorra - دُرة"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#EDEACB] font-light tracking-wide mb-4">
          Jewelry with meaning, made by hand
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-[#EDEACB]/70 font-light max-w-2xl mx-auto mb-14 leading-relaxed">
          Explore the story, discover the collections, or create a piece of your own.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Link href="/women">
            <Button className="bg-[#AF976A] text-[#01271A] hover:bg-[#EDEACB] px-10 py-6 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none">
              View Collections
            </Button>
          </Link>

          <Link href="/customization">
            <Button
              variant="outline"
              className="border-[#AF976A] text-[#EDEACB] hover:bg-[#AF976A]/10 px-10 py-6 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none bg-transparent"
            >
              Customization
            </Button>
          </Link>

          <Link href="/story">
            <Button
              variant="outline"
              className="border-[#AF976A] text-[#EDEACB] hover:bg-[#AF976A]/10 px-10 py-6 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-none bg-transparent"
            >
              Our Story
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EDEACB] to-transparent" />
    </section>
  )
}