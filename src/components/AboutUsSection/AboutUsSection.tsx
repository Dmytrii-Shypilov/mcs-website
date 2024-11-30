import s from "./about.module.scss";

import Image from "next/image";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Transition from "../ui/Transition/Transition";

const AboutUsSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <Transition as="div" animate="opacity" duration={0.8}>
            <Image
              className={s.image}
              src="/images/talking-persons.webp"
              alt="dubai-business"
              width={460}
              height={548}
              // frame="left"
            />
          </Transition>
          <Transition as="div" animate="left" duration={0.6}>
            <div className={s.textBox}>
              <Heading
                subtitle="about mcs"
                title="Experts in Strategic Government and Corporate Consultancy"
              />
              <p className={s.text}>
                MCS, short for Maria Consultancy Services, is a consultancy
                brand under the umbrella of MARIA GROUP INTERNATIONAL,
                originally created to meet the high demand for consulting
                services across various companies and organizations under MARIA
                GROUP INTERNATIONAL. Over time, MCS expanded its focus, evolving
                into a brand serving both corporate and governmental
                organizations. Now MCS comprises a cluster of companies
                established in different jurisdictions, each providing
                specialized services.
              </p>
              <p className={s.text}>
                At MCS, we place our clients at the core of our operations,
                aligning our solutions with their unique goals. With a proven
                track record of successful engagements, we bring both experience
                and innovative thinking to deliver transformative results.
              </p>
            </div>
          </Transition>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
