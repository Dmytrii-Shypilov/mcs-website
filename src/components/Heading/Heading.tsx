import s from "./heading.module.scss";

import Transition from "../ui/Transition/Transition";

type HeadingProps = {
  subtitle?: string;
  title: string;
  centered?: boolean;
  animate?: "up" | "left" | "right" | 'opacity';
};

const Heading: React.FC<HeadingProps> = ({
  subtitle,
  title,
  centered = false,
  animate,
}) => {
  const Wrapper = animate ? Transition : "div";
  const aligned = centered? 'center' : 'left'

  return (
    <Wrapper className={s.wrapper} animate={animate} as="div">
      <span className={s.subtitle} style={{textAlign: aligned}}>{subtitle?.toUpperCase()}</span>
      <h2 className={s.title} style={{textAlign: aligned}}>{title}</h2>
    </Wrapper>
  );
};


export default Heading