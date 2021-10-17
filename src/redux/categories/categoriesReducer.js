import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCostsCatSuccess, addIncomesCatSuccess } from "./categoriesActions";

const costsCatReducer = createReducer([], {
  [addCostsCatSuccess]: (state, { payload }) => [...state, payload],
});

const incomesCatReducer = createReducer([], {
  [addIncomesCatSuccess]: (state, { payload }) => [...state, payload],
});

const categoriesReducer = combineReducers({
  incomesCat: incomesCatReducer,
  costsCat: costsCatReducer,
});

export default categoriesReducer;
