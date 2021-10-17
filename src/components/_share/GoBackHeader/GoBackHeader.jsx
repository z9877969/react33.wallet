import { useHistory } from "react-router-dom";
import sprite from "../../../assets/icons/sprite.svg";
import s from "./GoBackHeader.module.css";

const GoBackHeader = ({ title, children = null }) => {
  const { push, location } = useHistory();
  const handleGoBack = () => push(location.state?.from || "/");
  return (
    <header className={s.header}>
      <button type="button" onClick={handleGoBack} className={s.btn}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-arrow-left"}></use>
        </svg>
      </button>
      {children ? children : <h1 className={s.title}>{title}</h1>}
    </header>
  );
};

export default GoBackHeader;
