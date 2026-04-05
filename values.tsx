"use client"

const values = [
  {
    title: "Real Materials Only",
    titleAr: "مواد حقيقية فقط",
    description: "No synthetic stones. No plated metals that wear away. Every material we use is what it claims to be — raw, honest, and sourced with intention."
  },
  {
    title: "One Artisan. One Piece.",
    titleAr: "يد واحدة. قطعة واحدة.",
    description: "Each piece is made by a single artisan from beginning to end. No assembly line. No division of labor. One person holds the responsibility of the whole."
  },
  {
    title: "Nature as Teacher",
    titleAr: "الطبيعة كمعلم",
    description: "We don't design against nature — we follow it. The stone's shape suggests the setting. The copper's behavior teaches patience. The earth sets the aesthetic."
  },
  {
    title: "Meaning Before Beauty",
    titleAr: "المعنى قبل الجمال",
    description: "Every stone we choose carries an intention — a specific history, a specific energy. We tell that story in every piece, so the wearer carries something that means something."
  }
]

export function Values() {
  return (
    <section className="py-24 md:py-32 bg-[#01271A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4 block">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#EDEACB] font-light tracking-wide">
            Our Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value) => (
            <div 
              key={value.title} 
              className="p-8 border border-[#AF976A]/20 hover:border-[#AF976A]/40 transition-all duration-500"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl text-[#EDEACB] font-light tracking-wide mb-2">
                {value.title}
              </h3>
              
              {/* Arabic Title */}
              <span className="text-sm text-[#AF976A] block mb-4">{value.titleAr}</span>
              
              {/* Description */}
              <p className="text-[#EDEACB]/60 font-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
