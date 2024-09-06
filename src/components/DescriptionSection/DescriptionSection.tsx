import s from "./description.module.scss";

import Container from "../Container/Container";
import FramedImage from "../ui/FramedImage/FramedImage";

const DescriptionSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.textBox}>
            <span className={s.subtitle}>DESCRIPTION</span>
            <h2 className={s.title}>MCS company comprehensive description title</h2>
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
          </div>
          <FramedImage
            alt="dubai-business"
            src="/images/downtown.webp"
            width={500}
          />
        </div>
      </Container>
    </section>
  );
};

export default DescriptionSection;
