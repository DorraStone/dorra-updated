"use client"

const pillars = [
  {
    symbol: "◈",
    title: "Raw Earth",
    description: "Every stone is chosen from nature itself — unpolished, real, and alive with millennia of history beneath the surface."
  },
  {
    symbol: "◉",
    title: "Human Hands",
    description: "No machines touch a Dorra piece. Each bracelet and necklace is shaped, wound, and finished by a single artisan."
  },
  {
    symbol: "◇",
    title: "Living Metal",
    description: "We begin with copper — a metal that breathes, that darkens and brightens with your skin. Silver and gold await."
  }
]

export function Pillars() {
  return (
    <section className="py-24 md:py-32 bg-[#01271A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4 block">What We Believe</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#EDEACB] font-light tracking-wide">
            Three Pillars of Dorra
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              {/* Symbol */}
              <div className="text-4xl text-[#AF976A] mb-6">{pillar.symbol}</div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl text-[#EDEACB] font-light tracking-wide mb-4">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#EDEACB]/60 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
