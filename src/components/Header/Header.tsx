"use client";

import s from "./header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Container from "../Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Icons } from "../ui/icons/icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const path = usePathname();
  const router = useRouter();

  const getClass = (href: string) => {
    return path === href ? s.link_active : s.link;
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Link href="/">
            <Image
              width={112}
              height={40}
              alt="mcs-logo"
              src="/images/mcs-logo.webp"
              priority={true}
            />
          </Link>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li className={s.list_item}>
                <Link className={getClass("/")} href="/">
                  Home
                </Link>
              </li>
              <li className={s.list_item}>
                <Link className={getClass("/business")} href="/business">
                  Our business
                </Link>
              </li>
              <li className={s.list_item}>
                <Link className={getClass("/contact")} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <span className={s.icon} onClick={() => setIsMenuOpen(true)}>
            <Icons.IconMenu />
          </span>
        </div>
      </Container>
        <MobileMenu
        path={path}
          isMenuOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
          router={router}
        />
     
    </header>
  );
};

export default Header;
