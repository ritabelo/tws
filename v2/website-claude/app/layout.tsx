import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const poiretOne = localFont({
  src: '../public/fonts/PoiretOne-Regular.ttf',
  variable: '--font-poiret-one',
  display: 'swap',
})

const mulish = localFont({
  src: '../public/fonts/Mulish-VariableFont_wght.ttf',
  variable: '--font-mulish',
  display: 'swap',
})

const suseMono = localFont({
  src: '../public/fonts/SUSEMono-Regular.ttf',
  variable: '--font-suse-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Wild Slice — Handmade Dog Nutrition from Lisboa',
  description:
    'Small-batch, human-grade snacks and bone broth for dogs. From the butcher. For your dog.',
  openGraph: {
    title: 'The Wild Slice',
    description: 'Handmade dog nutrition from Lisboa',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${poiretOne.variable} ${mulish.variable} ${suseMono.variable}`}
    >
      <body className="min-h-screen bg-warm-white text-charcoal">
        {children}
      </body>
    </html>
  )
}
