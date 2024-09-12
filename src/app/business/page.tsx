import s from "./page.module.scss";

import FormationSection from "@/components/FormationSection/FormationSection";
import Transition from "@/components/ui/Transition/Transition";

const Business: React.FC = () => {
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      {/* <div className={s.paralax}>
        <Transition as="div" animate="opacity" className={s.overlay}>
          <Transition as="h1" animate="up" className={s.title}>
            Explore our business
          </Transition>
        </Transition>
      </div> */}
    <FormationSection/>
      {/* <section id="company-formation" style={{ height: 600 }}>
        <h1>Business</h1>
      </section>
      <section id="corporate-services" style={{ height: 600 }}>
        <h1>Business</h1>
      </section>
      <section  id="capital-acquisition" style={{ height: 600, padding: '90px 0' }}>
        <h1>Business</h1>
      </section> */}
    </main>
  );
};

export default Business;
