import s from "./icon-arrow.module.scss";

const IconArrowAnimated: React.FC<{isOpen: boolean}> = ({isOpen}) => {

  const iconClass = isOpen ? s.icon_close : s.icon

  return (
    <div className={iconClass}>
      <div className={s.burger}>
        <span className={s.top}></span>
        <span className={s.middle}></span>
        <span className={s.bottom}></span>
      </div>
    </div>
  );
};

export default IconArrowAnimated;
