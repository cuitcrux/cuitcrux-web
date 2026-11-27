import type { Metadata, Viewport } from "next";
import { Playfair_Display, Caveat, Inter } from "next/font/google";
import "./globals.css";
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = { title: "A little something for you ❤️", description: "I made something for you." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#FFE4EC" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${serif.variable} ${hand.variable} ${sans.variable}`}><body>{children}</body></html>;
}
