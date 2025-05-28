import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexa Cars",
  description:
    "Discover the future of automotive excellence with Nexa Cars, where innovation meets luxury. Explore our cutting-edge vehicles designed for performance and style.",
  authors: [
    { name: "Wahidullah Karimi", url: "https://wahidullah-karimi.netlify.app" },
  ],
  keywords: [
    "cars",
    "automotive",
    "Nexa",
    "luxury cars",
    "car showcase",
    "electric cars",
    "hybrid cars",
    "Karimi",
    "Wahidullah Karimi",
  ],
  creator: "Wahidullah Karimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
