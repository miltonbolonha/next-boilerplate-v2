"use client";
import { HeaderContainer } from "@/containers/HeaderContainer";
import { HeroKits } from "@/containers/HeroKits";
import { HeroRoles } from "@/containers/HeroRoles";
import { MainHero } from "@/containers/MainHeroContainer";
import { Hero5a } from "@/containers/hero5a";
import { CtaContainer } from "@/containers/CtaContainer";
import { FooterContainer } from "@/containers/FooterContainer";
import { CaseContainer } from "@/containers/CaseContainer";
import { PricingContainer } from "@/containers/PricingContainer";
import { TestimonialsContainer } from "@/containers/TestimonialsContainer";
import { FaqContainer } from "@/containers/FaqContainer";
import { HeroDevIniciante } from "@/containers/HeroDevIniciante";
import { HeroDevAi } from "@/containers/HeroDevAi";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <MainHero />
      <Hero5a />
      <CaseContainer />
      <div className="max-w-screen-lg m-auto overflow-hidden">
        <HeroKits />
        <CtaContainer />
        <HeroDevIniciante />
        <HeroRoles />
        <HeroDevAi />
        <CtaContainer />
        <PricingContainer />
        <TestimonialsContainer />
        <CtaContainer />
        <FaqContainer />
      </div>
      <FooterContainer />
    </>
  );
}
