import s from "./card.module.scss";

import Image from "next/image";

import { Icons } from "../ui/icons/icons";

const BusinessCard: React.FC = () => {
  return (
    <div className={s.card}>
      <span>
        <Image
          width={98}
          height={35}
          style={{ height: 35, width: "auto", display: "block" }}
          alt="mcs-logo"
          src="/images/mcs-logo.webp"
        />
      </span>
      <div>
        <span className={s.company_name}>MGI Consultancy LLC</span>
        <ul className={s.contacts_list}>
          <li className={s.contacts_list_item}>
            <span className={s.icon}>
              <Icons.IconLocation height="30" />
            </span>

            <span className={s.contact}>
              1503, Prism Tower, Business Bay, Dubai, United Arab Emirates
            </span>
          </li>
          <li className={s.contacts_list_item}>
            <span className={s.icon}>
              <Icons.IconPhone height="30" />
            </span>

            <a className={s.contact} href="tel:+971 585 949 313">
              +971 585 949 313
            </a>
          </li>
          <li className={s.contacts_list_item}>
            <span className={s.icon}>
              <Icons.IconMail height="25" width="30" />
            </span>

            <a className={s.contact} href="mailto:info@mcsconsultant.com">
              info@mcsconsultant.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessCard;
