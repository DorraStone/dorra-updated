"use client"

export function BrandStory() {
  return (
    <section id="story" className="py-24 md:py-32 bg-[#EDEACB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section: Why Dorra */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">Why Dorra</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01271A] font-light tracking-wide text-center leading-snug mb-12 text-balance">
            The meaning
            <br />
            <span className="text-[#AF976A]">of the name</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed">
              In Arabic, <span className="text-[#01271A] font-medium">دُرة (Dorra)</span> means <span className="text-[#AF976A] font-medium">pearl</span>. 
              The pearl is one of nature&apos;s most profound creations — born not from stone or earth, 
              but from a living creature&apos;s patient response to irritation. A grain of sand becomes, 
              over time, something luminous.
            </p>
            
            <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed">
              We chose this name because it speaks to transformation — both in the materials we work with, 
              and in the people who wear them. And because we are Egyptian, rooted in a land where pearls 
              from the Red Sea have been treasured since the age of the pharaohs.
            </p>
            
            <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed">
              Pearl is also one of our founding stones — used in our earliest bracelets and necklaces, 
              a nod to the name, and to the sea that borders our country.
            </p>
          </div>
          
          {/* Pearl Badge */}
          <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-[#AF976A]/20 max-w-xs mx-auto">
            <span className="text-4xl text-[#AF976A] font-serif">دُرة</span>
            <div className="text-left">
              <span className="text-sm text-[#01271A] font-light block">Pearl</span>
              <span className="text-xs text-[#01271A]/50 font-light">Arabic · Egyptian Heritage</span>
            </div>
          </div>
        </div>

        {/* Section: Egyptian Heritage */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">Cairo, Egypt</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#01271A] font-light tracking-wide text-center leading-snug mb-12 text-balance">
            Born from one of the oldest
            <br />
            <span className="text-[#AF976A]">jewelry-making civilizations on earth</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed">
              Ancient Egyptians wore lapis from Afghanistan, turquoise from the Sinai, coral from the Red Sea, 
              and gold from Nubian mines. They understood that the materials of the earth were sacred, and that 
              wearing them was a form of communication with something larger than the self.
            </p>
            
            <p className="text-lg md:text-xl text-[#01271A]/70 font-light leading-relaxed">
              Dorra does not claim to be ancient. But we are made in Egypt, by Egyptian hands, from stones 
              that have traveled to this land for thousands of years. We are a continuation of something 
              that began long before us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
