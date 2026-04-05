"use client"

import Image from "next/image"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#01271A]/60 backdrop-blur-sm z-50 transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-[#EDEACB] z-50 shadow-2xl transition-transform duration-500 ease-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#AF976A]/30">
          <div className="flex items-center gap-3">
            <ShoppingBag className="size-5 text-[#01271A]" />
            <h2 className="text-xl text-[#01271A] font-medium tracking-wide">Your Selection</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[#01271A]/10 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="size-5 text-[#01271A]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="size-16 text-[#AF976A]/40 mb-4" />
              <p className="text-lg text-[#01271A]/70 font-light">Your collection awaits</p>
              <p className="text-sm text-[#01271A]/50 font-light mt-2">
                Begin your journey with a piece that speaks to you.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-[#d9d6b8]/50 rounded-xl">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base text-[#01271A] font-medium truncate">{item.name}</h3>
                    <p className="text-sm text-[#01271A]/60 font-light">{item.stone}</p>
                    <p className="text-sm text-[#AF976A] font-medium mt-1">EGP {item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-[#01271A]/10 rounded transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="size-4 text-[#01271A]" />
                      </button>
                      <span className="text-sm text-[#01271A] font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-[#01271A]/10 rounded transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="size-4 text-[#01271A]" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 hover:bg-red-100 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="size-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#AF976A]/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-base text-[#01271A]/70 font-light">Subtotal</span>
              <span className="text-xl text-[#01271A] font-medium">EGP {totalPrice.toLocaleString()}</span>
            </div>
            <p className="text-xs text-[#01271A]/50 font-light text-center">
              Shipping and packaging calculated at checkout
            </p>
            <Button className="w-full bg-[#01271A] text-[#EDEACB] hover:bg-[#02382a] py-6 text-sm tracking-widest uppercase font-medium rounded-full">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
