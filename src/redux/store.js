import { configureStore } from "@reduxjs/toolkit";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import { error } from "./error/errorReducer";

const store = configureStore({
  reducer: {
    transactions,
    categories,
    error,
  },
});

export default store;
