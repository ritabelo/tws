import type { Metadata } from "next";
import { Mulish, Poiret_One, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const mulish = Mulish({ 
  subsets: ["latin"], 
  variable: "--font-mulish",
  display: 'swap',
});

const poiretOne = Poiret_One({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-poiret-one",
  display: 'swap',
});

const mono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Wild Slice | Handmade Dog Nutrition",
  description: "Handmade dog nutrition from Lisboa. Natural feeding made simple. Petiscos naturais e caldo de ossos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mulish.variable} ${poiretOne.variable} ${mono.variable} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
