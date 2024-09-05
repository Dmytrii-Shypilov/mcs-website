import s from "./expertise.module.scss";

import Container from "../Container/Container";
import ArrowLinkButton from "../ui/ArrowLinkButton/ArrowLinkButton";
import { Icons } from "../ui/icons/icons";


const OurExpertiseSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <span className={s.subtitle}>OUR EXPERTISE</span>
        <h2 className={s.title}>
          We strive to deliver exclusively tailored services
        </h2>
        <ul className={s.list}>
          <li className={s.service_card}>
          <span className={s.icon}>
              <Icons.IconSetup/>
            </span>
            <h3 className={s.service_name}>Company Formation</h3>
            <p className={s.service_info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              adipisci nihil quam excepturi voluptatum reiciendis labore ea
              velit deleniti dolores natus, voluptate architecto, animi dicta
              dolorem magni odit perferendis eos?
            </p>
            <ArrowLinkButton linkTo="/business"/>
          </li>
          <li className={s.service_card}>
          <span className={s.icon}>
              <Icons.IconCorporate/>
              </span>
            <h3 className={s.service_name}>Corporate Services</h3>
            <p className={s.service_info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              adipisci nihil quam excepturi voluptatum reiciendis labore ea
              velit deleniti dolores natus, voluptate architecto, animi dicta
              dolorem magni odit perferendis eos?
            </p>
            <ArrowLinkButton linkTo="/business"/>
          </li>
          <li className={s.service_card}>
          <span className={s.icon}>
              <Icons.IconCapital/>
              </span>
            <h3 className={s.service_name}>Capital Acquisition Facilitation</h3>
            <p className={s.service_info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              adipisci nihil quam excepturi voluptatum reiciendis labore ea
              velit deleniti dolores natus, voluptate architecto, animi dicta
              dolorem magni odit perferendis eos?
            </p>
            <ArrowLinkButton linkTo="/business"/>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default OurExpertiseSection;
