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
              At MCS, we specialize in bridging the gap between businesses and
              government entities in the UAE, GCC, and Africa. Our Corporate and
              Government Relations services are designed to facilitate seamless
              communication, build strategic partnerships, and create
              opportunities that align with your business objectives.
            </p>
            <p className={s.text}>
              With an in-depth understanding of regional regulatory frameworks
              and political landscapes, MCS helps you navigate the complexities
              of engaging with government bodies. From initiating dialogue to
              securing approvals and fostering long-term collaborations, we
              ensure your business is well-positioned to thrive in competitive
              markets.
            </p>
            <p className={s.text}>
              Whether you&apos;re looking to expand your operations, enter new
              markets, or strengthen existing government ties, MCS is your
              trusted partner for achieving impactful and sustainable outcomes
            </p>
            <p className={s.text}>
              Let us be the key to unlocking your business&apos;s potential in
              the Middle East and Africa. With MCS by your side, you gain more
              than a service provider - you gain a strategic partner committed to
              your success. Connect with us today to learn how our Corporate and
              Government Relations services can transform challenges into
              opportunities and help you achieve your vision.
            </p>
          </Transition>
          <Transition as="div" animate="opacity">
            <Image
              className={s.image}
              width={470}
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
