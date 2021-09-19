import { useState } from "react";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesListPage from "../_pages/CategoriesListPage";

const TransactionPage = ({
  transType,
  handleGoBack,
  addTransaction,
  addCategory,
  catsList,
}) => {
  const [dataForm, setDataForm] = useState({
    date: "2021-09-05",
    time: "15:17",
    category: transType === "incomes" ? "Зарплата" : "Продукты",
    sum: "",
    currency: "UAH",
    comment: "",
  });
  const [isCatList, setIsCatList] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleCatList = () => setIsCatList((prev) => !prev);

  const handleSetCategory = (category) => {
    setDataForm((prev) => ({ ...prev, category }));
    handleToggleCatList();
  };

  const handleSubmit = () => {
    addTransaction(dataForm);
  };

  return (
    <>
      <GoBackHeader
        handleGoBack={!isCatList ? handleGoBack : handleToggleCatList}
        title={
          isCatList ? "Категории" : transType === "costs" ? "Расходы" : "Доходы"
        }
      />
      {!isCatList ? (
        <TransactionForm
          transType={transType}
          dataForm={dataForm}
          handleChange={handleChange}
          handleToggleCatList={handleToggleCatList}
          cbOnSubmit={handleSubmit}
        />
      ) : (
        <CategoriesListPage
          catsList={catsList}
          handleSetCategory={handleSetCategory}
          addCategory={addCategory}
        />
      )}
    </>
  );
};

export default TransactionPage;
