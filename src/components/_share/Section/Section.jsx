import s from "./Section.module.scss";

const Section = ({ children }) => {
  return (
    <section>
      <div className={s.container}>{children}</div>
    </section>
  );
};

export default Section;
