import s from "./scroller.module.scss";

import Link from "next/link";
import Image from "next/image";

const list = [
  {
    img: "/images/ciceres-logo.webp",
    href: "https://ciceres.com/",
    size: [220, 70],
  },
  {
    img: "/images/adfiap-logo.webp",
    href: "https://www.adfiap.org/",
    size: [200, 180],
  },
  {
    img: "/images/ciceres-logo.webp",
    href: "https://ciceres.com/",
    size: [220, 70],
  },
  {
    img: "/images/adfiap-logo.webp",
    href: "https://www.adfiap.org/",
    size: [200, 180],
  },
];

const HorizontalScroller = () => {
  return (
    <div className={s.container}>
      <ul className={s.scroller}>
        {[...list, ...list].map((el) => {
          return (
            <li key={el.href} className={s.scroller_item}>
              <Link href={el.href}>
                <Image alt="mcs partner" src={el.img} width={el.size[0]} height={el.size[1]} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HorizontalScroller;
