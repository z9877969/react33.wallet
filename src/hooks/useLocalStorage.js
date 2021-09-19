import { useEffect, useState } from "react";

export const useLocalStorage = (key, def) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || def
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export const useLocalStorageForCategories = (activePage, catsList) => {
  const [value, setValue] = useState([]);

  const key = activePage + "Cat"; // costsCat

  console.log("activePage, catsList :>> ", activePage, catsList);

  useEffect(() => {
    console.log("value :>> ", value);
    activePage === "costs" &&
      localStorage.setItem("costsCat", JSON.stringify(value));
    activePage === "incomes" &&
      localStorage.setItem("incomesCat", JSON.stringify(value));
  }, [value]);

  useEffect(() => {
    if (!value.length) {
      console.log("useEffect adds catList", activePage, catsList);
      const parsedCategories = JSON.parse(localStorage.getItem(key)); // costsCat
      parsedCategories ? setValue(parsedCategories) : setValue(catsList);
    }
  }, [activePage]);

  return [value, setValue];
};
