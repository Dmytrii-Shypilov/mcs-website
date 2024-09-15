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
            <Heading subtitle="OUR CONCEPT" title="MCS company comprehensive description title"/>
            <p className={s.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              nostrum, magnam nobis ducimus unde doloribus. Sequi, cum placeat
              voluptatem architecto excepturi iste reprehenderit suscipit,
              adipisci perspiciatis esse consequuntur, accusantium repellat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              nostrum, magnam nobis ducimus unde doloribus. Sequi, cum placeat
              voluptatem architecto excepturi iste reprehenderit suscipit,
              adipisci perspiciatis esse consequuntur, accusantium repellat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              nostrum, magnam nobis ducimus unde doloribus. Sequi, cum placeat
              voluptatem architecto excepturi iste reprehenderit suscipit,
              adipisci perspiciatis esse consequuntur, accusantium repellat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              nostrum, magnam nobis ducimus unde doloribus. Sequi, cum placeat
              voluptatem architecto excepturi iste reprehenderit suscipit,
              adipisci perspiciatis esse consequuntur, accusantium repellat.
            </p>
          </Transition>
          <Transition as="div" animate="left">
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
