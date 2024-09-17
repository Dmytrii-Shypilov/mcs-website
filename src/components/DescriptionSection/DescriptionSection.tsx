import s from "./description.module.scss";

import Image from "next/image";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Transition from "../ui/Transition/Transition";

const DescriptionSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <Transition as="div" animate="right" className={s.textBox}>
            <Heading
              subtitle="our approach"
              title="MCS: Grounded in Best Practices and Proven Success"
            />
            <h3 className={s.name}>VISION</h3>
            <p className={s.text}>
              We are committed to delivering expert consultancy services that
              bridge cultural divides, streamline government and corporate
              interactions, and enable our clients to thrive in the complex and
              diverse markets of the Middle East and Africa.
            </p>
            <h3 className={s.name}>MISSION</h3>
            <p className={s.text}>
              Our mission is to connect Western and Far Eastern businesses with
              the UAE, GCC, and African markets, leveraging our deep expertise
              in government and corporate relations to create lasting, mutually
              beneficial partnerships.
            </p>
          </Transition>
          <Transition as="div" animate="opacity" duration={0.8}>
            <Image
              className={s.image}
              alt="dubai-business"
              src="/images/downtown.webp"
              width={500}
              height={550}
            />
          </Transition>
        </div>
      </Container>
    </section>
  );
};

export default DescriptionSection;
