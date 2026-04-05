"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowRight } from "lucide-react"
import { products } from "@/lib/products"
import { useCart, type Product } from "@/lib/cart-context"
import { ProductModal } from "./product-modal"

const categories = [
  {
    id: "for-her",
    symbol: "?",
    title: "View Women",
    titleAr: "???",
    description: "Bracelets and necklaces crafted for the woman who knows what she carries.",
    type: "COLLECTION"
  },
  {
    id: "for-him",
    symbol: "?",
    title: "View Men",
    titleAr: "??",
    description: "Bracelets built for men who wear the earth with quiet confidence. Tiger's Eye and Black Onyx on copper.",
    type: "COLLECTION"
  },
  {
    id: "coming-soon",
    symbol: "?",
    title: "View Preview",
    titleAr: "??????",
    description: "Rings, chokers, arm cuffs, and more. We don't rush what cannot be rushed.",
    type: "FORTHCOMING"
  }
]

export function Collections() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { addItem } = useCart()

  return (
    <section id="collections" className="py-24 md:py-32 bg-[#EDEACB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase mb-4 block">Our Pieces</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#01271A] font-light tracking-wide">
            The Collections
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group p-8 border border-[#AF976A]/30 bg-[#EDEACB] hover:border-[#01271A] transition-all duration-500"
            >
              {/* Type Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase">{category.type}</span>
                <span className="text-[#AF976A]">{category.symbol}</span>
                <span className="text-xs text-[#01271A]/40 font-light">{category.titleAr}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl text-[#01271A] font-light tracking-wide mb-4">
                {category.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#01271A]/60 font-light leading-relaxed mb-6">
                {category.description}
              </p>
              
              {/* Link */}
              <Link 
                href={category.id === "for-her" ? "/women" : category.id === "for-him" ? "/men" : "/coming-soon"}
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#01271A] hover:text-[#AF976A] transition-colors group-hover:gap-3"
              >
                View Collection <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#d9d6b8] cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#01271A]/0 group-hover:bg-[#01271A]/30 transition-all duration-500 flex items-center justify-center">
                  <span className="text-[#EDEACB] text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#EDEACB]/50 px-6 py-3">
                    View Details
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="text-center">
                <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase block mb-2">{product.category}</span>
                <h3 
                  className="text-xl text-[#01271A] font-light tracking-wide mb-2 cursor-pointer hover:text-[#AF976A] transition-colors"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.name}
                </h3>
                <p className="text-sm text-[#01271A]/50 font-light mb-3">{product.stone}</p>
                <p className="text-lg text-[#01271A] font-light mb-4">EGP {product.price.toLocaleString()}</p>
                
                {/* Add to Cart Button */}
                <button
                  onClick={() => addItem(product)}
                  className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#01271A] hover:text-[#AF976A] transition-colors py-2 border-b border-transparent hover:border-[#AF976A]"
                >
                  <ShoppingBag className="size-4" />
                  Add to Cart

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}

