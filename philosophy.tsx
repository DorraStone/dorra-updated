"use client"

export function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-[#EDEACB]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">Our Philosophy</span>
        </div>

        {/* Main Quote */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01271A] font-light tracking-wide leading-snug text-center text-balance mb-12">
          Nature is the original artisan.
          <br />
          <span className="text-[#AF976A]">We are her hands.</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed text-center max-w-3xl mx-auto">
          Dorra was born from the belief that the earth holds more beauty than any factory ever could. 
          Each piece carries a stone chosen for its meaning, set in copper shaped by a single pair of hands. 
          No molds. No machines. No shortcuts.
        </p>
      </div>
    </section>
  )
}
