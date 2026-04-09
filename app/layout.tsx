import type { Metadata } from "next";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import "./globals.css";
import "@/styles/global.scss";

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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MusicPlayer src="/audio/ambient.mp3" />
      </body>
    </html>
  );
}
