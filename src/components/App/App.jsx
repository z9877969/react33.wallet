import { useState } from "react";
import {
  useLocalStorage,
  useLocalStorageForCategories,
} from "../../hooks/useLocalStorage";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";

import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("");

  const [costs, setCosts] = useLocalStorage("costs", []);
  const [incomes, setIncomes] = useLocalStorage("incomes", []);
  const [costsCat, setCostsCat] = useLocalStorageForCategories(
    activePage,
    "costs"
  );
  const [incomesCat, setIncomesCat] = useLocalStorageForCategories(
    activePage,
    "incomes"
  );

  const handleOpenActivePage = (activePage) => {
    setActivePage(activePage);
  };

  const returnToMainPage = () => {
    setActivePage("");
  };

  const addTransaction = (transaction) => {
    activePage === "costs"
      ? setCosts((prev) => [...prev, transaction])
      : setIncomes((prev) => [...prev, transaction]);
  };

  const addCategory = (category) => {
    activePage === "costs" && setCostsCat((prev) => [...prev, category]);
    activePage === "incomes" && setIncomesCat((prev) => [...prev, category]);
  };

  switch (activePage) {
    case "costs":
      return (
        <TransactionPage
          handleGoBack={returnToMainPage}
          addTransaction={addTransaction}
          addCategory={addCategory}
          transType={activePage}
          catsList={costsCat}
        />
      );
    case "incomes":
      return (
        <TransactionPage
          handleGoBack={returnToMainPage}
          addTransaction={addTransaction}
          addCategory={addCategory}
          transType={activePage}
          catsList={incomesCat}
        />
      );
    case "balance":
      return <BalancePage />;
    default:
      return <MainPage handleOpenActivePage={handleOpenActivePage} />;
  }
};

export default App;
