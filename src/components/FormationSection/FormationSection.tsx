import s from "./formation.module.scss";

import Heading from "../Heading/Heading";
import Container from "../Container/Container";
import Image from "next/image";
import Transition from "../ui/Transition/Transition";

const FormationSection: React.FC = () => {
  return (
    <>
      <section className={s.section} id='formation'>
        <Container>
          <Heading
            animate="opacity"
            subtitle="corporate services"
            title="Tailored Corporate Solutions for Your Business Needs"
            centered={true}
          />
          <div className={s.wrapper}>
            <Transition as='div' animate="opacity" duration={0.7}> <Image
              src="/images/corporate-office.webp"
              className={s.image}
              width={480}
              height={376}
              alt="corporate dubai"
            /></Transition>
           
            <Transition as='div' animate="opacity" duration={0.8} className={s.textBox}>
              <p className={s.text}>
                At MCS, we understand that every business is unique, which is
                why our corporate solutions are personalized to suit your
                distinct objectives. We work closely with you to understand your
                challenges and opportunities, crafting strategies that drive
                efficiency and enhance performance. Our goal is to provide you
                with the tailored support necessary to navigate complex markets
                and achieve sustainable success.
              </p>
             <ul>
              <li className={s.list_item}><span className={s.icon}></span><span className={s.service}>Company Representation</span></li>
              <li className={s.list_item}><span className={s.icon}></span><span className={s.service}>Company Formation Worldwide</span></li>
              <li className={s.list_item}><span className={s.icon}></span><span className={s.service}>Opening Potential Clients and Markets</span></li>
              <li className={s.list_item}><span className={s.icon}></span><span className={s.service}>Introduction to Private Equity and Venture Capital</span></li>
             </ul>
            </Transition>
          </div>
        </Container>
      </section>
      <section className={s.services_section}>
        <Container>
          <ul className={s.services_list}>
            <Transition as='li' animate='bubble' className={s.services_list_item}>
              <div className={s.name_wrapper}>
                <h3 className={s.service_name}>Company Representation</h3>
              </div>

              <p className={s.service_text}>
                MCS acts as an exclusive representative for international
                businesses seeking to expand into the UAE, GCC, and Africa,
                ensuring seamless market entry and strong government
                relationships. With deep local expertise, MCS facilitates
                partnerships between Western and Far Eastern companies and
                regional stakeholders.
              </p>
            </Transition>
            <Transition as='li' animate='bubble' className={s.services_list_item}>
              <div className={s.name_wrapper}>
                <h3 className={s.service_name}>Company Formation Worldwide</h3>
              </div>
              <p className={s.service_text}>
                MCS provides comprehensive company formation services, guiding
                businesses through the complexities of international regulations
                and legal requirements. From initial setup to operational
                launch, MCS ensures a smooth and compliant entry into global
                markets.
              </p>
            </Transition>
            <Transition as='li' animate='bubble' className={s.services_list_item}>
              <div className={s.name_wrapper}>
                <h3 className={s.service_name}>
                  Opening Potential Clients and Markets
                </h3>
              </div>
              <p className={s.service_text}>
                MCS identifies and opens new markets or clients for businesses,
                providing tailored strategies to enhance growth and market
                penetration. Through its vast network and local knowledge, MCS
                helps clients unlock potential in untapped regions or
                industries.
              </p>
            </Transition>
            <Transition as='li' animate='bubble' className={s.services_list_item}>
              <div className={s.name_wrapper}>
                <h3 className={s.service_name}>
                  Introduction to Private Equity and Venture Capital
                </h3>
              </div>
              <p className={s.service_text}>
                MCS connects clients with leading private equity and venture
                capital firms, enabling access to strategic investment
                opportunities. By leveraging its global network, MCS facilitates
                partnerships that drive business growth and long-term financial
                success.
              </p>
            </Transition>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default FormationSection;
