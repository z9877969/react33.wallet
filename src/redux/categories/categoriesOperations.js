import {
  addCategoryApi,
  getCategoriesApi,
} from "../../utils/services/firebaseApi";
import {
  addCostsCatRequest,
  addCostsCatSuccess,
  addIncomesCatRequest,
  addIncomesCatSuccess,
  addCostsCatError,
  addIncomesCatError,
} from "./categoriesActions";

export const addCategory =
  ({ category, transType }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesCatRequest())
      : dispatch(addCostsCatRequest());

    addCategoryApi({ category, transType })
      .then((data) =>
        transType === "incomes"
          ? dispatch(
              addIncomesCatSuccess({
                id: data.name,
                ...category,
              })
            )
          : dispatch(
              addCostsCatSuccess({
                id: data.name,
                ...category,
              })
            )
      )
      .catch((err) =>
        transType === "incomes"
          ? dispatch(addIncomesCatSuccess(err.message))
          : dispatch(addCostsCatSuccess(err.message))
      );
  };
