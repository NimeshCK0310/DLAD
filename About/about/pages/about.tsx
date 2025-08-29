"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroSection from "../components/about/HeroSection";
import FounderStorySection from "../components/about/FounderStorySection";
import InteractiveScrollSection from "../components/about/InteractiveScrollSection";
import BrandStorySection from "../components/about/BrandStorySection";
import NewsletterSection from "../components/about/NewsletterSection";

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-white max-w-full mx-auto px-0 pt-4 overflow-hidden">
        <HeroSection />
        <FounderStorySection />
        <InteractiveScrollSection />
        <BrandStorySection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
