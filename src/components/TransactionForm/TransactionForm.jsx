import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";
import s from "./TransactionForm.module.scss";

const TransactionForm = ({
  openCatListPage,
  handleChange,
  dataForm,
  cbOnSubmit,
}) => {
  const { date, time, category, sum, currency, comment } = dataForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    cbOnSubmit();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Button title="OK" type="submit" className={s.btnOk} />
      <LabelInput
        className={s.label}
        title="День"
        type="date"
        name="date"
        value={date}
        cbOnChange={handleChange}
      />
      <LabelInput
        className={s.label}
        title="Время"
        type="time"
        name="time"
        value={time}
        cbOnChange={handleChange}
      />
      <LabelInput
        className={s.label}
        title="Категория"
        type="button"
        name="category"
        value={category}
        cbOnClick={openCatListPage}
      />
      <LabelInput
        className={s.label}
        title="Сумма"
        name="sum"
        value={sum}
        placeholder="Введите сумму"
        cbOnChange={handleChange}
      />
      <LabelInput
        className={s.label}
        title="Валюта"
        type="button"
        name="currency"
        value={currency}
        cbOnClick={() => {}}
      />
      <LabelInput
        className={s.label}
        name="comment"
        value={comment}
        placeholder="Комментарии"
        cbOnChange={handleChange}
      />
    </form>
  );
};

export default TransactionForm;
