import { refreshToken } from "../auth/authOperations";
import { getTransactionsError } from "../transactions/transactionsActions";



export const errorHandler =
  ({ error, cb, errorType }) =>
  (dispatch) => {
    console.log("error.code :>> ", error.message);
      if(error.response?.status === 401){
          dispatch(refreshToken(cb))
        //  return
      }
    switch (errorType) {
      case "getTransactionsError":
        dispatch(getTransactionsError(error.message));
        break;
    }
  };
