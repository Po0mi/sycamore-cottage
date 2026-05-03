import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import "./globals.css";
import "@/styles/global.scss";
import { Analytics } from "@vercel/analytics/next";

// Switzer Font - All 18 variants
const switzer = localFont({
  src: [
    // Thin (100)
    {
      path: "./fonts/Switzer-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    // Extra Light (200)
    {
      path: "./fonts/Switzer-Extralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-ExtralightItalic.otf",
      weight: "200",
      style: "italic",
    },
    // Light (300)
    {
      path: "./fonts/Switzer-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    // Regular (400)
    {
      path: "./fonts/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Italic.otf",
      weight: "400",
      style: "italic",
    },
    // Medium (500)
    {
      path: "./fonts/Switzer-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    // Semi Bold (600)
    {
      path: "./fonts/Switzer-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    // Bold (700)
    {
      path: "./fonts/Switzer-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    // Extra Bold (800)
    {
      path: "./fonts/Switzer-Extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-ExtraboldItalic.otf",
      weight: "800",
      style: "italic",
    },
    // Black (900)
    {
      path: "./fonts/Switzer-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

// Gambarino Font
const gambarino = localFont({
  src: "./fonts/Gambarino-Regular.otf",
  variable: "--font-gambarino",
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Sycamore Cottage",
  description: "Care that feels like home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${switzer.variable} ${gambarino.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
        <MusicPlayer src="/audio/ambient.mp3" />
      </body>
    </html>
  );
}
