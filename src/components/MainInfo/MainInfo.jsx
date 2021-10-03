import sprite from "../../assets/icons/sprite.svg";
import s from "./MainInfo.module.scss";

const MainInfo = (props) => {
  const { title, infoOptions, activePage, handleOpenActivePage } = props;
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.headerWrapper}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.currency}>UAH</p>
        </div>

        <ul className={s.list}>
          {infoOptions.map(({ title, sum, name }) => (
            <li className={s.item} key={name}>
              <span className={s.itemTitle}>{title}</span>
              <span className={s.itemSum}>{sum}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={s.btnAdd}
        onClick={() => handleOpenActivePage(activePage)}
        type="button"
      >
        <svg>
          <use href={sprite + "#icon-plus"}></use>
        </svg>
      </button>
    </section>
  );
};

export default MainInfo;
