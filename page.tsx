{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ Navbar \} from "@/components/navbar"\
import \{ Footer \} from "@/components/footer"\
\
export default function StoryPage() \{\
  return (\
    <main className="min-h-screen bg-[#EDEACB] text-[#01271A]">\
      <Navbar />\
\
      <section className="pt-32 pb-20 px-6 lg:px-8 max-w-5xl mx-auto">\
        <p className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4">Dorra</p>\
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">\
          Our Story\
        </h1>\
\
        <div className="space-y-8 text-[#01271A]/75 leading-relaxed text-base md:text-lg">\
          <p>\
            Dorra is rooted in the idea that jewelry can carry meaning, memory, and presence.\
            Inspired by the pearl and its journey, the brand reflects patience, rarity, and beauty\
            shaped over time.\
          </p>\
\
          <p>\
            With an Egyptian soul and a handcrafted approach, Dorra brings together real stones,\
            copper artistry, and designs that begin with the earth. Each piece is made to feel\
            personal, thoughtful, and lasting.\
          </p>\
\
          <blockquote className="border-l-2 border-[#AF976A] pl-6 italic text-[#01271A]">\
            \'93We are just beginning. Today, Dorra works in copper. Tomorrow, we will work in silver.\
            One day, in gold. Each metal will bring new possibilities \'97 new settings, new stones,\
            new customers who have been waiting for jewelry that means something.\
            <br /><br />\
            But the promise will never change: every piece will be handmade, every stone will be\
            real, every design will begin with the earth.\'94\
          </blockquote>\
        </div>\
      </section>\
\
      <Footer />\
    </main>\
  )\
\}}