import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import MobileBottomBar from "@/components/MobileBottomBar";
import CursorFollower from "@/components/CursorFollower";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caltech Design Studio — Interiors & Heritage Restoration | Kolkata",
  description:
    "Caltech Design Studio is a Kolkata-based atelier crafting refined residential, commercial and hospitality interiors, and restoring heritage buildings across India.",
  keywords: [
    "interior design Kolkata",
    "heritage restoration",
    "Caltech Design Studio",
    "luxury interiors",
    "conservation architecture",
    "restoration of heritage buildings",
  ],
  openGraph: {
    title: "Caltech Design Studio",
    description:
      "Refined interiors. Heritage, restored. A Kolkata atelier shaping spaces with craft and conservation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink-900 text-bone-50 selection:bg-gold-400 selection:text-ink-900">
        <SmoothScroll />
        <CursorFollower />
        <Nav />
        <main>{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
