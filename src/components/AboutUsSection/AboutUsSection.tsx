import s from "./about.module.scss";

import FramedImage from "../ui/FramedImage/FramedImage";
import Container from "../Container/Container";

const AboutUsSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.frame}>
            <FramedImage
              src="/images/talking-persons.webp"
              alt="dubai-business"
              width={440}
              frame="left"
            />
          </div>
          <div className={s.textBox}>
            <span className={s.subtitle}>ABOUT MCS</span>
            <h2 className={s.title}>
              Experts in Strategic Government and Corporate Consultancy
            </h2>

            <p className={s.text}>
              MCS, short for Maria Consultancy Services, is a consultancy brand
              operating under the umbrella of Maria Group International that was
              initially established to cater to the needs of the consulting
              services highly demanded by various companies and organisations
            </p>
            <p className={s.text}>
              Our mission is to connect Western and Far Eastern businesses with
              the UAE, GCC, and African markets, leveraging our deep expertise
              in government and corporate relations to create lasting, mutually
              beneficial partnerships.
            </p>
            <p className={s.text}>
              We are committed to delivering expert consultancy services that
              bridge cultural divides, streamline government and corporate
              interactions, and enable our clients to thrive in the complex and
              diverse markets of the Middle East and Africa.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;
