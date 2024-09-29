import s from "./page.module.scss";

import FormationSection from "@/components/FormationSection/FormationSection";
import GovernmentSection from "@/components/GovernmentSection/GovernmentSection";
import CapitalSection from "@/components/CapitalSection/CapitalSection";

const Business: React.FC = () => {
  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <FormationSection />
      <GovernmentSection />
      <CapitalSection />
    </main>
  );
};

export default Business;
