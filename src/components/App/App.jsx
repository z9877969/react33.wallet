import { useEffect, useState } from "react";
import {
  useLocalStorage,
  useLocalStorageForCategories,
} from "../../hooks/useLocalStorage";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";

import { costsCatList, incomesCatList } from "../../assets/categoriesList.json";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("");

  const [costs, setCosts] = useLocalStorage("costs", []);
  const [incomes, setIncomes] = useLocalStorage("incomes", []);
  const [costsCat, setCostsCat] = useLocalStorageForCategories(
    activePage,
    costsCatList
  );
  const [incomesCat, setIncomesCat] = useLocalStorageForCategories(
    activePage,
    incomesCatList
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

  const setCategoriesColl = (categories) => {
    activePage === "costs" && setCostsCat(categories);
    activePage === "incomes" && setIncomesCat(categories);
  };

  const addCategory = (category) => {
    activePage === "costs" && setCostsCat((prev) => [...prev, category]);
    activePage === "incomes" && setIncomesCat((prev) => [...prev, category]);
  };

  // useEffect(() => {
  //   activePage === "costs" &&
  //     localStorage.setItem("costs", JSON.stringify(costs));
  //   activePage === "incomes" &&
  //     localStorage.setItem("incomes", JSON.stringify(incomes));
  //   returnToMainPage();
  // }, [costs, incomes]);

  // useEffect(() => {
  //   activePage === "costs" &&
  //     localStorage.setItem("costsCat", JSON.stringify(costsCat));
  //   activePage === "incomes" &&
  //     localStorage.setItem("incomesCat", JSON.stringify(incomesCat));
  // }, [costsCat, incomesCat]);

  switch (activePage) {
    case "costs":
      return (
        <TransactionPage
          handleGoBack={returnToMainPage}
          addTransaction={addTransaction}
          addCategory={addCategory}
          setCategoriesColl={setCategoriesColl}
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
          setCategoriesColl={setCategoriesColl}
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

// const o = {
//   a: 654,
//   b: "654",
//   // c: {
//   //   d: []
//   // }
// };

// o.c?.d ; -> || 654654

// o.c && o.c.d
