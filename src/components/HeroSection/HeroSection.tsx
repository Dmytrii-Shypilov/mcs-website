import s from "./hero.module.scss";

import Button from "../ui/Button/Button";
import Image from "next/image";
import Transition from "../ui/Transition/Transition";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const HeroSection: React.FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.overlay}>
        <div className={s.wrapper}>
          <div className={s.block}>
            <Transition as="div" animate="right">
              <div className={s.logo}>
                <Image
                  width={214}
                  height={60}
                  alt="mcs-consultancy-logo"
                  src="/images/mcs-logo.svg"
                  loading="lazy"
                />
              </div>
            </Transition>
            <Transition as="div" animate="up">
              <h1 className={s.title}>
                Global Consultancy Experts in Government and Corporate Relations
              </h1>
            </Transition>
            <Transition as="div" animate="left">
              <Button linkTo="/business">Explore our business</Button>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
