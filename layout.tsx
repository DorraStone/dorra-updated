import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Dorra | دُرة - Handcrafted Egyptian Jewelry',
  description: 'Discover Dorra, a luxury Egyptian jewelry brand inspired by natural stones, copper artistry, and the quiet beauty of nature. Handcrafted pieces that tell a story.',
  keywords: ['jewelry', 'Egyptian jewelry', 'handcrafted', 'copper jewelry', 'gemstones', 'luxury jewelry', 'Dorra'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#01271A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${greatVibes.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
