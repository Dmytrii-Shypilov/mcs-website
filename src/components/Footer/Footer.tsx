import s from "./footer.module.scss";

import Image from "next/image";
import Container from "../Container/Container";
import SocialMediaLink from "../ui/SocialMediaLink/SocialMediaLink";
import Link from "next/link";
import { Icons } from "../ui/icons/icons";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.logoSocial}>
          <Image
            src="/images/mcs-logo.webp"
            width={125}
            height={45}
            style={{ height: 45, width: "auto" }}
            alt="logo"
          />

          <ul className={s.social_list}>
            <li className={s.social_list_item}>
              <SocialMediaLink href="" icon={<Icons.IconTwitter />} />
            </li>
            <li className={s.social_list_item}>
              <SocialMediaLink href="" icon={<Icons.IconFacebook />} />
            </li>
            <li className={s.social_list_item}>
              <SocialMediaLink href="" icon={<Icons.IconInstagram />} />
            </li>
          </ul>

          </div>
          
          <nav className={s.nav}>
            <ul className={s.nav_list}>
              <li className={s.nav_list_item}>
                <Link className={s.link} href={"/"}>
                  Home
                </Link>
              </li>
              <li className={s.nav_list_item}>
                <Link className={s.link} href={"/business"}>
                  Our business
                </Link>
              </li>
              <li className={s.nav_list_item}>
                <Link className={s.link} href={"/contact"}>
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          <ul className={s.contacts_list}>
            <li className={s.contacts_list_item}>
              <Icons.IconPhone/>
              <a className={s.contact_link} href="tel:+971 585 949 313">
                +971 585 949 313
              </a>
            </li>
            <li className={s.contacts_list_item}>
              <Icons.IconMail/>
              <a
                className={s.contact_link}
                href="mailto:info@mcsconsultant.com"
              >
                info@mcsconsultant.com
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
