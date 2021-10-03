import { createContext, useContext, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  useLocalStorage,
  useLocalStorageForCategories,
} from "../../hooks/useLocalStorage";

const wrapperContext = createContext();
export const useWrapper = () => useContext(wrapperContext);

const WrapperContext = ({ children }) => {
  const [transType, setTransType] = useState("");
  const [costs, setCosts] = useLocalStorage("costs", []);
  const [incomes, setIncomes] = useLocalStorage("incomes", []);
  const [costsCat, setCostsCat] = useLocalStorageForCategories(
    transType,
    "costs"
  );
  const [incomesCat, setIncomesCat] = useLocalStorageForCategories(
    transType,
    "incomes"
  );

  const addTransaction = (transaction) => {
    transType === "costs"
      ? setCosts((prev) => [...prev, transaction])
      : setIncomes((prev) => [...prev, transaction]);
  };

  const addCategory = (category) => {
    transType === "costs" && setCostsCat((prev) => [...prev, category]);
    transType === "incomes" && setIncomesCat((prev) => [...prev, category]);
  };
  return (
    <wrapperContext.Provider
      value={{
        addTransaction,
        addCategory,
        setTransType,
        transactions: {
          costs,
          incomes,
        },
        categories: {
          incomesCat,
          costsCat,
        },
      }}
    >
      {children}
    </wrapperContext.Provider>
  );
};

export default WrapperContext;
