import { useEffect, useState } from "react";
import catsList from "../assets/categoriesList.json"; // списки дефолтных категорий
// добавил в область
// видимости хука, чтобы не передавать
// их в пропсах

export const useLocalStorage = (key, def) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || def
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export const useLocalStorageForCategories = (activePage, matchType) => {
  const [value, setValue] = useState([]);

  const key = activePage === matchType ? activePage + "Cat" : "";

  useEffect(() => {
    if (activePage !== matchType) return;
    if (JSON.parse(localStorage.getItem(key))?.length && !value.length) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  useEffect(() => {
    if (activePage !== matchType) return;
    if (!value.length) {
      const parsedCategories = JSON.parse(localStorage.getItem(key)); // costsCat || incomesCat
      parsedCategories
        ? setValue(parsedCategories)
        : setValue(catsList[activePage + "CatList"]);
    }
  }, [activePage, key]);

  return [value, setValue];
};
