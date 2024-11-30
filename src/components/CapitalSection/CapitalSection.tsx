import s from "./capital.module.scss";

import Heading from "../Heading/Heading";
import Image from "next/image";
import Container from "../Container/Container";
import Transition from "../ui/Transition/Transition";

const CapitalSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <Heading
          subtitle="Capital Acquisition Facilitation"
          title="Prompt your growth by forging strategic alliances"
          centered={true}
        />
        <Transition as="div" animate="opacity" className={s.imageBox}>
          <Image
            className={s.image}
            src="/images/investment-key.webp"
            width={650}
            height={400}
            alt="dubai investment"
          />
          <Image
            className={s.image}
            src="/images/coins-purse.webp"
            width={420}
            height={400}
            alt="dubai venture capital"
          />
        </Transition>
        <Transition as='div' animate="up" className={s.textWrapper}>
          <div className={s.textBox}>
            <p className={s.text}>
              In the dynamic world of business, securing capital is paramount
              for driving innovation and expansion. At MCS, we specialize in
              providing unparalleled support services tailored to the unique
              needs of Private Equity Firms, Venture Capitalists, and potential
              investors including Private Family Offices and corporations.
            </p>
            <p className={s.text}>
              With years of experience in the industry, MCS excels in
              facilitating introductions and connections that align with our
              clients&apos; objectives. Our dedicated team is adept at
              navigating the complexities of fundraising to ensure optimal
              outcomes for all parties involved.
            </p>
            <p className={s.text}>
              At MCS, we understand the importance of confidentiality and
              prioritize client satisfaction above all else. We believe in
              fostering enduring partnerships built on trust and transparency,
              ensuring that our clients feel confident and supported throughout
              the entire process.
            </p>
            <p className={s.text}>
              In addition to connecting businesses with investors, MCS provides
              strategic advisory services to help clients present compelling
              investment opportunities. Our expertise spans market analysis,
              financial structuring, and crafting persuasive business cases that
              resonate with potential investors. By leveraging our global
              network and deep industry knowledge, we empower our clients to
              secure the capital needed to fuel their growth and achieve their
              long-term goals.
            </p>
          </div>
        </Transition>
      </Container>
    </section>
  );
};

export default CapitalSection;
