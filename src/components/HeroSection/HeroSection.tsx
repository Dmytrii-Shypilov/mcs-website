import s from "./hero.module.scss";

import Container from "../Container/Container";
import Button from "../ui/Button/Button";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.overlay}>
        <div className={s.wrapper}>
          <div className={s.block}>
            <div style={{textAlign: 'center', marginBottom: 45}}>
              <Image
                width={100}
                height={100}
                style={{ height: 60, width: "auto" }}
                alt="mcs-logo"
                src="/images/mcs-logo.svg"
              />
            </div>

            {/* <p className={s.subtitle}>OUR COMPANY</p> */}
            <h1
              style={{
                color: "white",
                fontSize: 35,
                marginBottom: 40,
                textAlign: "center",
              }}
            >
              Global Consultancy Experts in Government and Corporate Relations
            </h1>

             {/* <p className={s.text}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              quia eos velit. Dignissimos doloremque quo, molestias reiciendis
              ullam, quis, error id esse porro dolorem aliquam ipsum eveniet?
              Ut, ipsam vitae.
            </p>  */}
            <Button onClick={()=> null}>Explore our expertise</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
