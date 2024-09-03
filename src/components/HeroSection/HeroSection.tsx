import s from "./hero.module.scss";

import { useRouter } from "next/navigation";

import Container from "../Container/Container";
import Button from "../ui/Button/Button";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.overlay}>
        <div className={s.wrapper}>
          <div className={s.block}>
            <div className={s.logo}>
              <Image
                width={100}
                height={100}
                style={{ height: 60, width: "auto" }}
                alt="mcs-consultancy-logo"
                src="/images/mcs-logo.svg"
              />
            </div>
            <h1 className={s.title}>
              Global Consultancy Experts in Government and Corporate Relations
            </h1>
            <Button linkTo="/business">Explore our business</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
