{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Navbar \} from "@/components/navbar"\
import \{ Footer \} from "@/components/footer"\
import Image from "next/image"\
import \{ products \} from "@/lib/products"\
\
export default function MenPage() \{\
  const menProducts = products.filter((product) => product.gender === "men")\
\
  return (\
    <main className="min-h-screen bg-[#EDEACB] text-[#01271A]">\
      <Navbar />\
\
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">\
        <p className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4">Dorra</p>\
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">\
          Men\
        </h1>\
        <p className="text-[#01271A]/70 max-w-2xl leading-relaxed mb-12">\
          Bracelets built for men who wear the earth with quiet confidence.\
        </p>\
\
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">\
          \{menProducts.map((product) => (\
            <div key=\{product.id\} className="group">\
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#d9d6b8]">\
                <Image\
                  src=\{product.image\}\
                  alt=\{product.name\}\
                  fill\
                  className="object-cover transition-all duration-700 group-hover:scale-105"\
                />\
              </div>\
\
              <div className="text-center">\
                <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase block mb-2">\
                  \{product.category\}\
                </span>\
                <h3 className="text-xl text-[#01271A] font-light tracking-wide mb-2">\
                  \{product.name\}\
                </h3>\
                <p className="text-sm text-[#01271A]/50 font-light mb-3">\{product.stone\}</p>\
                <p className="text-lg text-[#01271A] font-light mb-4">\
                  EGP \{product.price.toLocaleString()\}\
                </p>\
                <button className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#01271A] hover:text-[#AF976A] transition-colors py-2 border-b border-transparent hover:border-[#AF976A]">\
                  Add to Cart\
                </button>\
              </div>\
            </div>\
          ))\}\
        </div>\
      </section>\
\
      <Footer />\
    </main>\
  )\
\}}