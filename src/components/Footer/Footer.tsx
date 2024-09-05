import s from "./footer.module.scss";

import Image from "next/image";
import Container from "../Container/Container";
import { Icons } from "../ui/icons/icons";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <Image
            src="/images/mcs-logo.webp"
            width={150}
            height={100}
            style={{ height: 40, width: "auto" }}
            alt="logo"
          />
          <Icons.IconTwitter/>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
