import { createAction } from "@reduxjs/toolkit";

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequest = createAction("transactions/addIncomesRequest");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const getTransactionsRequest = createAction(
  "transactions/getTransactionsRequest"
);
export const getTransactionsSuccess = createAction(
  "transactions/getTransactionsSuccess"
);
export const getTransactionsError = createAction(
  "transactions/getTransactionsError"
);

// export const getIncomesRequest = createAction("transactions/getIncomesRequest");
// export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
// export const getIncomesError = createAction("transactions/getIncomesError");
