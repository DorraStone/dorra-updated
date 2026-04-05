"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#01271A]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#AF976A]" />
            <span className="text-xs tracking-[0.4em] text-[#AF976A] uppercase">Get in Touch</span>
            <div className="w-12 h-px bg-[#AF976A]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#EDEACB] font-light tracking-wide">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg text-[#EDEACB]/70 font-light leading-relaxed">
              We would love to hear from you. Whether you have questions about our pieces, 
              need guidance on customization, or simply want to connect—reach out.
            </p>

            <div className="space-y-6">
              <a 
                href="tel:+201234567890" 
                className="flex items-center gap-4 text-[#EDEACB]/80 hover:text-[#AF976A] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-[#AF976A]/30 flex items-center justify-center group-hover:border-[#AF976A] transition-colors">
                  <Phone className="size-5 text-[#AF976A]" />
                </div>
                <span className="text-lg font-light">+20 123 456 7890</span>
              </a>

              <a 
                href="mailto:hello@dorra.jewelry" 
                className="flex items-center gap-4 text-[#EDEACB]/80 hover:text-[#AF976A] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-[#AF976A]/30 flex items-center justify-center group-hover:border-[#AF976A] transition-colors">
                  <Mail className="size-5 text-[#AF976A]" />
                </div>
                <span className="text-lg font-light">hello@dorra.jewelry</span>
              </a>

              <a 
                href="https://instagram.com/dorra.jewelry" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#EDEACB]/80 hover:text-[#AF976A] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-[#AF976A]/30 flex items-center justify-center group-hover:border-[#AF976A] transition-colors">
                  <Instagram className="size-5 text-[#AF976A]" />
                </div>
                <span className="text-lg font-light">@dorra.jewelry</span>
              </a>

              <div className="flex items-start gap-4 text-[#EDEACB]/80">
                <div className="w-12 h-12 rounded-full border border-[#AF976A]/30 flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-[#AF976A]" />
                </div>
                <div>
                  <span className="text-lg font-light block">Cairo, Egypt</span>
                  <span className="text-sm text-[#EDEACB]/50 font-light">Atelier visits by appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 border border-[#AF976A]/20 bg-[#01271A]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#EDEACB]/60 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-[#AF976A]/30 focus:border-[#AF976A] outline-none text-[#EDEACB] font-light transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#EDEACB]/60 uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-transparent border border-[#AF976A]/30 focus:border-[#AF976A] outline-none text-[#EDEACB] font-light transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] text-[#EDEACB]/60 uppercase mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-transparent border border-[#AF976A]/30 focus:border-[#AF976A] outline-none text-[#EDEACB] font-light transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-[0.2em] text-[#EDEACB]/60 uppercase mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-[#AF976A]/30 focus:border-[#AF976A] outline-none text-[#EDEACB] font-light resize-none transition-colors"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#AF976A] text-[#01271A] hover:bg-[#EDEACB] py-6 text-sm tracking-[0.2em] uppercase font-medium rounded-none transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="size-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
