import s from "./partners.module.scss";

import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import Transition from "../ui/Transition/Transition";
import HorizontalScroller from "../HorizontalScroller/HorizontalScroller";

const PartnersSection = () => {
  return (
    <section className={s.section}>
      <Container>
        <Heading
          title="We extend our partnerships across the world"
          subtitle="our partners"
          centered={true}
          animate="opacity"
        />
        <Transition duration={0.8} as="div" animate="opacity">
          <div style={{padding: '40px 0px'}}>
            <HorizontalScroller />
          </div>

          {/* <ul className={s.partners_list}>
            <li className={s.partners_list_item}>
              <Link href='https://ciceres.com/'>
                <Image
                  alt="ciceres"
                  src="/images/ciceres-logo.webp"
                  width={220}
                  height={70}
                />
              </Link>
            </li>
            <li className={s.partners_list_item}>
                <Link href="https://www.adfiap.org/">
                   <Image
                alt="ADFIAP"
                src="/images/adfiap-logo.webp"
                width={200}
                height={180}
              />
                </Link>
           
            </li>
          </ul> */}
        </Transition>
      </Container>
    </section>
  );
};

export default PartnersSection;
