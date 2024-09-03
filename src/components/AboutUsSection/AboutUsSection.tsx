import s from "./about.module.scss";

import Image from "next/image";
import Container from "../Container/Container";

const AboutUsSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.frame}>
            <Image
              className={s.image}
              width={350}
              height={300}
              style={{ width: 440, height: "auto" }}
              src="/images/talking-persons.webp"
              alt="talking-persons"
            />
          </div>
          <div className={s.textBox}>
            <span className={s.subtitle}>ABOUT MCS</span>
            <h2 className={s.title}>
              Something about our brilliant company and our expertise
            </h2>
            <p className={s.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              qui natus eveniet. Sed repellendus ex quasi recusandae magni illum
              culpa qui quis fugit. Hic ex architecto facilis maxime, fuga
              repellat!
            
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              qui natus eveniet. Sed repellendus ex quasi recusandae magni illum
              culpa qui quis fugit. Hic ex architecto facilis maxime, fuga
              repellat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              qui natus eveniet. Sed repellendus ex quasi recusandae magni illum
              culpa qui quis fugit. Hic ex architecto facilis maxime, fuga
              repellat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              qui natus eveniet. Sed repellendus ex quasi recusandae magni illum
              culpa qui quis fugit. Hic ex architecto facilis maxime, fuga
              repellat!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              qui natus eveniet. Sed repellendus ex quasi recusandae magni illum
              culpa qui quis fugit. Hic ex architecto facilis maxime, fuga
              repellat!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
