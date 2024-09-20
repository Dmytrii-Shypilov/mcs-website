import s from "./expertise.module.scss";

import { Icons } from "../ui/icons/icons";
import ArrowLinkButton from "../ui/ArrowLinkButton/ArrowLinkButton";
import Transition from "../ui/Transition/Transition";


const ExpertiseList: React.FC = () => {
  return (
    <ul className={s.list}>
      <Transition
        as="li"
        animate="bubble"
        duration={0.5}
        className={s.service_card}
      >
        <span className={s.icon}>
          <Icons.IconSetup />
        </span>
        <h3 className={s.service_name}>Corporate Services</h3>

        <p className={s.service_info}>
          We offer comprehensive corporate services tailored to the unique needs
          of businesses seeking to establish or expand their presence in the
          Middle East and Africa.
        </p>
        <ArrowLinkButton linkTo="/business#company-formation" />
      </Transition>
      <Transition
        as="li"
        animate="bubble"
        duration={0.5}
        className={s.service_card}
      >
        <span className={s.icon}>
          <Icons.IconCorporate />
        </span>
        <h3 className={s.service_name}>
          Corporate and Government Relations Services
        </h3>
        <p className={s.service_info}>
          Our corporate and government relations services facilitate seamless
          interactions between businesses and government entities in the UAE,
          GCC, and Africa
        </p>
        <ArrowLinkButton linkTo="/business#corporate-services" />
      </Transition>
      <Transition
        as="li"
        animate="bubble"
        duration={0.5}
        className={s.service_card}
      >
        <span className={s.icon}>
          <Icons.IconCapital />
        </span>
        <h3 className={s.service_name}>Capital Acquisition Facilitation</h3>
        <p className={s.service_info}>
          We specialize in capital acquisition facilitation, connecting
          businesses with potential investors and financial institutions to
          support their growth ambitions.
        </p>
        <ArrowLinkButton linkTo="/business#capital-acquisition" />
      </Transition>
    </ul>
  );
};

export default ExpertiseList;
