import s from "./button.module.scss";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode | undefined
};

const Button: React.FC<ButtonProps> = ({ onClick, children, icon }) => {
  return (
    <button className={s.btn}>
      <div className={s.wrapper}>
        <span className={s.overlay}></span>
        <span className={s.text}>{children}</span>
        {icon && icon}
      </div>
    </button>
  );
};

export default Button
