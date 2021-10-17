import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsSuccess,
  addIncomesSuccess,
  getTransactionsSuccess,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, action) => [...state, action.payload],
  [getTransactionsSuccess]: (_, { payload }) => payload.costs,
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, action) => [...state, action.payload],
  [getTransactionsSuccess]: (_, { payload }) => payload.incomes,
});

const transactionsReducer = combineReducers({
  incomes: incomesReducer,
  costs: costsReducer,
});

export default transactionsReducer;
