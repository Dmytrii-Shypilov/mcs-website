import s from "./government.module.scss";

import Container from "../Container/Container";
import Transition from "../ui/Transition/Transition";
import Heading from "../Heading/Heading";
import Image from "next/image";

const GovernmentSection: React.FC = () => {
  return (
    <section className={s.section} id="government">
      <Container>
        <Heading
          subtitle="corporate and government relations"
          title="We connect businesses with government"
          animate="opacity"
          centered={true}
        />
        <div className={s.wrapper}>
          <Transition as="div" animate="right" className={s.textBox}>
            <p className={s.text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              molestiae, laboriosam fugiat at id ab. A accusantium quidem at
              earum nemo, non deserunt ex? Ipsam recusandae dolores facere
              adipisci eum.
            </p>
          </Transition>
          <Transition as="div" animate="opacity">
            <Image
              className={s.image}
              width={450}
              height={550}
              src="/images/uae-skyscrapers.webp"
              alt="dubai government"
            />
          </Transition>
        </div>
      </Container>
    </section>
  );
};

export default GovernmentSection;
