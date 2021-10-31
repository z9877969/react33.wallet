import {
  addTransactionApi,
  getTransactionsApi,
} from "../../utils/services/firebaseApi";
import { errorHandler } from "../error/errorHandler";
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
  (dispatch, getState) => {
    transType === "costs"
      ? dispatch(addCostsRequest())
      : dispatch(addIncomesRequest());

    const { idToken, localId } = getState().auth;

    addTransactionApi({ transType, transaction, localId, idToken })
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

export const getTransactions = () => (dispatch, getState) => {
  dispatch(getTransactionsRequest());

  const { idToken, localId } = getState().auth;

  getTransactionsApi({ localId, idToken })
    .then((data) => {
      console.log("data :>> ", data);
      dispatch(getTransactionsSuccess(data));
    })
    // .catch((err) => dispatch(getTransactionsError(err.message)));
    .catch((err) => {
      console.log("object in dispatch");
      dispatch(
        errorHandler({
          error: err,
          cb: getTransactions,
          errorType: "getTransactionsError",
        })
      );
    });
};
