'use client'

import s from "./header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {

  const path = usePathname()
  
  const getClass = (href: string) => {
    return path === href ? s.link_active : s.link
  }

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link href="/">
          <Image
            width={100}
            height={100}
            style={{height: 40, width: 'auto'}}
            alt="mcs-logo"
            src="/images/mcs-logo.webp"
          />
        </Link>
        <ul className={s.list}>
          <li className={s.list_item}>
            <Link className={getClass('/')} href="/">Home</Link>
          </li>
          <li className={s.list_item}>
            <Link className={getClass('/business')} href="/business">Our business</Link>
          </li>
          <li className={s.list_item}>
            <Link className={getClass('/contact')} href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
