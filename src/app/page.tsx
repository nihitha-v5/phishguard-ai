import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ValuePropsSection } from "@/components/landing/ValuePropsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ProductPreviewSection } from "@/components/landing/ProductPreviewSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070a13] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust / Value Section */}
        <ValuePropsSection />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* 5. Product Preview Section */}
        <ProductPreviewSection />

        {/* 6. Final Call to Action */}
        <CtaSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
