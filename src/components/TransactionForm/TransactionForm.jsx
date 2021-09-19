import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";
import { Component } from "react";

const TransactionForm = ({
  handleToggleCatList,
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
    <form onSubmit={handleSubmit}>
      <Button title="OK" type="submit" />
      <LabelInput
        title="День"
        type="date"
        name="date"
        value={date}
        cbOnChange={handleChange}
      />
      <LabelInput
        title="Время"
        type="time"
        name="time"
        value={time}
        cbOnChange={handleChange}
      />
      <LabelInput
        title="Категория"
        type="button"
        name="category"
        value={category}
        cbOnClick={handleToggleCatList}
      />
      <LabelInput
        title="Сумма"
        name="sum"
        value={sum}
        placeholder="Введите сумму"
        cbOnChange={handleChange}
      />
      <LabelInput
        title="Валюта"
        type="button"
        name="currency"
        value={currency}
        cbOnClick={() => {}}
      />
      <LabelInput
        name="comment"
        value={comment}
        placeholder="Комментарии"
        cbOnChange={handleChange}
      />
    </form>
  );
};

export default TransactionForm;
