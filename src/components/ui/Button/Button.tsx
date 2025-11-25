'use client'

import s from "./button.module.scss";

import { useRouter } from "next/navigation";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  linkTo?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | 'download';
  disabled?: boolean;
  icon?: React.ReactNode | undefined
};



const Button: React.FC<ButtonProps> = ({ onClick, children, icon, linkTo }) => {
  const router = useRouter()
 

  return (
    <button className={s.btn} onClick={linkTo && !onClick ? ()=> router.push('/business') : onClick}>
      <div className={s.wrapper}>
        <span className={s.overlay}></span>
        <span  className={s.text}>{children}</span>
        {icon && icon}
      </div>
    </button>
  );
};

export default Button
