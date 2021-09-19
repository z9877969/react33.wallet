import { useEffect, useState } from "react";
import catsList from "../assets/categoriesList.json";   // списки дефолтных категорий 
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

  const key = activePage === matchType ? activePage + "Cat" : ""; // costsCat || incomesCat

  useEffect(() => {
    if (activePage !== matchType) return;   // проверка на определенный тип
                                            // категорий, чтобы useEffect не
                                            // отрабатывал для обеих типов
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  useEffect(() => {
    if (activePage !== matchType) return;   // проверка на определенный тип
                                            // категорий, чтобы useEffect не
                                            // отрабатывал для обеих типов
    if (!value.length) {
      const parsedCategories = JSON.parse(localStorage.getItem(key)); // costsCat || incomesCat
      parsedCategories
        ? setValue(parsedCategories)
        : setValue(catsList[activePage + "CatList"]);
    }
  }, [activePage]);

  return [value, setValue];
};
