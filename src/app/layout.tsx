import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navlinks from "@/components/Navlinks";
import PriceTicker from "@/components/PriceTicker";
import Footer from "@/components/Footer";
import AppToaster from "@/components/AppToaster";
import { Suspense } from "react";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppToaster />
        <Header />
        <Suspense fallback={<div className="h-12 border-y border-gray-100" />}>
          <Navlinks />
        </Suspense>
        <Suspense fallback={<div className="h-10 border-b border-gray-100" />}>
          <PriceTicker />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}