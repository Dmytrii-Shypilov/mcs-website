"use client";

import s from "./menu.module.scss";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "../ui/icons/icons";

type MenuProps = {
  closeMenu: () => void;
};

const MobileMenu: React.FC<MenuProps> = ({ closeMenu }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setModalRoot(document.getElementById("modal-root"));

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!isMounted || !modalRoot) {
    return null;
  }

  return createPortal(
    <div className={s.backdrop}>
      <div className={s.menu}>
        <span className={s.closeBtn} onClick={closeMenu}>
          <Icons.IconClose />
        </span>

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
      </div>
    </div>,
    modalRoot
  );
};

export default MobileMenu;
