import Form from "../_share/Form/Form";
import s from "./TransactionForm.module.scss";
import transactionFormOptions from '../../assets/options/transactionFormOptions.json';

const TransactionForm = ({
  openCatListPage,
  handleChange,
  dataForm,
  cbOnSubmit,
}) => {

  return (
    <Form
      dataForm={dataForm}
      options={transactionFormOptions}
      handleChange={handleChange}
      handleClick={openCatListPage}
      cbOnSubmit={cbOnSubmit}
      styles={s}
    />
  );
};

export default TransactionForm;
