import CampSection from "@/components/shared/CampSection";
import FeaturesSection from "@/components/shared/FeaturesSection";
import GetAPPSection from "@/components/shared/GetAPPSection";
import GuideSection from "@/components/shared/GuideSection";
import HeroSection from "@/components/shared/HeroSection";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CampSection />
      <GuideSection />
      <FeaturesSection />
      <GetAPPSection />
    </>
  );
}
