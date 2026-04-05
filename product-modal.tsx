"use client"

import Image from "next/image"
import { X } from "lucide-react"
import { useCart, type Product } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addItem } = useCart()

  if (!product) return null

  const handleAddToCart = () => {
    addItem(product)
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#01271A]/70 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-[#EDEACB] z-50 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden flex flex-col",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#EDEACB]/90 hover:bg-[#EDEACB] rounded-full transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="size-5 text-[#01271A]" />
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-xs tracking-[0.3em] text-[#AF976A] uppercase">{product.category}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl text-[#01271A] font-light tracking-wide mb-4">
              {product.name}
            </h2>
            
            <p className="text-base md:text-lg text-[#01271A]/70 font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Details */}
            <div className="space-y-3 mb-8 py-6 border-y border-[#AF976A]/20">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#01271A]/60 font-light tracking-wide">Stone</span>
                <span className="text-sm text-[#01271A] font-medium">{product.stone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#01271A]/60 font-light tracking-wide">Metal</span>
                <span className="text-sm text-[#01271A] font-medium">{product.metal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#01271A]/60 font-light tracking-wide">Crafted</span>
                <span className="text-sm text-[#01271A] font-medium">Handmade in Egypt</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl text-[#01271A] font-light">EGP {product.price.toLocaleString()}</span>
            </div>

            {/* Add to Cart */}
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-[#01271A] text-[#EDEACB] hover:bg-[#02382a] py-6 text-sm tracking-widest uppercase font-medium rounded-full transition-all duration-300 hover:shadow-xl"
            >
              Add to Collection
            </Button>

            <p className="text-xs text-[#01271A]/50 font-light text-center mt-4">
              Each piece is crafted upon order. Please allow 5-7 business days.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
