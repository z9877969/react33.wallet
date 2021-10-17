import {
  addTransactionApi,
  getTransactionsApi,
} from "../../utils/services/firebaseApi";
import {
  addCostsRequest,
  addCostsSuccess,
  addCostsError,
  addIncomesRequest,
  addIncomesSuccess,
  addIncomesError,
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from "./transactionsActions";

export const addTransaction =
  ({ transaction, transType }) =>
  (dispatch) => {
    transType === "costs"
      ? dispatch(addCostsRequest())
      : dispatch(addIncomesRequest());

    addTransactionApi({ transType, transaction })
      .then(({ data }) =>
        transType === "costs"
          ? dispatch(addCostsSuccess({ id: data.name, ...transaction }))
          : dispatch(addIncomesSuccess({ id: data.name, ...transaction }))
      )
      .catch((err) =>
        transType === "costs"
          ? dispatch(addCostsError(err.message))
          : dispatch(addIncomesError(err.message))
      );
  };

export const getTransactions = () => (dispatch) => {
  dispatch(getTransactionsRequest());

  getTransactionsApi()
    .then((data) => dispatch(getTransactionsSuccess(data)))
    .catch((err) => dispatch(getTransactionsError(err.message)));
};
