import s from "./page.module.scss";

import HeroSection from "@/components/HeroSection/HeroSection";
import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";

export default function Home() {
  return (
    <main className={s.main}>
      <HeroSection />
      <AboutUsSection />
    </main>
  );
}
