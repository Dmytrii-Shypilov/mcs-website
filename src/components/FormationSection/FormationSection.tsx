import s from "./formation.module.scss";

import Heading from "../Heading/Heading";
import Image from "next/image";

const FormationSection: React.FC = () => {
  return (
    <section className={s.section}>
      {/* <Image src='/images/world-map.svg' fill alt='ff'/> */}
      <Heading
        animate="up"
        subtitle="company formation"
        title="We ensure quick and smooth incorporation process"
        centered={true}
      />
    </section>
  );
};

export default FormationSection;
