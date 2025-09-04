"use client";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/about/HeroSection";
import FounderStory from "../components/about/FounderStory";
import InteractiveScrollSection from "../components/about/InteractiveScrollSection";
import BrandStory from "../components/about/BrandStory";
import CenterdHeroImage from "@/components/about/CenterdHeroImage";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-[#e7e7e8] max-w-full mx-auto px-0 pt-4 overflow-hidden">
        <HeroSection />
        <FounderStory />
        <CenterdHeroImage />
        <BrandStory />
        <InteractiveScrollSection />
      
      <Footer />
      </main>
    </>
  );
}
