import s from "./expertise.module.scss";

import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import ExpertiseList from "../ExpertiseList/ExpertiseList";

const OurExpertiseSection: React.FC = () => {
  return (
    <section className={s.section}>
      <Container>
        <Heading
          subtitle="OUR EXPERTISE"
          title="We strive to deliver effectively tailored services"
          animate="opacity"
          centered={true}
        />
        <ExpertiseList />
      </Container>
    </section>
  );
};

export default OurExpertiseSection;
