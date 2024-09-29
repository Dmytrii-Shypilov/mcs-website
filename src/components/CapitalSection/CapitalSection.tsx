import s from "./capital.module.scss";

import Heading from "../Heading/Heading";
import Image from "next/image";
import Container from "../Container/Container";

const CapitalSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <Heading
          subtitle="Capital Acquisition Facilitation"
          title="Prompt your growth by forging strategic alliances"
          centered={true}
        />
        <div className={s.imageBox}>
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
        </div>

        <div className={s.textBox}>
      
         
          <p className={s.text}>
            In the dynamic world of business, securing capital is paramount for
            driving innovation and expansion. At MCS, we specialize in providing
            unparalleled support services tailored to the unique needs of
            Private Equity Firms, Venture Capitalists, and potential investors
            including Private Family Offices and corporations.  
          </p>
          <p className={s.text}>With years of
            experience in the industry, MCS excels in facilitating introductions
            and connections that align with our clients&apos; objectives. Our
            dedicated team is adept at navigating the complexities of
            fundraising to ensure optimal outcomes for all parties involved.</p>
          <p className={s.text}>At
            MCS, we understand the importance of confidentiality and prioritize
            client satisfaction above all else. We believe in fostering enduring
            partnerships built on trust and transparency, ensuring that our
            clients feel confident and supported throughout the entire process.</p>
            
        </div>
      </Container>
    </section>
  );
};

export default CapitalSection;
