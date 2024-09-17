"use client";

import s from "./expertise.module.scss";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Icons } from "../ui/icons/icons";
import ArrowLinkButton from "../ui/ArrowLinkButton/ArrowLinkButton";

const desk = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

// const mobile = {
//     hidden: {opacity: 0, x: 30 },
//     visible: {opacity: 1, x: 0 },
//   };

const ExpertiseList: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });

  return (
    <motion.ul className={s.list}>
      <motion.li
        ref={ref1}
        variants={desk}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className={s.service_card}
      >
        <span className={s.icon}>
          <Icons.IconSetup />
        </span>
        <h3 className={s.service_name}>Corporate Services</h3>

        <p className={s.service_info}>
          We offer comprehensive corporate services tailored to the
          unique needs of businesses seeking to establish or expand their
          presence in the Middle East and Africa.
        </p>
        <ArrowLinkButton linkTo="/business#company-formation" />
      </motion.li>
      <motion.li
        ref={ref2}
        variants={desk}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
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
      </motion.li>
      <motion.li
        ref={ref3}
        variants={desk}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
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
      </motion.li>
    </motion.ul>
  );
};

export default ExpertiseList;
