"use client";

import s from "./arrow.module.scss";
import { useRouter } from "next/navigation";

import { Icons } from "../icons/icons";

const ArrowLinkButton: React.FC<{ linkTo: string }> = ({ linkTo }) => {
  const router = useRouter();

  return (
    <button className={s.btn} onClick={() => router.push(linkTo)}>
      <Icons.IconArrowRight />
    </button>
  );
};

export default ArrowLinkButton;
