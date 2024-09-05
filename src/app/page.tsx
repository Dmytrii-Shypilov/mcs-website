import s from "./page.module.scss";

import HeroSection from "@/components/HeroSection/HeroSection";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import OurExpertiseSection from "@/components/OurExpertiseSection/OurExpertiseSection";

export default function Home() {
  return (
    <main className={s.main}>
      <HeroSection />
      <AboutUsSection/>
      <OurExpertiseSection/>
    </main>
  );
}
