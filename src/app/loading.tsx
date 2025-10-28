import s from "./page.module.scss";

import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className={s.loading}>
      <Image
        className={s.loading_img}
        width={224}
        height={80}
        alt="mcs-logo"
        src="/images/mcs-logo.webp"
        priority={true}
      />

      <span className={s.loading_text}>Loading . . .</span>
    </div>
  );
};

export default Loading;
