import { createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  addCostsRequest,
  addIncomesError,
  addIncomesRequest,
  getTransactionsError,
  getTransactionsRequest,
} from "../transactions/transactionsActions";

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const error = createReducer(null, {
  [addCostsError]: setError,
  [addIncomesError]: setError,
  [getTransactionsError]: setError,
  [addCostsRequest]: resetError,
  [addIncomesRequest]: resetError,
  [getTransactionsRequest]: resetError,
});
