import s from "./page.module.scss";

import Image from "next/image";
import BusinessCard from "@/components/BusinessCard/BusinessCard";
import Container from "@/components/Container/Container";
import Transition from "@/components/ui/Transition/Transition";
import Heading from "@/components/Heading/Heading";

const Contact: React.FC = () => {
  return (
    <main className={s.main}>
      <section className={s.section}>
        <Container>
          <Heading
            subtitle="contact us"
            title="We will be glad to help you"
           
            centered={true}
          />

          <div className={s.wrapper}>
            <Transition as="div" animate="right">
              <Image
                className={s.image}
                width={450}
                height={450}
                src="/images/uae-flag.webp"
                alt="uae-business"
              />
            </Transition>
            <Transition as="div" animate="left">
              <div className={s.textBlock}>
                <p className={s.text}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                  voluptatem aut asperiores aliquam nemo! Nobis, cumque!
                  Dolorem, maiores accusantium ad ullam sequi, tenetur
                  exercitationem cumque eum iure at, adipisci unde!
                </p>
                <BusinessCard />
              </div>
            </Transition>
          </div>

          <iframe
          className={s.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.031001803184!2d55.25886198912654!3d25.185947343595284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0d69e8d93%3A0x8f0fe5aa20493ae4!2sThe%20Prism!5e1!3m2!1sen!2sua!4v1725656691883!5m2!1sen!2sua"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            style={{ border: "none", margin: "0 auto" }}
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
